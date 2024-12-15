import logo from "../assets/BugBuster_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img 
          src={logo} 
          alt="Logo_BUG_BUSTER" 
          className="w-17 h-10 " 
        />
      </div>
      <div className="m-8 flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/in/belal-sabbaq/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://github.com/Belal-Sabbaq" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-500"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
