import Divider from "@/components/divider"

export default function AboutMe() {
    return (
        <div className="mt-12 dark:text-gray-300 z-10" id="aboutme">
            <h2 className="text-2xl font-extralight tracking-tight text-center relative right-16 top-1">(lees iets)</h2>
            <h1 className="text-4xl font-normal tracking-tight text-center">Over mij.</h1>
            <Divider className="w-1/3"/>
            <p className="w-1/3 break-words font-normal text-lg tracking-tight my-6 text-left mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ab error excepturi dicta a exercitationem aliquid praesentium optio maxime? In esse quidem nihil sint vitae, officia at. Harum sequi nisi, libero pariatur et alias officiis officia earum debitis excepturi quos molestiae enim impedit, nostrum consequatur vero numquam repellat, praesentium doloremque.
            </p>
        </div>
    )
}