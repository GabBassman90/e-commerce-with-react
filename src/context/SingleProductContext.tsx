import React, { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";
import { Root2 } from "../models/productsModel";

interface SingleProductContextProviderProps {
  children: ReactNode;
}

export const SingleProductContext = createContext<Root2 | undefined>(undefined);
export const SingleProductContextProvider = ({
  children,
}: SingleProductContextProviderProps) => {
  const [product, setProduct] = useState<Root2 | undefined>(undefined);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Root2>(
          `https://fakestoreapi.com/products/1`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    throw new Error("verify");
  }

  return (
    <SingleProductContext.Provider value={product}>
      {children}
    </SingleProductContext.Provider>
  );
};
