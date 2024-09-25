import NavButton from "@/components/navbutton";

export default function Bottom() {
    return (
        <div className="text-left dark:text-gray-300 z-50 bottom-0 w-lvw mt-72 flex justify-center isolate bg-navbar/20 dark:bg-navbar-dark/20 shadow-lg ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-lg p-2">
            <div className="grid grid-cols-3 w-full text-center">
                <p className="tracking-tight text-sm p-3 italic text-left">DH. Westerdijk</p>
                <p className="tracking-tight text-lg p-3">Back to top</p>
                <p className="tracking-tight text-sm p-3 italic text-right">Contact</p>
            </div>
        </div>
    );
}