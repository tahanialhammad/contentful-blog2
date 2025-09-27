// components/Button.js
import Link from "next/link";

export default function AppButton({ href, children, variant = "fill" }) {
  const baseClasses =
    "rounded-full  px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors";
  const variants = {
    fill: "border-2 border-transparent bg-fuchsia-600 text-white hover:bg-fuchsia-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600",
    outline:
      "border-2 border-fuchsia-600 text-gray-900 hover:bg-fuchsia-500 hover:text-white",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
