import { SocialItemProps } from "../types/socials";
import { BiAt as Threadsicon } from "react-icons/bi";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsRssFill as BlogIcon,
  BsTwitter as Twittericon,
} from "react-icons/bs";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: "Github",
    href: "https://github.com/Guille0197",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    className: "hover:text-black dark:text-slate-950 dark:hover:bg-slate-200",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/guillermo-antonio-navarro/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "hover:text-black dark:text-slate-950 dark:hover:bg-slate-200",
  },
  {
    title: "Twitter X",
    href: "https://twitter.com/gan01_97",
    icon: <Twittericon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Twitter",
    className: "hover:text-black dark:text-slate-950 dark:hover:bg-slate-200",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/gan01_97/",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
    className: "hover:text-black dark:text-slate-950 dark:hover:bg-slate-200",
  },
];
