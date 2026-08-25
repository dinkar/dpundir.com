import { notFound } from 'next/navigation';
import { getTags, paginate } from '../../../../src/lib/content';
import Feed from '../../../../src/components/Feed';
import Page from '../../../../src/components/Page';
import Pagination from '../../../../src/components/Pagination';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTags().flatMap((tag) => Array.from({ length: Math.max(1, Math.ceil(tag.posts.length / 4)) }, (_, index) => ({ tag: tag.slug, page: index ? [String(index)] : undefined })));
}

export default async function TagPage({ params }) {
  const { tag: tagSlug, page: pageParts } = await params;
  const tag = getTags().find((item) => item.slug === tagSlug);
  if (!tag) notFound();
  const page = paginate(tag.posts, pageParts?.[0] || 0);
  if (pageParts && Number(pageParts[0]) !== page.currentPage) notFound();
  return <Page title={tag.name}><Feed edges={page.posts.map((node) => ({ node }))} /><Pagination {...page} basePath={`/tag/${tag.slug}`} /></Page>;
}
