
import { ReactTyped } from "react-typed"

export default function Greet() {
    return (
        <div className="
        text-center
        text-4xl
        md:text-5xl
        lg:text-6xl
        min-h-fit
        flex-column
        flex-wrap
        font-mono
        font-bold
        p-10
        pt-20">
            <h1 className="text-my-voilet-2">Hi there!</h1>
            <h1 className="text-my-voilet-2">I am Yash</h1>
            <h1>
                {" "}
                <ReactTyped
                    className="text-my-voilet font-semibold"
                    strings={
                        ["Nice to meet you!",
                            "I am a full-stack developer."
                        ]} typeSpeed={100} />
            </h1>
        </div>
    )
}
