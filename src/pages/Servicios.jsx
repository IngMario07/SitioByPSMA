import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export const Servicios = () => {
  const particlesInit = useCallback((engine) => {
    loadFirePreset(engine);
  }, []);

  return (
    <>
      <Navbar />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "fire",
          background: { color: "#1a202c" },
          fullScreen: { enable: true, zIndex: -1 },
        }}
      />

      <main className="relative text-white pt-32 space-y-32">

        {/* HERO */}
        <section className="px-6 max-w-4xl mx-auto">
          <motion.div
            className="
              bg-black/30 backdrop-blur-md
              border border-white/10
              rounded-3xl p-10
              text-center space-y-8
              shadow-2xl
            "
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Our Services
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              At Firefighters and Paramedics SMA we offer essential services for
              the safety and well-being of our community. We respond to
              emergencies, provide training and support events with a highly
              committed team.
            </p>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* FIRE SERVICE */}
            <motion.div
              className="
                bg-white/10 backdrop-blur-md
                border border-white/10
                rounded-3xl p-8
                text-center space-y-6
                shadow-xl
                hover:scale-[1.03] transition
              "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold">
                Fire Service
              </h2>

              <p className="text-gray-300 leading-relaxed">
                We respond to fires, rescues and high-risk situations with
                trained personnel and specialized equipment, prioritizing the
                protection of life and property.
              </p>
            </motion.div>

            {/* MEDICAL EMERGENCIES */}
            <motion.div
              className="
                bg-white/10 backdrop-blur-md
                border border-white/10
                rounded-3xl p-8
                text-center space-y-6
                shadow-xl
                hover:scale-[1.03] transition
              "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold">
                Medical Emergencies
              </h2>

              <p className="text-gray-300 leading-relaxed">
                As first responders, we provide immediate medical care,
                stabilization and AED assistance while ambulance units arrive
                to continue advanced treatment.
              </p>
            </motion.div>

            {/* TRAINING */}
            <motion.div
              className="
                bg-white/10 backdrop-blur-md
                border border-white/10
                rounded-3xl p-8
                text-center space-y-6
                shadow-xl
                hover:scale-[1.03] transition
              "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold">
                Emergency Training
              </h2>

              <p className="text-gray-300 leading-relaxed">
                We offer first aid, CPR, fire extinguisher use and emergency
                response training for schools, companies and the community.
              </p>
            </motion.div>

          </div>
        </section>

        {/* EVENTS */}
        <section className="px-6 max-w-4xl mx-auto">
          <motion.div
            className="
              bg-black/30 backdrop-blur-md
              border border-white/10
              rounded-3xl p-10
              text-center space-y-6
              shadow-xl
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold">
              Event Coverage
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              We provide safety coverage for public and private events,
              ensuring rapid response to any emergency and peace of mind for
              organizers and attendees.
            </p>
          </motion.div>
        </section>

      </main>

      <br/>
      <br/>


      <Footer />
    </>
  );
};
