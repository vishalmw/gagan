import React from "react";
import Link from "next/link";
function Header() {
  return (
 
      <div className='container border-b-2 flex flex-row px-2 text-black-50 gap-4 text-lg h-10 mt-2 justify-center min-w-max' >
        <div ><Link href="/">Home</Link></div>
        <div><Link href="/login">Login</Link></div>
        <div><Link href="/Order">Order</Link></div>
      </div>
 

  );
}

export default Header;
