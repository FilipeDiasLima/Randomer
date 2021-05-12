import { createContext } from "react";

type ChoiceContextData = {
  optionSelected: string;
  selectOption: (name: string) => void;
}

export const ChoiceContext = createContext({} as ChoiceContextData)
