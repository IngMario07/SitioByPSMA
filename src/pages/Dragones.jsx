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

      {/* 🔥 PARTICLES */}
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
            alt="Red Dragons Children's Club"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.img
              src={LogoDragonesRojos}
              alt="Red Dragons Logo"
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
              Red Dragons Children's Club
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Training new generations in first aid, prevention, values,
              and a culture of civil protection.
            </motion.p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div
            className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-xl text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What is the Red Dragons Children's Club?
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The <strong>Red Dragons Children's Club</strong> is an educational
              and recreational program focused on children, where they safely
              and playfully learn what to do in an emergency, how to prevent
              risks, and how to help others.
              <br /><br />
              Our goal is to instill from an early age a culture of responsibility,
              empathy, and care for life.
            </p>
          </motion.div>
        </section>

        {/* LEARNING AREAS */}
        <section className="max-w-6xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandsHelping />,
              title: "First Aid",
              text: "Basic knowledge adapted to each child's age."
            },
            {
              icon: <FaFireExtinguisher />,
              title: "Prevention & Emergencies",
              text: "What to do before, during, and after an emergency."
            },
            {
              icon: <FaHeart />,
              title: "Human Values",
              text: "Teamwork, empathy, respect, and solidarity."
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

        {/* EXPERIENCES */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div
            className="bg-black/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-xl grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Inspiring Experiences
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Club members have the opportunity to visit fire stations,
                meet operational personnel, learn from their experiences,
                and understand the importance of teamwork during emergencies.
                <br /><br />
                The club is also open to invitations from other stations
                and organizations wishing to share knowledge and experiences
                with new generations.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={LogoDragonesRojos}
                alt="Red Dragons"
                className="w-64 opacity-90"
              />
            </div>
          </motion.div>
        </section>

        {/* COMMUNITY SUPPORT */}
        <section className="max-w-6xl mx-auto px-6 mb-32 text-center">
          <motion.div
            className="bg-black/60 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-xl space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaUsers className="text-5xl text-red-500 mx-auto" />

            <h2 className="text-3xl font-bold">
              Support New Generations
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Technology, equipment, and educational materials are constantly
              evolving. For this reason, we invite the community, companies,
              and organizations to support this project.
              <br /><br />
              Every contribution — from the smallest to the largest —
              directly strengthens the education of children, providing
              them with better tools to learn and grow safely.
            </p>
          </motion.div>
        </section>

        {/* PROGRAM MANAGEMENT */}
        <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
          <motion.div
            className="bg-black/60 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaChild className="text-5xl text-red-500 mx-auto" />

            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Program Management
            </h2>

            <p className="text-2xl font-semibold text-gray-100">
              Pilar Gallegos
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Responsible for coordinating, supervising, and strengthening
              the educational activities of the
              <strong> Red Dragons Children's Club</strong>,
              ensuring a safe, educational, and motivating environment
              for the children who are part of the program.
            </p>
          </motion.div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="max-w-5xl mx-auto px-6 mb-40 text-center">
          <motion.div
            className="bg-gradient-to-br from-blue-600/20 via-black/60 to-black/80 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-xl space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Follow Us on Social Media
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Through our social media we share activities, learning moments,
              visits to fire stations, special events, and experiences that
              strengthen the education of our children.
            </p>

            <div className="flex justify-center">
              <motion.a
                href="https://www.facebook.com/clubinfantil.dragonesrojos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF className="text-2xl" />
                Facebook · Red Dragons
              </motion.a>
            </div>

            <p className="text-sm text-gray-400">
              Follow us and be part of a community that believes in education
              and prevention from childhood.
            </p>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
};
