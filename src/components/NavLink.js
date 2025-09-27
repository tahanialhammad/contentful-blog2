"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        text-sm font-semibold px-3 py-2 transition
        border-b-2
        ${
          isActive
            ? "border-fuchsia-600 font-bold text-gray-900"
            : "border-transparent text-gray-700 hover:border-fuchsia-600 hover:text-gray-900"
        }
      `}
    >
      {children}
    </Link>
  );
}
