import Link from "next/link";
import Image from "next/image";

export default function Card({ image, title, description, link, footer, imageAlt = "", imageHeight = 200 }) {
  return (
    <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image (cardImage) */}
      {image && (
        <div className={`relative w-full h-[${imageHeight}px]`}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Card Header */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {link ? <Link href={link} className="hover:text-blue-600">{title}</Link> : title}
        </h3>

        {/* Card Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>
        )}

        {/* Lees meer link */}
        {link && (
          <Link href={link} className="text-blue-600 underline text-sm mt-auto">
            Lees meer →
          </Link>
        )}
      </div>

      {/* Card Footer */}
      {footer && (
        <div className="p-5 border-t bg-gray-50 text-sm text-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}
