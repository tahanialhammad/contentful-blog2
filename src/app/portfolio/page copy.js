import HeroSection from "../../components/HeroSection";
import client from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Portfolio() {
  const res = await client.getEntries({
    content_type: "portfolio",
    order: "-sys.createdAt",
    include: 2, // include zorgt dat referenced Category entry geladen wordt
  });

  const projects = res.items;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <HeroSection title="Portfolio Page" />

      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const category = project.fields.category?.fields?.name || "Geen categorie";

          return (
            <div
              key={project.sys.id}
              className="p-4 rounded-lg bg-gray-100 shadow hover:shadow-lg transition"
            >
              <div className="text-sm text-indigo-600 font-medium mb-1">
                {category}
              </div>
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
