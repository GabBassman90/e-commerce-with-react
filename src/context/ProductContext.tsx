import React, { ReactNode, useEffect, useState } from "react";
import { Root2 } from "../models/productsModel";
import { createContext } from "react";
import axios from "axios";

interface productContextInterface {
  children: ReactNode;
}

export const ProductsContext = createContext<Root2[] | undefined>(undefined);

export const ProductProvider = ({ children }: productContextInterface) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const [products, setProducts] = useState<Root2[]>([]);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
