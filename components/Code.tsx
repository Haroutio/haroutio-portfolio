import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedNewTabLink";
import AnimatedRegLink from "./AnimatedLink";
import { useRouter } from "next/router";

function Code() {
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
      className="pageInfo-container"
    >
      <h1>💻 Code</h1>
      <p className="p-2">
        Here&apos;s an overview of some projects I&apos;ve worked on.
      </p>
      <div className="exp-container">
        <div className="flex flex-row justify-between mb-5">
          <AnimatedLink href="https://harout.io" text="Harout.io" />
          <AnimatedLink
            href="https://github.com/Haroutio/haroutio-portfolio"
            text="GITHUB"
          />
        </div>

        <p className="p-2">
          This site! Welcome to my personal portfolio website, built with the
          latest and greatest tech stack of Next.js and TypeScript to deliver a
          truly innovative online experience. Originally, I designed the site to
          harness the power of Sanity as a headless CMS with excellent results,
          but ultimately opted for a more streamlined deployment approach for
          enhanced efficiency. As a passionate tech enthusiast, I love to
          constantly explore and experiment with the latest emerging
          technologies, which is why I periodically rebuild my portfolio from
          scratch to showcase my skills and stay ahead of the curve. I should
          note that while design was not my main focus for this project, I
          poured all of my efforts into the functionality, ensuring that this
          site is both intuitive and cutting-edge from a technical standpoint.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>NextJS</div>
          <div>ReactJS</div>
          <div>TailwindCSS</div>
          <div>DaisyUI</div>
          <div>Sanity</div>
          <div>Vercel</div>
        </div>
      </div>
      <div className="exp-container">
        <div className="flex flex-row justify-between mb-5">
          <AnimatedLink href="https://astrocalc.vercel.app" text="AstroCalc" />
          <AnimatedLink
            href="https://github.com/Haroutio/astrocalc"
            text="GITHUB"
          />
        </div>

        <p className="p-2">
          AstroCalc, a bespoke web application built with React, Tailwind CSS,
          and DaisyUI, is specifically tailored to perform astrological
          calculations with ease and accuracy. Given the challenge of sourcing
          reliable astrological formulas, often prone to inaccuracies or
          unscientific approaches, my client approached me to craft a
          cutting-edge solution that would provide accurate, sophisticated
          results. Leveraging the power of React and the streamlined, responsive
          design of Tailwind CSS and DaisyUI, AstroCalc&apos;s intuitive
          interface enables users to seamlessly perform complex calculations,
          making astrological analysis both accessible and reliable.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>NextJS</div>
          <div>ReactJS</div>
          <div>TailwindCSS</div>
          <div>DaisyUI</div>
          <div>Vercel</div>
        </div>
      </div>
      <div className="exp-container">
        <div className="flex flex-row justify-between mb-5">
          <AnimatedLink
            href="https://gmtaxservices.com/"
            text="GM Tax Services"
          />
        </div>

        <p className="p-2">
          GM Tax Services, Inc&apos;s cutting-edge web application was expertly
          crafted using the MEAN (MongoDB, Express, AngularJS, and Node.js)
          stack, and incorporates a range of advanced features to streamline
          client data management for taxation and corporate services. With
          multi-user authentication, automation for SMS messaging and PDF
          generation, and a comprehensive admin area, both employees and admins
          have access to a range of powerful tools to effectively manage client
          data. The site&apos;s state-of-the-art security measures are truly
          impressive, with end-to-end encryption of all data and optimized
          endpoints providing an added layer of protection. These advanced
          features ensure that GM Tax Services&apos; clients can rest easy
          knowing that their sensitive information is fully secured at all
          times.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
        </div>
      </div>
      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="/?page=code" text="Laso Concepts" />
        </div>

        <p className="p-2">
          Laso Concepts&apos; web application was built using the MEAN (MongoDB,
          Express, AngularJS, and Node.js) stack, featuring a range of advanced
          features including an admin dashboard, CMS, automated emails, and a
          messaging center. Rapid prototyping of full-stack features was made
          possible by the use of AngularJS components, UI Router, RESTful APIs,
          Express, and MongoDB. The express routing stacks were leveraged to
          cleanly enforce authentication, model validation, and authorization,
          while MongoDB aggregation pipelines enabled the denormalization of
          data from multiple collections to reduce server round-trips. The team
          adhered to industry standards in API design, ES6 coding style, CSS
          selector conventions, promise handling, and security.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Code;
