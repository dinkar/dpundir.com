import { notFound } from 'next/navigation';
import { getCategories } from '../../../src/lib/content';
import Feed from '../../../src/components/Feed';
import Page from '../../../src/components/Page';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategories().find((item) => item.slug === categorySlug);
  if (!category) notFound();
  return <Page title={category.name}><Feed edges={category.posts.map((node) => ({ node }))} /></Page>;
}
