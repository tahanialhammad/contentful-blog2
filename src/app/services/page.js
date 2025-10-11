import client from "../../lib/contentful";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";
import { generateSlug } from "../../lib/generateSlug";
import Card from "../../components/Card";
import HeroSection from "../../components/HeroSection";
import PageContent from "../../components/PageContent";

export default async function ServicesPage() {
  const res = await client.getEntries({
    content_type: "service",
    order: "fields.name",
  });

  const services = res.items;

  return (
    <div>
      <HeroSection title="Diensten Page" />
      <PageContent>
        <div className="mx-auto grid max-w-2xltt grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
            );
          })}
        </div>
      </PageContent>
    </div>
  );
}
