import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";
import {
  FaFacebookF,
  FaHeart,
  FaHandsHelping,
  FaFireExtinguisher,
  FaUsers,
  FaChild
} from "react-icons/fa";

import LogoDragonesRojos from "../assets/images/LogoDragonesRojos.png";
import BannerDragonesRojos from "../assets/images/BannerDragonesRojos.png";

export const Dragones = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔥 PARTÍCULAS */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "fire",
          background: { color: "#0b0f1a" },
          fullScreen: { enable: true, zIndex: -1 },
        }}
      />

      <main className="relative z-10 text-white">

        {/* HERO / BANNER */}
        <section className="relative h-[90vh] w-full flex items-center justify-center text-center">
          <img
            src={BannerDragonesRojos}
            alt="Club Infantil Dragones Rojos"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]"></div>

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.img
              src={LogoDragonesRojos}
              alt="Logo Dragones Rojos"
              className="w-48 sm:w-56 md:w-64 mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Club Infantil Dragones Rojos
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Formando a las nuevas generaciones en primeros auxilios,
              prevención, valores y cultura de protección civil.
            </motion.p>
          </div>
        </section>

        {/* ¿QUIÉNES SOMOS? */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div
            className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-xl text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Qué es el Club Infantil Dragones Rojos?
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              El <strong>Club Infantil Dragones Rojos</strong> es un programa
              educativo y recreativo enfocado en niñas y niños, donde aprenden
              de manera segura y divertida qué hacer ante una emergencia,
              cómo prevenir riesgos y cómo ayudar a los demás.
              <br /><br />
              Nuestro objetivo es sembrar desde temprana edad una cultura
              de responsabilidad, empatía y cuidado de la vida.
            </p>
          </motion.div>
        </section>

        {/* APRENDIZAJES */}
        <section className="max-w-6xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandsHelping />,
              title: "Primeros Auxilios",
              text: "Conocimientos básicos adaptados a la edad de cada niño."
            },
            {
              icon: <FaFireExtinguisher />,
              title: "Prevención y Emergencias",
              text: "Qué hacer antes, durante y después de una emergencia."
            },
            {
              icon: <FaHeart />,
              title: "Valores Humanos",
              text: "Trabajo en equipo, empatía, respeto y solidaridad."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:scale-105 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl text-red-500 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* EXPERIENCIAS */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div
            className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-xl grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Experiencias que Inspiran
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Las y los integrantes del club tienen la oportunidad de visitar
                estaciones de bomberos, conocer a personal operativo,
                aprender de sus experiencias y comprender la importancia del
                trabajo en equipo durante una emergencia.
                <br /><br />
                Además, el club está abierto a recibir invitaciones de otras
                estaciones y organizaciones que deseen compartir conocimientos
                y vivencias con las nuevas generaciones.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={LogoDragonesRojos}
                alt="Dragones Rojos"
                className="w-64 opacity-90"
              />
            </div>
          </motion.div>
        </section>

        {/* APOYO A LA COMUNIDAD */}
        <section className="max-w-6xl mx-auto px-6 mb-32 text-center">
          <motion.div
            className="bg-black/60 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-xl space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaUsers className="text-5xl text-red-500 mx-auto" />

            <h2 className="text-3xl font-bold">
              Apoya a las Nuevas Generaciones
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              La tecnología, el equipamiento y los materiales educativos
              evolucionan constantemente. Por ello, invitamos a la comunidad,
              empresas y organizaciones a apoyar este proyecto.
              <br /><br />
              Toda aportación —desde la más pequeña hasta la más grande—
              contribuye directamente a fortalecer la formación de niñas y niños,
              brindándoles mejores herramientas para aprender y crecer seguros.
            </p>
          </motion.div>
        </section>

        {/* DIRECCIÓN */}
<section className="max-w-4xl mx-auto px-6 mb-32 text-center">
  <motion.div
    className="
      bg-black/60 backdrop-blur-xl
      rounded-3xl p-12
      border border-white/10 shadow-xl space-y-6
    "
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <FaChild className="text-5xl text-red-500 mx-auto" />

    <h2 className="text-3xl sm:text-4xl font-extrabold">
      Dirección del Programa
    </h2>

    <p className="text-2xl font-semibold text-gray-100">
      Pilar Gallegos
    </p>

    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Responsable de coordinar, supervisar y fortalecer las actividades
      formativas del <strong>Club Infantil Dragones Rojos</strong>,
      asegurando un entorno seguro, educativo y motivador para
      las niñas y los niños que forman parte del programa.
    </p>
  </motion.div>
</section>

        {/* REDES */}
<section className="max-w-5xl mx-auto px-6 mb-40 text-center">
  <motion.div
    className="
      bg-gradient-to-br from-blue-600/20 via-black/60 to-black/80
      backdrop-blur-xl rounded-3xl p-12
      border border-white/10 shadow-xl space-y-8
    "
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold">
      Síguenos en Redes Sociales
    </h2>

    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
      A través de nuestras redes compartimos actividades, aprendizajes,
      visitas a estaciones de bomberos, eventos especiales y momentos
      que fortalecen la formación de nuestras niñas y niños.
    </p>

    <div className="flex justify-center">
      <motion.a
        href="https://www.facebook.com/clubinfantil.dragonesrojos"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-4
          bg-blue-600 hover:bg-blue-700
          px-10 py-5 rounded-2xl
          font-bold text-lg shadow-lg
        "
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaFacebookF className="text-2xl" />
        Facebook · Dragones Rojos
      </motion.a>
    </div>

    <p className="text-sm text-gray-400">
      Síguenos y forma parte de esta comunidad que cree en la educación
      y la prevención desde la infancia.
    </p>
  </motion.div>
</section>

      </main>

      <Footer />
    </>
  );
};
