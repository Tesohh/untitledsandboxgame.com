import type { NextPage } from "next";
import type { Post } from "../scripts/blog";
import Image from "next/image";
interface Props {
  post: Post;
}

const BlogPostExcerpt: NextPage<Props> = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <li>
      <div className="container px-2 mx-auto border-black ">
        {/* <a href={"posts/" + post.meta.slug}> */}
        <h1>{post.meta.title}</h1>
        <p>{post.content}</p>
        {/* </a> */}
      </div>
    </li>
  );
};
export default BlogPostExcerpt;
