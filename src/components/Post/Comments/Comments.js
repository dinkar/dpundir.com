import React from 'react';
import Script from 'next/script';
import siteConfig from '../../../lib/site';

export const PureComments = ({ data, postTitle, postSlug }) => {
  const {
    url,
    disqusShortname
  } = data.site.siteMetadata;

  if (!disqusShortname) {
    return null;
  }

  return (
    <>
      <div id="disqus_thread" />
      <Script id="disqus-config" strategy="afterInteractive">
        {`var disqus_config = function () { this.page.url = '${url + postSlug}'; this.page.identifier = '${postTitle}'; };`}
      </Script>
      <Script src={`https://${disqusShortname}.disqus.com/embed.js`} strategy="afterInteractive" />
    </>
  );
};

export const Comments = (props) => <PureComments {...props} data={{ site: { siteMetadata: siteConfig } }} />;

export default Comments;
