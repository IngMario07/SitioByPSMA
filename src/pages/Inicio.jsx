import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import Ultimo from "../assets/images/Ultimo.png";
import { FaHandsHelping, FaUsers, FaHeartbeat, FaArrowDown } from "react-icons/fa";

export const Inicio = () => {
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

            {/* Contenedor principal con clase personalizada */}
            <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-6 space-y-1 custom-content">
                {/* Imagen de bienvenida */}
                <motion.img
                    src={Ultimo}
                    alt="Fondo Bienvenida"
                    className="bienvenida-img w-full max-w-4xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        filter: "brightness(1.2) contrast(1.2)",
                        marginTop: "10px",
                    }}
                />

                {/* Efecto de desvanecimiento */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-70 rounded-b-xl" />

                {/* Título y subtítulo */}
                <div className="text-center mt-10">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-xl text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to SMA Firefighters and Paramedics
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mt-4 drop-shadow-lg text-gray-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        ¡We are going for an Association of Firefighters and Paramedics at the level that our city deserves!
                    </motion.p>
                    <motion.div
                        className="mt-8 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <FaArrowDown className="text-gray-300 text-3xl animate-bounce" />
                    </motion.div>
                </div>

                {/* Tarjetas de valores principales */}
                <div className="mt-16 px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <FaHandsHelping />, title: "Humanitarian Aid", text: "Always ready to respond to emergencies and provide support where it is needed most." },
                        { icon: <FaUsers />, title: "United Community", text: "We work together to build a safer and more supportive environment." },
                        { icon: <FaHeartbeat />, title: "Saving Lives", text: "Our commitment is to protect what is most valuable: human life." },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white transform hover:scale-105 transition duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 * index }}
                        >
                            <div className="text-5xl mb-4">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                            <p className="text-lg">{card.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Texto combinado de bienvenida */}
                <div className="mt-16 px-8 md:px-16 text-center custom-content">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Social Commitment
                    </h2>
                    <p className="text-lg leading-7 text-gray-300">
                        Every day is an opportunity to make a difference and protect what is most valuable: our community. We are a trained team, committed and passionate about caring and offering hope in the most difficult times.
                    </p>
                    <p className="text-lg mt-4 leading-7 text-gray-300">
                        At SMA Firefighters and Paramedics we not only respond to emergencies: we also prevent, train and work with you to build a safer environment.
                    </p>
                    <p className="text-lg mt-4 leading-7 text-gray-300">
                        Explore our site to discover more about our services, activities, training and how you can be part of this noble mission. Thank you for trusting us and being part of our story!
                    </p>
                    <p className="text-lg mt-4 font-bold leading-7 text-gray-300">
                        We are always ready, always by your side.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};
