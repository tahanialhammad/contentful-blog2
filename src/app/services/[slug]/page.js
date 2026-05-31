import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Query by fields.slug — same pattern as posts/[slug]/page.js
  const res = await client.getEntries({
    content_type: "service",
    "fields.slug": decodedSlug,
    limit: 1,
  });

  const service = res.items[0];

  if (!service) {
    notFound();
  }

  const { name, description, price, image } = service.fields;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-right">
      {image && (
        <div className="relative w-full h-80 sm:h-[450px] mb-8 shadow-ambient rounded-xl overflow-hidden">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={400}
            height={400} className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground">{name}</h1>
        <h3 className="text-xl font-bold text-primary mt-2 sm:mt-0 font-sans">السعر: {price} ر.س</h3>
      </div>

      <div className="prose prose-stone max-w-none text-on-surface-variant leading-relaxed">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}
