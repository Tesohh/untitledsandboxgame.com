import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "pages/posts");

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      excerpt: data.excerpt ?? "Excerpt missing...", //?? content.slice(0, 100) + (content.length > 100 ? "..." : ""),
      slug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);
  return paths.map((path) => {
    const parts = path.split("/");
    return parts[parts.length - 1].replace(".mdx", "");
  });
};

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export interface Post {
  content: string;
  meta: PostMeta;
}

export const getAllPosts = () => {
  return getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      else if (a.meta.date < b.meta.date) return -1;
      else return 0;
    })
    .reverse();
};
