import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import ByP00 from "../assets/images/ByP00.png";
import ByP03 from "../assets/images/ByP03.png";
import ByP04 from "../assets/images/ByP04.png";
import Dragones1 from "../assets/images/Dragones1.png";
import Unidades1 from "../assets/images/Unidades1.png";

export const Nosotros = () => {
    const particlesInit = useCallback((motor) => {
        loadFirePreset(motor);
    }, []);

    return (
        <>
            <Navbar />
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "fire",
                    background: { color: "#1a202c" },
                    fullScreen: { enable: true, zIndex: -1 },
                }}
            />
            <div className="bg-gray-900 text-white">
                <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-center text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Firefighters and Paramedics SMA is a non-profit organization, created with the commitment to protect, assist and save lives in emergency situations. Our mission is to provide an immediate and professional response to any incident, working together with the community to improve safety and a culture of prevention.
                        <br />
                        <br />
                        Let's Go For A Firefighters and Paramedics Association At The Level Our City Deserves!
                    </motion.p>
                </div>

                <div className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Our History
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Founded in 2022, ByPSMA began with a small group of volunteers committed to the safety and well-being of the community. Despite limited resources, our dedication allowed us to grow quickly, establishing us as a key player in San Miguel de Allende's emergency response. Over time, we were able to acquire new units, train more rescuers and expand our operational capacity. Today, we continue to work hard to improve and guarantee a dignified service for our city.
                            <br />
                            <br />
                            Today, more than ever, we continue to make progress in our mission to save lives, and thanks to the support of the community, we are closer to achieving it!
                        </motion.p>
                    </div>
                </div>

                <div className="bg-gray-200 py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[{ year: "2022", img: ByP00, text: "First unit lent for a while by Dr. Alberto Carrera to provide services when we still did not have our own equipment. This gesture of solidarity marked the beginning of our struggle to have our own response team." },
                            { year: "2022", img: Unidades1, text: "Two units (ByP01 and ByP02) and a temporary space for the station were provided thanks to negotiations with the local government. These units strengthened our operational capacity in emergency situations." },
                            { year: "2023", img: Dragones1, text: "Creation of the 'Dragons' children's group to educate children on emergency and first aid training. This project sought to raise awareness among new generations about the importance of safety and prevention." },
                            { year: "2023", img: ByP03, text: "Acquisition of ByP03 with funds from donations and community events. Thanks to community support and fundraising, we were able to strengthen our units and respond more quickly to incidents." },
                            { year: "2024", img: ByP04, text: "San Miguel Community Foundation donated the ByP04 unit to strengthen the response to grass fires. In addition, as part of their commitment to the safety and well-being of the fire department, they also donated brand new Self Contained Breathing Apparatus (SCBA). This equipment is essential for the protection of firefighters when dealing with structural and confined space fires, ensuring their safety in high-risk conditions. Thanks to this generous donation, the operational capacity and protection of personnel in emergencies is significantly improved." }
                            ].map(({ year, img, text }, index) => (

                                <motion.div
                                    key={index}
                                    className="image-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.3 }}
                                >
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    

                                    <div className="year-box">{year}</div>
                                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-6">
                                        <div className="image-container">
                                            <img
                                                src={img}
                                                alt={text}
                                                className="w-full h-[350px] object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="info-container">
                                            <p className="description">{text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            STRUCTURE OF THE ASSOCIATION
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            The Association is legally structured in two main bodies: the ASSEMBLY and the BOARD.
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <strong>The Assembly</strong> is the highest authority within the Association. It is made up of all members with the right to speak and vote; they are responsible for making fundamental decisions for the organization. Among its main functions are:
                            <ul className="text-left max-w-3xl mx-auto list-disc list-inside mt-4">
                            <li>Elect and appoint members of the Council.</li>
                                <li>Approve budgets and financing strategies.</li>
                                <li>Make decisions about the acquisition of equipment and resources.</li>
                                <li>Define the general guidelines for operation and service.</li>
                                <li>Review annual reports on the performance and growth of the Association.</li>
                            </ul>
                            Currently, the Assembly is made up of more than 35 firefighters who have worked actively in the development of the Association and the consolidation of its operations in San Miguel de Allende.
                        </motion.p>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <strong>The Council Directors</strong> is made up of members elected by the Assembly to represent and delegate activities in the different areas within the Association. Its function is to manage, coordinate and execute the projects and strategies approved by the Assembly. Each of its members plays a key role in the development of the organization.
                            <br /><br />
                            <strong>Members of the Council Directors:</strong>
                            <ul className="text-left max-w-3xl mx-auto list-disc list-inside mt-4">
                                <li><strong>President:</strong> Carlos Arzola – Legal representative of the Association before governmental institutions and private organizations, in addition to supervising the fulfillment of strategic objectives.</li>
                                <li><strong>Secretary:</strong> Felipe Huberto Canales – Responsible for the official documentation, organization of meetings and administrative management of the Association.</li>
                                <li><strong>Treasurer:</strong> César Guerrero – Manages financial resources, prepares accounting reports and ensures transparency in the management of donations and funds.</li>
                                <li><strong>Fire Chief:</strong> Juan González – Leads the operational team, oversees training and coordinates emergency response.</li>
                                <li><strong>Training Coordinator:</strong> Olavo Francisco Perez – Responsible for organizing courses and workshops for the community and members of the Association.</li>
                                <li><strong>Commissar:</strong> Mario C. Morales – Responsible for the supervision and oversight of regulatory and ethical compliance within the Association, ensuring transparency and the proper functioning of the Association.</li>
                            </ul>
                            Thanks to the organizational structure established, the Association continues to grow and consolidate itself as a key institution in emergency response in San Miguel de Allende.
                        </motion.p>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <Footer />
        </>
    );
};