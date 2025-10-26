"use client";

import { useRef } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconDeviceComputerCamera,
  IconHandStop,
  IconHome,
  IconMessage,
  IconTrophy,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import TextType from "@/components/ui/TextType";
import { CometCard } from "@/components/ui/comet-card";
import { Timeline } from "@/components/ui/timeline";
import { IconCloud } from "@/components/ui/icon-cloud";
import {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiCplusplus, SiDjango, SiN8N, SiNetlify, SiNotion } from "react-icons/si";
import { RiNextjsLine, RiPerplexityFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiCss3 } from "react-icons/di";
import { CiMail } from "react-icons/ci";
import Shuffle from "@/components/ui/Shuffle";
import ElectricBorder from "@/components/ui/ElectricBorder";
import PixelCard from "@/components/ui/PixelCard";
import { Cover } from "@/components/ui/cover";
import TextPressure from "@/components/ui/TextPressure";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PinContainer } from "@/components/ui/3d-pin";
import ProfileCard from "@/components/ui/ProfileCard";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import SplitText from "@/components/ui/SplitText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Press_Start_2P } from "next/font/google";
import DhanushImage from "./Dhanush.png";
import ChefClaudeImage from "../../public/chef-clude.png";
import AgroNovaImage from "../../public/AgroNova.png";
import UiExampleImage from "../../public/ui-example.png";
import PlaysorImage from "../../public/playsor.png";
import PythonProjectImage from "../../public/python.jpg";
import N8NImage from "../../public/n8n.png";
import OpenAiNxtwaveImage from "../../public/genAI-mastery-workshop-certificate.png";
import TechfestImage from "../../public/Techfest.png";
import SitHackathonImage from "../../public/sit-hackathon-2025.jpeg";
import CodeAlphaImage from "../../public/codeAlpha.png";
import LORImage from "../../public/LOR.png";
import BuildathonImage from "../../public/nxtwave-openAi-buildathon-certificate.png";
import SitParticipationImage from "../../public/sit-participation.jpg";
import LetsUpgradeN8nImage from "../../public/LetsUpgrade-n8n.png";
import HTML5Image from "../../public/HTML5.png";
import CSS3Image from "../../public/CSS3.png";
import JavaScriptImage from "../../public/javascript.png";
import CplusplusImage from "../../public/c-plus-plus.png";
import FibImage from "../../public/Fib.jpg";
import ExamImage from "../../public/Exams.webp";
import RVImage from "../../public/RV.jpg";
import BillionaireImage from "../../public/Billionaire.webp";
import TechfestLogoImage from "../../public/Logo_techfest.jpg";
import ChatGPTImage from "../../public/chatgpt.png";

const ps2 = Press_Start_2P({ subsets: ["latin"], weight: "400" });
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const timelineImageClasses =
  "h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] sm:h-48 lg:h-60";
const timelineTextClasses = "mb-6 text-sm text-neutral-200 md:text-base";

const iconDefinitions = [
  { Component: FaGithub, color: "#fff", name: "github" },
  { Component: FaReact, color: "cyan", name: "react" },
  { Component: SiNotion, color: "white", name: "notion" },
  { Component: RiPerplexityFill, color: "white", name: "perplexity" },
  { Component: RiNextjsLine, color: "white", name: "nextjs" },
  { Component: FaHtml5, color: "orange", name: "html5" },
  { Component: DiCss3, color: "blue", name: "css3" },
  { Component: IoLogoJavascript, color: "yellow", name: "javascript" },
  { Component: FaPython, color: "lightblue", name: "python" },
  { Component: SiCplusplus, color: "blue", name: "cplusplus" },
  { Component: SiN8N, color: "red", name: "n8n" },
  { Component: SiDjango, color: "green", name: "django" },
  { Component: SiNetlify, color: "#00C7B7", name: "netlify" },
  { Component: FaGitAlt, color: "#d46521ff", name: "git" },
];

const icons = iconDefinitions.flatMap(({ Component, color, name }) =>
  Array.from({ length: 3 }).map((_, index) => (
    <Component key={`${name}-${index}`} size={100} color={color} />
  ))
);

const products = [
  {
    title: "OpenAi X Nxtwave Gen AI Masterclass",
    link: "https://openai-buildathon.nxtwave.tech/",
    thumbnail: `${OpenAiNxtwaveImage.src}`,
  },
  {
    title: "OpenAi X Nxtwave Gen AI",
    link: "https://openai-buildathon.nxtwave.tech/",
    thumbnail: `${OpenAiNxtwaveImage.src}`,
  },
  {
    title: "IIT Techfest Campus Ambassador",
    link: "https://ca.techfest.org/",
    thumbnail: `${TechfestImage.src}`,
  },
  {
    title: "2nd Place in SIT Hackathon, Srinathon 2.o 2025",
    link: "https://www.linkedin.com/company/ssoscsitmng/",
    thumbnail: `${SitHackathonImage.src}`,
  },
  {
    title: "CodeAlpha Internship",
    link: "https://www.codealpha.tech/",
    thumbnail: `${CodeAlphaImage.src}`,
  },
  {
    title: "CodeAlpha LOR",
    link: "https://www.codealpha.tech/",
    thumbnail: `${LORImage.src}`,
  },
  {
    title: "CodeAlpha Letter of Recommendation",
    link: "https://www.codealpha.tech/",
    thumbnail: `${LORImage.src}`,
  },
  {
    title: "OpenAI X Nxtwave Buildathon",
    link: "https://academy.openai.com/public/clubs/india-gkubq/events/openai-academy-x-nxtwave-niat-buildathon-andhra-pradesh-i644rtdmbd",
    thumbnail: `${BuildathonImage.src}`,
  },
  {
    title: "Certificate of Participation, Srinathon 2.o 2025",
    link: "https://www.linkedin.com/company/ssoscsitmng/",
    thumbnail: `${SitParticipationImage.src}`,
  },
  {
    title: "LetsUpgrade N8N course certificate",
    link: "https://letsupgrade.in/",
    thumbnail: `${LetsUpgradeN8nImage.src}`,
  },
];

const featuredProjects = [
  {
    title: "Chef Claude",
    href: "https://github.com/abbysallord/AI-Chef",
    description:
      "Takes ingredients as input (min 4) and gives recipes as output.",
    image: ChefClaudeImage.src,
  },
  {
    title: "AgroNova",
    href:
      "https://agro-nova-copy-0d5652ec.base44.app/login?from_url=https://agro-nova-copy-0d5652ec.base44.app/&app_id=68d0ba97c7974b4a0d5652ec",
    description:
      "A farmer's personal assistant, designed to boost productivity and stability.",
    image: AgroNovaImage.src,
  },
  {
    title: "UI Example",
    href: "https://ui-example-1.netlify.app/",
    description: "A random UI example built on a moment's inspiration.",
    image: UiExampleImage.src,
  },
  {
    title: "Playsor",
    href: "https://playsor.netlify.app",
    description: "A random project to pass time when bored! Try it out!",
    image: PlaysorImage.src,
  },
  {
    title: "Quick Assistant - Vodka",
    href: "https://github.com/abbysallord/quick-assistant",
    description: "Just a cool assistant built with pyautogui. Enjoy!",
    image: PythonProjectImage.src,
  },
  {
    title: "Ultimate Assistant",
    href: "https://n8n.io",
    description: "I built an ultimate assistant for me using n8n. (link can't be provided)",
    image: N8NImage.src,
  },
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
    icon: <IconHandStop className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Achievements",
    link: "#achievements",
    icon: <IconTrophy className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <IconDeviceComputerCamera className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const data = [
  {
    title: "2020 - 2023",
    content: (
      <div>
        <p className={timelineTextClasses}>
          7th Grade. Pandemic Vacations. What I did - learnt Python, HTML5, CSS3
          and JavaScript.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={PythonProjectImage.src}
            alt="Python"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={JavaScriptImage.src}
            alt="JavaScript"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={HTML5Image.src}
            alt="HTML5"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={CSS3Image.src}
            alt="CSS3"
            className={timelineImageClasses}
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023 - 2025",
    content: (
      <div>
        <p className={timelineTextClasses}>
          In my 11th and 12th. Learning C++. I still recall doing some Fibonacci
          program and learning Classes and functions. These were some Exam heavy
          years. <br /> Came across ChatGPT around this time and the ChatGPT era
          started at this point.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={CplusplusImage.src}
            alt="C++"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={ChatGPTImage.src}
            alt="ChatGPT"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={FibImage.src}
            alt="Fibonacci Series"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={ExamImage.src}
            alt="Exams"
            className={timelineImageClasses}
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025 {Present}",
    content: (
      <div>
        <p className="mb-6 text-sm text-neutral-200 md:text-base">
          1st year Engineering student @yenepoya School of Engineering and
          Technology and @NIAT. Learning a lot of code, building projects and
          winning hackathons.
        </p>
        <ul className="mb-8 space-y-3 text-left text-sm text-neutral-200 md:text-base">
          <li className="flex gap-3">
            <span className="text-white">•</span>
            <span>Secured 2nd place in Srinathon 2.o, a hackathon conducted at Srinivas Institute of Technology</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">•</span>
            <span>Attended Startup Summit in Bangalore, RV College</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">•</span>
            <span>Became a Campus Ambassador for IIT Techfest, Bombay</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">•</span>
            <span>Declared that I will become a billionaire in class</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">•</span>
            <span>And much, MUCH, MORE...</span>
          </li>
        </ul>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={SitHackathonImage.src}
            alt="SIT Hackathon win"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={RVImage.src}
            alt="RV College"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={TechfestLogoImage.src}
            alt="TechFest"
            className={timelineImageClasses}
            loading="lazy"
          />
          <img
            src={BillionaireImage.src}
            alt="Billionaire"
            className={timelineImageClasses}
            loading="lazy"
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
            className="relative flex flex-col items-center justify-center gap-6 px-6 py-24 text-center sm:py-32"
          >
            <div className="text-balance text-3xl font-bold dark:text-white sm:text-5xl lg:text-7xl">
              <TextType
                text={[
                  "Developer",
                  "Entrepreneur",
                  "Visionary",
                  "Future Billionaire",
                  "My name Is DHANUSH SHENOY H",
                ]}
                typingSpeed={45}
                pauseDuration={1500}
                showCursor
                cursorCharacter="▮"
              />
            </div>
            <p className="text-balance font-extralight text-lg text-neutral-200 sm:text-2xl md:text-3xl">
              UI/UX Designer | Full Stack Developer | Tech Enthusiast | Automation | Agentic AI Fan
            </p>
            <div className="flex justify-center">
              <InteractiveHoverButton
                onClick={() =>
                  nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3.5 text-base text-white sm:text-lg"
              >
                Know More
              </InteractiveHoverButton>
            </div>
          </motion.div>
        </AuroraBackground>
      </header>
      <main
        ref={nextSectionRef}
        className="flex flex-col bg-black/90 text-white"
      >
        <section
          id="about"
          className="scroll-mt-24 px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-8"
        >
          <div className="mx-auto flex max-w-6xl justify-center">
            <CometCard className="w-full max-w-sm sm:max-w-md">
              <a
                href="https://linkedin.com/in/dhanush-shenoy-h"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View invite F7RA"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div
                  className="flex flex-col gap-6 rounded-xl bg-[#1F2121] p-4 sm:p-6"
                  style={{ transformStyle: "preserve-3d", opacity: 1 }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-xl bg-black object-cover contrast-100"
                      alt="Profile Picture of Dhanush Shenoy H"
                      src={DhanushImage.src}
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 font-mono text-sm text-white sm:text-base">
                    <span>Dhanush Shenoy H</span>
                    <span className="text-gray-300/70">Visionary</span>
                  </div>
                </div>
              </a>
            </CometCard>
          </div>
        </section>

        <section id="timeline" className="scroll-mt-24 w-full">
          <Timeline data={data} />
        </section>

        <section
          id="skills"
          className="scroll-mt-24 w-full px-6 py-20 sm:py-28 lg:px-8"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <Shuffle
              text="Skills & Technologies"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce
              triggerOnHover
              respectReducedMotion
              className={`skills-head mb-10 w-full break-words px-4 text-sm font-bold text-white sm:text-3xl md:text-4xl xl:text-6xl ${ps2.className}`}
            />
            <div className="mt-12 w-full max-w-5xl">
              <IconCloud icons={icons} />
            </div>
            <div className="mt-16 grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3">
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="flex justify-center p-6 sm:p-8"
              >
                <PixelCard variant="blue" gap={7} speed={100} className="w-full">
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center ${ps2.className}`}
                  >
                    <Shuffle
                      text="Frontend Technologies"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce
                      triggerOnHover
                      respectReducedMotion
                      className="mb-6 text-lg font-bold text-white sm:text-2xl"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                      <FaReact size={54} color="cyan" />
                      <IoLogoJavascript size={54} color="yellow" />
                      <DiCss3 size={54} color="blue" />
                      <FaHtml5 size={54} color="orange" />
                    </div>
                  </div>
                </PixelCard>
              </ElectricBorder>
              <ElectricBorder
                color="pink"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="flex justify-center p-6 sm:p-8"
              >
                <PixelCard variant="pink" gap={7} className="w-full">
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center ${ps2.className}`}
                  >
                    <Shuffle
                      text="Backend Technologies"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce
                      triggerOnHover
                      respectReducedMotion
                      className="mb-6 text-lg font-bold text-white sm:text-2xl"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                      <FaPython size={54} color="lightblue" />
                      <RiNextjsLine size={54} color="white" />
                      <SiDjango size={54} color="green" />
                      <FaHtml5 size={54} color="orange" />
                    </div>
                  </div>
                </PixelCard>
              </ElectricBorder>
              <ElectricBorder
                color="yellow"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="flex justify-center p-6 sm:p-8"
              >
                <PixelCard variant="yellow" gap={7} speed={100} className="w-full">
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center ${ps2.className}`}
                  >
                    <Shuffle
                      text="Tools & Platforms"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce
                      triggerOnHover
                      respectReducedMotion
                      className="mb-6 text-lg font-bold text-white sm:text-2xl"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 text-white">
                      <FaGitAlt size={54} color="#d46521ff" />
                      <SiNetlify size={54} color="#00C7B7" />
                      <SiN8N size={54} color="red" />
                      <FaGithub size={54} color="#fff" />
                      <RiPerplexityFill size={54} color="white" />
                      <SiNotion size={54} color="white" />
                    </div>
                  </div>
                </PixelCard>
              </ElectricBorder>
            </div>
          </div>
        </section>

        <section
          id="achievements"
          className="scroll-mt-24 w-full px-6 pb-20 sm:pb-28 lg:px-8"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <h1 className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <TextPressure
                text="Some of my"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
                className="pb-4 achivements-head"
              />
              <Cover className="text-white/80">
                <span className="text-4xl font-bold sm:text-5xl lg:text-7xl">
                  Certifications
                </span>
              </Cover>
            </h1>
            <div className="mt-12 w-full overflow-hidden">
              <HeroParallax products={products} />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 w-full px-6 py-20 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-6xl text-center">
            <ElectricBorder
              color="gold"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="mx-auto max-w-3xl px-4 py-8"
            >
              <SplitText
                text={
                  <span id="featuresProjects">
                    <LineShadowText shadowColor="gold">Featured</LineShadowText>
                    <span className="ml-3 text-yellow-400">
                      <LineShadowText shadowColor="white">Projects</LineShadowText>
                    </span>
                  </span>
                }
                className="text-4xl font-semibold text-center sm:text-5xl md:text-6xl lg:text-7xl"
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
            <div className="mt-16 grid w-full justify-center gap-12 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <PinContainer
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  containerClassName="flex w-full max-w-sm justify-center"
                >
                  <div className="flex h-full w-full flex-col rounded-2xl bg-black/80 p-4 tracking-tight text-slate-100/80 backdrop-blur-sm sm:p-5">
                    <h3 className="text-left text-base font-bold text-slate-100 sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-left text-sm text-slate-400 sm:text-base">
                      {project.description}
                    </p>
                    <div
                      className="mt-4 flex flex-1 min-h-[12rem] rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                </PinContainer>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 w-full px-6 pb-20 sm:pb-28 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <ProfileCard
              name="Dhanush Shenoy H"
              title="Visionary"
              handle="conqueror.core"
              status="Online"
              contactText="Contact Me"
              avatarUrl={DhanushImage.src}
              showUserInfo
              enableTilt
              enableMobileTilt={false}
              onContactClick={() =>
                window.open(
                  "https://www.instagram.com/conqueror.core/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              innerGradient="#242424"
            />
          </div>
        </section>

        <footer className="w-full px-6 pb-12 lg:px-8">
          <CardContainer className="inter-var" containerClassName="py-12">
            <ElectricBorder
              color="red"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="flex flex-col items-center justify-between gap-8 px-6 py-8 sm:flex-row sm:items-center sm:gap-12">
                <CardItem
                  translateZ={50}
                  className="text-center text-lg font-semibold text-white"
                >
                  <p>&copy; Dhanush Shenoy H | All rights reserved</p>
                </CardItem>
                <div className="flex flex-wrap justify-center gap-4">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://github.com/abbysallord"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition duration-200 ease-in hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://www.linkedin.com/in/dhanush-shenoy-h/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2d6cf5] text-white transition duration-200 ease-in hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://www.instagram.com/conqueror.core/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white transition duration-200 ease-in hover:scale-110"
                  >
                    <FaInstagram size={24} />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="mailto:dshenoyh@gmail.com"
                    aria-label="Mail"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700 text-white transition duration-200 ease-in hover:scale-110"
                  >
                    <CiMail size={24} />
                  </CardItem>
                </div>
              </div>
            </ElectricBorder>
          </CardContainer>
        </footer>
      </main>
    </>
  );
}
