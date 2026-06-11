"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ServiceGallery from "./ServiceGallery";
import WhatsAppOrderButton from "./WhatsAppOrderButton";

export default function ServiceGalleryClient({ service }) {
  const { name, description, price, images, slug } = service.fields;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-right">

      {/* GALLERY */}
      <ServiceGallery
        images={images || []}
        title={name}
      />

      {/* TITLE + PRICE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground">
          {name}
        </h1>

        <h3 className="text-xl font-bold text-primary font-sans mt-2 sm:mt-0">
          السعر: {price} د.ع
        </h3>

<WhatsAppOrderButton
  name={name}
  price={price}
  slug={slug}
/>
      </div>

      {/* DESCRIPTION */}
      <div className="prose prose-stone max-w-none text-on-surface-variant leading-relaxed">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}