import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
      className="mb-16 pageInfo-container"
    >
      <h1>Introduction</h1>
      <p>
        With over 11 years of experience as a full-stack web developer, I am
        well-versed in various technologies and frameworks used to build modern,
        dynamic, and secure web applications for clients. My passion for
        programming started at a young age, and I have honed my skills through
        various experiences in the industry.
      </p>
      <h1>Experience</h1>
      <p>
        I have worked on a variety of web applications using the MERN, MEAN, and
        LAMP stack. At Silton Information Software Inc, I primarily used React,
        NextJS, and TypeScript to build web applications using the MERN stack
        while ensuring strict security measures. My responsibilities included
        managing DNS, email, FTP, shell accounts, databases, security, and site
        backups. At LASO Concepts, I gained expertise in AngularJS, RESTful
        APIs, Express, and MongoDB, and used them to prototype full-stack
        features and enforce authentication and authorization.
      </p>
      <h1>Hobbies</h1>
      <p>
        When I&apos;m not programming, I enjoy a range of hobbies such as
        weightlifting, cycling, playing guitar and piano, traveling, reading,
        and building computers and muscle cars.
      </p>
      <h1>Conclusion</h1>
      <p>
        I thrive on challenging projects that require creativity and critical
        thinking. My extensive experience and skills in a wide variety of
        frameworks, libraries, and tools enable me to take on any project with
        the willpower and dedication to see it through to completion.
      </p>
    </motion.div>
  );
}

export default About;
