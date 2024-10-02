import Divider from "@/components/divider"
import { getAge } from "@/util/date"

import { montserrat } from "@/util/font"

export default function AboutMe() {
    return (
        <div className="mt-12 dark:text-gray-300 z-10 select-none backdrop-blur-sm lg:w-1/2 md:w-8/12 w-2/3" id="aboutme">
            <h2 className="text-2xl font-extralight tracking-tight text-center relative right-16 top-1">(lees iets)</h2>
            <h1 className="text-4xl font-normal tracking-tight text-center">Over mij.</h1>
            <Divider />
            <p className={`break-words font-normal text-lg tracking-tight my-6 text-left mx-auto ${montserrat.className}`}>
                Hoi! Ik ben Douwe, een {getAge("2004/11/26")} jaar oude student uit Nederland, Drenthe om specifiek te zijn (ja dat gat).
                Ik ben in 2022 begonnen met het leren van programmeren en ben vrijwel direct daarna begonnen met de opleiding Software Development aan het Alfa-College.
                Mijn favoriete kleur is groen, mijn schoenmaat is 44 en mijn favoriete band is Radiohead. <br />
                Weet niet hoeveel je over me wil weten, maar ik schat dat dit wel een solide basis is. Als je meer wil weten over wat ik maak, bekijk wat van mijn projecten hierboven.
                Als je meer wil weten over mij, linksonderin staat m'n email.
            </p>
            <Divider />
        </div>
    )
}