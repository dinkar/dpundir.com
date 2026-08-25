import React from 'react';
import Sidebar from './Sidebar';
import styles from './Layout/Layout.module.scss';

const SiteLayout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    {children}
  </div>
);

export default SiteLayout;
