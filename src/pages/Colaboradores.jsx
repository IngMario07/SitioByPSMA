import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Colaboradores = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFirePreset(engine); // Carga el preset de fuego
    }, []);

    return (
        <>
            <Navbar />

            {/* 🔥 PARTÍCULAS DE FONDO */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "fire",
                    background: {
                        color: "#0b0f1a", // Fondo oscuro real
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                }}
            />

            {/* CONTENIDO */}
            <main className="relative z-10 min-h-screen text-white bg-gradient-to-b from-black/30 via-black/70 to-black flex justify-center px-6">

                <div className="max-w-4xl w-full text-center mt-32 sm:mt-40 md:mt-48 pb-32">
                    {/* mt-* separa del navbar y pb-32 separa del footer */}

                    {/* TÍTULO */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Page Under Construction
                    </motion.h1>

                    {/* TEXTO */}
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        We are working to offer you a complete experience.  
                        Thank you for your patience!
                    </motion.p>

                    {/* GIF de camión */}
                    <motion.div
                        className="mx-auto max-w-md bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-[0_0_50px_rgba(255,80,0,0.35)]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <img
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ExNGJiN3l3eWJhaHNiZTR6aTJzdjc3ZDMwMHQ0bGQ4a2ZnN3dmOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BDluhk9GV8K1S1e1hk/giphy.gif"
                            alt="Under construction"
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                        />
                    </motion.div>

                </div>
            </main>

            <Footer />
        </>
    );
};
