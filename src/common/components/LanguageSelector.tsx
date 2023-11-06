"use client";

import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const LanguageItem: React.FC<{ data: Language }> = ({ data }) => {
  return (
    <div className={"flex items-center"}>
      <span className={`fi fi-${data.flag} h-4 w-4 rounded-full mr-2`}></span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {data.name}
      </span>
    </div>
  );
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  const handleChangeLanguage = (language: string) => {
    setScrollToTop(true);
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  const languageData: { [key: string]: Language } = {
    es: {
      code: "es",
      name: "Español",
      flag: "es",
    },
    en: {
      code: "en",
      name: "English",
      flag: "us",
    },
  };

  return (
    <div className="flex items-center md:order-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-4 py-2">
      <Dropdown
        label={<LanguageItem data={languageData[selectedLanguage]} />}
        inline
        size="sm"
        arrowIcon={false}
        placement="top"
      >
        {Object.keys(languageData).map((code) => (
          <Dropdown.Item
            key={code}
            className="text-sm text-gray-500 dark:text-gray-400"
            onClick={() => handleChangeLanguage(code)}
          >
            <LanguageItem data={languageData[code]} />
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
