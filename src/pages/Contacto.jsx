import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export const Contacto = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔥 PARTÍCULAS DE FONDO */}
      <Particles
              id="tsparticles"
              init={particlesInit}
              style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
              options={{
                preset: "fire",
                background: { color: "#1a202c00" },
                fullScreen: { enable: false },
              }}
            />

      {/* CONTENIDO */}
      <main className="relative z-10 min-h-screen text-white bg-gradient-to-b from-black/40 via-black/5 ">

        {/* HERO */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We are here to help you. Don&apos;t hesitate to contact us.
          </motion.p>
        </section>

        {/* MAPA */}
        <section className="px-6 mb-24">
          <motion.div
            className="max-w-xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,80,0,0.25)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3927500000003!2d-100.7197406888008!3d20.896492640210056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b518a0f9c433b%3A0x24922b0c5bc207ff!2sBomberos%20y%20Param%C3%A9dicos%20SMA!5e0!3m2!1ses-419!2smx!4v1738099497092!5m2!1ses-419!2smx"
              className="w-full h-[300px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        {/* TARJETAS DE CONTACTO */}
        <section className="pb-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* TELÉFONO */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-[0_0_40px_rgba(0,140,255,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaPhoneAlt className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+52 (415) 688 1615</p>
            </motion.div>

            {/* DIRECCIÓN */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-[0_0_40px_rgba(255,140,0,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-4xl text-orange-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-300 text-sm">
                Fray Bernardo Cossin 133-Int. 1<br />
                San Miguel de Allende, Gto.
              </p>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-[0_0_40px_rgba(0,255,120,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-4xl text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300 text-sm break-all">
                bomberosyparamedicossma@gmail.com
              </p>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-[0_0_50px_rgba(37,211,102,0.4)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaWhatsapp className="text-5xl text-[#25D366] mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <a
                href="https://wa.me/524151807211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
              >
                415 180 7211
              </a>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
