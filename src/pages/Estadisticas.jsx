import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Estadisticas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: { size: 14 },
        },
      },
    },
  };

  const dataIncendios = {
    labels: ["House Room", "Vehicle", "Pasture", "Garbage", "Tree", "Other"],
    datasets: [
      {
        label: "Fires – March 2025",
        data: [15, 3, 208, 7, 2, 9],
        backgroundColor: [
          "#6A1B9A",
          "#FFC107",
          "#D90429",
          "#1976D2",
          "#ADFF2F",
          "#ff2fdc",
        ],
      },
    ],
  };

  const dataServicios = {
    labels: [
      "Prehospital",
      "HazMat",
      "Traffic",
      "Urban Rescue",
      "Special",
      "Red Cross Support",
    ],
    datasets: [
      {
        label: "Services – April 2025",
        data: [2, 22, 37, 10, 29, 0],
        backgroundColor: [
          "#6A1B9A",
          "#FFC107",
          "#FF6F00",
          "#1976D2",
          "#212121",
          "#D90429",
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative min-h-screen overflow-hidden">

        {/* PARTÍCULAS */}
        <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    preset: "fire",
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: "#000000",
    },
  }}
/>

        {/* CONTENIDO */}
        <main className="relative z-10 min-h-screen text-white px-6 py-32 bg-gradient-to-b from-black/40 via-gray-900/40 to-black/60">

          <motion.h1
            className="text-6xl font-extrabold text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Operational Statistics – 2025
          </motion.h1>

          {/* INCENDIOS */}
          <section className="max-w-5xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-center mb-10">
              Fires – March 2025
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">
              <Pie data={dataIncendios} options={chartOptions} />
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="max-w-5xl mx-auto mb-32">
            <h2 className="text-4xl font-bold text-center mb-10">
              Services – April 2025
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">
              <Pie data={dataServicios} options={chartOptions} />
            </div>
          </section>

          {/* RESUMEN */}
          <section className="max-w-4xl mx-auto text-center space-y-20">
            <div>
              <h2 className="text-5xl font-extrabold mb-6">2025</h2>
              <p className="text-3xl font-semibold">
                1,387 services attended (Jan – Apr)
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-extrabold mb-6">2024</h2>
              <p className="text-3xl font-semibold mb-4">
                2,554 Services Provided
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                In 2024 we exceeded expectations, responding to fires, medical
                emergencies and high-risk incidents.
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-extrabold mb-6">2023</h2>
              <p className="text-3xl font-semibold mb-4">
                1,710 Services Provided
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                During 2023, the institution focused heavily on grass fires,
                rescues and emergency response.
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};
