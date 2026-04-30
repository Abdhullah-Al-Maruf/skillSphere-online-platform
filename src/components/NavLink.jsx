"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive
          ? "border-b-2 border-amber-700 text-amber-700"
          : "text-black hover:text-amber-600"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
