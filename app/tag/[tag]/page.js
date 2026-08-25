import { notFound } from 'next/navigation';
import { getTags } from '../../../src/lib/content';
import Feed from '../../../src/components/Feed';
import Page from '../../../src/components/Page';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTags().map((tag) => ({ tag: tag.slug }));
}

export default async function TagPage({ params }) {
  const { tag: tagSlug } = await params;
  const tag = getTags().find((item) => item.slug === tagSlug);
  if (!tag) notFound();
  return <Page title={tag.name}><Feed edges={tag.posts.map((node) => ({ node }))} /></Page>;
}
