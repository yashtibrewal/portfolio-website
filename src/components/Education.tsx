import { useEffect, useState } from "react";

export default function Education() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set visibility to true after component has mounted
        setIsVisible(true);
    }, []);

    const masters = {
        title: "M.Sc. in Computer Science ",
        location: "University of Florida, GNV, FL, U.S.A",
        time: "Aug 2021 - Dec 2023",
        body: "During my master's program, I engaged in mini-projects, applying newly acquired skills in practical scenarios. My mini-projects included a backend development in Java for mini bit-torrent project in computer networking and a survey paper in an advanced computer networking course. I also opted for subjects that involved hands-on coding using machine learning libraries, enhancing my proficiency in the field."
    }

    const bachelors = {
        title: "B.Tech. in Information Technology",
        location: "NMIMS University, BOM, MH, INDIA",
        time: "Aug 2015 - May 2019",
        body: `I completed my Bachelors of Technology in Information Technology from NMIMS, Mumbai. My professional experience began with an technical internship at IIFL Finance, where I contributed to the creation of a stock market data display in native Android Canvas API.

My academic and professional experiences have equipped me with a comprehensive understanding of software development and communication skills. I am eager to contribute my skills as a full-stack developer to a forward-thinking company, making processes more efficient and creating innovative solutions.`
    }

    return (
        <div id="education" 
            className={`transition-opacity duration-5000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ height: isVisible ? "auto" : 0, overflow: "hidden" }}
        >
            <br></br>
            <br></br>
            <h1 className="underline underline-offset-8 text-4xl ml-3 md:ml-5 lg:ml-6 font-semibold text-my-yellow">Education</h1>
            <div className="min-h-fit pt-5 md:flex md:justify-around ">
                <div className="md:flex-1 pl-6 pt-5 md:pl-8 pr-1">
                    <ol className="relative border-s border-my-voilet-2">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8  ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-my-voilet-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold  text-my-yellow">{masters.title}<span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-my-blue-2 text-my-voilet-2 ms-3">Latest</span></h3>
                            <h4 className="block mb-2 text-sm font-normal leading-none text-my-voilet">{masters.location}</h4>
                            <h4 className="block mb-2 text-xs font-normal leading-none text-my-voilet">{masters.time}</h4>
                            <p className="mb-4 text- font-normal text-my-voilet-2">{masters.body}</p>
                        </li>
                        <li className="mb-2 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8  ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-my-voilet-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold  text-my-yellow">{bachelors.title}</h3>
                            <h4 className="block mb-2 text-sm font-normal leading-none text-my-voilet">{bachelors.location}</h4>
                            <h4 className="block mb-2 text-xs font-normal leading-none text-my-voilet">{bachelors.time}</h4>
                            <p className="mb-4 text- font-normal text-my-voilet-2">{bachelors.body}</p>
                        </li>
                    </ol>
                </div>

                <div className="md:flex-1 ">
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7144758168923901952"
                        className="border-my-blue w-full min-h-96 md:min-h-full p-2 md:pb-5"
                        allowFullScreen={true}
                        title="Embedded post">
                    </iframe>
                </div>


            </div>
        </div>
    )
}