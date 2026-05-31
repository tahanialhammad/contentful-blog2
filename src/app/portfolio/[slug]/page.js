import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Query by fields.slug — same pattern as posts & services
  const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": decodedSlug,
    include: 2,
    limit: 1,
  });

  const project = res.items[0];

  if (!project) {
    notFound();
  }

  const { title, description, image, category } = project.fields;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-right">
      {image?.fields?.file?.url && (
        <div className="relative w-full h-80 sm:h-[450px] mb-8 shadow-ambient rounded-xl overflow-hidden">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground">{title}</h1>
        {category?.fields?.name && (
          <div className="text-sm font-bold text-primary mt-2 sm:mt-0">
            {category.fields.name}
          </div>
        )}
      </div>
      <div className="prose prose-stone max-w-none text-on-surface-variant leading-relaxed">
        {description && documentToReactComponents(description)}
      </div>
    </div>
  );
}
