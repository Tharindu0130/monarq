"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

      <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="Brand logo" className="h-8" />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center text-sm text-gray-200">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          
          return (
            <li key={index} className="flex items-center">
              <Link
                href={item.href}
                className={`px-4 transition ${
                  isActive ? "text-[#d4af37] font-semibold" : "hover:text-[#d4af37]"
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

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <div
          role="button"
          tabIndex={0}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen((v) => !v);
          }}
          className="cursor-pointer select-none p-2 -mr-2"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-full z-50 w-full bg-[#1a1a1a] border-t border-gray-800">
          <ul className="flex flex-col">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href} className="border-b border-gray-800 last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3 text-sm transition ${
                      isActive ? "text-[#c5a25f] font-semibold bg-gray-900" : "text-gray-200 hover:text-[#c5a25f]"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {index !== navItems.length - 1 && <span className="hidden" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}