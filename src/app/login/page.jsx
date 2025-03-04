"use client"

import React from "react";
import Header from "../Header/Header";
import {useRouter} from "next/navigation";

export default function page() {
  const rout= useRouter();
const dash=()=>{

  rout.push('/Customer-dash');
}

  return (
    <div className="justify-center">
      <Header></Header>
      <div className="bg-gray-200 h-auto flex flex-row justify-center items-center">
        <div className="max-w-[300px] p-[5px]">
          <div className="m-5 text-[20px] ">
          <label htmlFor="User">User Name</label>
          <input type="text" />
          </div>
          <div className="m-5 text-[20px]">
          <label htmlFor="Password">Password</label>
          <input type="text" />
          </div>
          <div className="m-5 text-[20px]">
          <button className="bg-blue-500 p-1 rounded text-red-50 hover:bg-slate-600" onClick={dash}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
