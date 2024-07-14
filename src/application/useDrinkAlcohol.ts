import { calculateBacValue } from "@/domain/calculateBAC";
import { calculateAlcoholConsumed } from "@/domain/intakeQuantity";
import { Alcohol } from "@/domain/types";
import { create } from "zustand";


const calculateAlcohol = (alcohol: Alcohol) => {
  switch (alcohol) {
    case "soju":
      return calculateAlcoholConsumed(40, 17);
    case "beer":
      return 6.3;
    case "wine":
      return 10;
    default:
      return 0;
  }
}

const useAlcoholConsumed = create<{
  alcoholConsumed: number;
  addAlcohol: (alcohol: Alcohol) => void;
}>(set => ({
  alcoholConsumed: 0,
  addAlcohol: (alcohol: Alcohol) => set((state) => ({ alcoholConsumed: state.alcoholConsumed + calculateAlcohol(alcohol) })),
}));

/**
 * TODO: Save the alcohol consumed in the local storage or somewhere
 */
export const useDrinkAlcohol = () => {
  const { alcoholConsumed, addAlcohol } = useAlcoholConsumed();
  const estimatedBac = calculateBacValue({
    alcoholConsumed,
    gender: 'male',
    weight: 70
  }).toFixed(4);
  return { alcoholConsumed, addAlcohol, estimatedBac };
}
