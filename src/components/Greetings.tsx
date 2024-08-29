
import { ReactTyped } from "react-typed"

export default function Greet() {
    return (
        <div className="
        text-center
        min-h-72
        md:min-h-60
        lg:min-h-72
        text-4xl md:text-5xl lg:text-6xl
        font-mono
        font-bold
        pt-20">
            <div className="flex flex-row flex-wrap justify-center">

                <h1 className="text-my-voilet-2 px-5">Hi there!</h1>
                <h1 className="text-my-voilet-2 px-5">I am Yash</h1>
            </div>
            <h1 className="px-5">
                {" "}
                <ReactTyped
                    className="text-my-voilet font-semibold"
                    strings={
                        ["Nice to meet you!",
                            "I am a full-stack developer",
                            "I am a android-developer",
                            "I am a software-developer",
                        ]} typeSpeed={75} backSpeed={25} loop />
            </h1>
        </div>
    )
}
