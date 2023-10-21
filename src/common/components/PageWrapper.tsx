"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 30,
      once: true,
    });
  }, []);

  return <main>{children}</main>;
};

export default PageWrapper;
