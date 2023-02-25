import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
  const [previousGreetingIndex, setPreviousGreetingIndex] = useState<
    number | null
  >(null);
  const greetings = [
    "👋",
    "Hello",
    "Hi",
    "Hey",
    "How you doin'",
    "Greetings",
    "Barev",
  ];
  const router = useRouter();
  useEffect(() => {
    let randomIndex = 0;

    if (previousGreetingIndex !== null) {
      randomIndex = generateRandomIndex();
    }

    setGreetingIndex(randomIndex);
    setPreviousGreetingIndex(randomIndex);

    // Clean up the effect
    return () => {};
  }, [router.asPath]);

  const generateRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * greetings.length);
    while (randomIndex === previousGreetingIndex) {
      randomIndex = Math.floor(Math.random() * greetings.length);
    }
    return randomIndex;
  };

  // Update the greeting index and the previous greeting index when the component updates
  useEffect(() => {
    setPreviousGreetingIndex(greetingIndex);
    setGreetingIndex(generateRandomIndex());
  }, [greetingIndex]);

  const [banner1, helperBanner1] = useTypewriter({
    words: [`I'm Harout Terterian`],
    loop: 1,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 3000,
  });
  const [banner2] = useTypewriter({
    words: [`Software Engineer`],
    loop: 1,
    typeSpeed: 77,
    deleteSpeed: 50,
  });

  const modifyGreeting = () => {
    let greetings = ["👋", "Hi", "Hello", "Bonjour", "Barev"];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  return (
    <>
      <div className="flex flex-col w-48 mx-auto sm:mx-0">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="mx-auto avatar"
        >
          <div className="w-48 mb-5 rounded-full ring ring-primary-focus">
            <img alt="Harout Terterian" src="/untitled-1.jpg" />
          </div>
        </motion.div>
      </div>
      <div className="">
        <h1 className="mb-5 text-2xl text-center sm:text-left">
          <span className="text-[#0AAE2E]">
            {greetings[greetingIndex]}
            {greetingIndex === 0 ? "" : ","}
            <br />
            {banner1}
          </span>
          <span className="text-neon">
            <Cursor
              cursorColor="#CB9E4C"
              cursorStyle={helperBanner1.isDone ? "" : "_"}
            ></Cursor>
          </span>
        </h1>
        <h2 className="mb-5 text-center sm:text-left">
          <span className="text-neon font-fira">
            {banner2}
            <Cursor cursorStyle="_"></Cursor>
          </span>
        </h2>
      </div>
    </>
  );
}

export default Hero;
