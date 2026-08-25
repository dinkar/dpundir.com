import React from 'react';
import { getContactHref } from '../../../utils';
import siteConfig from '../../../lib/site';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export const Author = (props) => <PureAuthor {...props} data={{ site: { siteMetadata: siteConfig } }} />;

export default Author;
