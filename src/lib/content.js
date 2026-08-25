import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentRoot = path.join(process.cwd(), 'content');

const readMarkdown = (directory, fileName) => {
  const fullPath = path.join(contentRoot, directory, fileName);
  const source = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(source);
  const rawSlug = parsed.data.slug || fileName.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}---/, '');
  const slug = rawSlug.startsWith('/') ? rawSlug : `/${directory}/${rawSlug}`;

  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;

  return {
    ...parsed.data,
    slug: normalizedSlug.endsWith('/') ? normalizedSlug : `${normalizedSlug}/`,
    html: marked.parse(parsed.content),
  };
};

const filesIn = (directory) => fs.readdirSync(path.join(contentRoot, directory)).filter((file) => file.endsWith('.md'));

export const getPosts = () => filesIn('posts')
  .map((file) => readMarkdown('posts', file))
  .filter((post) => post.template === 'post' && post.draft !== true)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPages = () => filesIn('pages')
  .map((file) => readMarkdown('pages', file))
  .filter((page) => page.template === 'page' && page.draft !== true);

export const findPost = (slug) => getPosts().find((post) => post.slug === `/posts/${slug.join('/')}/` || post.slug === `/posts/${slug.join('/')}`);
export const findPage = (slug) => getPages().find((page) => page.slug === `/pages/${slug}/` || page.slug === `/${slug}/` || page.slug === `/${slug}`);

export const kebabCase = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const postsPerPage = 4;

export const getTags = () => [...new Set(getPosts().flatMap((post) => post.tags || []))]
  .sort()
  .map((tag) => ({ name: tag, slug: kebabCase(tag), posts: getPosts().filter((post) => (post.tags || []).includes(tag)) }));

export const getCategories = () => [...new Set(getPosts().map((post) => post.category).filter(Boolean))]
  .sort()
  .map((category) => ({ name: category, slug: kebabCase(category), posts: getPosts().filter((post) => post.category === category) }));

export const paginate = (posts, page = 0) => {
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const currentPage = Math.min(Math.max(Number(page) || 0, 0), totalPages - 1);
  return {
    posts: posts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage),
    currentPage,
    totalPages,
    hasPrevPage: currentPage > 0,
    hasNextPage: currentPage < totalPages - 1,
  };
};
