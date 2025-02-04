import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Servicios = () => {
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        At Bomberos y Paramédicos SMA we offer essential services for the safety and well-being of our community. We specialize in fire and emergency response, in addition to providing training in first aid and life support. Our team is committed to provide fast and effective care in critical situations, safeguarding the life and health of people. In addition, we attend events of various kinds, providing support and security for attendees.
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
                            Fire Service
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            We attend emergencies related to fires, rescues and risk situations. Our team is highly trained and equipped with advanced technology to provide an efficient and safe response. We ensure that we act quickly to protect people's lives, prevent property damage and minimize the impact of fires on our community. In addition, we are available to attend events, offering security and support for any eventuality.
                        </motion.p>
                    </div>
                </div>

                <div className="bg-gray-100 py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Medical Emergencies
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Although we do not have our own ambulance, we provide primary care as first responders while the unit arrives to continue the care. We have Automated External Defibrillators (AEDs) and advanced equipment to assist in critical situations. Our priority is to stabilize patients and ensure their well-being. We are also present at events, guaranteeing immediate attention to any medical emergency.
                        </motion.p>
                    </div>
                </div>

                <div className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Emergency Training
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            We offer training in first aid, use and handling of fire extinguishers, CPR, Stop The Bleed and for companies, schools and society in general. Our mission is to empower people with the necessary knowledge to act in emergency situations. These courses are designed to be practical and accessible, allowing participants to effectively prepare themselves to respond to incidents in their homes, workplaces and on public roads. We can also provide training in the context of events, helping organizers to ensure the safety of attendees.
                        </motion.p>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Footer />
        </>
    );
};
