import React from "react";
import { motion } from "framer-motion";
import AnimatedRegLink from "./AnimatedLink";

function Projects() {
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
      <h1>💻 Projects</h1>
      <p className="p-2">
        Here&apos;s an overview of technical projects I&apos;ve architected and developed throughout my career, spanning full-stack development, IT infrastructure automation, and IoT systems integration.
      </p>

      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="#" text="Home Automation & IoT Integration System" />
        </div>

        <p className="p-2">
Architected and implemented a comprehensive home automation ecosystem on homelab infrastructure using Home Assistant, integrating Zigbee, Z-Wave, and Matter protocols into a unified smart home platform. Engineered custom climate control algorithms utilizing self-designed and hand-soldered sensor networks built with ESP32 and ESP8266 microcontrollers and BME280 environmental sensors, strategically positioned to monitor temperature gradients throughout the home. The system performs multi-zone temperature analysis to intelligently regulate HVAC operations, determining optimal activation of circulation fans, heating, or cooling systems. Additionally, designed and soldered custom RGBW lighting control circuits featuring ESP32 microcontrollers with logic level shifters, capacitor-based circuit protection, hot-swap design, and relay-controlled 24V LED strips running WLED firmware. The entire ecosystem is orchestrated through extensive YAML configurations, custom add-ons, and proprietary automation algorithms.        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>Home Assistant</div>
          <div>ESP32/ESP8266</div>
          <div>IoT Protocols</div>
          <div>Zigbee</div>
          <div>Z-Wave</div>
          <div>Matter</div>
          <div>Circuit Design</div>
          <div>Soldering</div>
          <div>BME280 Sensors</div>
          <div>WLED</div>
          <div>YAML</div>
          <div>Python Automation</div>
          <div>Embedded Systems</div>
          <div>Custom Algorithms</div>
          <div>Homelab Infrastructure</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="#" text="Automated Server Diagnostic & Recovery System" />
        </div>

        <p className="p-2">
          Engineered a comprehensive automated diagnostics and recovery utility for enterprise server environments at Les Olson IT. This PowerShell-based system automatically triggers following hard resets, power failures, or system crashes, performing intelligent diagnostics including disk integrity checks, corruption scans and repairs, DISM operations, and event log analysis. The system features a real-time HTML dashboard that provides live status updates, issue identification, repair progress, and clearly identifies when manual intervention is required. This automation significantly reduced server recovery time and provided IT teams with instant visibility into system health and remediation status.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>PowerShell</div>
          <div>.NET</div>
          <div>Windows Server</div>
          <div>DISM</div>
          <div>Event Log Analysis</div>
          <div>HTML/JavaScript</div>
          <div>System Automation</div>
          <div>Diagnostics</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="#" text="Enterprise Backup Automation System" />
        </div>

        <p className="p-2">
          Developed a sophisticated backup automation solution at Les Olson IT utilizing PowerShell and .NET to handle complex enterprise backup operations. The system intelligently manages multi-location file backup workflows, implements date-based file renaming conventions, performs advanced compression operations, and orchestrates backup procedures across numerous folders and network locations. This solution was tailored to meet specific enterprise requirements where standard backup solutions fell short, ensuring critical data protection across distributed systems while maintaining organized archive structures for easy recovery.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>PowerShell</div>
          <div>.NET</div>
          <div>File System Automation</div>
          <div>Data Compression</div>
          <div>Network Storage</div>
          <div>Backup Strategies</div>
          <div>Scripting</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="#" text="Harout.io" />
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
        <div className="">
          <AnimatedRegLink href="#" text="AstroCalc" />
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
        <div className="">
          <AnimatedRegLink href="#" text="GM Tax Services Enterprise Platform" />
        </div>

        <p className="p-2">
          GM Tax Services&apos; enterprise web application was expertly
          crafted using the MEAN (MongoDB, Express, AngularJS, and Node.js)
          stack, incorporating advanced features to streamline client data management for taxation and corporate services. As both a developer and later systems administrator at GM Tax Services, I architected multi-user authentication, automation for SMS messaging and PDF generation, and a comprehensive admin area for effective client data management. The platform&apos;s security measures feature end-to-end encryption and optimized endpoints, ensuring clients&apos; sensitive information remains fully secured. This project exemplifies my ability to understand systems from both development and infrastructure perspectives.
        </p>
        <span className="flex-1 skills-label">Skills Used:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
          <div>Enterprise Infrastructure</div>
          <div>System Administration</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="">
          <AnimatedRegLink href="#" text="Laso Concepts Platform" />
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

export default Projects;