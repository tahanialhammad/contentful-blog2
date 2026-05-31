import client from "../../lib/contentful";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import PageContent from "../../components/PageContent";

// Correct way to configure Next.js route revalidation for Contentful SDK fetches
export const revalidate = 60;

export default async function BlogPage() {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
  });

  const posts = res.items;

  return (
    <div>
      <HeroSection title="المدونة" />

      <PageContent>
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 text-right font-sans">
          {posts.map(({ sys, fields }) => {
            const plainText = documentToPlainTextString(fields.content);
            const shortText = plainText.slice(0, 180) + "...";

            return (
              <article
                key={sys.id}
                className="flex flex-col justify-between h-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl shadow-ambient hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                <div>
                  {fields.image && (
                    <div className="relative w-full h-52">
                      <Link href={`/posts/${fields.slug}`}>
                        <Image
                          src={`https:${fields.image.fields.file.url}`}
                          alt={fields.title}
                          fill
                          className="object-cover rounded-t-xl"
                        />
                      </Link>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-x-4 text-xs mb-3 text-on-surface-variant">
                      <time dateTime={fields.publishDate}>
                        {fields.publishDate}
                      </time>
                      {fields.category?.title && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 font-bold text-primary text-xs">
                          {fields.category.title}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug">
                      <Link href={`/posts/${fields.slug}`} className="hover:text-primary transition-colors">
                        {fields.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {shortText}
                    </p>

                    <Link
                      href={`/posts/${fields.slug}`}
                      className="font-sans text-primary hover:text-primary-container font-semibold text-sm mt-4 inline-flex items-center gap-1 transition-colors"
                    >
                      اقرأ المزيد ←
                    </Link>
                  </div>
                </div>

                <div className="p-5 border-t border-outline-variant/15 bg-surface-container-low mt-auto">
                  <div className="flex items-center gap-x-3">
                    <img
                      alt={fields.author?.name || ""}
                      src={
                        fields.author?.image?.fields?.file?.url
                          ? `https:${fields.author.image.fields.file.url}`
                          : "https://via.placeholder.com/40"
                      }
                      className="w-10 h-10 rounded-full bg-background object-cover border border-outline-variant/15"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-foreground">
                        {fields.author?.name || "تهاني الأحمد"}
                      </p>
                      <p className="text-on-surface-variant mt-0.5">
                        {fields.author?.role || "مؤسس نوارة"}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </PageContent>
    </div>
  );
}
