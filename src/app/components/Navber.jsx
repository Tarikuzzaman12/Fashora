"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-white bg-blue-500" : "text-gray-300"
          } px-4 py-2 rounded-md`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allItems"
          className={`${
            pathname === "/allItems" ? "text-white bg-blue-500" : "text-gray-300"
          } px-4 py-2 rounded-md`}
        >
          All Items
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "text-white bg-blue-500" : "text-gray-300"
          } px-4 py-2 rounded-md`}
        >
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="navbar container mx-auto px-4 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <a className="text-white text-2xl font-bold">Fashora</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-500 text-white hover:bg-blue-600">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
