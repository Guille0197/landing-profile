"use client";

import { ThemeProvider } from "next-themes";
import BreakLine from "@/common/components/BreakLine";
import ButtonLink from "./ButtonLink";
import ChitChat from "./ChitChat";
import Hero from "./Hero";
import Socials from "./Socials";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "@/common/components/Footer";
import DarkMode from "./DarkMode";
import Feedback from "./Feedback";
import Skills from "./Skills";
import { appWithTranslation } from "next-i18next";

const Home = () => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="p-6 mb-2 space-y-6"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <DarkMode />
        <Hero />
        <Socials />
        <ButtonLink />
        <ChitChat />
        <BreakLine />
        <Services />
        <BreakLine />
        <Feedback />
        <BreakLine />
        <Skills />
        <BreakLine />
        <Contact />
        <BreakLine />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default appWithTranslation<any>(Home);
