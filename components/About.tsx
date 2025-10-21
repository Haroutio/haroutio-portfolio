import React from "react";
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
Over the past 15 years, I&apos;ve built a career that spans the full technology spectrum. From crafting web applications as a full-stack developer to architecting enterprise IT infrastructure as a systems administrator and IT engineer. This diverse experience has given me a rare perspective: I understand both the software that runs on systems and the infrastructure that powers them. My technical foundation in modern frameworks and development practices now informs how I approach IT operations, enabling me to build robust, scalable solutions. Technology has been my passion since childhood, and that enthusiasm continues to drive my growth across every layer of the stack.      </p>
      <h1>Experience</h1>
      <p>
        My career began in full-stack web development, where I worked on a variety of web applications using the MERN, MEAN, and LAMP stack. At Silton Information Software Inc, I primarily used React, NextJS, and TypeScript to build web applications using the MERN stack while ensuring strict security measures. My responsibilities included managing DNS, email, FTP, shell accounts, databases, security, and site backups. At LASO Concepts, I gained expertise in AngularJS, RESTful APIs, Express, and MongoDB, and used them to prototype full-stack features and enforce authentication and authorization. I also worked as a software engineer at Go Viral Enterprises, further honing my development skills before transitioning into IT operations.
      </p>
      <p>
        Transitioning into IT operations, I served as a systems administrator at GM Tax Services, where I managed enterprise infrastructure, server environments, and IT operations. Most recently, I worked as an IT engineer at Les Olson IT, focusing on infrastructure management, systems and network administration, and enterprise-level systems architecture. My development background provides a distinct advantage in evaluating technical solutions, troubleshooting complex issues, and making strategic infrastructure decisions with deep technical insight.
      </p>
      <h1>Hobbies</h1>
      <p>
        When I&apos;m not working with technology, I enjoy a range of hobbies such as weightlifting, cycling, playing guitar and piano, traveling, reading, home automation and electronics, and building computers and muscle cars.
      </p>
      <h1>Conclusion</h1>
      <p>
        I thrive on challenging projects that require creativity and critical thinking. My comprehensive experience spanning full-stack development, systems administration, and IT engineering positions me to lead technology initiatives with both technical depth and strategic vision, ensuring seamless integration across the entire technology ecosystem.
      </p>
    </motion.div>
  );
}

export default About;