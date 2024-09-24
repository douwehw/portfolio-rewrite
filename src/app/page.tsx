"use client"

import Navbar from "@/sections/navbar";
import { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center w-full h-fit min-h-screen p-5 bg-primary-light dark:bg-primary-dark">
      <Navbar themeHandler={handleTheme} currentTheme={theme}/>
    </div>
  )
}
