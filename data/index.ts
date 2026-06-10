import { JSX } from "react";

export interface NavItem {
  name: string;
  link: string;
}

export interface AboutItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  gitHubLink: string;
  link: string;
}

export interface Experience {
  category: string;
  duration: string;
  title: string;
  description: string;
  src: string;
  coverImg: string;
  content?: JSX.Element;
}

export interface SocialMediaItem {
  id: number;
  img: string;
  link: string;
}

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const AboutItems: AboutItem[] = [
  {
    id: 1,
    title:
      "I'm a computer engineering student specializing in embedded systems, IoT, and full-stack development. I bridge hardware and software to create integrated solutions.",
    description: "About Me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end ",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Current Project: Developing a Full-Stack E-commerce Website with advanced features.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-80 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "iShop: Your Complete E - commerce Solution",
    des: "iShop is a full-stack MERN e-commerce site with user login, admin dashboard, and everything needed to manage your store.",
    img: "/Project/i-shop.png",
    iconLists: [
      "/Icon/mongo-db.svg",
      "/Icon/express.png",
      "/Icon/react.svg",
      "/Icon/next.svg",
      "/Icon/node.svg",
      "/Icon/ts.svg",
      "/Icon/tail.svg",
    ],
    gitHubLink: "https://github.com/TurkiIlyes/iShop-NextJs",
    link: "https://ishopapp.vercel.app/",
  },
  {
    id: 2,
    title: "MyToDo: Your Ultimate To-Do List Manager",
    des: "Manage tasks and habits with MyToDo. Set email reminders, control your account, add images, and use easy login and sign-up features.",
    img: "/Project/my-to-do.png",
    iconLists: [
      "/Icon/mongo-db.svg",
      "/Icon/express.png",
      "/Icon/react.svg",
      "/Icon/node.svg",
    ],
    gitHubLink: "https://github.com/TurkiIlyes/MyToDoFrontEnd",
    link: "https://mytodofrontend.onrender.com/",
  },
];

export const experiences: Experience[] = [
  {
    category: "Voluntary",
    duration: "2022 - Present",
    title: "Instructor at Wecode",
    description:
      "Led mentoring sessions to teach students web development fundamentals, including HTML, CSS, JavaScript, and frameworks. Focused on hands-on projects to enhance learning and applied problem-solving skills in a collaborative environment.",
    src: "/Experience/wecode.png",
    coverImg: "/Experience/wecode.png",
  },
  {
    category: "Internship",
    duration: "August 2024",
    title: "Intern - Developed Official Website for ARA",
    description:
      "Completed a full stack development internship at ARA, where I independently designed and built their official website. The project involved using Next.js, Express, and MongoDB to create a responsive, user-friendly platform that streamlined their digital presence and improved client engagement.",
    src: "/Experience/ara-company.png",
    coverImg: "/Experience/ara-company-cover.png",
  },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/imgs/fbIcon.png",
    link: "https://github.com/ilyesturki",
  },
  {
    id: 2,
    img: "/imgs/instagramIcon.png",
    link: "https://linkedin.com/in/ilyesturki",
  },
];
