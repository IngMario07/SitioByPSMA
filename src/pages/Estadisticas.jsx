import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Registro de los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const Estadisticas = () => {
    const particlesInit = useCallback((engine) => {
        loadFirePreset(engine);
    }, []);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "#ffffff"
                }
            },
            title: {
                display: true,
                color: "#ffffff"
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#ffffff"
                }
            },
            y: {
                ticks: {
                    color: "#ffffff"
                }
            }
        }
    };

    // Datos de incendios
    const dataIncendios = {
        labels: ['House Room', 'Vehicle', 'Pasture', 'Garbage', 'Tree'],
        datasets: [{
            label: 'Fires in January 2025 / Incendios en Enero 2025',
            data: [16, 6, 244, 4, 1],
            backgroundColor: ['#6A1B9A', '#FFC107', '#D90429', '#1976D2', '#ADFF2F', '' ],
            borderWidth: 2,
        }],
    };

    // Datos de otros servicios
    const dataOtrosServicios = {
        labels: ['Prehospital Services', 'Hazardous Materials', 'Traffic Events', 'Urban Rescue', 'Special Services', 'Support to “Cruz Roja”'],
        datasets: [{
            label: 'Services in January 2025 / Servicios en Enero 2025',
            data: [5, 25, 31, 11, 29, 2],
            backgroundColor: ['#6A1B9A', '#FFC107', '#FF6F00', '#1976D2', '#212121', '#D90429' ],
            borderWidth: 2,
        }],
    };

    // Datos de llamadas
    const dataLlamadas = {
        labels: ['911 / C4', 'Fire Phone / Teléfono Bomberos', 'Elements of the Institution / Elementos de la Institucion', 'Civil Protection / Protección Civil', 'Canine Control / Control Canino'],
        datasets: [{
            label: 'Emergency Calls / Llamadas de Emergencia',
            data: [268, 39, 73, 10, 1],
            backgroundColor: ['#1E90FF', '#FFD700', '#ADFF2F', '#DC143C', '#8A2BE2'],
            borderWidth: 1,
        }],
    };

    // Datos de salidas de unidades
    const dataSalidas = {
        labels: ['BYP 00', 'BYP 01', 'BYP 02', 'BYP 03', 'BYP 04'],
        datasets: [{
            label: 'Unit Outputs / Salidas de Unidades',
            data: [2, 163, 28, 13, 212],
            backgroundColor: ['#1E90FF', '#FF8C00', '#FFD700', '#6A1B9A', '#C62828'],
            borderWidth: 2,
        }],
    };

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
                        color: "#1a202c",
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                }}
            />

            <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-16 space-y-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Statistics JANUARY 2025
                </motion.h1>

                <br />
                <br />
                <br />

                <motion.h3
                    className="text-4xl sm:text-5xl font-bold text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Fires in January 2025
                </motion.h3>

                {/* Gráfico de Incendios */}
                <div className="mt-12 w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
                    <Pie data={dataIncendios} options={chartOptions} />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <motion.h3
                    className="text-4xl sm:text-5xl font-bold text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Services in January 2025
                </motion.h3>


                {/* Gráfico de Otros Servicios */}
                <div className="mt-12 w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
                    <Pie data={dataOtrosServicios} options={chartOptions} />
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <motion.h3
                    className="text-4xl sm:text-5xl font-bold text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Emergency Calls
                </motion.h3>

                {/* Gráfico de Llamadas */}
                <div className="mt-12 w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
                    <Pie data={dataLlamadas} options={chartOptions} />
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <motion.h3
                    className="text-4xl sm:text-5xl font-bold text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Emergency unit exits
                </motion.h3>

                {/* Gráfico de Salidas de Unidades */}
                <div className="mt-12 w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-white">
                    <Pie data={dataSalidas} options={chartOptions} />
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <motion.h1
                className="text-4xl sm:text-5xl font-bold text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                2025
            </motion.h1>
            <div className="mt-12 text-center">
                <motion.h2
                    className="text-4xl font-semibold text-white mt-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    392 Services attended January 2025
                </motion.h2>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Noticias de servicios atendidos */}
            <motion.h1
                className="text-4xl sm:text-5xl font-bold text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                2024
            </motion.h1>
            <div className="mt-12 text-center">
                <motion.h2
                    className="text-4xl font-semibold text-white mt-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    2,554 Services Provided
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 leading-relaxed mt-4 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    In 2024 we exceeded expectations, reaching a total of 2,554 services attended. Of these, a significant percentage corresponded to fires and firefighting emergencies, both in rural and urban areas. Despite the high demand, we also responded to medical emergencies and other requests in which our firefighting team has proven to be instrumental in ensuring the safety of the community.
                </motion.p>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <motion.h1
                className="text-4xl sm:text-5xl font-bold text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                2023
            </motion.h1>
            <div className="mt-12 text-center">
                <motion.h2
                    className="text-4xl font-semibold text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    1,710 Services Provided
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 leading-relaxed mt-4 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    In 2023, our team attended a total of 1,710 emergencies. Most of these services were related to grass fires, rescues and other firefighting emergencies that put our operational capacity to the test. However, we also attended medical situations and other incidents where our intervention was essential for the safety of the community.
                </motion.p>
            </div>

            <br />
            <br />
            <br />

            <Footer />
        </>
    );
};
