"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ServiceGallery({ images = [], title }) {
  const allImages = images || [];

  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // ✅ FIX 1: required import fixed
  useEffect(() => {
    if (allImages.length < 2) return;

    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  }

  if (!allImages.length) return null;

  return (
    <div className="w-full">

      {/* MAIN IMAGE */}
      <div
        className="relative w-full h-[420px] mb-5 rounded-xl overflow-hidden shadow-ambient cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        {allImages.map((img, index) => (
          <div
            key={img.sys?.id || index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === selected ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`https:${img.fields.file.url}`}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />

            {/* LENS ZOOM */}
            {zoom && index === selected && (
              <div
                className="absolute w-40 h-40 border-2 border-white shadow-lg rounded-full pointer-events-none"
                style={{
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(https:${img.fields.file.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300%",
                  backgroundPosition: `${pos.x}% ${pos.y}%`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* THUMBNAILS */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {allImages.map((img, index) => (
            <button
              key={img.sys?.id || index}
              onClick={() => setSelected(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                selected === index
                  ? "border-primary"
                  : "border-outline-variant/40 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={`https:${img.fields.file.url}`}
                alt={title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}