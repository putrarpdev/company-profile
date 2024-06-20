"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (currentPage === "") {
      setCurrentPage('home');
    }
  }, [currentPage]);

  return (
    <nav className="bg-gray-900 bg-opacity-40 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="putrarp.webp" className="h-8" alt="Flowbite Logo" height={5} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">PutrarpDev</span>
            </div>
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${menuOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/" passHref>
                <p
                  className={`block py-2 px-3 transition duration-1000 ease-in-out md:border-0 md:p-0  ${currentPage === 'home' ? 'text-blue-500' : 'text-white'} hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/aboutus" passHref>
                <p
                  className={`block py-2 px-3 transition duration-1000 ease-in-out md:border-0 md:p-0 ${currentPage === 'aboutus' ? 'text-blue-500' : 'text-white'} hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent`}
                  onClick={() => handleLinkClick('aboutus')}
                >
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <p
                  className={`block py-2 px-3 transition duration-1000 ease-in-out md:border-0 md:p-0 ${currentPage === 'services' ? 'text-blue-500' : 'text-white'} hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent`}
                  onClick={() => handleLinkClick('services')}
                >
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link href="/ourteam" passHref>
                <p
                  className={`block py-2 px-3 transition duration-1000 ease-in-out md:border-0 md:p-0 ${currentPage === 'ourteam' ? 'text-blue-500' : 'text-white'} hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent`}
                  onClick={() => handleLinkClick('ourteam')}
                >
                  Our Team
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
