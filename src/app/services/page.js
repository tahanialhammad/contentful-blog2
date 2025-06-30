import client from "../../lib/contentful";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";

export default async function ServicesPage() {
  const res = await client.getEntries({
    content_type: "service",
    order: "fields.name",
  });

  const services = res.items;




function generateSlug(item) {
  return item
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // verwijder speciale tekens
    .replace(/\s+/g, '-')     // vervang spaties met streepjes
}








  return (
    <div>
      <h1>Diensten</h1>
      <ul className="space-y-8">
        {services.map(({ sys, fields }) => {
          const plainText = documentToPlainTextString(fields.description);
          const shortText = plainText.slice(0, 200) + "...";

          return (
            <li key={sys.id} className="border-b pb-6">
              <Link href={`/services/${generateSlug(fields.name)}`} >
              <h2 className="text-xl font-semibold">{fields.name}</h2>
              </Link>
              <p>{shortText}</p>
              <p>Prijs: €{fields.price}</p>

              {fields.image && (
                <Image
                  src={`https:${fields.image.fields.file.url}`}
                  alt={fields.name}
                  width={600}
                  height={400}
                  className="rounded"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
