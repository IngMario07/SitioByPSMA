import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire"; // Asegúrate de importar esto
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Importa FaWhatsapp

export const Contacto = () => {
    const particlesInit = useCallback((engine) => {
        loadFirePreset(engine); // Carga el preset de fuego
    }, []);

    return (
        <>
            <Navbar />

            {/* Fondo animado de partículas con llamas */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "fire", // Establece el preset de llamas
                    background: {
                        color: "#1a202c", // Fondo oscuro para contrastar
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1, // Asegúrate de que las partículas estén detrás del contenido
                    },
                }}
            />

            <br/>

            {/* Contenedor principal con el mapa al inicio */}
            <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 space-y-6">
                {/* Mapa de Google centrado y más pequeño */}
                <div className="w-full max-w-sm mb-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.96207800607385!2d-100.7197406888008!3d20.896492640210056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b518a0f9c433b%3A0x24922b0c5bc207ff!2sBomberos%20y%20Param%C3%A9dicos%20SMA!5e0!3m2!1ses-419!2smx!4v1738099497092!5m2!1ses-419!2smx"
                        width="100%" 
                        height="250" 
                        style={{ border: 0, borderRadius: '10px' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                

                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contacto
                </motion.h1>
                
                <div className="mt-8 text-white text-center">
                    <motion.p
                        className="text-lg sm:text-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
                    </motion.p>
                </div>

                <br/>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
                    <motion.div
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <FaPhoneAlt className="text-4xl mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Llámanos A Nuestro Telefono Fijo</h3>
                        <p className="text-lg">+52 (415) 688 1615</p>
                    </motion.div>

                    {/* Línea divisoria entre contactos */}
                <div className="my-8">
                    <hr className="border-t-2 border-white w-32 mx-10px" />
                </div>

                    <motion.div
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <FaMapMarkerAlt className="text-4xl mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Dirección</h3>
                        <p className="text-lg">Fray Bernardo Cossin 133-Int. 1, Insurgentes, 37745 San Miguel de Allende, Gto.</p>
                    </motion.div>

                    {/* Línea divisoria entre contactos */}
                <div className="my-8">
                    <hr className="border-t-2 border-white w-32 mx-10px" />
                </div>

                    <motion.div
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <FaEnvelope className="text-4xl mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Correo Electrónico</h3>
                        <p className="text-lg">bomberosyparamedicossma@gmail.com</p>
                    </motion.div>

                    {/* Línea divisoria entre contactos */}
                <div className="my-8">
                    <hr className="border-t-2 border-white w-32 mx-10px" />
                </div>

                    {/* Nuevo ícono de WhatsApp */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Contáctanos por WhatsApp</h3>
                        <a href="https://wa.me/+524151807211" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-8xl mb-4 text-[#25D366]" /> {/* Tamaño más grande y color verde */}
                        </a>
                    </motion.div>
                </div>
            </div>

            <br/>
            <br/>

            <Footer />
        </>
    );
};
