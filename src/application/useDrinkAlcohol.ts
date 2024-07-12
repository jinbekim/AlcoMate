import { Alcohol } from "@/domain/types";
import { create } from "zustand";


const calculateAlcohol = (alcohol: Alcohol) => {
  switch (alcohol) {
    case "soju": // 1 shot of soju is 1 unit of alcohol
      return 7;
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



export const useDrinkAlcohol = () => {
  const { alcoholConsumed, addAlcohol } = useAlcoholConsumed();
  return { alcoholConsumed, addAlcohol };
}
