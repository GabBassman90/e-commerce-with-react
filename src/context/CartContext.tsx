// CartContextProvider.tsx
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Root, Root2 } from "../models/productsModel";
import axios from "axios";
import { Product } from "../components/Product";

interface CartContextProviderInterface {
  children: ReactNode;
}

interface CartContextInterface {
  countPrice: number;
  cart: Root2[];
  addToCart: (product: Root2, id: number) => void;
  removeToCart: (id: number) => void;
  addAmountCart: (id: number) => void;
  removeProductCart: (id: number) => void;
  addCount: (id: number) => void;
}

const defaultValue: CartContextInterface = {
  countPrice: 0,
  cart: [],
  addToCart: (product: Root2, id: number) => {},
  removeToCart: (id: number) => {},
  addAmountCart: (id: number) => {},
  removeProductCart: (id: number) => {},
  addCount: (id: number) => {},
};

export const CartContext = createContext<CartContextInterface>(defaultValue);

export const CartContextProvider = ({
  children,
}: CartContextProviderInterface) => {
  const [cart, setCart] = useState<Root2[]>([]);
  const [countPrice, setCountPrice] = useState<number>(0);

  console.log(countPrice);
  console.log(cart);

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

  const removeToCart = (id: number) => {
    const remove = cart.filter((value) => {
      return value.id !== id;
    });
    setCart(remove);
  };

  const addAmountCart = (id: number) => {
    const addProduct = cart.map((value) => {
      if (value.id === id) {
        return { ...value, amount: (value.amount || 0) + 1 };
      } else {
        return value;
      }
    });
    setCart(addProduct);
  };
  const removeProductCart = (id: number) => {
    const addProduct = cart.map((value) => {
      if (value.id === id && value.amount && value.amount >= 0) {
        return { ...value, amount: (value.amount || 0) - 1 };
      } else {
        return value;
      }
    });
    setCart(addProduct);
  };

  const addCount = (id: number) => {
    const totalAmount = cart.reduce((prev, curr) => {
      return prev + curr.price * (curr.amount ?? 0);
    }, 0);
    setCountPrice(totalAmount);
  };

  const cartContextValue: CartContextInterface = {
    countPrice,
    cart,
    addToCart,
    removeToCart,
    addAmountCart,
    removeProductCart,
    addCount,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
