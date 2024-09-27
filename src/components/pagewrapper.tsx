import { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="flex flex-col items-center w-full h-fit min-h-screen pt-5">
            {children}
        </div>
    );
}