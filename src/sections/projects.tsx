import React from "react";

import { useState } from "react"
import ProjectTile from "@/components/projecttile";
import Divider from "@/components/divider";
import { GoPlus } from "react-icons/go";
import AddProjectForm from "@/components/addprojectform";
import { motion } from "framer-motion";
import { FiMinus } from "react-icons/fi";

export default function Projects() {

    const [showForm, setShowForm] = useState(false)

    return (
        <div className="mt-10 z-10 scroll-m-24" id="projects">
            <h2 className="text-2xl font-extralight dark:text-gray-300 tracking-tight text-center relative right-14 top-1">(bekijk mijn)</h2>
            <h1 className="text-4xl font-normal dark:text-gray-300 tracking-tight text-center">Projecten.</h1>
            <div className="flex flex-col relative mb-4">
                <a
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center cursor-pointer"
                >
                    {!showForm ? (
                        <GoPlus className="outline outline-1 rounded-lg h-7 w-7 p-1 mr-3 flex-shrink-0
                        hover:bg-black/5 hover:dark:bg-white/15 active:bg-black/10 active:dark:bg-white/20
                        dark:text-gray-300"/>
                    ) : (
                        <FiMinus className="outline outline-1 rounded-lg h-7 w-7 p-1 mr-3 flex-shrink-0
                        hover:bg-black/5 hover:dark:bg-white/15 active:bg-black/10 active:dark:bg-white/20
                        dark:text-gray-300"/>
                    )}
                </a>

                {/* Animate height from 0 to auto using motion.div */}
                <div className="relative">
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: showForm ? "auto" : 0,
                            opacity: showForm ? 1 : 0
                        }}
                        transition={{
                            height: {
                                duration: 0.3,
                                ease: "easeInOut"
                            },
                            opacity: {
                                duration: 0.2,
                                delay: showForm ? 0.1 : 0
                            }
                        }}
                        className="overflow-hidden rounded-lg ring-1 dark:ring-[#1f1d1d] ring-[#d0d0d0] mt-3"
                    >
                        <AddProjectForm />
                    </motion.div>
                </div>
            </div>
            <Divider />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <ProjectTile
                    href="https://github.com/douwehw/raylib-bubbleshooter"
                    name="RayLib Beginsels"
                    description="Mijn eerste project met RayLib. Eindproduct is niet spectaculair, maar het was een goede oefening in C++."
                    language="C++"
                    rating={9}
                    hours={40}
                    visible={true}
                />
                <ProjectTile
                    href="https://github.com/Buldz/Tweakin_Gamejam2024"
                    name="Tweakin'"
                    description="Game gemaakt tijdens de gamejam 2024 in Groningen, winnaar van de Curveball prijs."
                    language="C#"
                    rating={10}
                    hours={14}
                    visible={true}
                />
                <ProjectTile
                    href="https://github.com/douwehw/projects/tree/main/hangman/src"
                    name="Console-based Hangman"
                    description="Mijn eerste project in Rust, een van mijn favoriete talen om in te werken. Zoveel mogelijk de code gecomment om te leren."
                    language="Rust"
                    rating={7.5}
                    hours={8}
                    visible={true}
                />
                <ProjectTile
                    href="https://github.com/douwehw/portfolio-rewrite"
                    name="Persoonlijke Website (source code)"
                    description="Mijn website, je kijkt er nu naar...)"
                    language="React"
                    rating={8}
                    hours={20}
                    visible={true}
                />
                <ProjectTile
                    href="https://48exa.com"
                    name="48exa.com"
                    description="Website in PHP, gemaakt tijdens vervelen tijdens de lessen op school, donaties zijn welkom!!"
                    language="PHP"
                    rating={9}
                    hours={3}
                    visible={true}
                />
                <ProjectTile
                    href="https://github.com/douwehw/metadata-python-minified"
                    name="Metadata analyser"
                    description="Python programma dat metadata van Google Drive bestanden checkt, gemaakt voor de een project met vrienden voor het spel Geometry Dash."
                    language="Python"
                    rating={8}
                    hours={32}
                    visible={true}
                />
            </div>
        </div>
    )
}
function UseState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
