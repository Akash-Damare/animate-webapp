import Head from "next/head";
import AnimeFeed from "../components/AnimeFeed";
import Header from "../components/Header";

export default function Home({ animes }) {
  return (
    <div className="container p-4 mx-auto bg-an_theme  text-an_theme-light ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <AnimeFeed animes={animes} />
      </main>
    </div>
  );
}

// getting popular anime data making index.js static

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const animes = await fetch(
    "https://api.jikan.moe/v3/top/anime/1/bypopularity"
  )
    .then((res) => res.json())
    .then((res) => res.top);

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      animes,
    },
  };
}
