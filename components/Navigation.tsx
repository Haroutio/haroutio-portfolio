import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

type NavigationProps = {
  handlePageChange: (componentName: string) => void;
};

function Navigation({ handlePageChange }: NavigationProps) {
  const handlePageChangeClicked = (pathname: string) => {
    const componentName = pathname.replace("/", "");
    handlePageChange(componentName);
  };

  return (
    <motion.div
      initial={{
        x: -3000,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 1.5,
      }}
      className="flex flex-row justify-center mx-0 mb-5 space-x-3 justify sm:justify-start sm:ml-0 font-fira"
    >
      <div>
        <AnimatedLink
          text="ABOUT"
          handleLinkClick={() => handlePageChangeClicked("/")}
          href="/"
        />
        <AnimatedLink
          text="CODE"
          handleLinkClick={() => handlePageChangeClicked("/code")}
          href="/?page=code"
        />
        <AnimatedLink
          text="EXPERIENCE"
          handleLinkClick={() => handlePageChangeClicked("/exp")}
          href="/?page=exp"
        />
        <AnimatedLink
          text="SKILLS"
          handleLinkClick={() => handlePageChangeClicked("/skills")}
          href="/?page=skills"
        />
      </div>
    </motion.div>
  );
}

export default Navigation;
