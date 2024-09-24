import { ReactNode } from "react";

interface NavbarProps {
    themeHandler: () => void;
    currentTheme: string;
}

interface NavButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export default function Navbar({ themeHandler, currentTheme }: NavbarProps) {
    return (
        <div className="bg-navbar dark:bg-navbar-dark dark:text-gray-300 z-5 fixed navbar-shadow backdrop-blur-md bg-opacity-50 rounded-xl flex justify-between space-x-3 items-center">
            <NavButton onClick={themeHandler}> {currentTheme === "dark" ? '🌞' : '🌚'}</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Home</NavButton>
            <NavButton>About Me</NavButton>
        </div>
    );
}


const NavButton = ({ children, onClick }: NavButtonProps) => {
    return (
        <button className={`p-3 py-4 rounded-xl text-lg hover:bg-opacity-5 hover:dark:bg-opacity-5 hover:bg-black hover:dark:bg-white active:text-base active:px-4 font-medium`} onClick={onClick}>
            <p className="text">{children}</p>
        </button>
    );
}