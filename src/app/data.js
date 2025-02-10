export const icons = {
  facebook: <FaFacebook />,
  github: <FaGithub />,
  email: <BiLogoGmail />,
};

export const styles = {
  buttonTypes: [
    "border border-neutral-800 bg-neutral-950 rounded py-2 px-4 hover:bg-red-700 focus:border-red-500 outline-0",
    "border border-neutral-800 bg-neutral-950 rounded py-2 w-full hover:bg-red-700 focus:border-red-500 outline-0",
  ],
  textTypes: [
    "text-md lg:text-xl font-semibold uppercase",
    "text-lg lg:text-2xl font-semibold uppercase",
    "text-xl lg:text-4xl font-semibold uppercase",
    "text-4xl sm:text-6xl lg:text-[12em] font-normal uppercase impact line-clamp-[3]",
    "",
  ],
  cardTypes: [
    "h-fit lg:min-h-[20vh] lg:max-h-[60vh] w-full p-10 rounded border border-neutral-800 flex items-center overflow-hidden",
    "h-[30vh] w-full border border-neutral-800 rounded p-2",
  ],
  layoutTypes: [
    "min-h-screen max-h-fit w-full border-b border-b-neutral-800 flex flex-col",
    "h-fit w-full border-b border-b-neutral-800 px-10 lg:px-40 py-10",
    "h-fit w-full border-b border-b-neutral-800 px-10 lg:px-0 py-10",
  ],
  containers: [
    `h-fit w-full flex flex-col lg:flex-row items-center gap-5`,
    "w-72 p-7 h-screen sticky top-0 bg-neutral-950 flex flex-col justify-between",
  ],
};

export const about = {
  name: "Mark Lape",
  hero: {
    introduction: "Hey! What's up, I'm",
    career: "Web Developer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.`,
  },
  services: {
    service_1: {
      title: "Web Developer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.`,
    },
    service_2: {
      title: "Web Designer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.`,
    },
    service_3: {
      title: "UI/UX Designer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.`,
    },
  },
  contact: [
    {
      icon: icons.facebook,
      account: "Mark Lape",
      link: "",
    },
    {
      icon: icons.email,
      account: "lapemark11@gmail.com",
      link: "",
    },
    {
      icon: icons.github,
      account: "Poowd_",
      link: "",
    },
  ],
};
export const projects = {
  category_1: [
    {
      title: "Class Kode",
      date: "",
      role: "",
      description: "",
      features: [],
      technologies: [],
      images: [kode_1],
    },
    {
      title: "E-Bento",
      date: "",
      role: "",
      description: "",
      features: [],
      technologies: [],
      images: [ebento_1],
    },
    {
      title: "",
      date: "",
      role: "",
      description: "",
      features: [],
      technologies: [],
      images: [null],
    },
  ],
};

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import kode_1 from "@/assets/images/kode/kode_1.png";

import ebento_1 from "@/assets/images/ebento/ebento_1.png";
import { scaleStyle } from "@/components/functions/useScaleStyle";
