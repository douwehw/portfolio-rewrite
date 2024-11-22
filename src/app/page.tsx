"use client";

import Navbar from "@/sections/navbar";
import Name from "@/sections/name";
import Projects from "@/sections/projects";
import AboutMe from "@/sections/aboutme";
import Bottom from "@/sections/bottom";

import Background from "@/components/background";
import PageWrapper from "@/components/pagewrapper";
import { isDay } from "@/util/date";

import { useState, useEffect } from "react";

declare global {
	interface Window {
		setBackgroundSpeed: (speed: number) => void;
	}
}

const day = await isDay();

export default function Home() {
	const [theme, setTheme] = useState(day ? "light" : "dark");

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
	};

	return (
		<PageWrapper>
			<Background theme={theme} />
			<Navbar themeHandler={handleTheme} currentTheme={theme} />
			<Name />
			<Projects />
			<AboutMe />
			<Bottom />
		</PageWrapper>
	);
}
