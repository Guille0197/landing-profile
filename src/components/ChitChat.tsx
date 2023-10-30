import Link from "next/link";

import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";

import Image from "@/common/components/Image";
import { useTranslation } from "next-i18next";

const ChitChat = () => {
  const { t } = useTranslation("translation");

  return (
    <Link
      href="https://cal.com/rick/get-rick-rolled"
      target="_blank"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex flex-col space-y-5 bg-gray-950 dark:bg-gray-900 text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300"
    >
      <div className="flex gap-5 items-start justify-left">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base md:text-lg font-medium">
            <span>{t("titleChit")}</span>
            <Image
              src="/images/dot_new_animated.svg"
              alt="new"
              width={40}
              height={40}
            />
          </div>
          <p className="text-neutral-400 text-sm md:text-base">
            {t("descriptionChit")}
          </p>
        </div>
        <div className="p-3 border-2 border-neutral-500 text-neutral-300 rounded-full">
          <FiCalendar size={22} />
        </div>
      </div>
      <div className="flex gap-5 text-neutral-200 text-sm">
        <div className="flex items-center gap-2">
          <FiClock size={18} />
          <span>{t("minutes30")}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiVideo size={18} />
          <span>{t("googleMeet")}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChitChat;
