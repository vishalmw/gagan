import React from "react";
import Link from "next/link";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
 
      <div className='flex items-center justify-center gap-10 border-b-gray-200 border-[2px] w-full bg-white h-[50px]' >
       <div><Link href="/" className="uppercase text-[20px] hover:text-blue-500">Gagan</Link></div>
       <div className="w-[400px]"><input type="text" placeholder=" Enter Area Pincode" className="w-full border-gray-200 border-[2px] rounded placeholder-slate-400 placeholder-pr-2 h-[30px] "/></div>
       <FaSearch />
        <div><Link href="/" className=" hover:text-blue-500 ">Home</Link></div>
        <div><Link href="/Login" className=" hover:text-blue-500 ">Login</Link></div>
        <div><Link href="/Order"className=" hover:text-blue-500 "> Order</Link></div>
        <div><Link href="/Cart"className=" hover:text-blue-500 "> <FaShoppingCart /></Link></div>
      </div>
 

  );
}

export default Header;
