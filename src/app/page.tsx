"use client"

import Navbar from "@/sections/navbar";
import Name from "@/sections/name";
import Projects from "@/sections/projects";
import AboutMe from "@/sections/aboutme";

import PageWrapper from "@/components/pagewrapper";

import { useState, useEffect } from "react";
import Divider from "@/components/divider";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Theme changed to ${theme === "light" ? "dark" : "light"}`);
  }

  return (
    <PageWrapper>
      <Navbar themeHandler={handleTheme} currentTheme={theme} />
      <Name />
      <Projects />
      <Divider />
      <AboutMe />
    </PageWrapper>
  )
}
