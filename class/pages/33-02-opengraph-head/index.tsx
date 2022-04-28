import Head from "next/head";

export default function OpenGraphPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="my site" />
        <meta property="og:description" content="welcome to my site" />
        <meta
          property="og:image"
          content="https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg"
        />
      </Head>
      <h1>OpenGraphPage</h1>
    </div>
  );
}
