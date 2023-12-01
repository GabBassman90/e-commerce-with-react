import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  const { setOpen } = useContext(SidebarContext);
  return (
    <div className="flex flex-col ">
      <p>Header</p>
      <MdOutlineShoppingCart className="cursor-pointer" onClick={setOpen} />
    </div>
  );
};
