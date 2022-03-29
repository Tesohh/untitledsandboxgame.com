import type { NextPage } from "next";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialsPlug: NextPage = () => {
  return (
    <div className="flex flex-row items-center text-2xl ml-12">
      <a href={"example.com"} className="hover:text-purple-400 mx-1">
        <FaInstagram />
      </a>
      <a href={"example.com"} className="hover:text-blue-400 mx-1">
        <FaTwitter />
      </a>
      <a href={"example.com"} className="hover:text-red-700 mx-1">
        <FaYoutube />
      </a>
      {/* <Image src="/lesser-capybara.png" width={100} height={70} /> */}
    </div>
  );
};
export default SocialsPlug;
