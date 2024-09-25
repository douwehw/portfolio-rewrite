import { FaSpotify, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconLink from '@/components/iconlink';

export default function Name() {
    return (
        <div className="mt-32 dark:text-gray-300 z-10">
            <h1 className="text-5xl font-semibold tracking-tighter">Douwe Westerdijk.</h1>
            <h2 className="text-2xl font-extralight relative bottom-1 left-72">(software dev)</h2>

            <div className="flex space-x-1 relative bottom-7 right-2">
                <IconLink href="https://open.spotify.com/user/quzalp2snf12okvqpdv1lzgpp?si=81e9194fed9b42b8">
                    <FaSpotify className="text-green-500" size={35} />
                </IconLink>
                <IconLink href="https://github.com/douwehw">
                    <FaGithub className="text-gray-800 dark:text-white" size={35} />
                </IconLink>
                <IconLink href="www.linkedin.com/in/douwe-westerdijk-1a4bb8312">
                    <FaLinkedin className="text-blue-700" size={35} />
                </IconLink>
            </div>
        </div>
    )
}