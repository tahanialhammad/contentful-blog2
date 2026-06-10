import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import ServiceGalleryClient from "../../../components/ServiceGalleryClient";
import RelatedServices from "../../../components/RelatedServices";

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // 1. Get current service
  const res = await client.getEntries({
    content_type: "service",
    "fields.slug": decodedSlug,
    limit: 1,
  });

  const service = res.items[0];

  if (!service) {
    notFound();
  }

  // 2. Get related services (same category)
const categoryId = service.fields.category?.sys?.id;

let relatedServices = [];

if (categoryId) {
  const relatedRes = await client.getEntries({
    content_type: "service",
    "fields.category.sys.id": categoryId,
    order: "-sys.createdAt", // 🔥 الأحدث أولاً
    limit: 4, // نجيب 4 عشان نقدر نستثني الحالي
  });

  relatedServices = relatedRes.items
    .filter((item) => item.sys.id !== service.sys.id)
    .slice(0, 3); // 🔥 نأخذ فقط 3
}
  return (
    <>
      <ServiceGalleryClient service={service} />

      <RelatedServices services={relatedServices} />
    </>
  );
}