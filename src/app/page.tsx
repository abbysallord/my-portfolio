"use client";

import { useRef } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import { color, motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import TextType from "@/components/ui/TextType";
import { CometCard } from "@/components/ui/comet-card";
import { Timeline } from "@/components/ui/timeline";
import { IconCloud } from "@/components/ui/icon-cloud"
import { FaGithub, FaReact } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { RiPerplexityFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiN8N } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Shuffle from "@/components/ui/Shuffle";
import ElectricBorder from "@/components/ui/ElectricBorder";
import PixelCard from "@/components/ui/PixelCard";
import { Cover } from "@/components/ui/cover";
import TextPressure from '@/components/ui/TextPressure';
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PinContainer } from "@/components/ui/3d-pin";
import ProfileCard from "@/components/ui/ProfileCard";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import SplitText from "@/components/ui/SplitText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Press_Start_2P } from "next/font/google";
import Dhanush from "./Dhanush.png";
import ChefClaude from "../../public/chef-clude.png"
import AgroNova from "../../public/AgroNova.png"
import UiExample from "../../public/ui-example.png"
import Playsor from "../../public/playsor.png"
import Python from "../../public/python.jpg"
import N8N from "../../public/n8n.png"
import OpenAiNxtwave from "../../public/genAI-mastery-workshop-certificate.png"
import Techfest from "../../public/Techfest.png"
import SitHackathon from "../../public/sit-hackathon-2025.jpeg"
import CodeAlpha from "../../public/codeAlpha.png"
import LOR from "../../public/LOR.png"
import Buildathon from "../../public/nxtwave-openAi-buildathon-certificate.png"
import sitParticipation from "../../public/sit-participation.jpg"
import LetsUpgradeN8n from "../../public/LetsUpgrade-n8n.png"
import HTML5 from "../../public/HTML5.png"
import CSS3 from "../../public/CSS3.png"
import JavaScript from "../../public/javascript.png"
import Cplusplus from "../../public/c-plus-plus.png"
import Fib from "../../public/Fib.jpg"
import Exam from "../../public/Exams.webp"
import RV from "../../public/RV.jpg"
import Billionaire from "../../public/Billionaire.webp"
import TechfestLogo from "../../public/Logo_techfest.jpg"
import ChatGPT from "../../public/chatgpt.png"

const ps2 = Press_Start_2P({ subsets: ["latin"], weight: "400" });
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const icons = [
  <FaGithub key="github" size={100} color="#fff" />,
  <FaReact key="react" size={100} color="cyan" />,
  <SiNotion key="notion" size={100} color="white" />,
  <RiPerplexityFill key="perplexity" size={100} color="white" />,
  <RiNextjsLine key="nextjs" size={100} color="white" />,
  <FaHtml5 key="html5" size={100} color="orange" />,
  <DiCss3 key="css3" size={100} color="blue" />,
  <IoLogoJavascript key="javascript" size={100} color="yellow" />,
  <FaPython key="python" size={100} color="lightblue" />,
  <SiCplusplus key="cplusplus" size={100} color="blue" />,
  <SiN8N key="n8n" size={100} color="red" />,
  <SiDjango key="django" size={100} color="green" />,
  <SiNetlify key="netlify" size={100} color="#00C7B7" />,
  <FaGitAlt key="git" size={100} color="#d46521ff" />,
  <FaGithub key="github" size={100} color="#fff" />,
  <FaReact key="react" size={100} color="cyan" />,
  <SiNotion key="notion" size={100} color="white" />,
  <RiPerplexityFill key="perplexity" size={100} color="white" />,
  <RiNextjsLine key="nextjs" size={100} color="white" />,
  <FaHtml5 key="html5" size={100} color="orange" />,
  <DiCss3 key="css3" size={100} color="blue" />,
  <IoLogoJavascript key="javascript" size={100} color="yellow" />,
  <FaPython key="python" size={100} color="lightblue" />,
  <SiCplusplus key="cplusplus" size={100} color="blue" />,
  <SiN8N key="n8n" size={100} color="red" />,
  <SiDjango key="django" size={100} color="green" />,
  <SiNetlify key="netlify" size={100} color="#00C7B7" />,
  <FaGitAlt key="git" size={100} color="#d46521ff" />,
  <FaGithub key="github" size={100} color="#fff" />,
  <FaReact key="react" size={100} color="cyan" />,
  <SiNotion key="notion" size={100} color="white" />,
  <RiPerplexityFill key="perplexity" size={100} color="white" />,
  <RiNextjsLine key="nextjs" size={100} color="white" />,
  <FaHtml5 key="html5" size={100} color="orange" />,
  <DiCss3 key="css3" size={100} color="blue" />,
  <IoLogoJavascript key="javascript" size={100} color="yellow" />,
  <FaPython key="python" size={100} color="lightblue" />,
  <SiCplusplus key="cplusplus" size={100} color="blue" />,
  <SiN8N key="n8n" size={100} color="red" />,
  <SiDjango key="django" size={100} color="green" />,
  <SiNetlify key="netlify" size={100} color="#00C7B7" />,
  <FaGitAlt key="git" size={100} color="#d46521ff" />
];

const products = [
  {
    title: "OpenAi X Nxtwave Gen AI Masterclass",
    link: "https://openai-buildathon.nxtwave.tech/",
    thumbnail:
      `${OpenAiNxtwave.src}`,
  },
  {
    title: "OpenAi X Nxtwave Gen AI",
    link: "https://openai-buildathon.nxtwave.tech/",
    thumbnail:
      `${OpenAiNxtwave.src}`,
  },
  {
    title: "IIT Techfest Campus Ambassador",
    link: "https://ca.techfest.org/",
    thumbnail:
      `${Techfest.src}`,
  },
  {
    title: "2nd Place in SIT Hackathon, Srinathon 2.o 2025",
    link: "https://www.linkedin.com/company/ssoscsitmng/",
    thumbnail:
      `${SitHackathon.src}`
  },
  {
    title: "CodeAlpha Internship",
    link: "https://www.codealpha.tech/",
    thumbnail:
      `${CodeAlpha.src}`
  },
  {
    title: "CodeAlpha LOR",
    link: "https://www.codealpha.tech/",
    thumbnail:
      `${LOR.src}`
  },
  {
    title: "CodeAlpha Letter of Recommendation",
    link: "https://www.codealpha.tech/",
    thumbnail:
      `${LOR.src}`
  },
  {
    title: "OpenAI X Nxtwave Buildathon",
    link: "https://academy.openai.com/public/clubs/india-gkubq/events/openai-academy-x-nxtwave-niat-buildathon-andhra-pradesh-i644rtdmbd",
    thumbnail:
      `${Buildathon.src}`
  },
  {
    title: "Certificate of Participation, Srinathon 2.o 2025",
    link: "https://www.linkedin.com/company/ssoscsitmng/",
    thumbnail:
      `${sitParticipation.src}`
  },
  {
    title: "LetsUpgrade N8N course certificate",
    link: "https://letsupgrade.in/",
    thumbnail:
      `${LetsUpgradeN8n.src}`
  }
];

const navItems = [
    {
      name: "Home",
      link: "#top",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Achievents",
      link: "#achievements",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    }
  ];

  const data = [
    {
      title: "2020 - 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-white">
            7th Grade. Pandemic Vacations. What I did - learnt Python, HTML5, CSS3 and JavaScript
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={`${Python.src}`}
              alt="Python"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${JavaScript.src}`}
              alt="JavaScript"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${HTML5.src}`}
              alt="HTML5"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${CSS3.src}`}
              alt="CSS3"
              width={500}
              height={500}
              className="h-20 w-85 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-white">
            In my 11th and 12th. Learning C++. I still recall doing some Fibonacci program and learning Classes and functions. These were some Exam heavy years. <br /> Came across ChatGPT around this time and the ChatGPT era started at this point.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={`${Cplusplus.src}`}
              alt="C++"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${ChatGPT.src}`}
              alt="OOP in C++"
              width={500}
              height={500}
              className="h-20 w-80 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${Fib.src}`}
              alt="Fibonacci Series"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${Exam.src}`}
              alt="Exams"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 {Present}",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 text-white">
            1st year Engineering student @yenepoya School of Engineering and Technology and @NIAT. Learning a lot of code, building projects and winning hackathons.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 text-white">
              •  Secured 2nd place in Srinathon 2.o, a hackathon conducted at Srinivas Institute of Technology
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 text-white">
              •  Attended Startup Summit in Banglore, RV College
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 text-white">
              •  Became a Campus Ambassador for IIT Techfest, Bombay
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 text-white">
              •  Declared that I will become a billionaire in class
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 text-white">
              •  And much, MUCH, MORE...
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={`${SitHackathon.src}`}
              alt="SIT Hackathon win"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${RV.src}`}
              alt="RV College"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${TechfestLogo.src}`}
              alt="TechFest"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={`${Billionaire.src}`}
              alt="Billionaire"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];



export default function Home() {

  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <header className="dark" id="top">
      <FloatingNav navItems={navItems} />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <TextType 
              text={["Developer", "Entrepreneur", "Visionary", "Future Billionaire", "My name Is DHANUSH SHENOY H"]}
              typingSpeed={45}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="▮"
            />
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            UI/UX Designer | Full Stack Developer | Tech Enthusiast | Automation | Agentic AI Fan
          </div>
          <div className="d-flex">
            <InteractiveHoverButton onClick={() => nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })} className="text-white">Know More</InteractiveHoverButton>
          </div>
        </motion.div>
      </AuroraBackground>
    </header>
    <main className="min-h-screen pt-30 pb-30 flex flex-col items-center bg-black/90 text-white antialiased relative" ref={nextSectionRef}>
      <CometCard>
        <a href="https://linkedin.com/in/dhanush-shenoy-h" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="my-10 flex w-90 cursor-pointer flex-col items-stretch rounded-xl border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
            aria-label="View invite F7RA"
            style={{
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="mx-2 flex-1" id="about">
              <div className="relative mt-2 aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-xl bg-black object-cover contrast-100"
                  alt="Profile Picture of Dhanush Shenoy H"
                  src={Dhanush.src}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    opacity: 1,
                  }}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
              <div className="text-xs">Dhanush Shenoy H</div>
              <div className="text-xs text-gray-300 opacity-50">Visionary</div>
            </div>
          </button>
        </a>
      </CometCard>
    </main>
    <div className="relative w-full overflow-clip border-20 border-black/90">
      <Timeline data={data} />
    </div>
    <div className="relative overflow-hidden bg-black/90 pt-100 flex flex-col items-center" id="skills">
      <Shuffle
        text="Skills & Technologies"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
        className={`mb-10 text-xl md:text-5xl sm:text-5xl font-bold text-white ${ps2.className}`}
      />
      <IconCloud icons={icons} />
      <div className="flex flex-wrap gap-30 mt-20 mb-20 justify-center">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="flex flex-1 md:w-full sm:w-full">
            <PixelCard variant="blue" gap={7} speed={100}>
              <div className="absolute inset-0 grid place-items-center z-10">
                <Shuffle
                  text="Frontend Technologies"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  className={`mb-10 text-base md:text-3xl sm:text-3xl font-bold text-white ${ps2.className}`}
                />
                <div className="mt-4 flex flex-wrap justify-center">
                  <FaReact key="react" size={54} color="cyan" />,
                  <IoLogoJavascript key="javascript" size={54} color="yellow" />,
                  <DiCss3 key="css3" size={54} color="blue" />,
                  <FaHtml5 key="html5" size={54} color="orange" />
                </div>
              </div>
            </PixelCard>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="pink"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="flex flex-1 md:w-full sm:w-full">
            <PixelCard variant="pink" gap={7}>
              <div className="absolute inset-0 grid place-items-center z-10">
                <Shuffle
                  text="Backend Technologies"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  className={`mb-10 text-base md:text-3xl sm:text-3xl font-bold text-white ${ps2.className}`}
                />
                <div className="mt-4 flex flex-wrap justify-center">
                  <FaPython key="python" size={54} color="lightblue" />,
                  <RiNextjsLine key="nextjs" size={54} color="white" />,
                  <SiDjango key="django" size={54} color="green" />,
                  <FaHtml5 key="html5" size={54} color="orange" />
                </div>
              </div>
            </PixelCard>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="yellow"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="flex flex-1 md:w-full sm:w-full">
            <PixelCard variant="yellow" gap={7} speed={100}>
              <div className="absolute inset-0 grid place-items-center z-10">
                <Shuffle
                  text="Tools & Platforms"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  className={`mb-10 text-base md:text-3xl sm:text-3xl font-bold text-white ${ps2.className}`}
                />
                <div className="mt-4 flex flex-wrap justify-center pr-5 pl-5">
                  <FaGitAlt key="git" size={54} color="#d46521ff" />,
                  <SiNetlify key="netlify" size={54} color="#00C7B7" />,
                  <SiN8N key="n8n" size={54} color="red" />,
                  <FaGithub key="github" size={54} color="#fff" />
                  <RiPerplexityFill key="perplexity" size={54} color="white" />,
                  <SiNotion key="notion" size={54} color="white" />,
                </div>
              </div>
            </PixelCard>
          </div>
        </ElectricBorder>
      </div>
      <div className="pt-20" id="achievements">
        <h1 className="text-4xl md:text-xl lg:text-2xl sm:text-3xl font-semibold max-w-2xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-20">
          <TextPressure
            text="Some of my"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
            className="pb-6"
          />
          <Cover className="text-white/80"><span className="text-7xl">Certifications</span></Cover>
        </h1>
        <div className="text-white" style={{marginBottom: "-350px"}}>
          <HeroParallax products={products} />;
        </div>
      </div>
      <div className="text-7xl text-white sm:m-10" id="projects">
        <ElectricBorder
          color="gold"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <SplitText
            text = {<span id="featuresProjects"><LineShadowText shadowColor="gold">Featured</LineShadowText><span style={{color: "gold"}} className="ml-5"><LineShadowText shadowColor="white">Projects</LineShadowText></span></span>}
            className="text-7xl font-semibold text-center p-10"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            />
        </ElectricBorder>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-20 mt-20">
        <PinContainer
          title="Chef Claude"
          href="https://github.com/abbysallord/AI-Chef"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Chef Claude
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Takes ingredients as input (min 4) and gives recipes as output
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${ChefClaude.src})`}}/>
          </div>
        </PinContainer>
        <PinContainer
          title="AgroNova"
          href="https://agro-nova-copy-0d5652ec.base44.app/login?from_url=https://agro-nova-copy-0d5652ec.base44.app/&app_id=68d0ba97c7974b4a0d5652ec"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              AgroNova
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                A farmer's personal assistant, designed to boost productivity and stability.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${AgroNova.src})`}}/>
          </div>
        </PinContainer>
        <PinContainer
          title="UI Example"
          href="https://ui-example-1.netlify.app/"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              UI Example
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                A random UI example built on a moments inspiration
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${UiExample.src})`}}/>
          </div>
        </PinContainer>
        <PinContainer
          title="Playsor"
          href="https://playsor.netlify.app"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Playsor
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                A random project to pass time when bored! Try it out!
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${Playsor.src})`}}/>
          </div>
        </PinContainer>
        <PinContainer
          title="Quick Assistant"
          href="https://github.com/abbysallord/quick-assistant"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Quick Assistant - Vodka
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Just a cool assistant built with pyautogui. Enjoy!
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${Python.src})`}}/>
          </div>
        </PinContainer>
        <PinContainer
          title="Ultimate Assisteant"
          href="https://n8n.io"
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Ultimate Assistant
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                I built an ultimate assistant for me using n8n. (link can't be provided)
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{backgroundImage: `url(${N8N.src})`}}/>
          </div>
        </PinContainer>
      </div>
      <div className="mt-100 mb-30" id="contact">
        <ProfileCard
          name="Dhanush Shenoy H"
          title="Visionary"
          handle="conqueror.core"
          status="Online"
          contactText="Contact Me"
          avatarUrl={Dhanush.src}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open('https://www.instagram.com/conqueror.core/', '_blank', 'noopener,noreferrer')}
          innerGradient="#242424"
        />
      </div>
      <div className="mb-2">
        <CardContainer className="inter-var">
            <ElectricBorder
              color="red"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <footer className="flex flex-col sm:flex-row items-center justify-between p-6 gap-36">
                <CardItem
                  translateZ={50}
                  className="text-lg font-semibold text-white"
                >
                  <p>&copy; Dhanush Shenoy H | All rights reserved</p>
                </CardItem>
                <div className="flex gap-4">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="transition duration-200 ease-in hover:scale-110 px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white"
                  >
                    <a
                      href="https://github.com/abbysallord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub size={28} />
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="transition duration-200 ease-in hover:scale-110 px-2 py-2 rounded-xl bg-[#2d6cf5] dark:bg-white dark:text-black text-white"
                  >
                    <a
                      href="https://www.linkedin.com/in/dhanush-shenoy-h/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="transition duration-200 ease-in hover:scale-110 px-2 py-2 rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
                  >
                    <a
                      href="https://www.instagram.com/conqueror.core/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={28} />
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="transition duration-200 ease-in hover:scale-110 px-2 py-2 rounded-xl bg-gray-700 dark:bg-white dark:text-black text-white"
                  >
                    <a
                      href="mailto:dshenoyh@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mail"
                    >
                      <CiMail size={28} />
                    </a>
                  </CardItem>
                </div>
              </footer>
            </ElectricBorder>
        </CardContainer>
      </div>
    </div>
    </>
  );
}