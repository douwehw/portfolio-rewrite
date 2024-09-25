import React from "react";

import ProjectTile from "@/components/projecttile";
import Divider from "@/components/divider";

export default function Projects() {
    return (
        <div className="mt-20 z-10 scroll-m-24" id="projects">
            <h2 className="text-2xl font-extralight dark:text-gray-300 tracking-tight text-center relative right-14 top-1">(bekijk mijn)</h2>
            <h1 className="text-4xl font-normal dark:text-gray-300 tracking-tight text-center">Projecten.</h1>
            <Divider />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <ProjectTile
                href=""
                name=""
                description=""
                language=""
                rating={0}
                hours={0}
            />
            <ProjectTile
                href=""
                name=""
                description=""
                language=""
                rating={0}
                hours={0}
            />
            <ProjectTile
                href=""
                name=""
                description=""
                language=""
                rating={0}
                hours={0}
            />
            <ProjectTile
                href=""
                name=""
                description=""
                language=""
                rating={0}
                hours={0}
            />
            </div>
        </div>
    )
}