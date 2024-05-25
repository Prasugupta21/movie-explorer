import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <Link to={"/"} class="text-white text-xl font-bold">
          FlickFlinder
        </Link>

        <div class="hidden md:flex space-x-4 ms-auto text-center">
          <Link to={"/"} class="text-gray-300 hover:text-white md:mr-8">
            Home
          </Link>
        </div>

        <div class="md:hidden flex items-center">
          <button
            class="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            id="menu-button"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`${!showMenu ? "hidden" : ""}`}>
        <a href="#" class="block text-gray-300 hover:text-white px-2 py-1">
          Home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
