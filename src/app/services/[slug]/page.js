import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { generateSlug } from "../../../lib/generateSlug";

async function GetService(name) {
  const services = await client.getEntries({
    content_type: "service",
  });
  // filter op slug van het service naam
  const service = services.items.find(
    (item) => generateSlug(name) === generateSlug(item.fields.name)
  );

  return service;
}

export default async function ServicePage({ params }) {
  const service = await GetService(params.slug);

  if (!service) {
    notFound(); // 404 pagina tonen als geen service gevonden
  }

  const { name, description, price, image } = service.fields;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {image && (
        <div className="relative w-full h-80 mb-6">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex justify-between align-middle">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <h3>Prijs: €{price}</h3>
      </div>

      <div className="prose">{documentToReactComponents(description)}</div>
    </div>
  );
}
