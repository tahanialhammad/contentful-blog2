import client from "../../lib/contentful";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";
import { generateSlug } from "../../lib/generateSlug";
import Card from "../../components/Card";

export default async function ServicesPage() {
  const res = await client.getEntries({
    content_type: "service",
    order: "fields.name",
  });

  const services = res.items;

  return (
    <div>
      <h1>Diensten</h1>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map(({ sys, fields }) => {
          const plainText = documentToPlainTextString(fields.description);
          const shortText = plainText.slice(0, 200) + "...";

          return (
            <Card
              key={sys.id}
              title={fields.name}
              description={shortText}
              link={`/services/${generateSlug(fields.name)}`}
              image={`https:${fields.image.fields.file.url}`}
              imageAlt={fields.name}
              footer={`Prijs: €${fields.price}`}
            />

            // <li key={sys.id} className="border-b pb-6">
            //   <Link href={`/services/${generateSlug(fields.name)}`}>
            //     <h2 className="text-xl font-semibold">{fields.name}</h2>
            //   </Link>
            //   <p>{shortText}</p>
            //   <p>Prijs: €{fields.price}</p>

            //   {fields.image && (
            //     <Image
            //       src={`https:${fields.image.fields.file.url}`}
            //       alt={fields.name}
            //       width={600}
            //       height={400}
            //       className="rounded"
            //     />
            //   )}
            // </li>
          );
        })}
      </div>
    </div>
  );
}
