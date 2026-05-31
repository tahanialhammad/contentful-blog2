import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";
import Card from "../../../components/Card";
import HeroSection from "../../../components/HeroSection";
import PageContent from "../../../components/PageContent";

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Fetch the category
  const categoryRes = await client.getEntries({
    content_type: "category",
    "fields.slug": decodedSlug,
    limit: 1,
  });

  const category = categoryRes.items[0];
  if (!category) {
    notFound();
  }

  // Fetch services under this category
  const servicesRes = await client.getEntries({
    content_type: "service",
    "fields.category.sys.id": category.sys.id,
    order: "fields.name",
  });

  // Fetch portfolio projects under this category
  const portfolioRes = await client.getEntries({
    content_type: "portfolio",
    "fields.category.sys.id": category.sys.id,
    order: "-sys.createdAt",
  });

  const services = servicesRes.items;
  const projects = portfolioRes.items;

  return (
    <div>
      <HeroSection title={`قسم ${category.fields.name}`} />
      
      <PageContent>
        <div className="max-w-6xl mx-auto px-6 space-y-20" style={{ direction: "rtl" }}>
          
          {/* Services/Products Section */}
          <section className="space-y-8">
            <div className="border-b border-outline-variant/30 pb-4 text-right">
              <h2 className="font-serif text-3xl font-extrabold text-foreground">المنتجات المتوفرة</h2>
              <p className="font-sans text-sm text-on-surface-variant mt-2">
                تصفح المنتجات الفريدة المتاحة للطلب الفوري في هذا القسم.
              </p>
            </div>

            {services.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(({ sys, fields }) => {
                  const plainText = fields.description
                    ? documentToPlainTextString(fields.description)
                    : "";
                  const shortText =
                    plainText.length > 150
                      ? plainText.slice(0, 150) + "..."
                      : plainText;

                  return (
                    <Card
                      key={sys.id}
                      title={fields.name}
                      description={shortText}
                      link={`/services/${fields.slug}`}
                      image={fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : null}
                      imageAlt={fields.name}
                      footer={`السعر: ${fields.price} ر.س`}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-surface-container-lowest border border-outline-variant/15 rounded-2xl shadow-ambient">
                <p className="font-sans text-on-surface-variant">لا تتوفر منتجات في هذا القسم حاليًا.</p>
              </div>
            )}
          </section>

          {/* Portfolio Section */}
          <section className="space-y-8">
            <div className="border-b border-outline-variant/30 pb-4 text-right">
              <h2 className="font-serif text-3xl font-extrabold text-foreground">معرض الأعمال</h2>
              <p className="font-sans text-sm text-on-surface-variant mt-2">
                نماذج من تصاميمنا السابقة وأعمالنا المخصصة لتستلهم منها طلبك القادم.
              </p>
            </div>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(({ sys, fields }) => {
                  const plainText = fields.description
                    ? documentToPlainTextString(fields.description)
                    : "";
                  const shortText =
                    plainText.length > 150
                      ? plainText.slice(0, 150) + "..."
                      : plainText;

                  return (
                    <Card
                      key={sys.id}
                      title={fields.title}
                      description={shortText}
                      link={`/portfolio/${fields.slug}`}
                      image={fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : null}
                      imageAlt={fields.title}
                      footer="اضغط للتفاصيل"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-surface-container-lowest border border-outline-variant/15 rounded-2xl shadow-ambient">
                <p className="font-sans text-on-surface-variant">لا توجد أعمال لعرضها في هذا القسم حاليًا.</p>
              </div>
            )}
          </section>

          {/* Back button */}
          <div className="pt-8 flex justify-center">
            <Link
              href="/categories"
              className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 text-sm font-semibold shadow-ambient"
            >
              العودة إلى الأقسام الرئيسية
            </Link>
          </div>
          
        </div>
      </PageContent>
    </div>
  );
}
