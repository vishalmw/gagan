import React from "react";
// import Header from "../Header/Header";/
import Link from "next/link";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import data from "../Store/data";
import Image from "next/image";
// import { signOut } from "next-auth/react";
export default function CustomerPage() {
  return (
    <div>
      <div className='flex items-center justify-center gap-10 border-b-gray-200 border-[2px] w-full bg-white h-[50px]' >
       <div><Link href="/" className="uppercase text-[20px] hover:text-blue-500">Gagan</Link></div>
       <div className="w-[400px]"><input type="text" placeholder=" Enter Area Pincode" className="w-full border-gray-200 border-[2px] rounded placeholder-slate-400 placeholder-pr-2 h-[30px] "/></div>
       <FaSearch />
        <div><Link href="/" className=" hover:text-blue-500 ">Home</Link></div>
        {/* <button onClick={signOut()}>Logout</button> */}
        <div><Link href="/" className=" hover:text-blue-500 " >Logout</Link></div>
        <div><Link href="/Order"className=" hover:text-blue-500 "> Order</Link></div>
        <div><Link href="/Cart"className=" hover:text-blue-500 "> <FaShoppingCart /></Link></div>
      </div>
      <div className=" flex flex-row justify-around gap-5 p-1 sm:gap-1 sm:justify-center  max-sm:justify-center">
        <div className="max-sm:w-auto border-2 border-gray-100 justify-center items-center p-2 w-[300px]" >
          <p className="text-[15px]">Collections</p>
          <input
            typeof="text"
            placeholder="search"
            className=" max-sm:w-[100px] text-[15px] mb-1 p-1 border-[1px] border-black w-full rounded-sm"
          ></input>

          <p className="text-[15px] bg-slate-200 p-[2px] text-center mb-1 cursor-pointer border-[1px] border-black hover:scale-102 transition rounded-sm">
            {" "}
            Junk Food
          </p>
     
        
        </div>
        <div className=" ">
          <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center gap-2 lg:grid-cols-4">
            {data.map((res, index) => {
                return (
                    <div
                    className="border border-gray-400 shadow-xl flex flex-col items-center justify-center text-center p-1 space-y-2 cursor-pointer bg-white "
                    key={index}
                  >
                    <Image 
                      src={res.src}
                      alt="rab"
                      width={400}
                      height={300}
                      style={{ height: "200px" }}
                      className="object-cover"
                    />
                    <h4 className="text-[12px] font-semibold">{res.price}</h4>
                    <h4 className="text-[12px] text-gray-600">{res.product_name}</h4>
                    <button className="bg-blue-500 text-white h-[30px] w-[80px] text-[12px] rounded hover:bg-green-400 transition mb-1">
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
