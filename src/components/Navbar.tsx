"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className=" bg-gray-600 relative">
      <div className="h-12 mx-3 flex justify-between items-center text-slate-50 max-w-[1500px] 2xl:m-auto">
        <div>
          <Link href="/"> LOGO</Link>
        </div>
        <div className="cursor-pointer text-white md:hidden">
          {!isOpen ? (
            <BiMenuAltLeft size={30} onClick={() => setIsOpen(true)} />
          ) : (
            <AiOutlineClose
              color="white"
              size={24}
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
        <nav
          className={`bg-slate-400 transition-all duration-500 absolute p-4 top-0 ${
            isOpen ? "left-0" : "left-[-120px]"
          } w-[120px] h-[100px] z-10  md:static w-auto h-auto md:bg-transparent`}
        >
          <ul className="flex flex-col gap-2 items-center py-4 md:flex-row">
            <li className="hover:text-red-200">
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
