// NavigationBar.tsx
import { useState } from "react";

function NavigationBar() {

    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const togglePanel = () => {
        console.log(isPanelOpen);
        setIsPanelOpen(!isPanelOpen);
    }

    return (
        <div>

            <div className="bg-my-blue fixed z-50 top-0 hidden lg:flex justify-end w-full">
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#aboutMe">About Me</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#certificates">Certificates</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#professionalCertificates">Work</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#aptitudeTests">Aptitude</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#education">Education</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#googleCertificates">Google</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#workshopCertificates">Workshop</a>
            </div>
            <div
                onClick={togglePanel}
                className="fixed top-5 z-40 right-5 bg-my-yellow rounded-xl w-11 h-11 visbile lg:hidden">
                <div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                </div>

            </div>
            <div className={`z-40 bg-my-blue-2 fixed left-0 transform transition duration-300 ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'} bottom-10 h-4/5 rounded-r-xl flex flex-col justify-evenly pl-5 pr-5 w-fit`}>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#aboutMe">About Me</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#certificates">Certificates</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#professionalCertificates">Work</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#aptitudeTests">Aptitude</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#education">Education</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#googleCertificates">Google</a>
                <a className="text-my-voilet text-2xl font-semibold font-mono" href="#workshopCertificates">Workshop</a>

            </div>
        </div>
    );
}



export default NavigationBar