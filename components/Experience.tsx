import React from "react";
import { motion } from "framer-motion";

function Experience() {
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
      <h1>💼 Experience</h1>
      <p>Previous Work</p>
      
      <div className="exp-container">
        <div className="exp-haxor-link">
          IT Engineer @ Les Olson IT
        </div>
        <ul className="">
          <li>
            <p>
              - Managed and architected enterprise-level IT infrastructure, focusing on network administration, server management, and systems optimization. Leveraged technical expertise to ensure seamless operations across the organization.
            </p>
          </li>
          <li>
            <p>
              - Implemented robust security measures and infrastructure solutions, utilizing deep understanding of enterprise systems architecture to deliver scalable and reliable IT services.
            </p>
          </li>
          <li>
            <p>
              - Collaborated with cross-functional teams to bridge the gap between development and operations, ensuring optimal performance and integration across the full technology stack.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>Windows Server</div>
          <div>Active Directory</div>
          <div>System Administration</div>
          <div>Network Administration</div>
          <div>VMware</div>
          <div>Proxmox</div>
          <div>Linux</div>
          <div>PowerShell</div>
          <div>Security & Compliance</div>
          <div>Enterprise Infrastructure</div>
          <div>Backup Solutions</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Systems Administrator @ GM Tax Services
        </div>
        <ul className="">
          <li>
            <p>
              - Managed enterprise infrastructure including server environments, databases, and IT operations. Ensured high availability and reliability of mission-critical systems supporting business operations.
            </p>
          </li>
          <li>
            <p>
              - Administered user accounts, security policies, and system backups. Implemented best practices for system maintenance, monitoring, and disaster recovery procedures.
            </p>
          </li>
          <li>
            <p>
              - Provided technical support and troubleshooting for complex infrastructure issues, minimizing downtime and ensuring business continuity.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>Windows Server</div>
          <div>Active Directory</div>
          <div>System Administration</div>
          <div>Database Management</div>
          <div>Linux</div>
          <div>PowerShell</div>
          <div>Network Configuration</div>
          <div>Backup & Recovery</div>
          <div>Security Management</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Software Engineer @ Go Viral Enterprises
        </div>
        <ul className="">
          <li>
            <p>
              - Developed and maintained full-stack web applications using modern frameworks and technologies. Collaborated with development teams to deliver high-quality software solutions.
            </p>
          </li>
          <li>
            <p>
              - Implemented scalable architecture patterns and best practices for code quality, testing, and deployment. Contributed to continuous improvement of development processes.
            </p>
          </li>
          <li>
            <p>
              - Worked closely with stakeholders to gather requirements, design solutions, and deliver features that met business objectives within specified timelines.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>JavaScript</div>
          <div>ReactJS</div>
          <div>NodeJS</div>
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>Git</div>
          <div>REST APIs</div>
          <div>Agile Methodology</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Full-Stack Web Developer @ Silton Information Software Inc
        </div>
        <ul className="">
          <li>
            <p>
              - Architected and implemented dynamic and modern web applications
              with robust security measures, using cutting-edge MERN and MEAN
              stacks. Employed industry-standard practices to ensure maximum
              scalability, reliability, and maintainability.
            </p>
          </li>
          <li>
            <p>
              - Leveraged React, Next.js, and TypeScript to develop highly
              performant web applications with optimal user experiences.
              Employed a variety of libraries and frameworks to streamline
              development workflows and enhance application functionality.
            </p>
          </li>
          <li>
            <p>
              - Managed DNS, email, FTP, shell accounts, databases, security,
              and site backups, ensuring a highly secure and stable
              infrastructure for mission-critical applications.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>ReactJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
          <div>TailwindCSS</div>
          <div>MaterialUI</div>
          <div>DaisyUI</div>
          <div>TypeScript</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Freelance Web Developer & Corporate Services
        </div>
        <ul className="">
          <li>
            <p>
              - Developed custom websites and web applications for diverse
              clients, employing a broad range of technologies and frameworks.
              Delivered high-quality work within tight deadlines, ensuring
              client satisfaction and repeat business.
            </p>
          </li>
          <li>
            <p>
              - Created compelling graphic designs, logos, flyers, banners, and
              business cards using industry-leading Adobe Photoshop and
              Illustrator tools. Transformed client visions into visually
              stunning and highly effective designs.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>ReactJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
          <div>TailwindCSS</div>
          <div>DaisyUI</div>
          <div>MaterialUI</div>
          <div>PHP</div>
          <div>MySql</div>
          <div>Firebase</div>
          <div>Docker</div>
          <div>Kubernetes</div>
          <div>Proxmox</div>
          <div>Ubiquiti/Unifi Networking</div>
          <div>Adobe Master Collection</div>
          <div>Linux</div>
          <div>Powershell</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Full-Stack Developer @ LASO Concepts
        </div>
        <ul className="">
          <li>
            <p>
              - Architected and developed a diverse range of full-stack
              features, leveraging AngularJS components and UI Router, RESTful
              APIs, Express, and MongoDB. Employed rapid prototyping techniques
              to rapidly iterate and refine software designs.
            </p>
          </li>
          <li>
            <p>
              - Demonstrated expert knowledge of Express routing stacks,
              skillfully enforcing best practices for authentication, model
              validation, and authorization.
            </p>
          </li>
          <li>
            <p>
              - Leveraged MongoDB aggregation pipelines to perform sophisticated
              joins and aggregations across multiple collections, reducing
              server round-trips and optimizing application performance.
            </p>
          </li>
          <li>
            <p>
              - Committed to upholding rigorous team and industry standards for
              API design, ES6 coding style, CSS selector conventions, promise
              handling, and security. Actively participated in daily stand-ups,
              weekly client demonstrations and feedback meetings, strict peer
              code review process, technical presentations to development team,
              and technical and product ideation to drive continuous improvement
              of the software development process.
            </p>
          </li>
          <li>
            <p>
              - Acted as a valuable team member, skillfully collaborating with
              peers and stakeholders to achieve shared goals.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>AWS</div>
          <div>Git</div>
          <div>Heroku</div>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-haxor-link">
          Full-Stack Developer @ Automobility LA Hackathon
        </div>
        <ul className="">
          <li>
            <p>
              - Conceived and developed an innovative solution for the traffic
              and mobility problems that arise during global events. The
              solution involved the creation of &quot;Hubs&quot; on the
              outskirts of the city, reducing traffic and improving overall
              mobility.
            </p>
          </li>
          <li>
            <p>
              - Demonstrated expert knowledge of the SmartCar API developed by
              Honda Innovations, skillfully integrating it into a full-stack
              application to accept payments, provide real-time visualizations
              of public transport vehicles, enable admins to create
              &quot;Hubs,&quot; and manage vehicle accessibility. Leveraged
              cutting-edge development techniques to meet a strict 24-hour
              deadline, effectively dividing and conquering tasks and conducting
              regular meetings to ensure timely progress.
            </p>
          </li>
          <li>
            <p>
              - Acted as a critical team member, skillfully collaborating to
              deliver high-quality, effective solutions in a fast-paced, dynamic
              environment.
            </p>
          </li>
        </ul>
        <span className="flex-1 skills-label">Skills Mastered:</span>
        <div className="flex flex-row badge-items">
          <div>MongoDB</div>
          <div>ExpressJS</div>
          <div>AngularJS</div>
          <div>NodeJS</div>
          <div>Bootstrap</div>
          <div>Git</div>
          <div>Heroku</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;