// components/Button.js
import Link from "next/link";

export default function AppButton({ href, children, variant = "fill" }) {
  const baseClasses =
    "rounded-full  px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors";
  const variants = {
    fill: "border-2 border-transparent bg-fuchsia-600 text-white hover:bg-fuchsia-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600",
    outline:
      "border-2 border-fuchsia-600 text-gray-900 hover:bg-fuchsia-500 hover:text-white",
    success:
      "border-2 border-transparent bg-green-600 text-white hover:bg-green-700",
    info: "border-2 border-transparent bg-indigo-600 text-white hover:bg-indigo-700",
    light: "border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    dark: "border-2 border-transparent bg-gray-900 text-white hover:bg-black",
    danger:
      "border-2 border-transparent bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
