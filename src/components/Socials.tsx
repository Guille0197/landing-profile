import React from "react";
import clsx from "clsx";
import { SOCIAL_MEDIA } from "@/common/constant/socials";

const Socials = () => {
  const socialMedia = SOCIAL_MEDIA ?? [];

  return (
    <div className="flex justify-center gap-x-3">
      {socialMedia.map((item) => {
        return (
          <a
            key={item?.title}
            href={item?.href}
            target={item?.isExternal ? "_blank" : "_self"}
            className={clsx(
              "bg-[#eceff3] dark:bg-white p-3 rounded-full transition-all duration-300 hover:shadow hover:scale-105",
              item?.className
            )}
            aria-label={item?.title}
            data-event-category="Social"
            data-event-action={item?.eventName}
            data-event-label={item?.title}
          >
            {item?.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
