"use client";

import {
  Github,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HomePageProps {
  params: { locale: string };
}

export default function ModernHero({ params: { locale } }: HomePageProps) {
  const t = useTranslations("home");

  const technologies = [
    { title: "Typescript", icon: <TypescriptIcon /> },
    { title: "React.js", icon: <ReactIcon /> },
    { title: "Next.js", icon: <NextIcon /> },
    { title: "Tailwind", icon: <TailwindIcon /> },
  ];

  const links = [
    {
      label: t("buttons.getStarted"),
      href: "/docs/introduction",
      icon: <ArrowRightIcon className="w-5 h-5" />,
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/figueroaignacio/aspen-ui",
      icon: <Github />,
      variant: "secondary",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto ">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t.rich("title", {
                  text1: (chunks) => <span>{chunks}</span>,
                  text2: (chunks) => (
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      {chunks}
                    </span>
                  ),
                })}
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300">
                {t("subtitle")}
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    item.variant === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.span>
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {t("technologiesDescription")}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-card bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm rounded-md py-2 px-4 text-sm"
                  >
                    {tech.icon}
                    {tech.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10">
              {/* <img
                src="/placeholder.svg?height=400&width=400"
                alt="Hero Illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
