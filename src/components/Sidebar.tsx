import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";

interface sidebarInterface {
  id: number;
}
export const Sidebar = () => {
  const sidebarContext = useContext(SidebarContext);

  const { open, setOpen } = sidebarContext;

  const cartContext = useContext(CartContext);

  const { cart, countPrice } = cartContext;

  return (
    <div>
      <div
        className={`${
          open ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className="py-6 flex justify-between w-full items-center border-b border-black">
          Shopping Bag ()
          <div>Total Amount: {countPrice}</div>
          <RxCross2 className="cursor-pointer" onClick={() => setOpen()} />
        </div>
        <div className="w-full h-full space-y-3">
          {cart.map((item) => (
            <CartItem key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
