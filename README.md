# dpundir.com

Personal blog of Dinkar Pundir, migrated from Gatsby to Next.js.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

For a production build:

```sh
npm run build
npm run start
```

## Structure

- `content/posts` and `content/pages` contain Markdown content.
- `src/lib/content.js` reads frontmatter and converts Markdown to HTML.
- `app` contains Next.js App Router routes for posts, pages, tags, categories, and pagination.
- `src/components` contains the blog presentation components and SCSS modules.
- `static/admin/config.yml` remains the Netlify CMS content configuration.

Deployment is configured for Netlify in `netlify.toml` and uses Node 22.
