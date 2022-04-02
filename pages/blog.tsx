import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import BlogPostExcerpt from "../components/BlogPostExcerpt";
import { getAllPosts, Post } from "../scripts/blog";

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  // const posts = getStaticProps();
  return (
    <div>
      <Head>
        <title>Il giuoco pazzissimo - Blog</title>
        <meta name="description" content="Incrodibile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage="blog" />
      <ul>
        {posts.map((post: Post) => (
          <BlogPostExcerpt post={post} />
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 9);
  // .map((post) => post.meta);

  return { props: { posts } };
}

export default Blog;
