import Head from "next/head";

const Seo = ({ pageTitle, pageImage }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || TrucksData - Find the best truck for you.`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        property="og:image"
        content={
          pageImage
            ? pageImage
            : "https://splendid-mousse-ae3e0e.netlify.app/img/truck-dummy/truck-white.jpg"
        }
      />

      <meta
        property="og:title"
        content="TrucksData - Find the best truck for you."
      />

      <meta
        property="og:description"
        content={
          pageTitle
            ? pageTitle
            : "Search Filter Compare and find the best truck of your deed"
        }
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta
        property="twitter:image"
        content={
          pageImage
            ? pageImage
            : "https://splendid-mousse-ae3e0e.netlify.app/img/truck-dummy/truck-white.jpg"
        }
      />

      <meta
        property="twitter:title"
        content="TrucksData - Find the best truck for you."
      />

      <meta
        property="twitter:description"
        content={
          pageTitle
            ? pageTitle
            : "Search Filter Compare and find the best truck of your deed"
        }
      />

      <meta property="twitter:image:width" content="1200" />

      <meta property="twitter:image:height" content="630" />
    </Head>
  </>
);

export default Seo;
