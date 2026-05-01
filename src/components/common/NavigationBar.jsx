"use client";

import { useState, useCallback } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@heroui/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Profile", href: "/profile" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
<nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-linear-to-r from-[#ff6b00] to-[#a04100] bg-clip-text text-transparent">
            SkillSphere
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-600 hover:text-orange-500 font-medium"
          >
            Login
          </Link>
          <Link href="/signup">
            <Button
              className={
                "bg-linear-to-b from-[#ff6b00] to-[#a04100] shadow-lg shadow-orange-500/50"
              }
            >
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
  className={clsx(
    "md:hidden transition-all duration-300 overflow-hidden",
    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  )}
>
  <div className="mx-4 mt-3 rounded-2xl border bg-white shadow-lg p-3 space-y-2">

    {navItems.map((item) => (
      <NavLink
        key={item.name}
        href={item.href}
        onClick={closeMenu}
      >
        <div className="px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition flex justify-between">
          {item.name}
          <span>→</span>
        </div>
      </NavLink>
    ))}

    <div className="border-t my-2"></div>

    <Link
      href="/login"
      onClick={closeMenu}
      className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600"
    >
      Login
    </Link>

    <Link href="/signup" onClick={closeMenu}>
      <Button className="bg-linear-to-b from-[#ff6b00] to-[#a04100] w-full">
        Register
      </Button>
    </Link>

  </div>
</div>
    </nav>
  );
};

export default NavigationBar;
