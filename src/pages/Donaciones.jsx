import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import {
  FaHandHoldingUsd,
  FaWarehouse,
  FaWhatsapp,
  FaUniversity,
} from "react-icons/fa";

export const Donaciones = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔥 FONDO DE PARTÍCULAS */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "fire",
          background: {
            color: "#ffffff", // 🔑 FONDO OSCURO REAL
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
        }}
      />

      {/* CONTENIDO */}
      <main className="relative z-10 min-h-screen text-white bg-gradient-to-b from-black/40 via-black/70 to-black">

        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Support Our Firefighters <br />
            & Paramedics
          </motion.h1>

          <motion.p
            className="max-w-3xl text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your donation directly strengthens emergency response, saves lives
            and ensures our teams have the equipment and training they need.
          </motion.p>
        </section>

        {/* OPCIONES */}
        <section className="py-15 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* DONACIÓN BANCARIA */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 rounded-3xl p-10 border border-white/10 shadow-[0_0_50px_rgba(255,80,0,0.35)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaUniversity className="text-5xl text-indigo-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                Bank Transfer (Mexico)
              </h2>

              <p className="text-gray-300 mb-6">
                Use reference:
                <span className="font-bold text-white"> APORTACIÓN</span>
              </p>

              <div className="bg-black/80 rounded-xl p-6 text-sm space-y-2">
                <p><span className="font-semibold">Bank:</span> BBVA</p>
                <p><span className="font-semibold">Account:</span> 011 862 7339</p>
                <p><span className="font-semibold">CLABE:</span> 012 240 00118627339 1</p>
                <p><span className="font-semibold">Account Holder:</span> Bomberos y Paramédicos SMA AC</p>
              </div>
            </motion.div>

            {/* DONACIÓN INTERNACIONAL */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 rounded-3xl p-10 border border-white/10 shadow-[0_0_50px_rgba(0,255,120,0.35)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaHandHoldingUsd className="text-5xl text-green-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                International Donations
              </h2>

              <p className="text-gray-300 mb-6">
                Donations outside Mexico are processed through
                <span className="font-semibold text-white">
                  {" "}San Miguel Community Foundation
                </span>
              </p>

              <a
                href="https://sanmiguelcommunityfoundation.org/english/bomberos-y-paramedicos-sma-ac/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-xl font-semibold"
              >
                Donate Now
              </a>
            </motion.div>

            {/* DONACIÓN DE MATERIALES */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 rounded-3xl p-10 border border-white/10 shadow-[0_0_50px_rgba(0,140,255,0.35)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaWarehouse className="text-5xl text-blue-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                Material Donations
              </h2>

              <p className="text-gray-300">
                Donate equipment, tools or supplies directly at our facilities.
              </p>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 rounded-3xl p-10 border border-white/10 shadow-[0_0_50px_rgba(37,211,102,0.4)] text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaWhatsapp className="text-5xl text-green-500 mb-6 mx-auto" />
              <h2 className="text-2xl font-bold mb-4">
                More Information
              </h2>

              <p className="text-gray-300 mb-6">
                Contact us directly via WhatsApp.
              </p>

              <a
                href="https://wa.me/524151807211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
              >
                <FaWhatsapp />
                415 180 7211
              </a>

              <p className="text-sm text-gray-400 mt-4">
                Office hours: Mon–Fri · 8:00 AM – 4:00 PM
              </p>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
