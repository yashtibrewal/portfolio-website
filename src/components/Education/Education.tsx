import pageStyles from '../page.module.css';
import Latest from "../Latest";
import styles from './education.module.css';

export default function Education() {

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

My academic and professional experiences have equipped me with a comprehensive understanding of software development and communication skills.`
    }

    return (
        <div id="education"
            className="mx-auto ">
            <div className={pageStyles.section_heading}><span className={pageStyles.numbering}>02.</span> Education</div>
            <div className=" pt-5 md:flex md:justify-around ">
                <div className="md:flex-1 pl-2 sm:pl-6 pt-5 md:pl-8 pr-1">
                    <ol className="relative border-s border-my-voilet-2">
                        <li className="mb-4 md:mb-10 ms-3 md:ms-6 space-y-1.5 md:space-y-3">
                            <span className="absolute flex items-center justify-center w-6 h-7  rounded-full -start-3 ">
                                <svg className={styles.calender_icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className={`${pageStyles.sub_section_heading} flex items-center `}>{masters.title}<Latest></Latest></h3>
                            <div className="flex items-center space-x-2 mb-2 text-slate-50 font-normal ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    id="Location--Streamline-Mynaui"
                                    className={styles.icon}
                                    height={16} width={16} >
                                    <desc>{"Location Streamline Icon: https://streamlinehq.com"}</desc>
                                    <path d="M7.9221875 14.149375C7.6695625 14.329687499999999 7.3304375 14.329687499999999 7.0778125 14.149375C3.437375 11.554562500000001 -0.42618749999999994 6.2171875 3.479625 2.3603750000000003C4.5515 1.3050000000000002 5.995749999999999 0.7140625 7.5 0.7153750000000001C9.00775 0.7153750000000001 10.454437500000001 1.3071875 11.520375000000001 2.359625C15.4261875 6.216374999999999 11.562625 11.5538125 7.9221875 14.150125" strokeWidth={2} />
                                    <path d="M7.5 7.50025C8.6606875 7.50025 9.3860625 6.2438125 8.80575 5.238625C8.536375 4.772125 8.0386875 4.48475 7.5 4.48475C6.339312499999999 4.48475 5.6139375000000005 5.74125 6.19425 6.7463750000000005C6.4635625 7.2128749999999995 6.9613125 7.50025 7.5 7.50025" strokeWidth={2} /></svg>
                                <p className={styles.detail_text}>{masters.location}</p>
                            </div>
                            <div className="flex items-center space-x-2 font-normal uppercase text-slate-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className={styles.icon} viewBox="0 0 24 24"
                                    id="Time-Clock-Circle--Streamline-Ultimate"
                                    height={16} width={16} >
                                    <desc>{"Time Clock Circle Streamline Icon: https://streamlinehq.com"}</desc>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12c0 2.7848 1.10625 5.4555 3.07538 7.4246C6.54451 21.3938 9.21523 22.5 12 22.5c2.7848 0 5.4555 -1.1062 7.4246 -3.0754C21.3938 17.4555 22.5 14.7848 22.5 12c0 -2.78477 -1.1062 -5.45549 -3.0754 -7.42462C17.4555 2.60625 14.7848 1.5 12 1.5c-2.78477 0 -5.45549 1.10625 -7.42462 3.07538C2.60625 6.54451 1.5 9.21523 1.5 12Z" strokeWidth={3} />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V8.25" strokeWidth={3} />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12 12 4.687 4.688" strokeWidth={3} />
                                </svg>
                                <p className={styles.detail_text}>{masters.time}</p>
                            </div>
                            <p className={pageStyles.description}>{masters.body}</p>
                        </li>
                        <li className="mb-1 md:mb-2 ms-3 md:ms-6 space-y-1.5 md:space-y-3">
                            <span className="absolute flex items-center justify-center w-6 h-7  rounded-full -start-3 ">
                                <svg className={styles.calender_icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className={pageStyles.sub_section_heading}>{bachelors.title}</h3><div className="flex items-center space-x-2 mb-2 text-slate-50 font-normal ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    id="Location--Streamline-Mynaui"
                                    className={styles.icon}
                                    height={16} width={16} >
                                    <desc>{"Location Streamline Icon: https://streamlinehq.com"}</desc>
                                    <path d="M7.9221875 14.149375C7.6695625 14.329687499999999 7.3304375 14.329687499999999 7.0778125 14.149375C3.437375 11.554562500000001 -0.42618749999999994 6.2171875 3.479625 2.3603750000000003C4.5515 1.3050000000000002 5.995749999999999 0.7140625 7.5 0.7153750000000001C9.00775 0.7153750000000001 10.454437500000001 1.3071875 11.520375000000001 2.359625C15.4261875 6.216374999999999 11.562625 11.5538125 7.9221875 14.150125" strokeWidth={2} />
                                    <path d="M7.5 7.50025C8.6606875 7.50025 9.3860625 6.2438125 8.80575 5.238625C8.536375 4.772125 8.0386875 4.48475 7.5 4.48475C6.339312499999999 4.48475 5.6139375000000005 5.74125 6.19425 6.7463750000000005C6.4635625 7.2128749999999995 6.9613125 7.50025 7.5 7.50025" strokeWidth={2} /></svg>
                                <p className={styles.detail_text}>{bachelors.location}</p>
                            </div>
                            <div className="flex items-center space-x-2 uppercase  text-slate-100 ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className={styles.icon} viewBox="0 0 24 24"
                                    id="Time-Clock-Circle--Streamline-Ultimate"
                                    height={16} width={16} >
                                    <desc>{"Time Clock Circle Streamline Icon: https://streamlinehq.com"}</desc>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12c0 2.7848 1.10625 5.4555 3.07538 7.4246C6.54451 21.3938 9.21523 22.5 12 22.5c2.7848 0 5.4555 -1.1062 7.4246 -3.0754C21.3938 17.4555 22.5 14.7848 22.5 12c0 -2.78477 -1.1062 -5.45549 -3.0754 -7.42462C17.4555 2.60625 14.7848 1.5 12 1.5c-2.78477 0 -5.45549 1.10625 -7.42462 3.07538C2.60625 6.54451 1.5 9.21523 1.5 12Z" strokeWidth={3} />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V8.25" strokeWidth={3} />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12 12 4.687 4.688" strokeWidth={3} /></svg>
                                <p className={styles.detail_text}>{bachelors.time}</p>
                            </div>
                            <p className={pageStyles.description}>{bachelors.body}</p>
                        </li>
                    </ol>
                </div>

            </div>
        </div >
    )
}