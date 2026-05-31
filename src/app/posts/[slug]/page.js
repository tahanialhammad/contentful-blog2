import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": decodedSlug,
  });

  const post = res.items[0];

  if (!post) {
    notFound(); // 404 pagina
  }

  const { title, publishDate, content, image } = post.fields;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 font-sans text-right">
      {image && (
        <div className="mb-8 flex justify-center">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            className="max-w-full sm:max-w-2xl h-auto object-cover object-center rounded-xl shadow-ambient"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground">{title}</h1>
        <p className="text-sm font-semibold text-on-surface-variant mt-2 sm:mt-0">{publishDate}</p>
      </div>
      <div className="prose prose-stone max-w-none text-on-surface-variant leading-relaxed">
        {documentToReactComponents(content)}
      </div>
    </article>
  );
}
