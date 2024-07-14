import { 알콜비중 } from "./lawStandard";

/**
 * 실제 음주량 계산, 0.7894는 알콜의 비중
 * @param volume 음주량(ml)
 * @param alcoholPercentage 술의 농도(%)
 * @returns 실제 음주량(g)
 */
export const calculateAlcoholConsumed = (volume: number, alcoholPercentage: number) => {
  return volume * alcoholPercentage * 알콜비중 / 100;
}
