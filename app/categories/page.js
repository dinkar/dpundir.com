import Link from 'next/link';
import Page from '../../src/components/Page';
import { getCategories } from '../../src/lib/content';

export default function CategoriesPage() {
  return <Page title="Categories"><ul>{getCategories().map((category) => <li key={category.slug}><Link href={`/category/${category.slug}/`}>{category.name} ({category.posts.length})</Link></li>)}</ul></Page>;
}
