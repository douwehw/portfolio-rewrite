import { ReactNode } from "react";
import { motion } from 'framer-motion';

interface IconLinkProps {
    children: ReactNode;
    href: string;
}

export default function IconLink({ children, href }: IconLinkProps) {
    return (
        <motion.a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25 }} 
            transition={{ type: "spring", duration: 0.035 }}
        >
            {children}
        </motion.a>
    );
}