import pageStyles from '../page.module.css';
import { useState } from 'react';
import { certificateData, TabInfo } from './data';
import styles from './certificates.module.css';
import Image from 'next/image';

// Extract the names of the tabs from the certificateData array
const tabs: TabInfo[] = certificateData.map(tab => ({
    name: tab.name,
    displayName: tab.displayName,
    certificates: tab.certificates
}));

function Certificates() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].name); // Default to the first tab
    const [activeCertificateIndex, setActiveCertificateIndex] = useState<number>(0);

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
        setActiveCertificateIndex(0); // Reset certificate index when tab changes
    };

    const handleNextCertificate = () => {
        const activeTabCertificates = tabs.find(tab => tab.name === activeTab)?.certificates || [];
        setActiveCertificateIndex((prevIndex) =>
            (prevIndex + 1) % activeTabCertificates.length
        );
    };

    const handlePrevCertificate = () => {
        const activeTabCertificates = tabs.find(tab => tab.name === activeTab)?.certificates || [];
        setActiveCertificateIndex((prevIndex) =>
            (prevIndex - 1 + activeTabCertificates.length) % activeTabCertificates.length
        );
    };

    const activeTabCertificates = tabs.find(tab => tab.name === activeTab)?.certificates || [];
    const activeCertificate = activeTabCertificates[activeCertificateIndex];

    console.log(`/../public/images/certificates/${activeCertificate.file}`);

    return (
        <div id="certificates" className="space-y-10">
            <h1 className={`${pageStyles.section_heading} text-4xl font-bold`}><span className={pageStyles.numbering}>05.</span> Certifications</h1>
            <div className="px-4 md:px-10 lg:px-20">
                <div id="panel"
                    className="flex flex-col  h-auto border-2 border-cyan-500 rounded-t-lg bg-gradient-to-b from-blue-100 to-blue-400">
                    <div className="relative w-full flex flex-col items-center justify-center p-4 gap-y-5">
                        <div className={styles.img_title}>{activeCertificate.title}</div>
                        <div className="relative w-full flex items-center justify-center">
                            {activeCertificate && (

                                <Image
                                    src={`/images/certificates/${activeCertificate.file}`}
                                    alt={activeCertificate.title}
                                    layout="fill" // Fills the parent container
                                    objectFit="contain" // Ensures it doesn't stretch
                                    className="max-w-full max-h-96 h-auto rounded-lg shadow-lg object-contain"
                                />
                            )}
                        </div>
                        <div className="flex justify-between w-full mt-4">
                            <button onClick={handlePrevCertificate} className={styles.img_button}>Previous</button>
                            <button onClick={handleNextCertificate} className="font-bold p-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">Next</button>
                        </div>
                    </div>
                    <div className="flex  w-full  overflow-auto scrollbar scrollbar-track-blue-400 scrollbar-thumb-blue-800">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`p-4 border-x border-t-2 md:p-5 lg:p-6 ${styles.panel_item} text-nowrap text-center cursor-pointer transition-colors duration-300 ${activeTab === tab.name
                                    ? 'bg-cyan-500 text-white'
                                    : 'hover:bg-cyan-100 text-gray-700'
                                    }`}
                                onClick={() => handleTabClick(tab.name)}
                            >
                                {tab.displayName}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
