// components/Button.js
import Link from "next/link";

export default function AppButton({ href, children, variant = "fill" }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variants = {
    fill: "bg-primary text-white border border-transparent shadow-ambient hover:shadow-glow focus-visible:outline-primary",
    outline: "bg-transparent text-primary border border-secondary hover:bg-secondary/10 focus-visible:outline-secondary",
    success: "bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600",
    info: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600",
    light: "bg-surface-container-lowest text-foreground border border-outline-variant hover:bg-surface-container-low focus-visible:outline-outline",
    dark: "bg-foreground text-background hover:opacity-90 focus-visible:outline-foreground",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
