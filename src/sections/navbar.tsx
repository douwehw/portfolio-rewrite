import NavButton from "@/components/navbutton";

interface NavbarProps {
    themeHandler: () => void;
    currentTheme: string;
}

export default function Navbar({ themeHandler, currentTheme }: NavbarProps) {
    return (
            <div className="dark:text-gray-300 z-50 fixed rounded-xl flex justify-between space-x-1 md:space-x-3 items-center isolate bg-navbar/20 dark:bg-navbar-dark/20 shadow-lg ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-md">
                <NavButton scrollTo="" special={true} onClick={themeHandler}> {currentTheme === "dark" ? '🌚' : '🌞'}</NavButton>
                <NavButton scrollTo="projects" >Projects</NavButton>
                <NavButton scrollTo="aboutme">About Me</NavButton>
                <NavButton scrollTo="top">Home</NavButton>
            </div>
    );
}


