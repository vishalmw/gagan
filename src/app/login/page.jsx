"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../Header/Header";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handle = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        pass,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid email or password");
        return;
      }
      router.replace("/Customer-dash");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="grid place-items-center h-screen">
        <form className="shadow-xl" onSubmit={handle}>
          <div className="bg-gray-200 h-auto flex flex-row justify-center items-center">
            <div className="max-w-[350px] border-t-blue-600 border-4 items-center w-[350px] h-[300px]">
              <div className="w-[300px] m-auto pt-5">
                <label htmlFor="user" className="text-[20px]">
                  Email
                </label>
                <input
                  type="text"
                  id="user"
                  value={email}
                  className="w-full text-[20px] mt-1 rounded-md pl-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-[300px] m-auto pt-5">
                <label htmlFor="pass" className="text-[20px]">
                  Password
                </label>
                <input
                  type="password" // Changed input type for security
                  id="pass"
                  value={pass}
                  className="w-full text-[20px] mt-1 rounded-md pl-3"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="p-5 w-full">
                <button
                  type="submit"
                  className="bg-blue-500 p-1 rounded text-red-50 hover:bg-slate-600 w-full"
                >
                  Login
                </button>
                {error && (
                  <div className="w-full px-5 bg-red-400 text-white">
                    <p>{error}</p>
                  </div>
                )}
              </div>
              <div className="w-[300px] m-auto text-sm text-right">
                <Link href="/Register">
                  Have an account? Click to register
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
