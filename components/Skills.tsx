import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
function Skills() {
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
      <h1>💪 Skills</h1>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Programming Languages</div>
        <span className="skills-progress-label font-fira">
          JavaScript (ES6+)
        </span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">TypeScript</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">HTML</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">CSS/SASS</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">PHP</span>
        <ProgressBar percentage={65} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">
          Front-End Libraries & Frameworks
        </div>
        <span className="skills-progress-label font-fira">React</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Angular</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">jQuery</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">MaterialUI</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">TailwindCSS</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Framer Motion</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">DaisyUI</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">NextJS</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">ThreeJS</span>
        <ProgressBar percentage={50} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Back-End Libraries & Frameworks</div>
        <span className="skills-progress-label font-fira">NodeJS</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Express</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">NestJS</span>
        <ProgressBar percentage={70} />
        <span className="skills-progress-label font-fira">GraphQL</span>
        <ProgressBar percentage={65} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Testing and Quality Assurance</div>
        <span className="skills-progress-label font-fira">Jest</span>
        <ProgressBar percentage={60} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Databases</div>
        <span className="skills-progress-label font-fira">MongoDB</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">MySQL</span>
        <ProgressBar percentage={65} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Cloud Services</div>
        <span className="skills-progress-label font-fira">
          AWS (Amazon Web Services)
        </span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Azure</span>
        <ProgressBar percentage={45} />
        <span className="skills-progress-label font-fira">
          Google Cloud Platform
        </span>
        <ProgressBar percentage={35} />
        <span className="skills-progress-label font-fira">Firebase</span>
        <ProgressBar percentage={85} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Tools & Platforms</div>
        <span className="skills-progress-label font-fira">Git</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">GitHub</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Gulp</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Yarn</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Webpack</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Heroku</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Netlify</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Docker</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Twilio</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Electron</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">NPM</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Vite</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Babel</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Postman</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Kubernetes</span>
        <ProgressBar percentage={65} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Operating Systems & Utilities</div>
        <span className="skills-progress-label font-fira">
          Microsoft Windows
        </span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Linux</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">IIS</span>
        <ProgressBar percentage={70} />
        <span className="skills-progress-label font-fira">Powershell</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Apache</span>
        <ProgressBar percentage={50} />
        <span className="skills-progress-label font-fira">
          VmWare Hypervisor
        </span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Proxmox</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Scripting</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">
          Batch Files & Processing
        </span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Automation</span>
        <ProgressBar percentage={45} />
      </div>
      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Design</div>
        <span className="skills-progress-label font-fira">Photoshop</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Illustrator</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">InDesign</span>
        <ProgressBar percentage={65} />
      </div>
    </motion.div>
  );
}

export default Skills;
