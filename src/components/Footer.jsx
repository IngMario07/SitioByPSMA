import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import LogoSF from "../assets/images/LogoSF.png";
import { NavLink } from "react-router-dom";

export function Footer() {
  const redes = [
    {
      link: "https://www.facebook.com/bomberosyparamedicossma",
      icon: <FaFacebookF />,
    },
    {
      link: "https://www.instagram.com/bomberos_paramedicos_sma/",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.tiktok.com/@bypsma",
      icon: <FaTiktok />,
    },
  ];

  const routes = [
    { ruta: "/", titulo: "Home" },
    { ruta: "/nosotros", titulo: "About Us" },
    { ruta: "/servicios", titulo: "Services" },
    { ruta: "/donaciones", titulo: "Donations" },
    { ruta: "/colaboradores", titulo: "Collaborators" },
    { ruta: "/contacto", titulo: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        bg-[#111]
        text-gray-300
        px-6 py-16
        relative
        overflow-hidden
      "
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* LOGO + TITULO */}
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={LogoSF}
            alt="Bomberos SMA"
            className="h-20 drop-shadow-xl"
          />

          {/* TEXTO CON EFECTO LLAMA */}
          <motion.h2
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="
              text-3xl md:text-4xl font-extrabold uppercase tracking-wide
              text-transparent bg-clip-text
              bg-[linear-gradient(45deg,#ff9800,#ff5722,#ffeb3b,#ff5722)]
              bg-[length:300%_300%]
            "
          >
            Bomberos y Paramédicos SMA
          </motion.h2>
        </div>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {routes.map((item, index) => (
            <NavLink
              key={index}
              to={item.ruta}
              className="
                uppercase text-sm font-semibold tracking-wide
                hover:text-red-500 transition-colors
              "
            >
              {item.titulo}
            </NavLink>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-700/40 to-transparent" />

        {/* REDES + COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © 2025 All rights reserved.
          </p>

          <div className="flex gap-6">
            {redes.map((red, index) => (
              <motion.a
                key={index}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="
                  text-xl text-gray-300
                  hover:text-red-600
                  transition-colors
                "
              >
                {red.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* CREDITO */}
        <p className="text-center text-xs text-gray-500">
          Made by Ing. Kilian M
        </p>
      </div>
    </motion.footer>
  );
}
