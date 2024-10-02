export default function Divider({ className }: { className?: string }) {
    return (
        <div className={`z-10 my-2 h-px py-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black/30 to-transparent dark:via-white/30 ${className} mx-auto`}></div>
    )
}