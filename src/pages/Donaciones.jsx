import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaHandHoldingUsd, FaWarehouse, FaWhatsapp } from "react-icons/fa"; // Importando iconos
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Donaciones = () => {
    const particlesInit = useCallback((engine) => {
        loadFirePreset(engine); // Carga el preset de fuego
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
                        color: "#1a202c", // Fondo general oscuro
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                }}
            />


            <div className="bg-gray-900 text-white">
                {/* Fondo con gradiente y ajuste de espaciado */}
                <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-center text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        ¡Apoya a Bomberos y Paramédicos SMA!
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Tu apoyo es fundamental para seguir brindando servicios de emergencias de calidad. Aquí te dejamos las opciones para contribuir con nuestra causa.
                    </motion.p>
                </div>

                <div className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Opción de donación monetaria a través de la fundación */}
                        <motion.div
                            className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaHandHoldingUsd className="text-4xl text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Donaciones Monetarias (Internacionales)
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Si deseas realizar una donación monetaria desde otro país, puedes hacerlo a través de nuestra asociación aliada, <span className="font-semibold">San Miguel Community Foundation</span>.
                            </p>
                            <a
                                href="https://sanmiguelcommunityfoundation.org/english/bomberos-y-paramedicos-sma-ac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg"
                            >
                                Haz tu donación aquí
                            </a>
                        </motion.div>

                        {/* Línea divisoria entre contactos */}
                        <div className="my-8">
                            <hr className="border-t-2 border-white w-32 mx-10px" />
                        </div>

                        <br />
                        <br />

                        {/* Opción de donación material */}
                        <motion.div
                            className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <FaWarehouse className="text-4xl text-blue-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Donaciones de Material (En nuestras instalaciones)
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Si deseas donar materiales o equipos, puedes hacerlo directamente en nuestras instalaciones. Aceptamos una variedad de insumos que ayudan a mejorar nuestros servicios.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                ¡Tu ayuda será muy apreciada!
                            </p>
                        </motion.div>

                        {/* Línea divisoria entre contactos */}
                        <div className="my-8">
                            <hr className="border-t-2 border-white w-32 mx-10px" />
                        </div>

                        <br />
                        <br />

                        {/* Opción de contacto para más información */}
                        <motion.div
                            className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <FaWhatsapp className="text-4xl text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Más Información
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Si tienes alguna duda o deseas más información sobre cómo donar, no dudes en contactarnos por WhatsApp al siguiente número:
                            </p>
                            {/* Nuevo ícono de WhatsApp */}
                            <motion.div
                                className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <a href="https://wa.me/+524151807211" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="text-8xl mb-4 text-[#25D366]" /> {/* Tamaño más grande y color verde */}
                                </a>
                            </motion.div>
                            <p className="text-lg font-semibold text-gray-700 mb-4">
                                📲 415 180 7211
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Nuestro horario de atención es de 8:00 AM a 4:00 PM de lunes a viernes.
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
