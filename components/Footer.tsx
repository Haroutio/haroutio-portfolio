import React from "react";
import AnimatedLink from "./AnimatedNewTabLink";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-lg mx-auto mt-10 text-center">
      <p className="text-sm text-primary font-fira">
        &copy; Harout Terterian, {currentYear}.
      </p>
      <p className="m-0 p-0 mb-5 text-[12px] font-fira leading-none">
        Built with <AnimatedLink text="Next JS" href="https://nextjs.org/" />
      </p>
    </div>
  );
}

export default Footer;
