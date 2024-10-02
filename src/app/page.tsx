"use client";

import Navbar from "@/sections/navbar";
import Name from "@/sections/name";
import Projects from "@/sections/projects";
import AboutMe from "@/sections/aboutme";
import Bottom from "@/sections/bottom";

import PageWrapper from "@/components/pagewrapper";
import { isDay } from "@/util/date";

import { useState, useEffect, useCallback } from "react";

import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Particles from "react-tsparticles";

declare global {
	interface Window {
		setBackgroundSpeed: (speed: number) => void;
	}
}

export default function Home() {
	const darkTheme = "#0b090a";
	const lightTheme = "#f8f9fa";

	const [theme, setTheme] = useState(isDay() ? "light" : "dark");

	const [backgroundSpeed, setBackgroundSpeedState] = useState(1);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	useEffect(() => {
		window.setBackgroundSpeed = function (speed: number): void {
			setBackgroundSpeedState(speed);
			console.log(`Background speed set to ${speed}`);
		};
	}, []);

	const handleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		console.log(`Theme changed to ${theme === "light" ? "dark" : "light"}`);
	};

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadStarsPreset(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container);
	}, []);

	return (
		<PageWrapper>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					preset: "stars",
					background: {
						color: {
							value: theme === "light" ? lightTheme : darkTheme,
						},
					},
					particles: {
						color: {
							value: theme === "light" ? darkTheme : lightTheme,
						},
						opacity: {
							value: 0.5,
						},
						move: {
							enable: true,
							speed: backgroundSpeed,
						},
						size: {
							value: 1.5,
						},
						fps_limit: (backgroundSpeed * 15 < 60 ? backgroundSpeed * 15 : 60) as number,
					},
					fullScreen: {
						enable: true,
						zIndex: 0,
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
