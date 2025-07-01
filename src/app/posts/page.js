import client from "../../lib/contentful";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Image from "next/image";

export default async function BlogPage() {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
  });

  const posts = res.items;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(({ sys, fields }) => {
            const plainText = documentToPlainTextString(fields.content);
            const shortText = plainText.slice(0, 200) + "...";

            return (
              <article
                key={sys.id}
                className="flex flex-col justify-between h-full bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div>
                  {fields.image && (
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={`https:${fields.image.fields.file.url}`}
                        alt={fields.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center gap-x-4 text-xs mb-2">
                      <time dateTime={fields.publishDate} className="text-gray-500">
                        {fields.publishDate}
                      </time>
                      {fields.category?.title && (
                        <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 text-xs">
                          {fields.category.title}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-600">
                      <Link href={`/posts/${fields.slug}`}>{fields.title}</Link>
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">{shortText}</p>

                    <Link
                      href={`/posts/${fields.slug}`}
                      className="text-blue-600 underline mt-4 inline-block"
                    >
                      Lees meer →
                    </Link>
                  </div>
                </div>

                <div className="p-5 border-t mt-auto">
                  <div className="flex items-center gap-x-4">
                    <img
                      alt={fields.author?.name || ""}
                      src={
                        fields.author?.image?.fields?.file?.url
                          ? `https:${fields.author.image.fields.file.url}`
                          : "https://via.placeholder.com/40"
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                    />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">
                        {fields.author?.name || "Tahani Alhammad"}
                      </p>
                      <p className="text-gray-600">{fields.author?.role || ""}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
