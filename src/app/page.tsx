"use client"

import Navbar from "@/sections/navbar";
import Name from "@/sections/name";
import Projects from "@/sections/projects";
import AboutMe from "@/sections/aboutme";
import Bottom from "@/sections/bottom";

import PageWrapper from "@/components/pagewrapper";

import { useState, useEffect } from "react";

import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Particles from "react-tsparticles";

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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <PageWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "stars",
          background: {
            color: {
              value: theme === "light" ? "#ffffff" : "#000000",
            },
          },
          particles: {
            color: {
              value: theme === "light" ? "#000000" : "#ffffff", // Set particle color based on theme
            },
            opacity: {
              value: 0.5,
            },
            move: {
              enable: true,
              speed: 1,
            },
            blur: {
              value: 5,
            },
            size: {
              value: 1.5,
            },
            fps_limit: 15,
          },
          fullScreen: {
            enable: true,
            zIndex: 0, // Set z-index to -1 to ensure particles are behind other elements
          },
        }}
      />
      <Navbar themeHandler={handleTheme} currentTheme={theme} />
      <Name />
      <Projects />
      <AboutMe />
      <Bottom />
    </PageWrapper>
  );
}