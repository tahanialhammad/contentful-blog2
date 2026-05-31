import Link from "next/link";
import Image from "next/image";

export default function Card({ image, title, description, link, footer, imageAlt = "", imageHeight = 200 }) {
  return (
    <div className="flex flex-col justify-between h-full bg-surface-container-lowest rounded-xl shadow-ambient hover:shadow-glow transition-shadow duration-300 overflow-hidden">
      {/* Image (cardImage) */}
      {image && (
        <div className="relative w-full" style={{ height: `${imageHeight}px` }}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Card Header */}
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2 leading-snug">
          {link ? <Link href={link} className="hover:text-primary transition-colors">{title}</Link> : title}
        </h3>

        {/* Card Description */}
        {description && (
          <p className="font-sans text-sm text-on-surface-variant line-clamp-3 mb-4 leading-relaxed">{description}</p>
        )}

        <div className="flex justify-between mt-auto">
          {/* Lees meer link */}
          {link && (
            <Link href={link} className="font-sans text-primary hover:text-primary-container font-semibold text-sm mt-auto inline-flex items-center gap-1 transition-colors">
              اقرأ المزيد ←
            </Link>
          )}
          {footer && (
            <div className="px-5 border-t border-outline-variant bg-surface-container-low text-sm text-on-surface-variant font-medium">
              {footer}
            </div>
          )}
        </div>


        {/* Card Footer */}

      </div>


    </div>
  );
}
