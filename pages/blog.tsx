import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { getAllPosts, PostMeta } from "../scripts/blog";

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

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: {} };
}
