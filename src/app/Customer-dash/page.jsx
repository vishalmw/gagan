import React from "react";
import Header from "../Header/Header";
import data from "../Store/data";
import Image from "next/image";
export default function Customer_page() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row justify-around gap-2 p-1">
        <div className="w-[300px] border-2 border-gray--100 justify-center items-center p-2">
          <p>Order</p>
          <input
            typeof="text"
            placeholder="search"
            className="text-[20px] mb-1 p-1 border-[1px] border-black w-auto"
          ></input>

          <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p>
          <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p> <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p> <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p> <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p>
        
        </div>
        <div className=" ">
          <div className="grid grid-cols-3 justify-center gap-3">
            {data.map((res, index) => {
                return (
                    <div
                    className="border border-gray-300 shadow-xl h-[500px] w-[320px] flex flex-col items-center justify-center text-center p-4 space-y-2  hover:scale-90 bg-white transition"
                    key={index}
                  >
                    <Image
                      src={res.src}
                      alt="rab"
                      width={300}
                      height={400}
                      style={{ height: "400px" }}
                      className="object-cover"
                    />
                    <h3 className="text-lg font-semibold">{res.price}</h3>
                    <h3 className="text-sm text-gray-600">{res.product_name}</h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                      Order Now
                    </button>
                  </div>
                )
             
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
