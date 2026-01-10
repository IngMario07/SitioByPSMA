import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import Ultimo from "../assets/images/Ultimo.png";
import {
  FaHandsHelping,
  FaUsers,
  FaHeartbeat,
  FaArrowDown,
} from "react-icons/fa";

export const Inicio = () => {
  const particlesInit = useCallback((engine) => {
    loadFirePreset(engine);
  }, []);

  return (
    <>
      <Navbar />

      {/* FONDO DE PARTÍCULAS */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "fire",
          background: { color: "#1a202c" },
          fullScreen: { enable: true, zIndex: -1 },
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <main
        className="
          relative min-h-screen
          flex flex-col items-center
          px-6
          pt-32 lg:pt-36
          space-y-20
          text-white
        "
      >
        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            relative
            w-full max-w-6xl
            rounded-3xl
            overflow-hidden
            bg-black
            ring-1 ring-white/10
            shadow-[0_40px_80px_rgba(0,0,0,0.55)]
          "
        >
          {/* IMAGEN */}
          <motion.img
            src={Ultimo}
            alt="Welcome"
            className="w-full object-cover scale-[1.02]"
            initial={{ scale: 1.08, filter: "blur(8px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              filter: "brightness(1.1) contrast(1.15) saturate(1.1)",
            }}
          />

          {/* OVERLAY CINEMATOGRÁFICO */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/30
              to-transparent
            "
          />

          {/* GLOW SUAVE */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              shadow-[inset_0_0_120px_rgba(255,90,0,0.15)]
            "
          />
        </motion.div>

        {/* TITULO */}
        <div className="text-center max-w-5xl space-y-8">
          <motion.h1
            className="
              text-4xl sm:text-5xl md:text-7xl
              font-extrabold
              drop-shadow-xl
            "
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Firefighters and Paramedics SMA
          </motion.h1>

          <motion.p
            className="
              text-lg sm:text-xl md:text-2xl
              text-gray-300
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We are building a Firefighters and Paramedics Association at the level
            our city deserves.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaArrowDown className="text-3xl text-gray-300 animate-bounce" />
          </motion.div>
        </div>

        {/* TARJETAS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              icon: <FaHandsHelping />,
              title: "Humanitarian Aid",
              text: "Always ready to respond and help where it is most needed.",
            },
            {
              icon: <FaUsers />,
              title: "United Community",
              text: "Working together to build a safer and stronger city.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Saving Lives",
              text: "Our priority is protecting what matters most: life.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="
                bg-gray-900/90
                p-8 rounded-2xl
                text-center
                shadow-xl
                hover:scale-105
                transition
              "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="text-5xl mb-5 text-red-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </section>

        {/* TEXTO FINAL */}
        <section className="max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Social Commitment
          </h2>

          <p className="text-gray-300 leading-7">
            Every day is an opportunity to make a difference and protect our
            community. We are trained, committed and passionate.
          </p>

          <p className="text-gray-300 leading-7">
            We do not only respond to emergencies — we prevent, educate and work
            alongside our people.
          </p>

          <p className="font-bold text-gray-200">
            Always ready. Always by your side.
          </p>
        </section>
      </main>

      <br/>

      <Footer />
    </>
  );
};
