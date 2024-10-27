import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700&display=swap" rel="stylesheet" />
        <script
          data-goatcounter="https://justinpoliachik.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <link rel="preload" href="/images/profilepic-fox.jpg" as="image" type="image/jpeg" />
      </Head>
      <body className="text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
