import React, { useContext } from "react";
import { Root2 } from "../models/productsModel";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { RxCross2 } from "react-icons/rx";

interface CartItemInterface {
  singleProduct: Root2;
}

export const CartItem = ({ singleProduct }: CartItemInterface) => {
  const cartContext = useContext(CartContext);

  const { removeToCart, addAmountCart, removeProductCart, addCount } =
    cartContext;

  return (
    <div className="flex justify-between border border-black">
      <img src={singleProduct.image} className="w-[100px]" alt="" />
      <div className="flex flex-col justify-center items-center text-center w-full ">
        <div className="flex w-full justify-between">
          {singleProduct.title}
          <RxCross2
            className="cursor-pointer"
            onClick={() => removeToCart(singleProduct.id)}
          />
        </div>
        <div className="flex w-full ">
          <span className="p-2 cursor-pointer">
            <GoPlus
              className="bg-green-800 "
              onClick={() => {
                addAmountCart(singleProduct.id);
                addCount(singleProduct.id);
              }}
            />
          </span>
          <span className="p-2 cursor-pointer">
            <FiMinus
              className="bg-red-600 "
              onClick={() => removeProductCart(singleProduct.id)}
            />
          </span>
        </div>
        <div className="flex flex-col   w-full mr-2 mt-2">
          {singleProduct.amount}
          {singleProduct.price}
        </div>
      </div>
    </div>
  );
};
