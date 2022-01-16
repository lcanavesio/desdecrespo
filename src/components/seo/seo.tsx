import React from 'react';

type Props = {
  title: string
  description: string
  image: string
  article: string
}

const SEO = (props: Props) => {
  let url = null;
  const {title, description, image, article} = props;
  if (typeof window !== 'undefined') {
    url = `${location.pathname}`;
  }

  return (
    <>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
};
export default SEO;
