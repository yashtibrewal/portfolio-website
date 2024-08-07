
import { ReactTyped } from "react-typed"

export default function Greet() {
    return (
        <div className="bg-my-blue
        text-my-yellow
        min-h-screen
        text-center
        text-3xl
        md:text-5xl
        h-96
        flex
        justify-center
        items-center
        font-mono
        font-bold
        p-10">
            <h1>
                Hi there!{" "}
                <ReactTyped strings={["I am Yash, nice to meet you!",
                    "I am Yash, I am a full-stack developer."
                ]} typeSpeed={100} />
            </h1>
        </div>
    )
}
