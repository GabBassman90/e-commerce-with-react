import React, { useContext, useEffect, useState } from "react";
import { Root2 } from "../models/productsModel";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export const Proof = () => {
  const productFromContext = useContext(CartContext);

  return <div></div>;
};
