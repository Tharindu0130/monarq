"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/CartContext";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Personalization", href: "/personalization" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const el = navRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#1a1a1a] text-white"
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="Brand logo" className="h-8" />
      </Link>

      {/* DESKTOP NAV + CART */}
      <div className="hidden md:flex items-center">

        <ul className="flex items-center text-sm text-gray-200">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={index} className="flex items-center">
                <Link
                  href={item.href}
                  className={`px-4 transition ${
                    isActive
                      ? "text-[#d4af37] font-semibold"
                      : "hover:text-[#d4af37]"
                  }`}
                >
                  {item.name}
                </Link>

                {index !== navItems.length - 1 && (
                  <span className="text-gray-500">|</span>
                )}
              </li>
            );
          })}
        </ul>

        {/* CART ICON WITH COUNT */}
        <Link href="/cart" className="relative ml-6">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d4af37"
            viewBox="0 0 24 24"
            className="w-6 h-6 hover:scale-110 transition"
          >
            <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h10v-2h-9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h6.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.31l-.94-2z"/>
          </svg>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}

        </Link>

      </div>

      {/* MOBILE */}
      <div className="md:hidden flex items-center gap-4">

        {/* CART MOBILE */}
        <Link href="/cart" className="relative">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d4af37"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h10v-2h-9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h6.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.31l-.94-2z"/>
          </svg>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}

        </Link>

        {/* HAMBURGER */}
        <div
          onClick={() => setMenuOpen((v) => !v)}
          className="cursor-pointer p-2"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[#1a1a1a] border-t border-gray-800">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gray-800">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-sm text-gray-200 hover:text-[#d4af37]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}