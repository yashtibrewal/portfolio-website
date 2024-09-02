
import { ReactTyped } from "react-typed"

export default function Greet() {


    return (
        <div className="
        
        text-center
        min-h-72
        md:min-h-60
        lg:min-h-80
        xl:min-h-96
        
        font-mono
        font-bold
        space-y-5
        md:space-y-6
        lg:space-y-8
        xl:space-y-10
        pt-20">
            <div className="flex flex-row flex-wrap justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                <h1 className="text-my-voilet-2 px-5">Hi there!</h1>
                <h1 className="text-my-voilet-2 px-5">I am Yash</h1>
            </div>
            <div className="flex justify-center ">

                <div className="bg-gray-900 p-4 rounded-md shadow-lg w-fit
                text-my-voilet text-left text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-mono">
                    <span className="text-green-400">const</span> me = <br />
                    <div className="pl-2 md:pl-5 lg:pl-8 xl:pl-10 2xl:pl-14">
                        <span className=" text-slate-200"><span className="text-blue-500">[</span>'full-stack',</span>
                        <span className=" text-slate-200"> 'android',</span>
                        <span className=" text-slate-200"> 'software'<span className="text-blue-500">]</span></span>
                    </div>
                    <span className="pl-4 md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-28">
                        .<span className="text-orange-500">map</span>((
                        <span className="text-yellow-500">role</span>)=&gt;
                        <span className="text-yellow-500">role</span>+
                        <span className="text-slate-200">'developer'</span>);
                    </span>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                {" "}
                <ReactTyped
                    startWhenVisible
                    className="text-my-voilet font-semibold"
                    strings={
                        [
                            "Nice to meet you!",
                        ]} typeSpeed={50} backSpeed={15} />
            </h1>
        </div >
    )
}
