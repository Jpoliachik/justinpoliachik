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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Justin Poliachik",
              "url": "https://justinpoliachik.com",
              "sameAs": [
                "https://github.com/Jpoliachik",
                "https://linkedin.com/in/justinpoliachik"
              ],
              "jobTitle": "Software Engineer",
              "description": "Software engineer, digital creator, and curious optimist specializing in mobile development, creative coding, and generative art.",
              "knowsAbout": [
                "Mobile Development",
                "React Native",
                "Creative Coding",
                "Generative Art",
                "JavaScript",
                "TypeScript",
                "iOS Development",
                "Android Development"
              ]
            })
          }}
        />
      </Head>
      <body className="text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
