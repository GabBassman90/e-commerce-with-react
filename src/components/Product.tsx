// Product.tsx
import React, { useContext } from "react";
import { Root2 } from "../models/productsModel";
import { GoPlus } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Sidebar } from "./Sidebar";

export interface ProductInterface {
  product: Root2;
}

export const Product = ({ product }: ProductInterface) => {
  const { id, image, category, title, price } = product;

  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="absolute top-0 transition-all duration-300 group-hover:right-3 -right-11 bg-red-500 p-2 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100">
            <span className="flex justify-center cursor-pointer">
              <GoPlus onClick={() => addToCart(product, id)} />
              <Sidebar />
            </span>
            <Link
              to={`/product/${id}`}
              className="mt-2 bg-[#ffffff] text-black p-2  cursor-pointer"
            >
              <FaRegEye />
            </Link>
          </div>
        </div>
      </div>
      <div className="capitalize flex flex-col">
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold">{title}</h2>
        </Link>
        <p>{price}</p>
      </div>
      <div>
        Prodotto selezionato
        <div>{title}</div>
      </div>
    </div>
  );
};
