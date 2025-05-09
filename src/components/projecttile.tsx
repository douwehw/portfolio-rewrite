import { AiOutlineTrophy } from "react-icons/ai";
import { languages } from "@/util/languages";
import { CgSandClock } from "react-icons/cg";
import { motion } from "framer-motion";

import { montserrat } from "@/util/font";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface ProjectTileProps {
	href: string;
	name: string;
	description: string;
	language: string;
	rating: number;
	hours: number;
	visible: boolean;
}

export default function ProjectTile({ name, href, description, language, rating, hours, visible }: ProjectTileProps) {

	const [hidden, setHidden] = useState(visible)

	return (
		<div>
			<a className="flex flex-row mb-1 mr-1 justify-end cursor-pointer dark:text-gray-300" onClick={() => { setHidden(!hidden) }}>
				{hidden ? (
					<FaRegEyeSlash />
				) : (
					<FaRegEye />
				)}
			</a>

			<motion.a
				href={href}
				rel='noreferrer'
				target='_blank'
			>
				<div className={`relative flex flex-col h-44 w-80 p-4 rounded-xl ring-1 dark:ring-[#1f1d1d]
			dark:hover:ring-[#495057] ring-[#d0d0d0] hover:ring-[#808080] cursor-pointer select-none
			dark:text-gray-300 backdrop-blur-sm bg-opacity-5 bg-gradient-to-br from-gray-50 to-gray-100
			dark:from-[#151515] dark:to-[#0a0908] ${!hidden ? 'opacity-40' : ''}`}>

					{/* Top of the tile */}
					<div className='absolute top-2 right-2 flex flex-row items-center'>

						{/* Top-left of tile */}
						<div
							className='w-3 h-3 rounded-full mr-1'
							style={{ background: languages[language], border: `solid 3px ${languages[language]}` }}
						/>
						<p className='font-light text-sm tracking-tighter'>{language}</p>
					</div>

					{/* Text portion of tile */}
					<h1 className='font-normal text-xl mb-1 tracking-tight'>{name}</h1>
					<p className={`text-sm font-normal ${montserrat.className} `}>{description}</p>

					{/* Bottom section of tile */}
					<div className='mt-auto flex flex-row gap-4 font-extralight'>

						{/* Bottom-left of tile */}
						<p className='flex flex-row items-center justify-center'>
							<AiOutlineTrophy className='mr-1 w-4 h-4' /> {rating}/10
						</p>
						<p className='flex flex-row items-center justify-center'>
							<CgSandClock className='mr-1 w-4 h-4' /> {hours}
						</p>
					</div>
				</div>
			</motion.a>
		</div>
	);
}
