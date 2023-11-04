import {
  SiWhatsapp,
  SiGithub,
  SiGitlab,
  SiFacebook,
  SiTwitter,
  SiLinkedin,
} from "react-icons/si";

export const emailService = {
  serviceId: "service_skqalqp",
  templateId: "template_g4g9m8p",
  publicKey: "Wnhg0tFngoA1oBIWe",
};

export const socialMedia = [
  {
    name: "WhatSapp",
    icon: <SiWhatsapp />,
    link: "https://wa.me/+5356839233",
    style: " text-green-900",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/msc-alvaro-raul-martin-peraza-165114210/",
    style: " text-blue-900",
  },
  {
    name: "Tweeter",
    icon: <SiTwitter />,
    link: "https://twitter.com/exagonsoft",
    style: " text-cyan-300",
  },
  {
    name: "Facebook",
    icon: <SiFacebook />,
    link: "https://www.facebook.com/alvaroraul81/",
    style: " text-blue-600",
  },
  {
    name: "Github",
    icon: <SiGithub />,
    link: "https://github.com/exagonsoft",
    style: " text-violet-600",
  },
  {
    name: "Gitlab",
    icon: <SiGitlab />,
    link: "https://gitlab.com/melkorAMP",
    style: " text-orange-500",
  },
];

export const notificationType = {
  success: "SUCCESS",
  warning: "WARNING",
  error: "ERROR",
  info: "INFO",
};
