import client from "../../../lib/contentful";
import { generateSlug } from "../../../lib/generateSlug";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function ProjectPage({ params }) {
  const { slug } = params;

  // Haal alle projecten
  const res = await client.getEntries({ content_type: "portfolio" });
  const project = res.items.find(
    (item) => generateSlug(item.fields.title) === slug
  );

  if (!project) {
    return <div className="max-w-4xl mx-auto p-6">Project niet gevonden.</div>;
  }

  const { title, description, image, category } = project.fields;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {image?.fields?.file?.url && (
        <div className="relative w-full h-80 mb-6">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title || title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-sm text-fuchsia-600 mb-2">
        {category?.fields?.name}
      </div>

      <div className="prose max-w-none text-gray-700">
        {description && documentToReactComponents(description)}
      </div>
    </div>
  );
}
