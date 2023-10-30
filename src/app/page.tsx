"use client";

import PageWrapper from "@/common/components/PageWrapper";
import Home from "@/modules";
import { useEffect } from "react";
import i18n from "../../i18n";

const HomePage = () => {
  // Configura i18n en el lado del cliente
  useEffect(() => {
    i18n.reloadResources();
  }, []);

  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  );
};

export default HomePage;
