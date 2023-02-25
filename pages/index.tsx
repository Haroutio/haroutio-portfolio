import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Header,
  Hero,
  Navigation,
  About,
  Code,
  Experience,
  Skills,
  Contact,
  Footer,
} from "../components/Index";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("about");
  const router = useRouter();

  useEffect(() => {
    const path = router.query.page;

    if (!path) {
      setActiveComponent("about");
    } else if (path === "code") {
      setActiveComponent("code");
    } else if (path === "exp") {
      setActiveComponent("exp");
    } else if (path === "skills") {
      setActiveComponent("skills");
    } else if (path === "contact") {
      setActiveComponent("contact");
    }
  }, [router.query.page]);

  const handlePageChange = (pathname: string) => {
    const path = router.query.page;
    if (!path) {
      setActiveComponent("about");
    } else if (path === "code") {
      setActiveComponent("code");
    } else if (path === "exp") {
      setActiveComponent("exp");
    } else if (path === "skills") {
      setActiveComponent("skills");
    } else if (path === "contact") {
      setActiveComponent("contact");
    }
  };

  return (
    <div className="z-0 overflow-scroll overflow-x-hidden overflow-y-scroll antialiased select-none sm:h-screen">
      <Head>
        <title>Haroutio - Portfolio</title>
        <meta
          name="description"
          content="The Personal Portfolio of Harout Terterian: A goal oriented Software Engineer and tech enthusiast who aims to grow consistently and seeks knowledge throughout the industry. Values include `persistence, consistency, critical thinking, and efficiency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl p-6 mx-auto">
        <Header handlePageChange={handlePageChange} />
        <section id="hero">
          <Hero />
          <Navigation handlePageChange={handlePageChange} />
        </section>
        <section id="content">
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          >
            {activeComponent === "about" && <About />}
            {activeComponent === "code" && <Code />}
            {activeComponent === "exp" && <Experience />}
            {activeComponent === "skills" && <Skills />}
            {activeComponent === "contact" && <Contact />}
          </GoogleReCaptchaProvider>
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}
