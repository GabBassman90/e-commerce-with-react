import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { Product } from "../components/Product";
import { Proof } from "../components/Proof";

export const Home = () => {
  const products = useContext(ProductsContext);

  const filteredProducts = products?.filter((value) => {
    return (
      value.category === "men's clothing" ||
      value.category === "women's clothing"
    );
  });

  /*<div key={value.id} className="w-full h-[300px] bg-pink-200">
                <p>{value.title}</p>
              </div> */
  return (
    <div>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-[30px]">
            {filteredProducts?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Proof />
      </div>
    </div>
  );
};
