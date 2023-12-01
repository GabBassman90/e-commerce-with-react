import React, { useContext, useEffect, useState } from "react";
import { SingleProductContext } from "../context/SingleProductContext";
import { Rating, Root2 } from "../models/productsModel"; // Assicurati di importare il tipo Rating correttamente
import axios from "axios";

export const ProductDetail = () => {
  const [product, setProduct] = useState<Root2>();

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

  console.log(product);

  return <div></div>;
};
