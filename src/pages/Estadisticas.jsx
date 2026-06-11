import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export const Estadisticas = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  const serviciosMensuales = [421, 377, 336, 256];
  const rescatesMensuales = [5, 7, 10, 11];
  const especialesMensuales = [41, 31, 39, 51];

  const totalServicios = 1390;
  const totalRescates = 33;
  const totalEspeciales = 162;
  const totalLlamadas = 1352;

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.08)",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.08)",
        },
      },
    },
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const serviciosChart = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Services",
        data: serviciosMensuales,
        backgroundColor: "#d90429",
        borderRadius: 8,
      },
    ],
  };

  const comparativoChart = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Rescues",
        data: rescatesMensuales,
        backgroundColor: "#219ebc",
        borderRadius: 8,
      },
      {
        label: "Special Services",
        data: especialesMensuales,
        backgroundColor: "#ff6b00",
        borderRadius: 8,
      },
    ],
  };

  const abrilRescates = {
    labels: ["Urban Rescue", "Fauna Rescue"],
    datasets: [
      {
        data: [7, 4],
        backgroundColor: [
          "#d90429",
          "#219ebc",
        ],
      },
    ],
  };

  const abrilEspeciales = {
    labels: [
      "Mechanical Shop",
      "Special Service",
      "Supply Unit",
      "School",
      "Planned Route",
      "Public Event",
      "Landing Security",
      "Documents",
      "Inspection",
    ],
    datasets: [
      {
        data: [12, 11, 9, 5, 5, 4, 2, 2, 1],
        backgroundColor: [
          "#d90429",
          "#ff6b00",
          "#ffb703",
          "#219ebc",
          "#8338ec",
          "#06d6a0",
          "#ef476f",
          "#3a86ff",
          "#adb5bd",
        ],
      },
    ],
  };

  const abrilLlamadas = {
    labels: [
      "C4",
      "Firefighters",
      "Phone",
      "Gas Express",
      "Civil Protection",
    ],
    datasets: [
      {
        data: [155, 72, 19, 8, 2],
        backgroundColor: [
          "#d90429",
          "#ff6b00",
          "#ffb703",
          "#219ebc",
          "#8338ec",
        ],
      },
    ],
  };

  return (
    <> <Navbar />

      <div className="relative min-h-screen overflow-hidden">

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

        <main
          className="
      relative
      z-10
      min-h-screen
      text-white
      px-6
      py-28
      bg-gradient-to-b
      from-black/20
      via-zinc-900/40
      to-black/20
    "
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto"
          >

            <h1 className="text-5xl md:text-7xl font-extrabold text-center">
              Operational Statistics
            </h1>

            <p className="text-center text-orange-400 text-2xl mt-4 font-semibold">
              January - April 2026
            </p>

            <p className="text-center text-gray-300 max-w-4xl mx-auto mt-8 mb-16">
              Emergency response statistics from Bomberos y Paramédicos SMA.
              Data reflects operational activity, rescue incidents,
              special services and emergency call volume during the first
              four months of 2026.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-20">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-5xl font-black">
                  {totalServicios}
                </h3>
                <p className="text-gray-300 mt-2">
                  Services Provided
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-5xl font-black">
                  {totalLlamadas}
                </h3>
                <p className="text-gray-300 mt-2">
                  Emergency Calls
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-5xl font-black">
                  {totalRescates}
                </h3>
                <p className="text-gray-300 mt-2">
                  Rescues
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-5xl font-black">
                  {totalEspeciales}
                </h3>
                <p className="text-gray-300 mt-2">
                  Special Services
                </p>
              </div>

            </div>

            {/* Services by Month */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-[0_0_40px_rgba(255,120,0,0.15)]">
              <h2 className="text-3xl font-bold mb-8">
                Services by Month
              </h2>

              <div className="h-[450px]">
                <Bar
                  data={serviciosChart}
                  options={barOptions}
                />
              </div>
            </section>

            {/* Comparison */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-[0_0_40px_rgba(255,120,0,0.15)]">
              <h2 className="text-3xl font-bold mb-8">
                Rescues vs Special Services
              </h2>

              <div className="h-[450px]">
                <Bar
                  data={comparativoChart}
                  options={barOptions}
                />
              </div>
            </section>

            {/* April Breakdown */}
            <h2 className="text-4xl font-extrabold text-center mb-12">
              April 2026 Breakdown
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Rescue Operations
                </h3>

                <Doughnut
                  data={abrilRescates}
                  options={doughnutOptions}
                />
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Special Services
                </h3>

                <Doughnut
                  data={abrilEspeciales}
                  options={doughnutOptions}
                />
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Emergency Call Sources
                </h3>

                <Doughnut
                  data={abrilLlamadas}
                  options={doughnutOptions}
                />
              </div>

            </div>

            {/* Operational Summary */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

              <h2 className="text-4xl font-bold mb-6">
                Operational Summary
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                During the first four months of 2026,
                Bomberos y Paramédicos SMA responded to
                1,390 emergency and support incidents,
                including 33 rescue operations,
                162 special services and 1,352
                emergency calls received through
                multiple reporting channels.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                These statistics reflect the growing operational demand
                placed on emergency services in San Miguel de Allende and
                demonstrate the continuous commitment of firefighters,
                paramedics and emergency personnel to protect life,
                property and community safety.
              </p>

            </section>

          </motion.div>

        </main>

      </div>

      <Footer />
    </>
  );
};