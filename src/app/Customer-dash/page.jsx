import React from "react";
import Header from "../Header/Header";
import data from "../Store/data";
import Image from "next/image";

export default function Customer_page() {
  return (
    <div>
      <Header></Header>
      <div className=" flex flex-row justify-around gap-5 p-1 sm:gap-1 sm:justify-center  max-sm:justify-center">
        <div className="max-sm:w-auto border-2 border-gray--100 justify-center items-center p-2 " >
          <p>Order</p>
          <input
            typeof="text"
            placeholder="search"
            className=" max-sm:w-[100px] text-[20px] mb-1 p-1 border-[1px] border-black "
          ></input>

          <p className="text-[20px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-105 transition">
            {" "}
            Junk Food
          </p>
     
        
        </div>
        <div className=" ">
          <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center gap-2 lg:grid-cols-4">
            {data.map((res, index) => {
                return (
                    <div
                    className="border border-gray-300 shadow-xl flex flex-col items-center justify-center text-center p-1 space-y-2  hover:scale-90 bg-white transition"
                    key={index}
                  >
                    <Image 
                      src={res.src}
                      alt="rab"
                      width={300}
                      height={400}
                      style={{ height: "300px" }}
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
