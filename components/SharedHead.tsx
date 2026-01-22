import Head from "next/head";

export const SharedHead = (props: { title: string; description?: string }) => {
  const defaultDescription = "Software engineer, digital creator, and curious optimist specializing in mobile development, creative coding, and generative art.";
  const description = props.description || defaultDescription;

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦊</text></svg>"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
