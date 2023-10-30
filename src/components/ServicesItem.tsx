import clsx from "clsx";
import Image from "@/common/components/Image";
import { ServicesProps } from "@/common/types/services";
import { useTranslation } from "next-i18next";

const ServicesItem = ({
  title,
  description,
  icon,
  className,
}: ServicesProps) => {
  const { t } = useTranslation("translation");
  return (
    <div
      className={clsx(
        "grid grid-flow-col justify-between items-center gap-x-6 bg-white shadow bg-no-repeat bg-right bg-contain",
        "border py-5 px-6 rounded-xl",
        "transition-all duration-300 hover:shadow hover:scale-105"
      )}
    >
      <div>
        <Image src={icon} alt={title} width={40} height={40} unoptimized/>
      </div>
      <div className={clsx("space-y-2", className)}>
        <h5 className="text-base dark:text-neutral-800  md:text-lg font-medium">
          {t(title)}
        </h5>
        <p className="text-neutral-600 text-sm md:text-base">
          {t(description)}
        </p>
      </div>
    </div>
  );
};

export default ServicesItem;
