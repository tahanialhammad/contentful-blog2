export const revalidate = 60;

import client from "../../lib/contentful";
import ServicesClient from "../../components/ServicesClient";

export default async function ServicesPage() {
  const res = await client.getEntries({
    content_type: "service",
    order: "fields.name",
    include: 2,
  });

  const services = res.items;
  const categories = Array.from(
    new Set(services.map(s => s.fields.category?.fields?.name).filter(Boolean))
  );

  return <ServicesClient services={services} categories={categories} />;
}
