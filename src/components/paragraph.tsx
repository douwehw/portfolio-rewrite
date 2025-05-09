import { montserrat } from "@/util/font"
import { ReactNode } from "react"

interface ParagraphProps {
    children: ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
    return (
        <div className="flex items-start">
            <p className={`break-words font-normal text-lg tracking-tight my-6 text-left ${montserrat.className}`}>
            {children}
            </p>
        </div>
    )
}
