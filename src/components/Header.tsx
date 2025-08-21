"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[999] bg-black border-b border-b-[#fafafa3b]">
      <nav className="relative px-3 py-6">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="Pledge Miner logo"
            />
          </Link>

          <button
            className="outline-noneinline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            onClick={() => setMenu(!menu)}
          >
            <svg
              className="w-10 h-10 text-white hover:text-slate-200"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div
            id="mobile-menu"
            className={`"w-full md:block md:w-auto mt-6 md:mt-0 w-full ${
              menu ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-5 lg:gap-8 md:mt-0 transition duration-200 shadow-xl py-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-200 transition-all text-xl py-3 pr-4 pl-3 md:p-0"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-gray-200 transition-all text-xl py-3 pr-4 pl-3 md:p-0"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#footer-section"
                  className="text-white hover:text-gray-200 transition-all text-xl py-3 pr-4 pl-3 md:p-0"
                >
                  Socials
                </Link>
              </li>

              <li className="mt-3 md:mt-0">
                <a
                  href="https://chromewebstore.google.com/detail/pledgecom-extension/amfpepiagonfjlalcjcnmpbbjnmnpleb?authuser=0&hl=en-GB&pli=1"
                  target="_blank"
                  className="cta"
                >
                  Download PledgeMiner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
