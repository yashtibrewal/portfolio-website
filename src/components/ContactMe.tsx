import { useEffect, useState } from "react";

function ContactMe() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set visibility to true after component has mounted
        setIsVisible(true);
    }, []);
    return (

        <div
            className={`transition-opacity duration-5000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ height: isVisible ? "auto" : 0, overflow: "hidden" }}
        >
            <div id="contactMe" className="flex justify-evenly  md:pl-48 md:pr-48 lg:pl-60 lg:pr-60 mt-5">
                {/* <span className=''><a className='' href='mailto:yashtibrewal.in@gmail.com'>Email</a></span>
            <span className=''><a className='' href='tel:+13528713427'>Phone</a></span> */}
                {/* <div className="bg-my-blue-2 text-my-voilet-2 rounded-full pl-5 pr-5 flex justify-center items-center">
                Contact me here
                <svg className="w-8 stroke-my-voilet-2"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div> */}

                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/yash-tibrewal/'>
                    <svg className="w-10 md:w-12 lg:w-14 fill-my-blue-2 animate-pulse" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="-143 145 512 512" >
                        <g>
                            <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
		c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
		c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
		c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
		c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"/>
                            <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                            <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
		C45.1,284.9,33.8,273,15.4,273z"/>
                            <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
		c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"/>
                        </g>
                    </svg>
                </a>
                <a target="_blank" rel="noreferrer" href='https://github.com/yashtibrewal'>
                    <svg className="w-10 md:w-12 lg:w-14 fill-my-blue-2  animate-pulse"
                        viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        </defs>
                        <path
                            d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
                    </svg>
                </a>
                <a target="_blank" rel="noreferrer" href='https://www.hackerrank.com/profile/yashtibrewal'>
                    <svg className="w-10 md:w-12 lg:w-14 fill-my-blue-2  animate-pulse" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z" /></svg>
                </a>
            </div>
        </div>
    )
}

export default ContactMe;