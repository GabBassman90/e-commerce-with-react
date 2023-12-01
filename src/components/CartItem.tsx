import React from "react";
import { Root2 } from "../models/productsModel";

interface CartItemInterface {
  singleProduct: Root2;
}

export const CartItem = ({ singleProduct }: CartItemInterface) => {
  return (
    <div className="flex justify-between  border border-black">
      <img src={singleProduct.image} className="w-[100px]" alt="" />
      <div className="flex flex-col justify-center items-center  ">
        <p className="font-semibold">{singleProduct.title}</p>

        <p>€ {singleProduct.price}</p>
      </div>
    </div>
  );
};
