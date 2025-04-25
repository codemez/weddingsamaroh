'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/images/fav.png" width={36} height={36} alt="Logo" />
          <Image
            src="/assets/images/logo-text.png"
            width={100}
            height={24}
            alt="Logo Text"
            className="hidden sm:block"
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={!menuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex lg:items-center lg:space-x-6 ${menuOpen ? 'block absolute top-16 left-0 w-full bg-white shadow-md p-4' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 font-medium text-gray-700">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/find-vendor" className="hover:text-blue-600">Find Vendor</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-600">Gallery</Link></li>
            <li><Link href="/contact-us" className="hover:text-blue-600">Contact</Link></li>
          </ul>

          {/* Right Side - Actions */}
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-center">
            <Link href="/signup" className="px-4 py-2 text-sm border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition">
              Join as a Vendor
            </Link>
            <Link href="/signin" className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
