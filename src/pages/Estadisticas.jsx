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
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
          font: {
            size: 11,
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
    <>
      <Navbar />

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
            px-4 md:px-6
            py-20 md:py-28
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

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center">
              Operational Statistics
            </h1>

            <p className="text-center text-orange-400 text-lg sm:text-xl md:text-2xl mt-4 font-semibold">
              January - April 2026
            </p>

            <p className="text-center text-gray-300 max-w-4xl mx-auto mt-8 mb-16 text-sm sm:text-base md:text-lg">
              Emergency response statistics from Bomberos y Paramédicos SMA.
              Data reflects operational activity, rescue incidents,
              special services and emergency call volume during the first
              four months of 2026.
            </p>

            {/* KPI */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                  {totalServicios}
                </h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Services Provided
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                  {totalLlamadas}
                </h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Emergency Calls
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                  {totalRescates}
                </h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Rescues
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center shadow-[0_0_40px_rgba(255,120,0,0.15)]">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                  {totalEspeciales}
                </h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Special Services
                </p>
              </div>

            </div>

            {/* Services by Month */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 mb-12 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Services by Month
              </h2>

              <div className="h-[300px] md:h-[450px]">
                <Bar
                  data={serviciosChart}
                  options={barOptions}
                />
              </div>

            </section>

            {/* Comparison */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 mb-12 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Rescues vs Special Services
              </h2>

              <div className="h-[300px] md:h-[450px]">
                <Bar
                  data={comparativoChart}
                  options={barOptions}
                />
              </div>

            </section>

            {/* April Breakdown */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
              April 2026 Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Rescue Operations
                </h3>

                <Doughnut
                  data={abrilRescates}
                  options={doughnutOptions}
                />

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Special Services
                </h3>

                <Doughnut
                  data={abrilEspeciales}
                  options={doughnutOptions}
                />

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Emergency Call Sources
                </h3>

                <Doughnut
                  data={abrilLlamadas}
                  options={doughnutOptions}
                />

              </div>

            </div>

            {/* Operational Summary */}
            <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(255,120,0,0.15)]">

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Operational Summary
              </h2>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                During the first four months of 2026,
                Bomberos y Paramédicos SMA responded to
                1,390 emergency and support incidents,
                including 33 rescue operations,
                162 special services and 1,352
                emergency calls received through
                multiple reporting channels.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                These statistics reflect the growing operational demand
                placed on emergency services in San Miguel de Allende and
                demonstrate the continuous commitment of firefighters,
                paramedics and emergency personnel to protect life,
                property and community safety.
              </p>

            </section>

            {/* HISTORICAL STATISTICS */}
            <section className="max-w-4xl mx-auto text-center space-y-16 md:space-y-20 mt-24">

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                  2025
                </h2>

                <p className="text-xl md:text-3xl font-semibold mb-4">
                  3,139 Services Provided
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                  In 2025, emergency incidents increased significantly,
                  resulting in a higher demand for fire, medical and rescue
                  services throughout the city.
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                  2024
                </h2>

                <p className="text-xl md:text-3xl font-semibold mb-4">
                  2,554 Services Provided
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                  In 2024 we exceeded expectations, responding to fires,
                  medical emergencies and high-risk incidents.
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                  2023
                </h2>

                <p className="text-xl md:text-3xl font-semibold mb-4">
                  1,710 Services Provided
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                  During 2023, the institution focused heavily on grass fires,
                  rescues and emergency response.
                </p>
              </div>

            </section>

            {/* OPERATIONAL GROWTH */}
            <section className="max-w-6xl mx-auto mt-28 px-4 md:px-6 text-center">

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[2.5rem]
                p-6 md:p-12
                shadow-[0_0_60px_rgba(255,120,0,0.15)]
                space-y-10
              "
              >

                <div className="space-y-4">

                  <h2 className="text-3xl md:text-6xl font-extrabold">
                    Growing Emergency Demand
                  </h2>

                  <p className="text-lg md:text-xl text-gray-300">
                    Operational Growth Analysis · 2023 – 2025
                  </p>

                </div>

                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
                  Between 2023 and 2025, emergency service requests increased by
                  <span className="font-extrabold text-white">
                    {" "}83.6%
                  </span>.
                  This sustained growth reflects a continuous rise in fires,
                  medical emergencies, rescues, traffic accidents and
                  high-risk incidents across the city.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <p className="text-3xl md:text-5xl font-extrabold text-red-500">
                      +49.4%
                    </p>

                    <p className="text-gray-300 mt-3">
                      Increase from 2023 to 2024
                    </p>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <p className="text-3xl md:text-5xl font-extrabold text-orange-400">
                      +22.9%
                    </p>

                    <p className="text-gray-300 mt-3">
                      Increase from 2024 to 2025
                    </p>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <p className="text-3xl md:text-5xl font-extrabold text-yellow-400">
                      +83.6%
                    </p>

                    <p className="text-gray-300 mt-3">
                      Total growth in just two years
                    </p>
                  </div>

                </div>

                <p className="text-gray-300 leading-relaxed max-w-5xl mx-auto">
                  This upward trend highlights the growing pressure on
                  emergency response systems. It reinforces the importance
                  of prevention, community awareness, adequate resources,
                  continuous training and institutional support to maintain
                  effective and timely response.
                </p>

                <p className="text-lg font-semibold text-gray-200">
                  Emergency response grows with the city — preparedness must grow with it.
                </p>

              </div>

            </section>

          </motion.div>

        </main>

      </div>

      <Footer />
    </>
  );
};