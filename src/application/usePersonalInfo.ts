
import { PersonalInfo } from "@/domain/user";
import { create } from "zustand";

const personal = create<PersonalInfo & { setPersonalInfo: (info: Partial<PersonalInfo>) => void }>(set => ({
  age: 0,
  weight: 70,
  gender: 'male',
  setPersonalInfo: ({ age, weight, gender }: Partial<PersonalInfo>) => set({
    age, weight, gender
  }),
}));

export const usePersonalInfo = () => {
  return personal();
}
