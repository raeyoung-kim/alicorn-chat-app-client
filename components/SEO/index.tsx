import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  ogURL?: string;
  ogIMG?: string;
}

const SEO: React.FC<Props> = ({ title, description, ogURL, ogIMG }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="PFrws9hNHb9EI3KmFUsFQux8ur91nSaTf_2pvLdwzlA"
        />
        <meta
          name="naver-site-verification"
          content="57b7d9522d5f831e7eb4b22085954a63e6237179"
        />
        <meta
          name="keywords"
          content="명품,페칭,fetching,해외직구,구매대행,메종마르지엘라,파페치,정품쇼핑몰,아크네스튜디오,메종키츠네,이자벨마랑,24s,matchesfashion,theoutnet"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={ogURL} />
        <meta property="og:image" content={ogIMG} />
      </Head>
    </div>
  );
};

export default SEO;
