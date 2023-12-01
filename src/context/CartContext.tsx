// CartContextProvider.tsx
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Root, Root2 } from "../models/productsModel";
import axios from "axios";

interface CartContextProviderInterface {
  children: ReactNode;
}

interface CartContextInterface {
  cart: Root2[];
  addToCart: (product: Root2, id: number) => void;
}

const defaultValue: CartContextInterface = {
  cart: [],
  addToCart: (product: Root2, id: number) => {},
};

export const CartContext = createContext<CartContextInterface>(defaultValue);

export const CartContextProvider = ({
  children,
}: CartContextProviderInterface) => {
  const [cart, setCart] = useState<Root2[]>([]);

  const addToCart = (product: Root2, id: number) => {
    const newProduct = { ...product, amount: 1 };
    const cartItem = cart.find((value) => {
      return value.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: (cartItem.amount || 0) + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const cartContextValue: CartContextInterface = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
