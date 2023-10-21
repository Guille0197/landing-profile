"use client";

import React from "react";
import { LinkProps } from "@/common/types/link";
import clsx from "clsx";
import { BiCoffee as CoffeIcon, BiRocket as RocketIcon } from "react-icons/bi";

import { useState } from "react";
import BottomSheet from "@/common/components/BottomSheet";
import BuyACoffe from "./BuyACoffe";
import { ShimmerButton } from "@/common/components/ShimmerButton";

const LINKS: LinkProps[] = [
  {
    label: "Website & Portfolio",
    icon: <RocketIcon size={20} />,
    href: "https://google.com",
    className: "bg-[#eceff3] dark:text-black",
    target: "_blank",
  },
  {
    label: "Buy me a Coffe",
    icon: <CoffeIcon size={20} />,
    href: "#",
    className: "bg-violet-600 text-white",
    target: "_self",
  },
];
const ButtonLink = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);

  const handleClick = (url: string, target: string | undefined) => {
    if (url !== "#") {
      window.open(url, target);
    } else {
      setBottomSheetOpen(true);
    }
  };

  return (
    <>
      {/* <div className="flex flex-col md:flex-row gap-3 items-center justify-center py-3">
        {LINKS?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "flex items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 w-full md:w-max shadow-sm",
              item.className
            )}
            onClick={() => handleClick(item.href, item.target)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div> */}
      {/* <BottomSheet
        key={isBottomSheetOpen ? "bottom-sheet-open" : "bottom-sheet-closed"}
        title="Buy me a Coffe"
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <BuyACoffe />
      </BottomSheet> */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center py-3">
        <ShimmerButton
          className="py-3 px-5"
          size="large"
          onClick={() => alert("Hello")}
        >
          <RocketIcon size={20} className="mr-3" />
          Website & Portfolio
        </ShimmerButton>
      </div>
    </>
  );
};

export default ButtonLink;
