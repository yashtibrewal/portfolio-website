import GetInTouch from "./Buttons/GetInTouch";
import CheckMark from "./CheckMark";
import FadeInSection from "./FadeInSection";
import Footer from "./Footer";
import pageStyles from './page.module.css';
import styles from './services.module.css';
import Link from 'next/link';

function Services() {

    const services = [

        'Adding web presence to your brand',
        'Creating custom softwares to simplify your workflow',
        'Website and Mobile App Development',
        'Developer for hire'

    ]

    return (
        <>
            <div className={pageStyles.pagePadding}>

                {/* Gradient Background */}
                <div className={pageStyles.bg_gradient} />


                <div className={pageStyles.section_spacing}>

                    {/* Hero Page */}
                    <div className="min-h-screen flex items-center space-y-10 w-full">
                        <div className="space-y-10">

                            <div className={`text-center md:text-start ${pageStyles.section_heading}`}>
                                <span className="font-bold">
                                    Your Growth, My Priority
                                </span>
                            </div>
                            <div className={`${pageStyles.sub_section_heading} ${pageStyles.sub_section_spacing}`}>
                                <ul className=" flex-col space-y-5">
                                    {services.map((service, index) => {
                                        return <li key={index} className="flex items-center gap-x-5 font-semibold">
                                            <FadeInSection>
                                                <CheckMark />
                                            </FadeInSection>
                                            {service}
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <FadeInSection>
                                <div className={`${pageStyles.sub_section_spacing}`}>
                                    <div className="flex flex-wrap gap-y-5 gap-x-5 w-fit">
                                        <GetInTouch />
                                        <Link
                                            className="mx-auto w-fit px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-bold text-sm md:text-base lg:text-lg xl:text-xl"
                                            href={"/"}                >
                                            Checkout my portfolio
                                        </Link>
                                    </div>
                                </div>
                            </FadeInSection>

                        </div>
                    </div>


                    {/* Services */}
                    <div className={pageStyles.section_spacing}>
                        <FadeInSection>

                            <div className="space-y-5">

                                <div className={pageStyles.sub_section_heading}>
                                    <span className="text-green-500">01.</span> {services[0]}
                                </div>
                                <p className={pageStyles.description}>
                                    Adding web presence to your brand means giving your business the visibility it deserves. In today’s digital world, having a professional online platform helps you reach more customers, build trust, and create lasting connections. From a user-friendly website to engaging mobile experiences, a strong web presence ensures that your brand is accessible, credible, and positioned for growth.
                                </p>
                                <div className={styles.tag_container}>
                                    <div className={styles.tag}>Reach More Customers</div>
                                    <div className={styles.tag}>Build Your Online Identity</div>
                                    <div className={styles.tag}>Boost Brand Visibility</div>
                                    <div className={styles.tag}>Expand Your Audience</div>
                                    <div className={styles.tag}>Stay Accessible 24/7</div>
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>

                            <div className="space-y-5">

                                <div className={pageStyles.sub_section_heading}>
                                    <span className="text-green-500">02.</span> {services[1]}
                                </div>
                                <p className={pageStyles.description}>
                                    I specialize in designing tailored software solutions that streamline your business processes, saving you time and effort. By automating tasks and improving efficiency, my custom software allows you to focus on what truly matters – growing your business.
                                </p>
                                <div className={styles.tag_container}>
                                    <div className={styles.tag}>Simplify Your Workflow</div>
                                    <div className={styles.tag}>Save Time and Effort</div>
                                    <div className={styles.tag}>Automate Routine Tasks</div>
                                    <div className={styles.tag}>Focus on Business Growth</div>
                                    <div className={styles.tag}>Tailored Solutions for You</div>
                                    <div className={styles.tag}>Reduce Manual Work</div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection>

                            <div className="space-y-5">

                                <div className={pageStyles.sub_section_heading}>
                                    <span className="text-green-500">03.</span> {services[2]}
                                </div>
                                <p className={pageStyles.description}>
                                    I create user-friendly websites and mobile apps that not only look great but work seamlessly across devices. Whether you need a new website to attract customers or a mobile app to keep your business accessible, I deliver solutions that enhance your digital presence.
                                </p>
                                <div className={styles.tag_container}>
                                    <div className={styles.tag}>User-Friendly Design</div>
                                    <div className={styles.tag}>Mobile and Web Solutions</div>
                                    <div className={styles.tag}>Keep Your Business Accessible</div>
                                    <div className={styles.tag}>Cross-Device Compatibility</div>
                                    <div className={styles.tag}>Professional Website Design</div>
                                    <div className={styles.tag}>Mobile App Development</div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection>

                            <div className="space-y-5">

                                <div className={pageStyles.sub_section_heading}>
                                    <span className="text-green-500">04.</span> {services[3]}
                                </div>
                                <p className={pageStyles.description}>
                                    Looking for a dedicated developer to bring your ideas to life? With expertise in building tailored web and mobile applications, I provide reliable and high-quality development services to meet your specific business needs.
                                </p>
                                <div className={styles.tag_container}>
                                    <div className={styles.tag}>Dedicated Developer for Hire</div>
                                    <div className={styles.tag}>Full Stack Expertise</div>
                                    <div className={styles.tag}>Scalable Web Solutions</div>
                                    <div className={styles.tag}>Tailored Web Applications</div>
                                    <div className={styles.tag}>Reliable Development Services</div>
                                    <div className={styles.tag}>Business-Specific Solutions</div>
                                </div>
                            </div>
                        </FadeInSection>

                    </div>

                    {/* Testimonials */}
                    <div className={`${pageStyles.section_spacing} pb-10`}>
                        <div className={pageStyles.sub_section_heading}>
                            Testimonials
                        </div>
                        <div className={`    ${pageStyles.sub_section_spacing}`}>
                            <div className={styles.card}>
                                <p className={pageStyles.description}>&quot;Yash exhibited effective communication skills, ensuring the timely completion of project requirements.&quot;
                                    <span className="flex w-full justify-end font-semibold text-cyan-200">- Full Stack Developer (Stylabs)</span>
                                </p>
                            </div>
                            <div className={styles.card}>
                                <p className={pageStyles.description}>&quot;He displayed attentiveness and a feedback-oriented approach, grasping the concepts from users&apos; viewpoint.&quot;
                                    <span className="flex w-full justify-end font-semibold text-cyan-200">- UI/UX Professor (NMIMS)</span>

                                </p>
                            </div>
                            <div className={styles.card}>
                                <p className={pageStyles.description}>
                                &quot;He worked on REST APIs on Loopback. He was able to complete his takes in a timely manner. He suggested guard conditions which would make the REST APIs more robust with respect to edge cases.&quot;
                                    <span className="flex w-full justify-end font-semibold text-cyan-200">- Lead Engineer (Stylabs)</span>
                                </p>
                            </div>
                            <div className={styles.card}>
                                <p className={pageStyles.description}>
                                &quot;He had impressed me with this skills in Java and Android.&quot;
                                    <span className="flex w-full justify-end font-semibold text-cyan-200">- Tech Lead (IIFL)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>

        </>
    )
}

export default Services;