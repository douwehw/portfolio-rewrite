import { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="flex flex-col items-center w-full h-fit min-h-screen p-5 bg-primary-light dark:bg-primary-dark">
            {children}
        </div>
    );
}