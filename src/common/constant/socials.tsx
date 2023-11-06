import { SocialItemProps } from "../types/socials";
import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { RiTwitterXLine as Twittericon } from "react-icons/ri";
import { FiMail as EmailIcon } from "react-icons/fi";

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
    title: "Mail",
    href: "mailto:gnavarro0197@gmail.com",
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: mail",
    className: "hover:text-black dark:text-slate-950 dark:hover:bg-slate-200",
  },
];
