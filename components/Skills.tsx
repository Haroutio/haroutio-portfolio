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
        <div className="skills-haxor-link">Enterprise IT Infrastructure</div>
        <span className="skills-progress-label font-fira">Project Management</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Strategic Planning</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Technical Documentation</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Active Directory</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Windows Server</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">DNS Management</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">DHCP Configuration</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Group Policy (GPO)</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">System Monitoring</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Disaster Recovery</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Backup Solutions</span>
        <ProgressBar percentage={85} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Network Administration</div>
        <span className="skills-progress-label font-fira">Network Configuration</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">VPN Setup & Management</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Firewall Configuration</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Network Security</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">TCP/IP</span>
        <ProgressBar percentage={85} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Security & Compliance</div>
        <span className="skills-progress-label font-fira">Security Best Practices</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Access Control</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Encryption</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Vulnerability Assessment</span>
        <ProgressBar percentage={70} />
        <span className="skills-progress-label font-fira">Compliance Standards</span>
        <ProgressBar percentage={70} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">IoT & Embedded Systems</div>
        <span className="skills-progress-label font-fira">Home Automation</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">IoT Protocols</span>
        <ProgressBar percentage={80} />
        <span className="skills-progress-label font-fira">Embedded Systems</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Circuit Design</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Hardware Integration</span>
        <ProgressBar percentage={80} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Programming Languages</div>
        <span className="skills-progress-label font-fira">JavaScript (ES6+)</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">TypeScript</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">HTML</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">CSS/SASS</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">PHP</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Python</span>
        <ProgressBar percentage={70} />
        <span className="skills-progress-label font-fira">C#</span>
        <ProgressBar percentage={45} />
        <span className="skills-progress-label font-fira">C++</span>
        <ProgressBar percentage={35} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Front-End Libraries & Frameworks</div>
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
        <span className="skills-progress-label font-fira">AWS (Amazon Web Services)</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Azure</span>
        <ProgressBar percentage={45} />
        <span className="skills-progress-label font-fira">Google Cloud Platform</span>
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
        <span className="skills-progress-label font-fira">Docker</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">Kubernetes</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Webpack</span>
        <ProgressBar percentage={90} />
        <span className="skills-progress-label font-fira">Vite</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">NPM</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Yarn</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Postman</span>
        <ProgressBar percentage={90} />
      </div>

      <div className="skills-container exp-container">
        <div className="skills-haxor-link">Operating Systems & Infrastructure</div>
        <span className="skills-progress-label font-fira">Microsoft Windows</span>
        <ProgressBar percentage={95} />
        <span className="skills-progress-label font-fira">Linux</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">PowerShell</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">Bash Scripting</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">IIS</span>
        <ProgressBar percentage={70} />
        <span className="skills-progress-label font-fira">Apache</span>
        <ProgressBar percentage={50} />
        <span className="skills-progress-label font-fira">VMware Hypervisor</span>
        <ProgressBar percentage={65} />
        <span className="skills-progress-label font-fira">Proxmox</span>
        <ProgressBar percentage={75} />
        <span className="skills-progress-label font-fira">System Automation</span>
        <ProgressBar percentage={85} />
        <span className="skills-progress-label font-fira">.NET Framework</span>
        <ProgressBar percentage={70} />
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