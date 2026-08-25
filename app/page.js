import { getPosts, paginate } from '../src/lib/content';
import Feed from '../src/components/Feed';
import Page from '../src/components/Page';
import Pagination from '../src/components/Pagination';

export default function HomePage() {
  const page = paginate(getPosts());
  return <Page><Feed edges={page.posts.map((node) => ({ node }))} /><Pagination {...page} basePath="/" /></Page>;
}
