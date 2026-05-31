"use client";

import { useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Card from "./Card";
import HeroSection from "./HeroSection";
import PageContent from "./PageContent";

export default function ServicesClient({ services, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (s) => s.fields.category?.fields?.name === activeCategory
        );

  return (
    <div>
      <HeroSection title="منتجاتنا" />
      <PageContent>
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-10 font-sans justify-start md:justify-start" style={{ direction: "rtl" }}>
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-semibold ${
                activeCategory === "All"
                  ? "bg-primary border-primary text-white shadow-ambient"
                  : "border-outline-variant text-on-surface-variant hover:bg-primary/10 hover:text-primary hover:border-primary"
              }`}
            >
              الكل
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-semibold ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-white shadow-ambient"
                    : "border-outline-variant text-on-surface-variant hover:bg-primary/10 hover:text-primary hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map(({ sys, fields }) => {
              const plainText = fields.description
                ? documentToPlainTextString(fields.description)
                : "";
              const shortText =
                plainText.length > 200
                  ? plainText.slice(0, 200) + "..."
                  : plainText;

              return (
                <Card
                  key={sys.id}
                  title={fields.name}
                  description={shortText}
                  link={`/services/${fields.slug}`}
                  image={fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : null}
                  imageAlt={fields.name}
                  footer={`السعر: ${fields.price} ر.س`}
                />
              );
            })}
          </div>
        </div>
      </PageContent>
    </div>
  );
}
