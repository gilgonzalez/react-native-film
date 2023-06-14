import { createContext, useState } from 'react';
import React from 'react';

interface GradientColors {
  primary: string,
  secondary: string,
  tertiary?: string,
  quaternary?: string,
}
interface ContextProps {
  colors: GradientColors,
  prevColors: GradientColors,
  setPrevMainColors: (colors: GradientColors) => void;
  setMainColors: (colors: GradientColors) => void;
}
export const initialColors = {
  primary: 'transparent',
  secondary: 'transparent',
  tertiary: 'transparent',
  quaternary: 'transparent',
};
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [colors, setColors] = useState<GradientColors>(initialColors);
  const [prevColors, setPrevColors] = useState<GradientColors>(initialColors);

  const setMainColors = (objColors : GradientColors) => {
    setColors(objColors );
  };
  const setPrevMainColors = (objColors : GradientColors) => {
    setPrevColors(objColors );
  };

  return (
    <GradientContext.Provider value={{
      colors,
      prevColors,
      setMainColors,
      setPrevMainColors,
    }}>
      { children }
    </GradientContext.Provider>
  );
};
