import { Drink, Macju500, SojuOneShot, WineOneGlass } from "@/domain/drink";
import { Alcohol } from "@/domain/types";
import { useMemo } from "react";
import { create } from "zustand";
import { usePersonalInfo } from "./usePersonalInfo";
import { calculateBacValue } from "@/domain/widmarkFormula";


const drink = (alcohol: Alcohol): Drink => {
  switch (alcohol) {
    case "soju":
      return new SojuOneShot();
    case "beer":
      return new Macju500();
    case "wine":
      return new WineOneGlass();
    default:
      throw new Error("Invalid alcohol");
  }
}

const useAlcoholConsumed = create<{
  alcoholHistory: Drink[];
  drinkAlcohol: (alcohol: Alcohol) => void;
}>(set => ({
  alcoholHistory: [],
  drinkAlcohol: (alcohol: Alcohol) => set((state) => {
    const newDrink = drink(alcohol);
    return {
      alcoholHistory: [...state.alcoholHistory, newDrink]
    };
  })
}));

/**
 * TODO: Save the alcohol consumed in the local storage or somewhere
 */
export const useDrinkAlcohol = () => {
  const { alcoholHistory, drinkAlcohol } = useAlcoholConsumed();
  const user = usePersonalInfo();

  const estimatedBac = useMemo(() => {
    const consumed = alcoholHistory.reduce((acc, drink) => acc + drink.alcoholConsumed, 0);

    return calculateBacValue({
      alcoholConsumed: consumed,
      weight: user.weight,
      gender: user.gender,
      time: alcoholHistory[alcoholHistory.length - 1]?.elapsedTime,
    })
  }, [alcoholHistory, user]);

  return { estimatedBac, alcoholHistory, drinkAlcohol };
}
