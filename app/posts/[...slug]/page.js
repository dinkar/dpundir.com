import { notFound } from 'next/navigation';
import { findPost, getPosts } from '../../../src/lib/content';
import Post from '../../../src/components/Post';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug.replace(/^\/posts\//, '').replace(/\/$/, '').split('/') }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  return <Post post={post} />;
}
