import client from "../../lib/contentful";

import Link from "next/link";

export default async function BlogPage() {
  const res = await client.getEntries({
    content_type: "blogPost", // content type ID
    order: "-fields.publishDate",
  });

  const posts = res.items;

  return (
    <div>
      <h1>Blogpagina</h1>
      <ul>
        {posts.map(({ sys, fields }) => (
          <li key={sys.id}>
            <h2>
              <Link href={`/posts/${fields.slug}`}>{fields.title}</Link>
            </h2>
            <p>{fields.body?.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
