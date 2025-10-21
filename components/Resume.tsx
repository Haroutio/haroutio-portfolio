// components/ResumePDF.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register your custom fonts
Font.register({
  family: "Fira Code",
  src: "/fonts/FiraCode-Regular.ttf",
});

Font.register({
  family: "Cambria",
  src: "/fonts/Cambria.ttf",
});

Font.register({
  family: "Raleway",
  src: "/fonts/Raleway-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 9,
    fontFamily: "Raleway",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 15,
    borderBottom: "2 solid #000000",
    paddingBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Cambria",
    marginBottom: 3,
    color: "#0AAE2E", // GREEN
  },
  subtitle: {
    fontSize: 11,
    color: "#0AAE2E", // GREEN
    marginBottom: 8,
    fontFamily: "Fira Code",
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: 8,
    flexDirection: "row",
    gap: 12,
    fontFamily: "Fira Code",
    flexWrap: "wrap",
  },
  contactItem: {
    marginRight: 12,
    color: "#000000", // Black
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
    color: "#0AAE2E", // GREEN
    fontFamily: "Cambria",
  },
  jobContainer: {
    marginBottom: 14,
    borderBottom: "1 solid #e5e7eb",
    paddingBottom: 10,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "Fira Code",
    color: "#000000", // Black
    marginBottom: 6,
  },
  responsibility: {
    fontSize: 8,
    marginBottom: 3,
    marginLeft: 5,
    lineHeight: 1.4,
    fontFamily: "Raleway",
    color: "#000000", // Black
  },
  skillsLabel: {
    fontSize: 8,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4,
    fontFamily: "Fira Code",
    color: "#4b5563", // Dark gray
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  skill: {
    fontSize: 7,
    backgroundColor: "#f9fafb",
    color: "#000000",
    padding: "3 6",
    borderRadius: 2,
    marginRight: 3,
    marginBottom: 3,
    fontFamily: "Fira Code",
    border: "1 solid #d1d5db",
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Harout Terterian</Text>
        <Text style={styles.subtitle}>Technology Leader | Full-Stack Engineer | IT Infrastructure</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>contact@harout.io</Text>
          <Text style={styles.contactItem}>818-631-9737</Text>
          <Text style={styles.contactItem}>harout.io</Text>
          <Text style={styles.contactItem}>github.com/haroutio</Text>
        </View>
      </View>

      {/* Experience Section */}
      <Text style={styles.sectionTitle}>💼 Experience</Text>

      {/* IT Engineer @ Les Olson IT */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>IT Engineer @ Les Olson IT</Text>
        <Text style={styles.responsibility}>
          - Managed and architected enterprise-level IT infrastructure, focusing on network administration, server management, and systems optimization. Leveraged technical expertise to ensure seamless operations across the organization.
        </Text>
        <Text style={styles.responsibility}>
          - Implemented robust security measures and infrastructure solutions, utilizing deep understanding of enterprise systems architecture to deliver scalable and reliable IT services.
        </Text>
        <Text style={styles.responsibility}>
          - Collaborated with cross-functional teams to bridge the gap between development and operations, ensuring optimal performance and integration across the full technology stack.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Windows Server</Text>
          <Text style={styles.skill}>Active Directory</Text>
          <Text style={styles.skill}>System Administration</Text>
          <Text style={styles.skill}>Network Administration</Text>
          <Text style={styles.skill}>VMware</Text>
          <Text style={styles.skill}>Proxmox</Text>
          <Text style={styles.skill}>Linux</Text>
          <Text style={styles.skill}>PowerShell</Text>
          <Text style={styles.skill}>Security & Compliance</Text>
          <Text style={styles.skill}>Enterprise Infrastructure</Text>
          <Text style={styles.skill}>Backup Solutions</Text>
        </View>
      </View>

      {/* Systems Administrator @ GM Tax Services */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Systems Administrator @ GM Tax Services</Text>
        <Text style={styles.responsibility}>
          - Managed enterprise infrastructure including server environments, databases, and IT operations. Ensured high availability and reliability of mission-critical systems supporting business operations.
        </Text>
        <Text style={styles.responsibility}>
          - Administered user accounts, security policies, and system backups. Implemented best practices for system maintenance, monitoring, and disaster recovery procedures.
        </Text>
        <Text style={styles.responsibility}>
          - Provided technical support and troubleshooting for complex infrastructure issues, minimizing downtime and ensuring business continuity.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Windows Server</Text>
          <Text style={styles.skill}>Active Directory</Text>
          <Text style={styles.skill}>System Administration</Text>
          <Text style={styles.skill}>Database Management</Text>
          <Text style={styles.skill}>Linux</Text>
          <Text style={styles.skill}>PowerShell</Text>
          <Text style={styles.skill}>Network Configuration</Text>
          <Text style={styles.skill}>Backup & Recovery</Text>
          <Text style={styles.skill}>Security Management</Text>
        </View>
      </View>

      {/* Software Engineer @ Go Viral Enterprises */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Software Engineer @ Go Viral Enterprises</Text>
        <Text style={styles.responsibility}>
          - Developed and maintained full-stack web applications using modern frameworks and technologies. Collaborated with development teams to deliver high-quality software solutions.
        </Text>
        <Text style={styles.responsibility}>
          - Implemented scalable architecture patterns and best practices for code quality, testing, and deployment. Contributed to continuous improvement of development processes.
        </Text>
        <Text style={styles.responsibility}>
          - Worked closely with stakeholders to gather requirements, design solutions, and deliver features that met business objectives within specified timelines.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>ReactJS</Text>
          <Text style={styles.skill}>NodeJS</Text>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>ExpressJS</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>REST APIs</Text>
          <Text style={styles.skill}>Agile Methodology</Text>
        </View>
      </View>

      {/* Full-Stack Web Developer @ Silton Information Software Inc */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Full-Stack Web Developer @ Silton Information Software Inc</Text>
        <Text style={styles.responsibility}>
          - Architected and implemented dynamic and modern web applications with robust security measures, using cutting-edge MERN and MEAN stacks. Employed industry-standard practices to ensure maximum scalability, reliability, and maintainability.
        </Text>
        <Text style={styles.responsibility}>
          - Leveraged React, Next.js, and TypeScript to develop highly performant web applications with optimal user experiences. Employed a variety of libraries and frameworks to streamline development workflows and enhance application functionality.
        </Text>
        <Text style={styles.responsibility}>
          - Managed DNS, email, FTP, shell accounts, databases, security, and site backups, ensuring a highly secure and stable infrastructure for mission-critical applications.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>ExpressJS</Text>
          <Text style={styles.skill}>ReactJS</Text>
          <Text style={styles.skill}>NodeJS</Text>
          <Text style={styles.skill}>AWS</Text>
          <Text style={styles.skill}>TailwindCSS</Text>
          <Text style={styles.skill}>MaterialUI</Text>
          <Text style={styles.skill}>DaisyUI</Text>
          <Text style={styles.skill}>TypeScript</Text>
        </View>
      </View>

      {/* Freelance Web Developer & Corporate Services */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Freelance Web Developer & Corporate Services</Text>
        <Text style={styles.responsibility}>
          - Developed custom websites and web applications for diverse clients, employing a broad range of technologies and frameworks. Delivered high-quality work within tight deadlines, ensuring client satisfaction and repeat business.
        </Text>
        <Text style={styles.responsibility}>
          - Created compelling graphic designs, logos, flyers, banners, and business cards using industry-leading Adobe Photoshop and Illustrator tools. Transformed client visions into visually stunning and highly effective designs.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>ExpressJS</Text>
          <Text style={styles.skill}>ReactJS</Text>
          <Text style={styles.skill}>AngularJS</Text>
          <Text style={styles.skill}>NodeJS</Text>
          <Text style={styles.skill}>AWS</Text>
          <Text style={styles.skill}>TailwindCSS</Text>
          <Text style={styles.skill}>DaisyUI</Text>
          <Text style={styles.skill}>MaterialUI</Text>
          <Text style={styles.skill}>PHP</Text>
          <Text style={styles.skill}>MySQL</Text>
          <Text style={styles.skill}>Firebase</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Kubernetes</Text>
          <Text style={styles.skill}>Proxmox</Text>
          <Text style={styles.skill}>Ubiquiti/Unifi Networking</Text>
          <Text style={styles.skill}>Adobe Master Collection</Text>
          <Text style={styles.skill}>Linux</Text>
          <Text style={styles.skill}>PowerShell</Text>
        </View>
      </View>

      {/* Full-Stack Developer @ LASO Concepts */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Full-Stack Developer @ LASO Concepts</Text>
        <Text style={styles.responsibility}>
          - Architected and developed a diverse range of full-stack features, leveraging AngularJS components and UI Router, RESTful APIs, Express, and MongoDB. Employed rapid prototyping techniques to rapidly iterate and refine software designs.
        </Text>
        <Text style={styles.responsibility}>
          - Demonstrated expert knowledge of Express routing stacks, skillfully enforcing best practices for authentication, model validation, and authorization.
        </Text>
        <Text style={styles.responsibility}>
          - Leveraged MongoDB aggregation pipelines to perform sophisticated joins and aggregations across multiple collections, reducing server round-trips and optimizing application performance.
        </Text>
        <Text style={styles.responsibility}>
          - Committed to upholding rigorous team and industry standards for API design, ES6 coding style, CSS selector conventions, promise handling, and security. Actively participated in daily stand-ups, weekly client demonstrations and feedback meetings, strict peer code review process, technical presentations to development team, and technical and product ideation to drive continuous improvement of the software development process.
        </Text>
        <Text style={styles.responsibility}>
          - Acted as a valuable team member, skillfully collaborating with peers and stakeholders to achieve shared goals.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>ExpressJS</Text>
          <Text style={styles.skill}>AngularJS</Text>
          <Text style={styles.skill}>NodeJS</Text>
          <Text style={styles.skill}>AWS</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Heroku</Text>
        </View>
      </View>

      {/* Full-Stack Developer @ Automobility LA Hackathon */}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Full-Stack Developer @ Automobility LA Hackathon</Text>
        <Text style={styles.responsibility}>
          - Conceived and developed an innovative solution for the traffic and mobility problems that arise during global events. The solution involved the creation of "Hubs" on the outskirts of the city, reducing traffic and improving overall mobility.
        </Text>
        <Text style={styles.responsibility}>
          - Demonstrated expert knowledge of the SmartCar API developed by Honda Innovations, skillfully integrating it into a full-stack application to accept payments, provide real-time visualizations of public transport vehicles, enable admins to create "Hubs," and manage vehicle accessibility. Leveraged cutting-edge development techniques to meet a strict 24-hour deadline, effectively dividing and conquering tasks and conducting regular meetings to ensure timely progress.
        </Text>
        <Text style={styles.responsibility}>
          - Acted as a critical team member, skillfully collaborating to deliver high-quality, effective solutions in a fast-paced, dynamic environment.
        </Text>
        <Text style={styles.skillsLabel}>Skills Mastered:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>ExpressJS</Text>
          <Text style={styles.skill}>AngularJS</Text>
          <Text style={styles.skill}>NodeJS</Text>
          <Text style={styles.skill}>Bootstrap</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Heroku</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;