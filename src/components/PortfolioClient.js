"use client";

import { useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import PageContent from "../components/PageContent";

export default function PortfolioClient({ projects, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (p) => p.fields.category?.fields?.name === activeCategory
      );

  return (
    <div>
      <HeroSection title="أعمالنا المميزة" />
      <PageContent>
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Filter buttons (RTL layout direction handled by layout wrapper) */}
          <div className="flex flex-wrap gap-3 mb-10 font-sans">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-semibold ${activeCategory === "All"
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
                className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-semibold ${activeCategory === cat
                  ? "bg-primary border-primary text-white shadow-ambient"
                  : "border-outline-variant text-on-surface-variant hover:bg-primary/10 hover:text-primary hover:border-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const category =
                project.fields.category?.fields?.name || "بدون تصنيف";

              // Short description
              const plainText = project.fields.description
                ? documentToPlainTextString(project.fields.description)
                : "";
              const shortText =
                plainText.length > 200
                  ? plainText.slice(0, 200) + "..."
                  : plainText;

              // Image
              const imageUrl = project.fields.image?.fields?.file?.url;
              const imageAlt =
                project.fields.image?.fields?.title || project.fields.title;

              // Slug — use fields.slug from Contentful (same as posts & services)
              const slug = project.fields.slug;

              return (
                <Link
                  key={project.sys.id}
                  href={`/portfolio/${slug}`}
                  className="block rounded-xl bg-surface-container-lowest shadow-ambient hover:shadow-glow transition-all duration-300 overflow-hidden"
                >
                  {/* Image on top */}
                  {imageUrl && (
                    <div className="relative w-full h-56">
                      <Image
                        src={`https:${imageUrl}`}
                        alt={imageAlt}
                        width={400}
                        height={400}
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="text-xs text-primary font-bold tracking-wider mb-2 font-sans">
                      {category}
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground line-clamp-2 leading-snug">
                      {project.fields.title}
                    </h2>
                    <p className="mt-3 font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      {shortText}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </PageContent>
    </div>
  );
}
