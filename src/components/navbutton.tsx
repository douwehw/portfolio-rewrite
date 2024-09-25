import { ReactNode } from "react";

interface NavButtonProps {
    children: ReactNode;
    onClick?: () => void;
    scrollTo?: string;
    special?: boolean;
}

export default function NavButton({ children, onClick, special, scrollTo }: NavButtonProps) {
    return (
        <a href={`#${scrollTo}`} className={`p-3 py-4 rounded-xl cursor-pointer text-lg hover:bg-black/5 hover:dark:bg-white/5 active:text-base active:px-4 font-medium ${special && "shadow-lg ring-2 ring-black/5 dark:ring-white/10"}`} onClick={onClick}>
            <p className="">{children}</p>
        </a>
    );
}