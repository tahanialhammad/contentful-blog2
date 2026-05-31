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
            ? "border-primary font-bold text-foreground"
            : "border-transparent text-on-surface-variant hover:border-primary hover:text-foreground"
        }
      `}
    >
      {children}
    </Link>
  );
}
