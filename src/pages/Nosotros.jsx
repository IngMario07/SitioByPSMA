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
                        Sobre Nosotros
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Bomberos y Paramédicos SMA es una organización sin fines de lucro, creada con el compromiso de proteger, asistir y salvar vidas en situaciones de emergencia. Nuestra misión es brindar una respuesta inmediata y profesional ante cualquier siniestro, trabajando en conjunto con la comunidad para mejorar la seguridad y la cultura de prevención.
                        <br />
                        <br />
                        ¡Vamos Por Una Asociación De Bomberos Y Paramédicos Al Nivel Que Nuestra Ciudad Se Merece!
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
                            Nuestra Historia
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Fundada en 2021, ByPSMA comenzó con un pequeño grupo de voluntarios comprometidos con la seguridad y el bienestar de la comunidad. A pesar de contar con recursos limitados, nuestra dedicación nos permitió crecer rápidamente, consolidándonos como una pieza clave en la respuesta a emergencias de San Miguel de Allende. Con el paso del tiempo, logramos adquirir nuevas unidades, capacitar a más rescatistas y expandir nuestra capacidad operativa. Hoy en día, seguimos trabajando arduamente para mejorar y garantizar un servicio digno para nuestra ciudad.
                            <br />
                            <br />
                            ¡Hoy más que nunca, seguimos avanzando en nuestra misión de salvar vidas, y gracias al apoyo de la comunidad, estamos más cerca de lograrlo!
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
                            {[{ year: "2022", img: ByP00, text: "Primera unidad prestada por el Dr. Martín Carrera para brindar servicios cuando aún no contábamos con equipo propio. Este gesto de solidaridad marcó el inicio de nuestra lucha por tener nuestro propio equipo de respuesta." },
                            { year: "2022", img: Unidades1, text: "Se otorgaron dos unidades (ByP01 y ByP02) y un espacio provisional para la estación gracias a gestiones con el gobierno local. Estas unidades permitieron fortalecer nuestra capacidad operativa en situaciones de emergencia." },
                            { year: "2023", img: Dragones1, text: "Creación del grupo infantil 'Dragones' para educar a niños en temas de emergencia y formación en primeros auxilios. Este proyecto buscó sensibilizar a las nuevas generaciones sobre la importancia de la seguridad y la prevención." },
                            { year: "2023", img: ByP03, text: "Adquisición de ByP03 con fondos de donaciones y eventos comunitarios. Gracias al apoyo de la comunidad y las recaudaciones, pudimos fortalecer nuestras unidades y responder más rápidamente a los incidentes." },
                            { year: "2023", img: ByP04, text: "San Miguel Community Foundation donó la unidad ByP04 para fortalecer la respuesta ante incendios en pastizales. Esta unidad es esencial para la prevención y control de incendios forestales, que afectan a muchas áreas de la región." }
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
                            ESTRUCTURA DE LA ASOCIACIÓN
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            La Asociación está estructurada legalmente en dos grandes órganos: la ASAMBLEA y el CONSEJO.
                            <br /><br />
                            <strong>La Asamblea</strong> es la máxima autoridad dentro de la Asociación. Está conformada por todos los miembros con derecho a voto y es responsable de tomar decisiones fundamentales para la organización. Dentro de sus funciones principales se encuentran:
                            <ul className="text-left max-w-3xl mx-auto list-disc list-inside mt-4">
                                <li>Elegir y designar a los miembros del Consejo Directivo.</li>
                                <li>Aprobar presupuestos y estrategias de financiamiento.</li>
                                <li>Tomar decisiones sobre la adquisición de equipamiento y recursos.</li>
                                <li>Definir los lineamientos generales de operación y servicio.</li>
                                <li>Revisar informes anuales sobre el desempeño y crecimiento de la Asociación.</li>
                            </ul>
                            Actualmente, la Asamblea está conformada por más de 15 personas que han trabajado activamente en el desarrollo de la Asociación y la consolidación de sus operaciones en San Miguel de Allende.
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
                            <strong>El Consejo Directivo</strong> está conformado por miembros elegidos por la Asamblea para representar y delegar actividades en las distintas áreas dentro de la Asociación. Su función es administrar, coordinar y ejecutar los proyectos y estrategias aprobadas por la Asamblea. Cada uno de sus integrantes desempeña un rol clave en el desarrollo de la organización.
                            <br /><br />
                            <strong>Miembros del Consejo Directivo:</strong>
                            <ul className="text-left max-w-3xl mx-auto list-disc list-inside mt-4">
                                <li><strong>Presidente:</strong> Carlos Arzola – Encargado de representar a la Asociación ante instituciones gubernamentales y organizaciones privadas, además de supervisar el cumplimiento de los objetivos estratégicos.</li>
                                <li><strong>Secretario:</strong> Canales – Responsable de la documentación oficial, organización de reuniones y gestión administrativa de la Asociación.</li>
                                <li><strong>Tesorero:</strong> César Guerrero – Maneja los recursos financieros, elabora informes contables y garantiza la transparencia en el manejo de donaciones y fondos.</li>
                                <li><strong>Jefe de Bomberos:</strong> Juan González – Dirige al equipo operativo, supervisa las capacitaciones y coordina las respuestas a emergencias.</li>
                                <li><strong>Coordinador de Capacitación:</strong> (N/D) – Responsable de organizar cursos y talleres para la comunidad y los miembros de la Asociación.</li>
                            </ul>
                            Gracias a la estructura organizativa establecida, la Asociación sigue creciendo y consolidándose como una institución clave en la respuesta a emergencias en San Miguel de Allende.
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