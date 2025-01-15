import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Particles from "react-tsparticles";
import { Console } from "@/util/writeli";

import { useState, useEffect, useCallback, ReactNode } from "react";

interface BackgroundProps {
	theme: string;
}

const darkTheme = "#0b090a";
const lightTheme = "#f8f9fa";

export default function Background({ theme }: BackgroundProps): ReactNode {
	const [backgroundSpeed, setBackgroundSpeedState] = useState(1);

	useEffect(() => {
		window.setBackgroundSpeed = function (speed: number): void {
			setBackgroundSpeedState(speed);
			console.log(`Background speed set to ${speed}`);
		};
	}, []);

	useEffect(() => {
		window.Console = {
			WriteLi: function (): void {
				Console.WriteLi();
			}
		}
	}, [])


	const particlesInit = useCallback(async (engine: Engine) => {
		await loadStarsPreset(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log("Particles loaded!");
	}, []);

	return (
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
	)
}
