import type { NextPage } from "next";

interface Props {
  link: string;
  title: string;
  current?: boolean;
}

const NavEntry: NextPage<Props> = (props) => {
  const { link, title, current } = props;

  return (
    <a
      href={link}
      className={
        (current ? "text-blue-600 font-bold" : "") +
        " uppercase text-xl py-5 px-5 hover:text-blue-500"
      }
    >
      {title}
    </a>
  );
};
export default NavEntry;
