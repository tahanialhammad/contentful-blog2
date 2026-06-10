"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ServiceGalleryClient({ service }) {
  const { name, description, price, images } = service.fields;

  const allImages = images || [];

  const [selected, setSelected] = useState(0);

  // zoom state
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Auto slideshow (optional but safe)
  useEffect(() => {
    if (allImages.length < 2) return;

    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % allImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  }

  if (!allImages.length) return null;

  const currentImage = allImages[selected];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-right">

      {/* MAIN IMAGE WITH LENS ZOOM */}
      <div
        className="relative w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden shadow-ambient cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        {/* IMAGE */}
        <Image
          src={`https:${currentImage.fields.file.url}`}
          alt={name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* LENS ZOOM */}
        {zoom && (
          <div
            className="absolute w-40 h-40 border-2 border-white shadow-lg rounded-full pointer-events-none"
            style={{
              top: `${pos.y}%`,
              left: `${pos.x}%`,
              transform: "translate(-50%, -50%)",
              backgroundImage: `url(https:${currentImage.fields.file.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "300%",
              backgroundPosition: `${pos.x}% ${pos.y}%`,
            }}
          />
        )}
      </div>

      {/* THUMBNAILS */}
      {allImages.length > 1 && (
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {allImages.map((img, index) => (
            <button
              key={img.sys.id || index}
              onClick={() => setSelected(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                selected === index
                  ? "border-primary"
                  : "border-outline-variant/40 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={`https:${img.fields.file.url}`}
                alt={name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* TITLE + PRICE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground">
          {name}
        </h1>

        <h3 className="text-xl font-bold text-primary font-sans mt-2 sm:mt-0">
          السعر: {price} د.ع
        </h3>
      </div>

      {/* DESCRIPTION */}
      <div className="prose prose-stone max-w-none text-on-surface-variant leading-relaxed">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}