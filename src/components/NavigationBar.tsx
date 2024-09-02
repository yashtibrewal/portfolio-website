// NavigationBar.tsx
import { useEffect, useState } from "react";
import eventEmitter from "../CustomEventEmitter";

function NavigationBar() {

    const [isPanelOpen, setIsPanelOpen] = useState(false)

    useEffect(() => {

        const eventListener = () => {
            setIsPanelOpen(false);
        };

        eventEmitter.on('panelClosed', eventListener);

        return () => {
            eventEmitter.off('panelClosed', eventListener);
        };
    },[])

    const togglePanel = () => {
        eventEmitter.emit('panelToggled', !isPanelOpen);
        setIsPanelOpen(!isPanelOpen);
    }
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div>
            <div
                onClick={togglePanel}
                className="fixed top-5 z-40 right-5 bg-my-yellow rounded-xl p-2 visbile ">
                <div>
                    <div className="text-my-blue font-semibold min-w-5 flex justify-center items-center">
                        {isPanelOpen ? 'X' : 'Menu'}
                    </div>
                </div>

            </div>
            <div className=
                {`z-40 border-my-blue border-y-8 border-r-8 bg-my-blue-2 fixed left-0 transform transition duration-300 ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'}
             bottom-10 min-h-fit rounded-r-xl flex flex-col pl-5 pr-5 w-fit`}>
                <div>
                    <div>
                        <div className="mt-5 ml-5 text-blue-600 text-lg"> Menu Items </div>
                    </div>
                    <div onClick={togglePanel} className="text-blue-400 p-5 text-xl font-mono font-semibold">
                        <div className="block" onClick={() => scrollToSection("education")}>Education</div><hr></hr>
                        <div className="block mt-3" onClick={() => scrollToSection("aboutMe")}>About Me</div><hr></hr>
                        <div className="block mt-3" onClick={() => scrollToSection("certificates")}>Certificates</div><hr></hr>
                        <div className="block mt-3" onClick={() => scrollToSection("professionalCertificates")}>Work</div><hr></hr>
                        {/* <div className="" onClick={() => scrollToSection("aptitudeTests")>Aptitude</div> */}
                        {/* <div className="" onClick={() => scrollToSection("googleCertificates")>Google</div> */}
                        {/* <div className="" onClick={() => scrollToSection("workshopCertificates")>Workshop</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default NavigationBar