import { EventHandlers } from "@mui/material";
import { EventHandler, SyntheticEvent, useState } from "react";

function NavigationBar() {

    const [onClicked, setOnClicked] = useState(false)

    return (
        <div>
            <div className="bg-my-blue fixed z-50 right-0 top-0 w-100 pt-5 pr-5 hidden lg:block">
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#aboutMe">About Me</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#certificates">Certificates</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#professionalCertificates">Work</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#aptitudeTests">Aptitude</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#education">Education</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#googleCertificates">Google</a>
                <a className="m-2 ml-7 text-my-voilet text-2xl font-semibold font-mono" href="#workshopCertificates">Workshop</a>
            </div>
            <div
                id="test"
                onClick={() => {
                    setOnClicked(!onClicked)
                }}
                className="fixed top-5 z-40 right-5 bg-my-yellow rounded-xl w-11 h-11 visbile lg:hidden">

                <div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                    <div className="bg-my-blue h-1 m-2 rounded"></div>
                </div>

            </div>
            {
                onClicked ?
                    <>
                        <div className="
                        drop-shadow-lg
                        shadow-my-voilet
                        bg-my-blue-2 fixed left-0 bottom-10 w-fit h-4/5 rounded-r-xl flex flex-col justify-evenly pl-5 pr-5">

                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#aboutMe">About Me</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#certificates">Certificates</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#professionalCertificates">Work</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#aptitudeTests">Aptitude</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#education">Education</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#googleCertificates">Google</a>
                            <a className=" text-my-voilet text-2xl font-semibold font-mono" href="#workshopCertificates">Workshop</a>

                        </div></> : <>
                    </>
            }
        </div>
    );
}



export default NavigationBar