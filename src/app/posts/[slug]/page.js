import client from "../../../lib/contentful";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function PostPage({ params }) {
  const { slug } = params;

  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  const post = res.items[0];

  if (!post) {
    notFound(); // 404 pagina
  }

  const { title, publishDate, content, image } = post.fields;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {image && (
        // <img
        //   src={`https:${image.fields.file.url}`}
        //   alt={title}
        //   className="w-full mb-6 rounded"
        // />

        <div className="mb-6">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            className="mx-auto max-w-md mb-6 object-cover object-center rounded"
          />
        </div>
      )}

      <div className="flex justify-between align-middle">
       <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 mb-4">{publishDate}</p>
      </div>
      <div className="prose">{documentToReactComponents(content)}</div>
    </article>
  );
}
