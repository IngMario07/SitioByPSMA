import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Dragones = () => {
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

            {/* Fondo de la página */}
            <div className="bg-gray-900 text-white">
                <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 space-y-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-center text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Page under construction
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        We are working to offer you a complete experience, thank you for your patience!
                    </motion.p>

                    {/* GIF de camión de bomberos en construcción */}
                    <motion.div
                        className="flex justify-center items-center mt-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <img 
                            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVhOWdzbGEya2I2dnl5cWl2Z3FlMW9zZW02ZGR0NXF0enJsb29tbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hrFOinIHzNGrTntDYB/giphy.gif" 
                            alt="Trabajo en construcción"
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </>
    );
};
