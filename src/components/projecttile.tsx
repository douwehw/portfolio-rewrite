import { AiOutlineTrophy } from "react-icons/ai";
import { languages } from "@/util/languages";
import { CgSandClock } from "react-icons/cg";
import { motion } from "framer-motion";

interface ProjectTileProps {
    href: string;
    name: string;
    description: string;
    language: string;
    rating: number;
    hours: number;
}

export default function ProjectTile({ href, name, description, language, rating, hours }: ProjectTileProps) {
    return (
        <motion.a
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.05 },
            }}
            href={"https://google.com"}
            rel="noreferrer"
            target="_blank"
        >
            <div className="relative flex flex-col h-44 w-80 p-4 rounded-xl protile-shadow-sharp cursor-pointer select-none dark:text-gray-300 backdrop-blur-sm bg-opacity-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black">
                <div className="absolute top-2 right-2 flex flex-row items-center">
                    <div
                        className="w-3 h-3 rounded-full mr-1"
                        style={{ background: languages["C++"], border: `solid 3px ${languages["C++"]}` }}
                    />
                    <p className="font-extralight fon tracking">{"C++"}</p>
                </div>
                <h1 className="font-normal text-xl mb-1 tracking-tight">{"TestName"}</h1>
                <p className="text-sm font-light">{"Really really boring and useless description only made for testing"}</p>
                <div className="mt-auto flex flex-row gap-4 font-extralight">
                    <p className="flex flex-row items-center justify-center">
                        <AiOutlineTrophy className="mr-1 w-4 h-4" /> {"99"}/10
                    </p>
                    <p className="flex flex-row items-center justify-center">
                        <CgSandClock className="mr-1 w-4 h-4" /> {"9999.9"}
                    </p>
                </div>
            </div>
        </motion.a>
    );
}