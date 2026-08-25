import { notFound } from 'next/navigation';
import { findPage, getPages } from '../../../src/lib/content';
import Page from '../../../src/components/Page';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPages().map((page) => ({ slug: page.slug.split('/').filter(Boolean).pop() }));
}

export default async function MarkdownPage({ params }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  return <Page title={page.title}><div dangerouslySetInnerHTML={{ __html: page.html }} /></Page>;
}
