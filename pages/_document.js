import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="TrucksData - Search for your trucks"
        />
        {/* <!-- Google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content="trucks tippers trailers three-wheelers "
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
