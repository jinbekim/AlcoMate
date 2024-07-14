import { 성별계수, 시간당분해되는알콜비율 } from "./lawStandard";

/**
 * Widmark Formula
 */

export type BacVariables = {
  alcoholConsumed: number;
  weight: number
  gender: 'male' | 'female'
  hours?: number
}

//https://m.blog.naver.com/cubelawfirm/222774409053

export const calculateBacValue = ({
  alcoholConsumed,
  weight,
  gender,
  hours,
}: BacVariables) => {
  const bacValue = (alcoholConsumed / (weight * 10 * 성별계수[gender])) - (시간당분해되는알콜비율 * (hours ?? 0));

  return Math.max(bacValue, 0);
}

export const getMetabolizedAlcohol = ({ weight, gender }: BacVariables) => {
  const metabolizedAlcohol = 시간당분해되는알콜비율 * weight * 성별계수[gender] * (1 / 60);
  return metabolizedAlcohol;
}

/** NOTE:
 * 도로교통법 44조 제 4항
 * 운전이 금지되는 술에 취한 상태에 해당하는 혈중알콜농도는 0.03%이상인 경우로 규정하고 있다.
 * ④ 제1항에 따라 운전이 금지되는 술에 취한 상태의 기준은 운전자의 혈중알코올농도가 0.03퍼센트 이상인 경우로 한다.
 * 0.03 ~ 0.08 : 100일간 면허 정지
 * 0.08 ~ : 면허 취소
 */

/** NOTE
 * 도로교통법 148조의 2
1. 제44조제2항을 위반한 사람은 1년 이상 6년 이하의 징역이나 500만원 이상 3천만원 이하의 벌금에 처한다.
2. 제44조제1항을 위반한 사람 중 혈중알코올농도가 0.2퍼센트 이상인 사람은 2년 이상 6년 이하의 징역이나 1천만원 이상 3천만원 이하의 벌금에 처한다.
3. 제44조제1항을 위반한 사람 중 혈중알코올농도가 0.03퍼센트 이상 0.2퍼센트 미만인 사람은 1년 이상 5년 이하의 징역이나 500만원 이상 2천만원 이하의 벌금에 처한다.

③ 제44조제1항을 위반하여 술에 취한 상태에서 자동차등 또는 노면전차를 운전한 사람은 다음 각 호의 구분에 따라 처벌한다.

1. 혈중알코올농도가 0.2퍼센트 이상인 사람은 2년 이상 5년 이하의 징역이나 1천만원 이상 2천만원 이하의 벌금
2. 혈중알코올농도가 0.08퍼센트 이상 0.2퍼센트 미만인 사람은 1년 이상 2년 이하의 징역이나 500만원 이상 1천만원 이하의 벌금
3. 혈중알코올농도가 0.03퍼센트 이상 0.08퍼센트 미만인 사람은 1년 이하의 징역이나 500만원 이하의 벌금
 */


/**NOTE - 음주 개시 후 바로 분해가 시작된다고 본다.
재판부는 "혈중알코올농도 측정 없이 위드마크 공식을 사용해 피고인이 마신 술의 양을 기초로 운전 당시
혈중알코올농도를 추산하는 경우로, 알코올의 분해소멸에 따른 혈중알코올농도의 감소기에 운전이 이뤄졌다고
인정되는 경우에는, 피고인에게 가장 유리한 음주 시작 시점부터 곧바로 생리작용에 의해 분해소멸이 시작되는
것으로 봐야 한다"
*/
