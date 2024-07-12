/**
 * Widmark Formula
 */
const 시간당분해되는알콜비율 = 0.017;

export type BacVariables = {
  alcoholConsumed: number;
  weight: number
  gender: 'male' | 'female'
  hours: number
}

export const 분포계수 = (gender: 'male' | 'female') => {
  return gender === 'male' ? 0.68 : 0.55;
}

export const calculateBacValue = ({
  alcoholConsumed,
  weight,
  gender,
  hours,
}: BacVariables) => {
  const bacValue = (alcoholConsumed / (weight * 분포계수(gender))) - (시간당분해되는알콜비율 * hours);

  return bacValue;
}

export const getMetabolizedAlcohol = ({ weight, gender }: BacVariables) => {
  const metabolizedAlcohol = 시간당분해되는알콜비율 * weight * 분포계수(gender) * (1 / 60);
  return metabolizedAlcohol;
}
