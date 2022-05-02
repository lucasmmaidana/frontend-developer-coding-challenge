import type { NextPage } from "next";
import Head from "next/head";
import AerolabLogo from "components/AerolabLogo";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Aerolab Tech Zone</title>
        <meta
          name="description"
          content="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="max-w-page mx-auto px-5 py-11 desktop:py-10">
        <AerolabLogo />
      </header>
      <main className=""></main>
      <footer className=""></footer>
    </div>
  );
};

export default Home;
