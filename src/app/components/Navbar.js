'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-[#17115F] shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Shieldex Logo" width={180} height={120} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                HOME
              </Link>
              <Link href="/about" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                ABOUT US
              </Link>
              <Link href="/products" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                PRODUCTS
              </Link>
              <Link href="/contact" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              HOME
            </Link>
            <Link href="/about" className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              ABOUT US
            </Link>
            <Link href="/products" className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              PRODUCTS
            </Link>
            <Link href="/contact" className="hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
