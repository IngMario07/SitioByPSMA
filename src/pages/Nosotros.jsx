import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

import ByP00 from "../assets/images/ByP00.png";
import ByP03 from "../assets/images/ByP03.png";
import ByP04 from "../assets/images/ByP04.png";
//import ByP05 from "../assets/images/ByP05.png";
import Logo from "../assets/images/Logo.png"
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
              We are working towards a Firefighters and Paramedics Association that our city deserves!
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

        {/* STRUCTURE */}
        <section className="px-8">
          <motion.div
            className="
      max-w-4xl mx-auto
      bg-white/10 backdrop-blur-md
      border border-white/10
      rounded-3xl p-10
      text-center space-y-8
      shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              General Assembly, Board of Directors & Command Structure
            </h2>

            {/* ASSEMBLY */}
            <p className="text-lg text-gray-300 leading-relaxed">
              On <strong>January 13, 2026</strong>, the <strong>General Assembly of Members</strong>,
              the supreme governing authority of Bomberos y Paramédicos SMA, was formally convened
              in accordance with the Association’s bylaws.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Through this democratic process, the Assembly exercised its authority to elect and
              ratify the governing bodies responsible for the administration, operation, and legal
              representation of the Association.
            </p>

            {/* BOARD */}
            <h3 className="text-2xl font-semibold text-gray-200">
              Board of Directors (2026–2028)
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              By majority vote, the General Assembly elected the following <strong>Board of Directors</strong>,
              which serves as the administrative and representative body of the Association.
            </p>

            <ul className="text-left list-disc list-inside space-y-2 text-gray-300 max-w-3xl mx-auto">
              <li><strong>President:</strong> Lic. Carlos González Sandoval</li>
              <li><strong>Secretary:</strong> Firefighter Manuel Buenrostro Olvera</li>
              <li><strong>Treasurer:</strong> LCP Claudia Abigail Torres Téllez</li>
              <li><strong>Board Member:</strong> Firefighter John Wesley Burke González</li>
              <li><strong>Board Member:</strong> Dr. Juan Olvera Flores</li>
            </ul>

            {/* FIRE CHIEF */}
            <h3 className="text-2xl font-semibold text-gray-200">
              Fire Chief
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              In accordance with the Association’s bylaws, the <strong>Fire Chief</strong> is a
              statutory governing body responsible for operational command, emergency response,
              and technical leadership.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Fire Chief:</strong> Lic. Juan González
            </p>

            {/* OVERSIGHT BODY / COMISARIO */}
            <h3 className="text-2xl font-semibold text-gray-200">
              Oversight Body (Comisario)
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              In accordance with resolutions adopted by the General Assembly, the Association
              established an <strong>Oversight Body</strong> through the appointment of a
              <strong>Comisario</strong>, responsible for supervising compliance with
              institutional agreements, internal regulations, and transparency principles.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Oversight Body (Comisario):</strong> Ing. José César Guerrero Zárate
            </p>

            {/* LEGAL */}
            <h3 className="text-2xl font-semibold text-gray-200">
              Legal Counsel
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              The Association is supported by a <strong>General Legal Counsel</strong>, a statutory
              body that provides legal advice and representation in alignment with Assembly and
              Board resolutions.
            </p>

            {/* CLOSING */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Together, these governing bodies ensure transparency, institutional strength,
              operational excellence, and a firm commitment to serving our community.
            </p>

            <p className="font-semibold text-gray-200">
              We are working towards a Firefighters and Paramedics Association that our city deserves!
            </p>
          </motion.div>
        </section>



        {/* TIMELINE */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid gap-12">
            {[
              { year: "2022", img: ByP00, text: "First unit lent by Dr. Alberto Carrera." },
              { year: "2022", img: Unidades1, text: "Two units and a temporary station space provided by local government." },
              { year: "2023", img: Dragones1, text: "Creation of the Dragons Reds children's emergency education group." },
              { year: "2023", img: ByP03, text: "Acquisition of ByP03 through Contribution and events." },
              { year: "2024", img: ByP04, text: "Contribution of equipment: Motorized unit (ByP04) and Self-Contained Breathing Apparatus (SCBA) equipment by SAN MIGUEL COMMUNITY FOUNDATION." },
              //{ year: "2026", img: Logo, text: "Contribution of emergency vehicle · Fire truck donated by [Donor name]" },
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




      </main>

      <br />
      <br />


      <Footer />
    </>
  );
};