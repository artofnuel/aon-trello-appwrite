"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/aon-logo.jpg";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between p-5 bg-gray-500/10 rounded-b-xl">
        {/* hidden gradient div */}

        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-950 to-purple-700 rounded-md filter blur-3xl opacity-50 -z-50" />

        {/* image */}
        <Image
          src={logo}
          alt="Aon Trello Logo"
          width={300}
          height={300}
          className="w-20 md:w-16 md:pb-0 object-contain rounded-md shadow-sm"
        />

        <div className="flex items-center gap-5 w-full justify-end">
          <form className="flex items-center gap-2 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none p-2 flex-1"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* avatar */}
          <Avatar
            githubHandle="artofnuel"
            size="50"
            round={true}
            color="#0055d1"
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light p-3 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className="inline-blodck h-10 w-10 mr-1 text-[#0055d1]" />
          GPT is summarizing your day...
        </p>
      </div>
    </header>
  );
}

export default Header;
