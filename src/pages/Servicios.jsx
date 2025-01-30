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
                        Nuestros Servicios
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        En Bomberos y Paramédicos SMA ofrecemos servicios esenciales para la seguridad y el bienestar de nuestra comunidad. Nos especializamos en la respuesta ante incendios y emergencias, además de brindar capacitaciones en primeros auxilios y soporte vital. Nuestro equipo está comprometido en ofrecer atención rápida y efectiva en situaciones críticas, salvaguardando la vida y salud de las personas. Además, acudimos a eventos de diversa índole, brindando soporte y seguridad para los asistentes.
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
                            Servicio de Bomberos
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Atendemos emergencias relacionadas con incendios, rescates y situaciones de riesgo. Nuestro equipo está altamente capacitado y equipado con tecnología avanzada para brindar una respuesta eficiente y segura. Nos aseguramos de actuar con rápidez para proteger la vida de las personas, prevenir daños materiales y minimizar los impactos de los incendios en nuestra comunidad. Además, estamos disponibles para asistir a eventos, ofreciendo seguridad y apoyo ante cualquier eventualidad.
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
                            Emergencias Médicas
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Aunque no contamos con una ambulancia propia, brindamos atención primaria como primeros respondientes mientras arriba la unidad para continuar con la atencion. Contamos con Desfibriladores Externos Automáticos (DEAs) y equipo avanzado para asistir en situaciones críticas. Nuestra prioridad es estabilizar a los pacientes y asegurar su bienestar. También estamos presentes en eventos, garantizando la atención inmediata ante cualquier emergencia médica.
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
                            Capacitación en Emergencias
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Ofrecemos capacitacion en primeros auxilios, uso y manejo de extintores, RCP, Stop The Bleed y para empresas, escuelas y la sociedad en general. Nuestra misión es empoderar a las personas con el conocimiento necesario para actuar en situaciones de emergencia. Estos cursos están diseñados para ser prácticos y accesibles, permitiendo que los participantes se preparen de manera efectiva para responder a incidentes en sus hogares, lugares de trabajo y en la vía pública. También podemos brindar capacitación en el marco de eventos, ayudando a los organizadores a garantizar la seguridad de los asistentes.
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
