"use client";

import { useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Card from "./Card";
import HeroSection from "./HeroSection";
import PageContent from "./PageContent";

export default function ServicesClient({ services, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("default");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "default", label: "الترتيب الافتراضي" },
    { value: "price_asc", label: "السعر: من الأقل إلى الأعلى" },
    { value: "price_desc", label: "السعر: من الأعلى إلى الأقل" },
  ];

  const activeOption = options.find((o) => o.value === priceSort) || options[0];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (s) => s.fields.category?.fields?.name === activeCategory
        );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (priceSort === "price_asc") {
      return (a.fields.price || 0) - (b.fields.price || 0);
    }
    if (priceSort === "price_desc") {
      return (b.fields.price || 0) - (a.fields.price || 0);
    }
    return 0; // default order from Contentful (fields.name)
  });

  return (
    <div>
      <HeroSection title="منتجاتنا" />
      <PageContent>
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 mb-10" style={{ direction: "rtl" }}>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 font-sans">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-5 py-2.5 rounded-full border transition-all duration-200 text-sm font-semibold ${
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
                  className={`px-5 py-2.5 rounded-full border transition-all duration-200 text-sm font-semibold ${
                    activeCategory === cat
                      ? "bg-primary border-primary text-white shadow-ambient"
                      : "border-outline-variant text-on-surface-variant hover:bg-primary/10 hover:text-primary hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Sort Dropdown */}
            <div className="relative font-sans w-full sm:w-64">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:border-primary/60 px-5 py-2.5 rounded-full text-sm font-semibold shadow-ambient transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <span>{activeOption.label}</span>
                <svg
                  className={`w-4 h-4 text-on-surface-variant/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <>
                  {/* Overlay to close the dropdown when clicking outside */}
                  <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                  <div className="absolute left-0 right-0 mt-2 z-20 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl shadow-glow overflow-hidden py-1 animate-fadeIn">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setPriceSort(option.value);
                          setIsOpen(false);
                        }}
                        className={`w-full text-right px-5 py-3 text-sm transition-colors duration-150 ${
                          priceSort === option.value
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-on-surface-variant hover:bg-surface-container-low"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {sortedServices.map(({ sys, fields }) => {
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
