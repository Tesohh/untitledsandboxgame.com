import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Il giuoco pazzissimo</title>
        <meta name="description" content="Incrodibile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage="home" />
    </div>
  );
};

export default Home;
