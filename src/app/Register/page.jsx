"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "../Header/Header";
export default function RegisterForm() {
  const [name, SetName] = useState("");
  const [error, SetError] = useState("");
  const [pass, SetPass] = useState("");
  const [email, SetEmail] = useState("");

  const router=useRouter();

  
  const handle = async (e) => {
    e.preventDefault();

    if (!name || !email || !pass) {
      SetError("All fields are necessary!");
      return;
    }

    try {

      // const resExist = await axios.post("/api/loginExist", {email});
      const resExist = await fetch('api/loginExist',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
      })
      
      const customer = resExist.data;
      console.log("resExist:", resExist.data); 

      if(customer){
        SetError("Customer Alredy Exist , Please Login")
        return;
      }

      const res = await axios.post("/api/register", { name, email, pass });
      console.log("Response:", res.data); 
      if (res.status === 200) {
        console.log("User registered successfully");
        router.push('/login')

    
        SetName("");
        SetEmail("");
        SetPass("");
        SetError("");
        

      } else {
        SetError(res.data.message || "User registration failed");
      }
    } catch (error) {
      console.log("API Error:", error.response?.data || error.message); 
      SetError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (

    <>
    <Header></Header>
    <div className="grid place-items-center h-screen">
      <form className="shadow-lg" onSubmit={handle}>
        <div className="bg-gray-200 flex flex-row justify-center items-center">
          <div className="max-w-[350px] border-t-blue-600 border-4 items-center w-[350px] py-2">
            <div className="w-[300px] m-auto pt-5">
              <label htmlFor="user" className="text-[20px]">Full Name</label>
              <input
                type="text"
                id="user"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                className="w-full text-[20px] mt-1 rounded-md pl-3"
              />
            </div>
            <div className="w-[300px] m-auto pt-5">
              <label htmlFor="email" className="text-[20px]">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                className="w-full text-[20px] mt-1 rounded-md pl-3"
              />
            </div>
            <div className="w-[300px] m-auto pt-5">
              <label htmlFor="pass" className="text-[20px]">Password</label>
              <input
                type="password"
                id="pass"
                value={pass}
                onChange={(e) => SetPass(e.target.value)}
                className="w-full text-[20px] mt-1 rounded-md pl-3"
              />
            </div>
            <div className="p-5 w-full">
              <button className="bg-blue-500 p-1 rounded text-red-50 hover:bg-slate-600 w-full" type="submit">
                Register
              </button>
            </div>
            {error && (
              <div className="w-full px-5 bg-red-400 text-white">
                <p>{error}</p>
              </div>
            )}
            <div className="w-[300px] m-auto text-md text-right h-4">
              <Link href="/Login">Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
    
  );
}
