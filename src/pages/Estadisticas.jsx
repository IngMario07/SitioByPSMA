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
        data: [0, 0, 0, 0, 0, 0],
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
        data: [0, 0, 0, 0, 0, 0],
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
        <main className="relative z-10 min-h-screen text-white px-6 py-32 bg-gradient-to-b from-black/0 via-gray-900/40 to-black/5">

          <motion.h1
            className="text-6xl font-extrabold text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Operational Statistics – 2026
          </motion.h1>

          {/* INCENDIOS */}
          <section className="max-w-5xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-center mb-10">
              Fires – January 2026
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">
              <Pie data={dataIncendios} options={chartOptions} />
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="max-w-5xl mx-auto mb-32">
            <h2 className="text-4xl font-bold text-center mb-10">
              Services – January 2026
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8">
              <Pie data={dataServicios} options={chartOptions} />
            </div>
          </section>

          {/* RESUMEN */}
          <section className="max-w-4xl mx-auto text-center space-y-20">
            <div>
              <h2 className="text-5xl font-extrabold mb-6">2025</h2>
              <p className="text-3xl font-semibold mb-4">
                3,139 Services Provided
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                In 2025, emergency incidents increased significantly, resulting in a higher
                demand for fire, medical and rescue services throughout the city.
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

            {/* CONTEXTO GENERAL */}
<section className="max-w-6xl mx-auto mb-32 px-6 text-center">
  <motion.div
    className="
      bg-gradient-to-b from-white/10 via-white/5 to-white/10
      backdrop-blur-xl
      rounded-[2.5rem]
      p-12
      border border-white/10
      shadow-[0_0_80px_rgba(255,120,0,0.15)]
      space-y-10
    "
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* TITULO */}
    <div className="space-y-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        Growing Emergency Demand
      </h2>
      <p className="text-xl text-gray-300">
        Operational Growth Analysis · 2023 – 2025
      </p>
    </div>

    {/* TEXTO PRINCIPAL */}
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
      Between 2023 and 2025, emergency service requests increased by
      <span className="font-extrabold text-white"> 83.6%</span>.
      This sustained growth reflects a continuous rise in fires, medical emergencies,
      rescues, traffic accidents and high-risk incidents across the city.
    </p>

    {/* INDICADORES */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
      <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
        <p className="text-4xl font-extrabold text-red-500">+49.4%</p>
        <p className="text-gray-300 mt-2">
          Increase from 2023 to 2024
        </p>
      </div>

      <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
        <p className="text-4xl font-extrabold text-orange-400">+22.9%</p>
        <p className="text-gray-300 mt-2">
          Increase from 2024 to 2025
        </p>
      </div>

      <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
        <p className="text-4xl font-extrabold text-yellow-400">+83.6%</p>
        <p className="text-gray-300 mt-2">
          Total growth in just two years
        </p>
      </div>
    </div>

    {/* MENSAJE SOCIAL */}
    <p className="text-gray-300 leading-relaxed max-w-5xl mx-auto mt-6">
      This upward trend highlights the growing pressure on emergency response systems.
      It reinforces the importance of prevention, community awareness, adequate resources,
      continuous training and institutional support to maintain effective and timely response.
    </p>

    {/* CIERRE */}
    <p className="text-lg font-semibold text-gray-200 mt-4">
      Emergency response grows with the city — preparedness must grow with it.
    </p>
  </motion.div>
</section>

          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};
