"use client";

import Image from "@/common/components/Image";
import VerifiedIcon from "@/common/components/VerifiedIcon";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("translation");

  return (
    <header className="pt-5 space-y-4 flex flex-col items-center">
      <div
        className="p-2 rounded-full border-2"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <Image
          src="/images/profilePhoto.jpeg"
          alt={t("name")}
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex gap-2 items-center text-center">
          <h1 className="text-2xl font-medium">{t("name")}</h1>
          <VerifiedIcon />
        </div>
        <p className="text-center text-[15px] md:text-base mx-1 leading-relaxed">
          {t("bio")}
        </p>
      </div>
    </header>
  );
};

export default Hero;
