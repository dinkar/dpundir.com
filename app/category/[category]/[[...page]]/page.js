import { notFound } from 'next/navigation';
import { getCategories, paginate } from '../../../../src/lib/content';
import Feed from '../../../../src/components/Feed';
import Page from '../../../../src/components/Page';
import Pagination from '../../../../src/components/Pagination';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().flatMap((category) => Array.from({ length: Math.max(1, Math.ceil(category.posts.length / 4)) }, (_, index) => ({ category: category.slug, page: index ? [String(index)] : undefined })));
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug, page: pageParts } = await params;
  const category = getCategories().find((item) => item.slug === categorySlug);
  if (!category) notFound();
  const page = paginate(category.posts, pageParts?.[0] || 0);
  if (pageParts && Number(pageParts[0]) !== page.currentPage) notFound();
  return <Page title={category.name}><Feed edges={page.posts.map((node) => ({ node }))} /><Pagination {...page} basePath={`/category/${category.slug}`} /></Page>;
}
