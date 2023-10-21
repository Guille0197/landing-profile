"use client";

import BreakLine from "@/common/components/BreakLine";
import ButtonLink from "./ButtonLink";
import ChitChat from "./ChitChat";
import Hero from "./Hero";
import Socials from "./Socials";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "@/common/components/Footer";
import DarkMode from "./DarkMode";
import { ThemeProvider } from "next-themes";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" themes={["dark"]}>
      <div className="p-6 mb-2 space-y-6" data-aos="fade-down">
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
        <Contact />
        <BreakLine />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
