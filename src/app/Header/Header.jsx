import React from "react";

function Header() {
  return (
 
      <div className='container border-b-2 flex flex-row px-2 text-black-50 gap-4 text-lg h-10 mt-2 justify-center min-w-max' >
              <div className=""><a href="/">Home</a></div>
        <div><a href="/login">Login</a></div>
        <div><a href="">Order</a></div>
      </div>
 

  );
}

export default Header;
