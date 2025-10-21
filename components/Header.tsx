import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import { FiSun, FiMoon } from "react-icons/fi";

type HeaderProps = {
  handlePageChange: (componentName: string) => void;
};

function Header({ handlePageChange }: HeaderProps) {
  const handlePageChangeClicked = (pathname: string) => {
    const componentName = pathname.replace("/", "");
    handlePageChange(componentName);
  };
  const [theme, setTheme] = useState("luxury");
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "light" : "luxury");
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html !== null) {
      html.setAttribute("data-theme", theme);
    }
  }, [theme]);
  return (
    <header className="sticky z-20 flex items-start justify-between mx-auto mb-10 overflow-hidden max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center space-x-4"
      >
        <Link
          href="harout-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImProfile className="w-6 h-6" />
        </Link>
        <Link href="/?page=contact#contact">
          <FaEnvelope className="w-6 h-6" />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row cursor-pointer"
      >
        <label className="swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
          <FiSun className="top-0 right-0 swap-off w-7 h-7" />
          <FiMoon className="top-0 right-0 swap-on w-7 h-7" />
        </label>
      </motion.div>
    </header>
  );
}

export default Header;
