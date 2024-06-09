import logo from "../assets/AH.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shaikabdulhameed",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        />
        <FaGithub
          onClick={() =>
            window.open("https://www.github.com/abdulhameedsk", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
        <SiLeetcode
          onClick={() =>
            window.open("https://leetcode.com/SHAIKABDULHAMEED", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
        <FaSquareXTwitter
          onClick={() =>
            window.open("https://twitter.com/CodeAce_Abdul", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
