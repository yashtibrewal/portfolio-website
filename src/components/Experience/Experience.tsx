
import pageStyles from '../page.module.css';
import styles from './experience.module.css';
import Clip from './Clip';
import FadeInSection from '../FadeInSection';
import { useState } from 'react';

function Experience() {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div id="experience" className={pageStyles.section_spacing}>
            <div className={pageStyles.section_heading}><span className={pageStyles.numbering}>03.</span> Experience</div>
            <div className={pageStyles.sub_section_spacing}>
                <FadeInSection>
                    <div className='space-y-2 md:space-y-6'>
                        <div className={`${pageStyles.sub_section_heading}`}>Jr. Full Stack Developer</div>
                        <div className='flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>

                            <div className={styles.company + ' flex items-center'}>
                                <a
                                    className='hover:text-green-500 '
                                    target="_blank" rel="noreferrer" href="https://stylabs.com/">Stylabs</a>
                            </div>
                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1PyG4gS6cHqX22GFwjvtSQi3yMSKuGLML/view?usp=drive_link', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>
                                <span>
                                    Full Time
                                </span>
                                <span className='w-5 h-5'>
                                    <Clip></Clip>
                                </span>
                            </button>

                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1z-JjV17RLEz-9YqkMi4mSlZnlRNMhpUw/view?usp=sharing', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>

                                <span>
                                    Internship
                                </span>
                                <span className='w-5 h-5'>
                                    <Clip></Clip>
                                </span>

                            </button>
                        </div>
                        <div className={pageStyles.description}>
                            During my time at Stylabs Technologies, I played a pivotal role in enhancing backend scalability by developing a TypeScript framework. This framework significantly reduced onboarding time for new team members and decreased overall project costs. I also focused on creating visually appealing and user-friendly interfaces for admin clients using the Vue.js framework, incorporating debouncing techniques and pagination to optimize data consumption per API request, which led to improved network efficiency and cost savings.

                        </div>
                        {
                            !isExpanded &&

                            <div className={pageStyles.description}>

                                In addition ... <a onClick={() => setIsExpanded(true)} className='font-semibold text-green-500 tracking-wider'>read more</a>
                            </div>
                        }

                        {
                            isExpanded &&
                            <div className={pageStyles.description}>

                                In addition, I successfully integrated the Google Places API, employing debouncing strategies to reduce API calls by approximately 33%, thereby minimizing usage costs. My work extended to designing and implementing REST APIs and GraphQL, along with Node.js and Express.js, ensuring efficient backend functionality. I leveraged RabbitMQ for handling memory-intensive tasks like OTP delivery, ensuring task completion even during server downtimes by using RabbitMQ’s task storage capabilities for seamless recovery post-restart.

                            </div>
                        }
                        {
                            isExpanded &&
                            <div className={pageStyles.description}>

                                Furthermore, I utilized Postman for API documentation, which enhanced readability and integration efficiency, contributing to faster project delivery. I also integrated AWS S3 for cloud storage, facilitating faster website rendering and ensuring quick global access to high-definition images. My role included designing and connecting comprehensive database schemas to REST APIs, which played a crucial part in the successful completion of two major projects, demonstrating my full-stack development proficiency across frontend, backend, and database management. <a onClick={() => setIsExpanded(false)} className='font-semibold text-green-500 tracking-wider'>read less</a>

                            </div>

                        }


                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                TypeScript
                            </div>
                            <div className={pageStyles.tag}>
                                VueJs
                            </div>
                            <div className={pageStyles.tag}>
                                Google Places
                            </div>
                            <div className={pageStyles.tag}>
                                REST API
                            </div>
                            <div className={pageStyles.tag}>
                                Swagger
                            </div>
                            <div className={pageStyles.tag}>
                                GraphQL
                            </div>
                            <div className={pageStyles.tag}>
                                Nodejs
                            </div>
                            <div className={pageStyles.tag}>
                                Expressjs
                            </div>
                            <div className={pageStyles.tag}>
                                RabbitMQ
                            </div>
                            <div className={pageStyles.tag}>
                                Postman
                            </div>
                            <div className={pageStyles.tag}>
                                AWS S3
                            </div>
                            <div className={pageStyles.tag}>
                                MongoDB
                            </div>
                            <div className={pageStyles.tag}>
                                Git
                            </div>
                            <div className={pageStyles.tag}>
                                Debouncing
                            </div>
                            <div className={pageStyles.tag}>
                                Pagination
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='space-y-2 md:space-y-6'>
                        <div className={`${pageStyles.sub_section_heading}`}>Android Developer Intern</div>
                        <div className='flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>

                            <div className={styles.company + ' flex items-center'}>
                                <a
                                    className='hover:text-green-500 '
                                    target="_blank" rel="noreferrer" href="https://www.iifl.com/">India Infoline Finance Limited</a>
                            </div>
                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1ZarXI8HjYo9AsqURpeBGHQ2OJHDa-MQ6/view?usp=sharing', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>
                                <span>
                                    Letter
                                </span>
                                <span className='w-5 h-5'>
                                    <Clip></Clip>
                                </span>
                            </button>
                        </div>
                        <div className={pageStyles.description}>
                            <ul className='list-disc pl-4 md:pl-4 lg:pl-6'>
                                <li>
                                    Developed an Android library for creating visually appealing Line and Candlestick charts to display stock prices using Java, gaining experience in Object-Oriented Concepts and Inheritance.
                                </li>
                                <li>
                                    Designed dynamic graphs that adjust based on the container for seamless integration on webpages or mobile apps, enhancing user experience.
                                </li>
                                <li>
                                    Optimized API integration, reducing network load by 95% through real-time data retrieval, resulting in lower server load and cost savings.
                                </li>
                                <li>
                                    Enhanced application performance by implementing memory management techniques, reducing memory leaks, and improving overall efficiency.
                                </li>
                            </ul>
                        </div>
                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                Android
                            </div>
                            <div className={pageStyles.tag}>
                                REST APIs
                            </div>
                            <div className={pageStyles.tag}>
                                Java
                            </div>
                            <div className={pageStyles.tag}>
                                Git
                            </div>
                            <div className={pageStyles.tag}>
                                JSON
                            </div>
                            <div className={pageStyles.tag}>
                                Threads
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>

                    <div className='space-y-2 md:space-y-6'>
                        <div className={`${pageStyles.sub_section_heading}`}>Backend Developer</div>
                        <div className='flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>
                            <div className={styles.company}>Freelance</div>
                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1nrQt3__WdmsLuOQHb_DoJhkZ6Mlqjfyp/view?usp=sharing', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>
                                <span>
                                    Letter
                                </span>
                                <span className='w-5 h-5'>
                                    <Clip></Clip>
                                </span>

                            </button>
                        </div>
                        <div className={pageStyles.description}>
                            I worked as a Backend Developer, focusing on creating robust APIs. My role involved using technologies like JavaScript, Node.js, Express.js, MongoDB, and Swagger for API documentation. I also utilized Git for version control, AWS S3 for image storage, and Postman for API testing. Successfully completed all tasks within the given timeframe, contributing to the project's backend architecture.
                        </div>

                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                            <div className={pageStyles.tag}>
                                REST APIs
                            </div>
                            <div className={pageStyles.tag}>
                                Mongodb
                            </div>
                            <div className={pageStyles.tag}>
                                Git
                            </div>
                            <div className={pageStyles.tag}>
                                JSON
                            </div>
                            <div className={pageStyles.tag}>
                                Swagger
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>

                    <div className="flex flex-col md:flex md:flex-row items-center">
                        <div className="space-y-4 md:space-y-5">
                            <h1 className={pageStyles.sub_section_heading}>Web and Logo Designer</h1>
                            <div className='flex flex-wrap align-items gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>
                                <div

                                    className={styles.company + ' flex items-center'}>
                                    <span>Empeetex</span>
                                </div>
                                <button
                                    onClick={() => window.open('https://drive.google.com/file/d/1FLrbLsB7TkVs2TV9CS9I-Nyxq4vJ_mqq/view?usp=sharing', '_blank', 'noopener, noreferrer')}
                                    className={`${pageStyles.button} flex items-center`}>
                                    <span>
                                        Letter
                                    </span>
                                    <span className='w-5 h-5'>
                                        <Clip></Clip>
                                    </span>
                                </button>
                                <button
                                    onClick={() => window.open('https://empeetex-website.onrender.com/', '_blank', 'noopener, noreferrer')}
                                    className={`${pageStyles.button} flex items-center`}>
                                    <span>
                                        Live Link
                                    </span>
                                    <span className='w-5 h-5'>
                                        <Clip></Clip>
                                    </span>
                                </button>
                            </div>
                            {/* Details */}
                            <p className={pageStyles.description}>
                                I developed a dynamic website tailored to specific requirements, accommodating multiple versions and visual styles. The project involved creating various static website designs through an iterative process, focusing on color choices and content display preferences. Ultimately, I successfully delivered a static website to promote and market the customer's products on an international scale.
                            </p>
                            <p className={pageStyles.description}>
                                In addition, I designed the company logo using vector graphics on Illustrator, ensuring infinite scalability without any loss of quality. A pixel-perfect logo was crucial as it reflects the company's credibility and authenticity.
                            </p>
                            <p className={pageStyles.description}>
                                To further enhance the website, I integrated SVG design, creating an elegant animation that maintained crisp, high-quality visuals across all screen sizes. The use of SVG ensured that the graphics remained sharp and unpixelated, providing a professional and polished appearance.
                            </p>
                            <div className='mx-auto w-full md:w-3/4 lg:w-2/3 2xl:w-1/3'>
                                <img className="h-auto object-contain" src="gif/empeetex.gif" title="Empeetex" alt="Empeetex GIF" />
                            </div>

                            {
                                !isExpanded &&

                                <p className={pageStyles.description}>
                                    I also managed ... <a onClick={() => setIsExpanded(true)} className='font-semibold text-green-500 tracking-wider'>read more</a>
                                </p>
                            }

                            {
                                isExpanded &&
                                <p className={pageStyles.description}>
                                    I also managed the setup and configuration of domain hosting and email hosting services for the company, utilizing platforms like CPanel and Gmail. This setup enabled seamless access to emails via web interfaces, offering the customer a familiar and user-friendly experience.
                                </p>
                            }

                            {
                                isExpanded &&
                                <p className={pageStyles.description}>
                                    Additionally, I took on the responsibility of overseeing an intern's work on reviewing and optimizing the website's code for mobile responsiveness. Through guidance and mentorship, I ensured that the website displayed flawlessly across various mobile devices, significantly enhancing the user experience for mobile users. <a onClick={() => setIsExpanded(false)} className='font-semibold text-green-500 tracking-wider'>read less</a>

                                </p>
                            }
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
                                    Adobe Photoshop
                                </div>
                                <div className={pageStyles.tag}>
                                    Adobe Illustrator
                                </div>
                                <div className={pageStyles.tag}>
                                    Hosting
                                </div>
                                <div className={pageStyles.tag}>
                                    Email Hosting
                                </div>
                                <div className={pageStyles.tag}>
                                    Domain Configuration
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>

                    <div className='space-y-2 md:space-y-6'>
                        <div className={`${pageStyles.sub_section_heading}`}>Technical Intern</div>
                        <div className='flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>

                            <div className={styles.company + ' flex items-center'}>
                                <a
                                    className='hover:text-green-500 '
                                    target="_blank" rel="noreferrer" href="https://neuraltechsoft.com/">NueralTechSoft</a>
                            </div>
                            <div className={`${pageStyles.button} flex items-center`}>
                                <a
                                    target='_blank'
                                    href='https://drive.google.com/file/d/1JlpMsdtB3NxLEQfu36Hqd_tncSwLhVTV/view?usp=drive_link'>
                                    Letter
                                </a>
                                <div className='w-5 h-5'>
                                    <Clip></Clip>
                                </div>

                            </div>
                        </div>
                        <p className={pageStyles.description}>
                            Developed a comprehensive static website tailored to the client's specific needs, ensuring a user-friendly experience and visually appealing design. Additionally, utilized Python to analyze stock market data, delivering valuable insights into stock prices and trends to support informed decision-making.
                        </p>
                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                Python
                            </div>
                            <div className={pageStyles.tag}>
                                AWS EC2
                            </div>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                        </div>
                    </div>
                </FadeInSection>

            </div >
        </div >
    )
}

export default Experience;