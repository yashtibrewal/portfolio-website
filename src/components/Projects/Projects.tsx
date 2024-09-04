import pageStyles from '../page.module.css';
import FadeInSection from '../FadeInSection';
import Latest from '../Latest';

function Projects() {
    return (
        <div id="projects" className="space-y-10">
            <div className={pageStyles.section_heading}><span className={pageStyles.numbering}>04.</span> Projects</div>
            <div className={pageStyles.sub_section_spacing}>
                <FadeInSection>
                    <div className='flex flex-col space-y-4 md:space-y-5'>
                        <h1 className={`${pageStyles.sub_section_heading} flex items-center`}>Pulse Pricing Page Clone <Latest></Latest></h1>

                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://pulse-pricing-mock.onrender.com/">Live link</a>
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/yashtibrewal/pulse-pricing-mock?tab=readme-ov-file">Github</a>
                                </div>
                                {/* Details */}
                                <p className={pageStyles.description}>
                                    For this project, I recreated the <a target="_blank" rel="noreferrer" href="https://pulseapp.com/pricing" className="underline underline-offset-2">pricing page of Pulse</a>, a popular app, using Tailwind CSS.
                                    The goal was to closely mirror the original design found at Pulse Pricing,
                                    showcasing my ability to accurately replicate web designs using modern CSS frameworks.
                                    This mock page demonstrates my proficiency in web development, particularly in applying Tailwind
                                    CSS to build responsive and visually appealing interfaces.
                                </p>
                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src="images/projects/desktop-mockup-pulse-pricing.png"
                                        title="Desktop mockup of Pulse pricing page" alt="Desktop mockup of Pulse pricing page" />
                                    <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src="images/projects/mobile-mockup-pulse-pricing.png"
                                        title="Mobile mockup of Pulse pricing page" alt="Mobile mockup of Pulse pricing page" />
                                </div>
                            </div>
                        </div>
                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                            <div className={pageStyles.tag}>
                                Frontend
                            </div>
                            <div className={pageStyles.tag}>
                                Hosting
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='flex flex-col  space-y-4 md:space-y-5'>
                        <h1 className={pageStyles.sub_section_heading}>Podia Product Page Clone</h1>

                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://podia-products-mockup.onrender.com/">Live link</a>
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/yashtibrewal/podia-products-mockup">Github</a>
                                </div>
                                {/* Details */}
                                <p className={pageStyles.description}>
                                    For this project, I recreated the <a target="_blank" rel="noreferrer" href="https://www.podia.com/digital-products" className="underline underline-offset-2">products page of Podia</a>, a popular app, using Tailwind CSS.
                                    The goal was to closely mirror the original design found at Podia Prodcuts Page,
                                    showcasing my ability to accurately replicate web designs using modern CSS frameworks.
                                    This mock page demonstrates my proficiency in web development, particularly in applying Tailwind
                                    CSS to build responsive and visually appealing interfaces.
                                </p>
                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src="images/projects/desktop-mockup-podia-product.png" title="Desktop mockup of Podia Product page" alt="Desktop mockup of Podia Product page" />
                                    <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src="images/projects/mobile-mockup-podia-product.png" title="Mobile mockup of Podia product page" alt="Mobile mockup of Podia product page" />
                                </div>
                            </div>
                        </div>

                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                            <div className={pageStyles.tag}>
                                Frontend
                            </div>
                            <div className={pageStyles.tag}>
                                Hosting
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='space-y-4 md:space-y-5'>
                        <h1 className={pageStyles.sub_section_heading}>Spam Number Detection</h1>
                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/yashtibrewal/number-spam-detector-backend">Github</a>

                                </div>
                                {/* Details */}
                                <p className={pageStyles.description}>
                                    The Phone Number Spam Reporting App allows users to register, report spam phone numbers, and search for potential spam activity. Users can mark numbers as spam, with the likelihood of spam categorized from Low to Very High based on the frequency of reports. The app ensures secure user authentication, offers rate-limited search functionality, and provides a comprehensive API for interacting with the system. Documentation is available to guide users through the setup and usage of the application.
                                </p>
                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src="images/projects/spam-number-detection-code.png"
                                        title="Spam Number Detection Code"
                                        alt="Spam Number Detection Code" />
                                </div>
                            </div>
                        </div>

                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                Nodejs
                            </div>
                            <div className={pageStyles.tag}>
                                Expressjs
                            </div>
                            <div className={pageStyles.tag}>
                                Typescript
                            </div>
                            <div className={pageStyles.tag}>
                                Scaling
                            </div>
                            <div className={pageStyles.tag}>
                                MYSQL
                            </div>
                            <div className={pageStyles.tag}>
                                Backend
                            </div>
                        </div>
                    </div>
                </FadeInSection>

            </div>
        </div>
    )
}

export default Projects;