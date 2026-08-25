import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  currentPage = 0,
  hasNextPage,
  hasPrevPage,
  basePath = '/'
}) => {
  const pagePath = (page) => page === 0 ? basePath : `${basePath === '/' ? '' : basePath}/page/${page}/`;
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" href={pagePath(Math.max(0, currentPage - 1))} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" href={pagePath(currentPage + 1)} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
