import React from "react";

import ProjectTile from "@/components/projecttile";

export default function Projects() {
    return (
        <>
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ProjectTile
                    href=""
                    name=""
                    description=""
                    language=""
                    rating=""
                    hours=""
                />
                <ProjectTile
                    href=""
                    name=""
                    description=""
                    language=""
                    rating=""
                    hours=""
                />
                <ProjectTile
                    href=""
                    name=""
                    description=""
                    language=""
                    rating=""
                    hours=""
                />
                <ProjectTile
                    href=""
                    name=""
                    description=""
                    language=""
                    rating=""
                    hours=""
                />
            </div>
        </>
    )
}