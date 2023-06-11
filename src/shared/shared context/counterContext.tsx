import React, { useState, createContext } from "react";
import { IProduct } from "../../model/product";

// create the context
export const Store = createContext<{
  setCart:React.Dispatch<React.SetStateAction<{
    cartCounter: number;
    cartItems: any;
}>>;
  cart: { cartCounter: number; cartItems: IProduct[] };
}>({
  setCart: () => {},
  cart: { cartCounter: 0, cartItems: [] },
});

const CounterContextProvider = ({ children }: any) => {
  const initialCart = {
    cartCounter: 0,
    cartItems: [],
  };
  const [cart, setCart] = useState(initialCart);
  return <Store.Provider value={{ cart, setCart }}>{children}</Store.Provider>;
};
export default CounterContextProvider;
