import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Il giuoco pazzissimo - Blog</title>
        <meta name="description" content="Incrodibile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage="blog" />
    </div>
  );
};

export default Blog;
