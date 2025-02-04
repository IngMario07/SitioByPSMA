import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaHandHoldingUsd, FaWarehouse, FaWhatsapp, FaUniversity } from "react-icons/fa"; // Agregando nuevo ícono
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Donaciones = () => {
    const particlesInit = useCallback((engine) => {
        loadFirePreset(engine);
    }, []);

    return (
        <>
            <Navbar />

            {/* Fondo animado de partículas */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "fire",
                    background: {
                        color: "#1a202c", // Fondo oscuro
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                }}
            />

            <div className="bg-gray-900 text-white min-h-screen">
                {/* Sección principal */}
                <div className="relative w-full flex flex-col justify-center items-center px-6 py-16 space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Support SMA Firefighters and Paramedics!
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Your help is vital for us to continue providing emergency services with adequate equipment and resources. Here's how you can help.
                    </motion.p>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                {/* Contenedor principal de opciones */}
                <div className="bg-gray-100 py-16 px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Opción de donación monetaria internacional */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <FaUniversity className="text-5xl text-indigo-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Donations by Bank Transfer in Mexican territory
                            </h2>
                            <br />
                            <br />
                            <p className="text-lg text-gray-700 mb-4">
                            Do not forget to put in the reference:{" "}
                                <span className="font-bold">APORTACIÓN</span>.
                            </p>
                            <div className="bg-gray-200 p-4 rounded-lg text-gray-800 w-full max-w-md">
                                <p className="font-semibold">Name Bank: <span className="font-normal">BBVA</span></p>
                                <p className="font-semibold">Account: <span className="font-normal">011 862 7339</span></p>
                                <p className="font-semibold">CLABE: <span className="font-normal">012 240 00118627339 1</span></p>
                                <p className="font-semibold">Holder's name: <span className="font-normal">Bomberos y Paramédicos SMA A C </span></p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <FaHandHoldingUsd className="text-5xl text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            International Monetary Contribution 
                            </h2>
                            <br />
                            <br />
                            <motion.div
                                className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                            </motion.div>
                            <p className="text-lg text-gray-700 mb-4">
                            If you wish to donate from another country, you can do so through our partner organization,{" "}
                                <span className="font-semibold">San Miguel Community Foundation</span>.
                            </p>
                            <a
                                href="https://sanmiguelcommunityfoundation.org/english/bomberos-y-paramedicos-sma-ac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition"
                            >
                                Make your donation here
                            </a>
                        </motion.div>
                        <br />
                        <br />

                       
                        <br />
                        <br />

                        {/* Opción de donación de materiales */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <FaWarehouse className="text-5xl text-blue-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Material Donations
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                            If you wish to support us with equipment or supplies, you can bring them directly to our facilities.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                            Your donation will make a difference!
                            </p>
                        </motion.div>

                        <br />
                        <br />
                        
                        <br />
                        <br />


                        {/* Opción de contacto por WhatsApp */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <FaWhatsapp className="text-5xl text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            More Information
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                            Contact us by WhatsApp for any questions about donations.
                            </p>
                            <a href="https://wa.me/+524151807211" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-8xl text-[#25D366]" />
                            </a>
                            <p className="text-lg font-semibold text-gray-700 mt-4">
                                📲 415 180 7211
                            </p>
                            <p className="text-lg text-gray-700">
                            Office hours: 8:00 AM - 4:00 PM ( Monday to Friday ) Central Time Mexico
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>

            <br />
                        <br />

            <Footer />
        </>
    );
};
