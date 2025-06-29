import client from '../../../lib/contentful';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { slug } = params;

  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });

  const post = res.items[0];

  if (!post) {
    notFound(); // 404 pagina
  }

  const { title, body } = post.fields;

  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
}
