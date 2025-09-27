"use client";

import { useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "../lib/generateSlug";

export default function PortfolioClient({ projects, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.fields.category?.fields?.name === activeCategory
        );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Filter knoppen */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full border transition ${
            activeCategory === "All"
              ? "bg-fuchsia-600 text-white"
              : "border-gray-300 text-gray-700 hover:bg-fuchsia-600 hover:text-white"
          }`}
        >
          Alle
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-fuchsia-600 text-white"
                : "border-gray-300 text-gray-700 hover:bg-fuchsia-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const category =
            project.fields.category?.fields?.name || "Geen categorie";

          // Korte beschrijving
          const plainText = project.fields.description
            ? documentToPlainTextString(project.fields.description)
            : "";
          const shortText =
            plainText.length > 200
              ? plainText.slice(0, 200) + "..."
              : plainText;

          // Afbeelding
          const imageUrl = project.fields.image?.fields?.file?.url;
          const imageAlt =
            project.fields.image?.fields?.title || project.fields.title;

          // Slug
          const slug = generateSlug(project.fields.title);

          return (
            <Link
              key={project.sys.id}
              href={`/portfolio/${slug}`}
              className="block rounded-lg bg-white shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image bovenaan */}
              {imageUrl && (
                <div className="relative w-full h-48">
                  <Image
                    src={`https:${imageUrl}`}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}

              <div className="p-4">
                <div className="text-sm text-fuchsia-600 font-medium mb-1">
                  {category}
                </div>
                <h2 className="text-xl font-semibold line-clamp-2 break-words">
                  {project.fields.title}
                </h2>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {shortText}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
