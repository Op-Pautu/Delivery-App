"use client";

import React, { useState, useEffect } from "react";
import { ProductType } from "../types/types";
import { useCartStore } from "../utils/store";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const cartStore = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const calculatedTotal =
      quantity *
      (product.options?.length
        ? product.price + product.options[selected].additionalPrice
        : product.price);

    const formattedPrice = parseFloat(calculatedTotal.toFixed(2));
    setTotal(formattedPrice);
  }, [quantity, selected, product]);

  const handleCart = () => {
    cartStore.addToCart({
      ...product, // Include all properties from the product
      price: total, // Update the price property
      quantity: quantity, // Set the quantity property
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {product.options?.length &&
          product.options.map((option, index) => (
            <button
              key={option.title.toString()}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* QUANTITY AND BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          onClick={handleCart}
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
