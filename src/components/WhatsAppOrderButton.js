"use client";

import Link from "next/link";

export default function WhatsAppOrderButton({
  name,
  price,
  slug,
  phone = "9647715558945", // غيّر الرقم هنا أو مرره كـ prop
  label = "اطلب عبر واتساب",
}) {
//   const productUrl = `https://nawara-gifts.vercel.app/services/${slug}`;
  const productUrl = `https://nawara-gifts.vercel.app/services/${encodeURIComponent(slug)}`;
  const message = encodeURIComponent(
    `مرحبا 👋
أريد طلب هذا المنتج:

📌 الاسم: ${name}
💰 السعر: ${price}
🔗 الرابط: ${productUrl}
شكرا`,
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-6 rounded-full font-bold hover:bg-green-600 transition shadow-md"
    >
      {label}
    </Link>
  );
}
