import { notFound } from 'next/navigation';
import { getPosts, paginate } from '../../../src/lib/content';
import Feed from '../../../src/components/Feed';
import Page from '../../../src/components/Page';
import Pagination from '../../../src/components/Pagination';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Array.from({ length: Math.max(0, Math.ceil(getPosts().length / 4) - 1) }, (_, index) => ({ page: [String(index + 1)] }));
}

export default async function PaginatedHomePage({ params }) {
  const { page: pageParts } = await params;
  const pageNumber = pageParts?.[0];
  const page = paginate(getPosts(), Number(pageNumber));
  if (!pageNumber || Number(pageNumber) < 1 || Number(pageNumber) !== page.currentPage) notFound();
  return <Page><Feed edges={page.posts.map((node) => ({ node }))} /><Pagination {...page} basePath="/" /></Page>;
}
