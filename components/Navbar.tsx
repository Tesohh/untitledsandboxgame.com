import type { NextPage } from "next";
import NavEntry from "./NavEntry";
import SocialsPlug from "./SocialsPlug";

interface Props {
  currentPage: string;
}

const Navbar: NextPage<Props> = (props) => {
  const { currentPage } = props;

  return (
    <div className="shadow-lg flex flex-row justify-center w-full">
      {/* <Image src="/lesser-capybara.png" width={100} height={70} /> */}
      <NavEntry title="home" link="/" current={currentPage == "home"} />
      <NavEntry title="about" link="/about" current={currentPage == "about"} />
      <NavEntry title="blog" link="/blog" current={currentPage == "blog"} />
      <NavEntry title="wiki" link="" current={currentPage == "wiki"} />
      <SocialsPlug />
    </div>
  );
};
export default Navbar;
