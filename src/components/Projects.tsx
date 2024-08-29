import { Heading } from "./SectionHeading";


function Projects() {
    return (
        <div id="projects" className="space-y-10">
            <Heading heading="Projects"></Heading>
            <div className="px-10 space-y-16">
                <div className="flex items-center">
                    <div className="w-1/2 space-y-3">
                        <h1 className="text-2xl font-bold text-white">Pulse Pricing Page</h1>
                        <div className="space-x-3">
                            <a
                                className="inline-block w-fit animate-pulse text-my-blue px-2 py-1 hover:animate-none hover:bg-white bg-white rounded-lg"
                                target="_blank" href="https://pulse-pricing-mock.onrender.com/">Live Project link</a>
                            <a
                                className="inline-block w-fit text-my-blue px-2 py-1 bg-slate-400 hover:bg-white rounded-lg"
                                target="_blank" href="https://github.com/yashtibrewal/pulse-pricing-mock?tab=readme-ov-file">Github</a>
                        </div>
                        {/* Details */}
                        <p className="tracking-tight text-justify text-slate-50">
                            For this project, I recreated the pricing page of Pulse, a popular app, using Tailwind CSS.
                            The goal was to closely mirror the original design found at Pulse Pricing,
                            showcasing my ability to accurately replicate web designs using modern CSS frameworks.
                            This mock page demonstrates my proficiency in web development, particularly in applying Tailwind
                            CSS to build responsive and visually appealing interfaces.
                        </p>
                        <div className="flex space-x-2">
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500 ">
                                HTML
                            </div>
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500">
                                CSS
                            </div>
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500">
                                Javascript
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div className="flex justify-center items-center">
                            <img className="w-3/4 h-auto object-contain" src="desktop-mockup-pulse-pricing.png" alt="Desktop mockup of Pulse pricing page" />
                            <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src="mobile-mockup-pulse-pricing.png" alt="Mobile mockup of Pulse pricing page" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/2 space-y-3">
                        <h1 className="text-2xl font-bold text-white">Podia Product Page</h1><div className="space-x-3">
                            <a
                                className="inline-block w-fit animate-pulse text-my-blue px-2 py-1 hover:animate-none hover:bg-white bg-white rounded-lg"
                                target="_blank" href="https://podia-products-mockup.onrender.com/">Live Project link</a>
                            <a
                                className="inline-block w-fit text-my-blue px-2 py-1 bg-slate-400 hover:bg-white rounded-lg"
                                target="_blank" href="https://github.com/yashtibrewal/podia-products-mockup">Github</a>
                        </div>
                        {/* Details */}
                        <p className="tracking-tight text-justify text-slate-50">
                            For this project, I recreated the products page of Podia, a popular app, using Tailwind CSS.
                            The goal was to closely mirror the original design found at Podia Prodcuts Page,
                            showcasing my ability to accurately replicate web designs using modern CSS frameworks.
                            This mock page demonstrates my proficiency in web development, particularly in applying Tailwind
                            CSS to build responsive and visually appealing interfaces.
                        </p>
                        <div className="flex space-x-2">
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500">
                                HTML
                            </div>
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500">
                                CSS
                            </div>
                            <div className="uppercase text-sm tracking-wide font-semibold w-fit p-2 rounded-lg text-my-blue bg-cyan-500">
                                Javascript
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div className="flex justify-center items-center">
                            <img className="w-3/4 h-auto object-contain" src="desktop-mockup-podia-product.png" alt="Desktop mockup of Pulse pricing page" />
                            <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src="mobile-mockup-podia-product.png" alt="Mobile mockup of Pulse pricing page" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects;