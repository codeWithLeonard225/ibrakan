"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Added Image import
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/loan-products" },
    { name: "Progress", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b-4 border-emerald-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden border-2 border-slate-900">
            <Image 
              src="/images/ibrakanLogo.jpg"
              alt="Ibrakan Logo" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Ibrakan
            </span>
            <span className="text-[7px] font-bold text-emerald-700 uppercase tracking-[0.2em] mt-1">
              Micro Finance, General Merchandise & Progressive Association
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-900 hover:text-emerald-700 font-black uppercase text-sm tracking-widest transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/apply">
            <button className="bg-slate-900 text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
              Apply Now
            </button>
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t-4 border-emerald-600">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-emerald-400 font-black uppercase tracking-widest"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/apply">
              <button className="w-full bg-emerald-600 text-white py-4 font-black uppercase tracking-widest">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}