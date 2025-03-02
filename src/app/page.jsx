"use client";

import Image from "next/legacy/image";
import Header from "./Header/Header";
import data from "@/app/Store/data";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-gray-50 max-w[1000]  grid m-5">
        <Image
          src="https://thumbs.dreamstime.com/b/indian-naan-bread-herbs-garlic-seasoning-plate-189166126.jpg"
          width={"700px"}
          height={"500px"}
          className="blur-sm"
        ></Image>

        <div className="translate-y-[-200px] bg-black opacity-50 p-5">
          <h1 className="text-center text-white text-[30px]">
            Our Home nourishes families and communities by getting snacks into
            the hands of those who want and need them the most.
          </h1>
        </div>
      </div>
      <div className="container grid grid-cols-4 mx-auto justify-center p-3">
        {data.map((el, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-2 w-60 h-70 hover:scale-130 transition-transform m-2 "
          >
            <div className="relative w-full h-40">
              <Image
                src={el.src}
                alt={el.detail}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <h3 className="text-lg font-bold mt-3 text-gray-800 text-center">
              {el.product_name}
            </h3>
            <p className="text-gray-600 text-sm text-center">${el.price}</p>
            <button className=" bg-blue-300 rounded-sm w-auto p-1 active:bg-slate-300">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
