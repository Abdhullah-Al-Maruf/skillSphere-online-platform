"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
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