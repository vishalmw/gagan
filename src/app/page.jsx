"use client";

import Image from "next/legacy/image";
import Header from "./Header/Header";
import data from "@/app/Store/data";
import { VideoOff } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-white-50">
      <video
      src="https://v.ftcdn.net/09/19/09/88/240_F_919098885_JVZqD7XdmXAqgxkNYst6IoXYOcjYlp7n_ST.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{margin:"auto"}}
     className="w-full"
    />

      </div>
      <div className=" grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 justify-items-center max-sm:justify-items-center lg:grid-cols-4   p-1">
        {data.map((el, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-2 w-60 h-70 hover:scale-130 transition-transform m-2  max-sm:w-[300px]  max-sm:h-[300px] max-sm:p-2   "
          >
            <div className="relative w-full h-40">
              <Image
                src={el.src}
                alt={el.detail}
                layout="fill"
                objectFit="cover"
                className="rounded-sm "
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
