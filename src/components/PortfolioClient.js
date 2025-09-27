"use client";
// "use client" bovenaan:
// Nodig omdat we React hooks zoals useState gebruiken.
// Alles in deze component draait in de browser, niet op de server.

import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
          const category = project.fields.category?.fields?.name || "Geen categorie";
          return (
            <div
              key={project.sys.id}
              className="p-4 rounded-lg bg-white shadow hover:shadow-lg transition"
            >
              <div className="text-sm text-fuchsia-600 font-medium mb-1">{category}</div>
              <h2 className="text-xl font-semibold">{project.fields.title}</h2>
              <div className="text-gray-600 mt-2">
                {project.fields.description &&
                  documentToReactComponents(project.fields.description)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
