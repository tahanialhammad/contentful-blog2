import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function generateSlug(item) {
  return item
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // verwijder speciale tekens
    .replace(/\s+/g, "-"); // vervang spaties met streepjes
}

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
  const service = await GetService(params.name);

  if (!service) {
    notFound(); // 404 pagina tonen als geen service gevonden
  }

  const { name, description, price, image } = service.fields;

  return (
    <div>
      <h1>ServicePage</h1>
      <h1>{name}</h1>
      <p>Prijs: €{price}</p>

      {image && (
        <Image
          src={`https:${image.fields.file.url}`}
          alt={name}
          width={600}
          height={400}
          className="rounded"
        />
      )}

      <div className="prose">{documentToReactComponents(description)}</div>
    </div>
  );
}
