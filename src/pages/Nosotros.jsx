import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import ByP00 from "../assets/images/ByP00.png";
import ByP03 from "../assets/images/ByP03.png";
import ByP04 from "../assets/images/ByP04.png";
import Dragones1 from "../assets/images/Dragones1.png";
import Unidades1 from "../assets/images/Unidades1.png";

export const Nosotros = () => {
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
              About Us
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Firefighters and Paramedics SMA is a non-profit organization,
              created with the commitment to protect, assist and save lives in
              emergency situations.
              <br /><br />
              Let's Go For A Firefighters and Paramedics Association At The Level
              Our City Deserves!
            </p>
          </motion.div>
        </section>

        {/* HISTORY */}
        <section className="px-6">
          <motion.div
            className="
              max-w-4xl mx-auto
              bg-white/10 backdrop-blur-md
              border border-white/10
              rounded-3xl p-10
              text-center space-y-8
              shadow-xl
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our History
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Founded in 2022, ByPSMA began with a small group of volunteers
              committed to the safety and well-being of the community.
              <br /><br />
              Today, thanks to community support, we continue strengthening our
              emergency response capacity.
            </p>
          </motion.div>
        </section>

        {/* TIMELINE */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid gap-12">
            {[
              { year: "2022", img: ByP00, text: "First unit lent by Dr. Alberto Carrera." },
              { year: "2022", img: Unidades1, text: "Two units and a temporary station space provided by local government." },
              { year: "2023", img: Dragones1, text: "Creation of the Dragons children's emergency education group." },
              { year: "2023", img: ByP03, text: "Acquisition of ByP03 through donations and events." },
              { year: "2024", img: ByP04, text: "Donation of ByP04 and SCBA equipment by San Miguel Community Foundation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  rounded-3xl p-8
                  shadow-xl
                  hover:scale-[1.02] transition
                "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* YEAR */}
                <div className="flex justify-center mb-8">
                  <div
                    className="
                      w-28 h-28 rounded-full
                      bg-black/40 backdrop-blur
                      border border-white/20
                      text-white
                      flex items-center justify-center
                      text-2xl font-bold
                      shadow-lg
                    "
                  >
                    {item.year}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img
                    src={item.img}
                    alt={item.year}
                    className="
                      w-full md:w-1/2
                      h-[300px]
                      object-cover
                      rounded-2xl
                      shadow-lg
                    "
                  />
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STRUCTURE */}
        <section className="px-6">
          <motion.div
            className="
              max-w-4xl mx-auto
              bg-white/10 backdrop-blur-md
              border border-white/10
              rounded-3xl p-10
              text-center space-y-10
              shadow-xl
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Structure of the Association
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>The Assembly</strong> is the highest authority of the
              Association, composed of more than 35 active firefighters.
            </p>

            <ul className="text-left list-disc list-inside space-y-2 text-gray-300 max-w-3xl mx-auto">
              <li>Elect council members</li>
              <li>Approve budgets</li>
              <li>Define operational guidelines</li>
              <li>Review annual reports</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>The Council Directors</strong> execute strategies approved
              by the Assembly and manage daily operations.
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