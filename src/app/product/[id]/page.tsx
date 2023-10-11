import DeleteButton from "@/app/components/DeleteButton";
import Price from "@/app/components/Price";
import { ProductType } from "@/app/types/types";
import Image from "next/image";
import React from "react";

const getData = async (id: string) => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`;

  const res = await fetch(URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product: ProductType = await getData(params.id);

  // const id = parseInt(params.id, 10);

  // const product = pizzas.find((item) => item.id === id) || null;

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
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
        <Price product={product} />
      </div>
      <DeleteButton id={product.id} />
    </div>
  );
};

export default SingleProductPage;
