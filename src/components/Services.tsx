import Footer from "./Footer";
import pageStyles from './page.module.css';
import styles from './services.module.css';

function Services() {

    const services = [

        'Adding web presence to your brand',
        'Creating custom softwares to simplify your workflow',
        'Website and Mobile App Development',
        'Developer for hire'

    ]

    return (
        <div className={pageStyles.pagePadding}>

            {/* Gradient Background */}
            {/* <div className={pageStyles.bg_gradient} /> */}


            <div
                className="flex-col space-y-10">
                <div>
                    <div className="text-6xl font-bold">
                        Your Growth, My Priority
                    </div>
                    <div>
                        <ul>
                            {services.map((service, index) => {
                                return <li key={index}>{service}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {services[0]}
                    </div>
                    <p>
                        Adding web presence to your brand means giving your business the visibility it deserves. In today’s digital world, having a professional online platform helps you reach more customers, build trust, and create lasting connections. From a user-friendly website to engaging mobile experiences, a strong web presence ensures that your brand is accessible, credible, and positioned for growth.
                    </p>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {services[1]}
                    </div>
                    <p>
                        I specialize in designing tailored software solutions that streamline your business processes, saving you time and effort. By automating tasks and improving efficiency, my custom software allows you to focus on what truly matters – growing your business.
                    </p>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {services[2]}
                    </div>
                    <p>
                        I create user-friendly websites and mobile apps that not only look great but work seamlessly across devices. Whether you need a new website to attract customers or a mobile app to keep your business accessible, I deliver solutions that enhance your digital presence.
                    </p>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {services[3]}
                    </div>
                    <p>
                        Looking for a dedicated developer to bring your ideas to life? With expertise in building tailored web and mobile applications, I provide reliable and high-quality development services to meet your specific business needs.
                    </p>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        Testimonials
                    </div>
                    <div className="flex flex-wrap gap-x-5 p-10">
                        <div className={styles.card}>
                            Yash exhibited effective communication skills, ensuring the timely completion of project requirements.
                        </div>
                        <div className={styles.card}>
                            He displayed attentiveness and a feedback-oriented approach, grasping the concepts from users' viewpoint
                        </div>
                        <div className={styles.card}>
                            He worked on REST APIs on Loopback. He was able to complete his takes in a timely manner. He suggested guard conditions which would make the REST APIs more robust with respect to edge cases.
                        </div>
                        <div className={styles.card}>
                            He had impressed me with this skills in Java and Android.
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bottom-0">
                {/* <Footer></Footer> */}
            </div>
        </div>
    )
}

export default Services;