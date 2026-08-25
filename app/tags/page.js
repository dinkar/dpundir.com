import Link from 'next/link';
import Page from '../../src/components/Page';
import { getTags } from '../../src/lib/content';

export default function TagsPage() {
  return <Page title="Tags"><ul>{getTags().map((tag) => <li key={tag.slug}><Link href={`/tag/${tag.slug}/`}>{tag.name} ({tag.posts.length})</Link></li>)}</ul></Page>;
}
