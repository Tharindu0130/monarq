"use client";

import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Personalization", href: "/personalization" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#1a1a1a] text-white">

      {/* CENTER CONTAINER */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Brand logo"
            className="h-8 object-contain"
          />
        </Link>

        {/* NAV ITEMS */}
        <ul className="flex items-center text-sm text-gray-200 whitespace-nowrap">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center">

              <Link
                href={item.href}
                className="px-3 md:px-4 hover:text-white transition duration-200"
              >
                {item.name}
              </Link>

              {index !== navItems.length - 1 && (
                <span className="text-gray-500">|</span>
              )}

            </li>
          ))}
        </ul>

      </div>

    </nav>
  );
}