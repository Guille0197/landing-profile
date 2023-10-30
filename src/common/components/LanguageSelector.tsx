"use client";

import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const LanguageItem: React.FC<{ data: Language }> = ({ data }) => {
  return (
    <div className={"flex items-center"}>
      <span className={`fi fi-${data.flag} w-5 h-5 mr-2 rounded-full`}></span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {data.name}
      </span>
    </div>
  );
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChangeLanguage = (language: string) => {
    goToTop();
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
