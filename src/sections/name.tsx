import { FaSpotify, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconLink from '@/components/iconlink';

export default function Name() {
    return (
        <div className="mt-32 dark:text-gray-300 select-none z-10">
            <h1 className="md:text-5xl text-4xl font-semibold tracking-tighter">Douwe Westerdijk.</h1>
            <h2 className="md:text-2xl text-xl font-extralight relative bottom-1 md:left-72 left-48">(software dev)</h2>

            <div className="flex space-x-1 relative bottom-7 right-2">
                <IconLink href="https://open.spotify.com/user/quzalp2snf12okvqpdv1lzgpp?si=81e9194fed9b42b8">
                    <FaSpotify className="text-green-500" size={30} />
                </IconLink>
                <IconLink href="https://github.com/douwehw">
                    <FaGithub className="text-gray-800 dark:text-white" size={30} />
                </IconLink>
                <IconLink href="www.linkedin.com/in/douwe-westerdijk-1a4bb8312">
                    <FaLinkedin className="text-blue-700" size={30} />
                </IconLink>
            </div>
        </div>
    )
}