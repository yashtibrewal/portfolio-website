import { ReactTyped } from "react-typed";
import FadeInSection from "./FadeInSection";
import Profiles from "./Profiles/Profiles";

export default function Greet() {
    return (
        <div className="min-h-screen flex flex-col justify-around">

            <div className="flex flex-col md:flex-row items-center justify-around grow lg:gap-x-10">

                <div className="flex flex-col justify-evenly items-center  font-mono font-bold space-y-5">

                    <FadeInSection>
                        <div className="flex  gap-2 md:gap-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                            <div className="text-blue-400">Hi there!</div>
                            <div className="text-blue-400">I am Yash</div>
                        </div>
                    </FadeInSection>

                    <div className="flex justify-center">
                        <div className="leading-5 bg-gray-900 p-4 rounded-md shadow-lg w-fit text-blue-500 text-left text-xs md:text-base lg:text-xl xl:text-2xl font-mono">
                            <span className="text-green-400">const</span> me = <br />
                            <div className="pl-2 md:pl-5 lg:pl-8 xl:pl-10 2xl:pl-14">
                                <span className="text-slate-200">
                                    <span className="text-blue-500">[</span>
                                    'full-stack', 'android', 'software'
                                    <span className="text-blue-500">]</span>
                                </span>
                            </div>
                            <span className="pl-4 md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-28">
                                .<span className="text-orange-500">map</span>(
                                <span className="text-yellow-500">role</span>=&gt;
                                <span className="text-yellow-500">role</span>+
                                <span className="text-slate-200">'developer'</span>);
                            </span>
                        </div>
                    </div>

                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                        <ReactTyped
                            startWhenVisible
                            className="text-blue-400 font-semibold"
                            strings={["Nice to meet you!"]}
                            typeSpeed={50}
                            backSpeed={15}
                        />
                    </div>
                </div>

            </div>

            <div className="pb-20">
                <Profiles />
            </div>
        </div>
    );
}
