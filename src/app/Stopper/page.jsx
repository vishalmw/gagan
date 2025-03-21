"use client"
import React, { useState } from "react";

function Page() {
    const [checkin, Checkout]=useState("")

    const handleCheckout = () => {
        const date=new Date();
        Checkout(date.toLocaleString());
      };
    
  return (
    <div className="w-full ">
      <div className="w-[200px] h-[300px] m-auto border-[3px] rounded-sm p-1 shadow-lg">
        <div className="text-center">Spider Man</div>
        <div>
          <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg" height={400}/>
        </div>
        <div className="text-center">SDE</div>
        <div className="text-center m-1 border-[2px] p-3" id="check">{checkin}</div>
        <div className="m-auto text-center">
          <button className="bg-blue-600 p-1 rounded-sm text-white" onClick={handleCheckout}>
      Checkin
          </button>
             </div>
      </div>
    </div>
  );
}

export default Page;
