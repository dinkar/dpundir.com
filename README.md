<h4 align="center">
  My personal blog based on <a href="https://github.com/alxshelepenok/gatsby-starter-lumen" target="_blank">Lumen</a> - a minimal, lightweight and mobile-first starter for creating blogs that uses <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>

## Access Locally
```
$ git clone https://github.com/dinkar/dpundir.com.git
$ cd dpundir.com
$ yarn
$ yarn develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ yarn build
$ yarn serve
```

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```