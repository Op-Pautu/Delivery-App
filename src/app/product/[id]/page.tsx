import Price from "@/app/components/Price";
import { pizzas } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = ({ params }: any) => {
  const id = parseInt(params.id, 10);

  const product = pizzas.find((item) => item.id === id) || null;

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product?.img && (
        <div className="relative w-full h-[1/2] md:h-[60%]">
          <Image src={product?.img} alt="" className="object-contain" fill />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {product?.title}
        </h1>
        <p className="lg:text-lg">{product?.desc}</p>
        <Price
          price={product?.price}
          id={product?.id}
          options={product?.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
