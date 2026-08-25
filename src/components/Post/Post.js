import React from 'react';
import Link from 'next/link';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post;

  const { html, slug } = post;
  const tagSlugs = (tags || []).map((tag) => `/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`);

  return (
    <div className={`${styles['post']} post-page`}>
      <Link className={styles['post__home-button']} href="/">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={title} />
      </div>
    </div>
  );
};

export default Post;
