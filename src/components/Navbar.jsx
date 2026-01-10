import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LogoSF from "../assets/images/LogoSF.png";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const links = [
    { ruta: "/", titulo: "Home" },

    {
      titulo: "About Us",
      submenu: [
        { ruta: "/nosotros", titulo: "Who Are We?" },
        { ruta: "/dragones", titulo: "Dragones Club" },
        { ruta: "/transparencia", titulo: "Transparency" },
      ],
    },

    {
      titulo: "Services",
      submenu: [
        { ruta: "/servicios", titulo: "Our Services" },
        { ruta: "/estadisticas", titulo: "Statistics" },
      ],
    },

    { ruta: "/donaciones", titulo: "Donations" },
    { ruta: "/colaboradores", titulo: "Collaborators" },
    { ruta: "/contacto", titulo: "Contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="
          hidden lg:inline-flex
          fixed top-5 left-1/2 -translate-x-1/2
          items-center gap-8
          px-8 py-3 rounded-[2rem]
          backdrop-blur-md
          bg-white/70
          border border-red-700/30
          shadow-[0_10px_30px_rgba(176,0,32,0.25)]
          z-50
        "
      >
        {/* LOGO */}
        <div className="w-[120px]">
          <img src={LogoSF} alt="Logo" className="h-11" />
        </div>

        {/* LINKS */}
        <ul className="flex items-center gap-8 font-semibold uppercase text-[13px]">
          {links.map((item, index) => (
            <li key={index} className="relative group">
              {/* LINK NORMAL */}
              {!item.submenu ? (
                <NavLink
                  to={item.ruta}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-700"
                      : "text-gray-800 hover:text-red-700"
                  }
                >
                  {item.titulo}
                </NavLink>
              ) : (
                <>
                  <button className="flex items-center gap-1 text-gray-800 hover:text-red-700">
                    {item.titulo}
                    <ChevronDown size={14} />
                  </button>

                  {/* SUBMENU DESKTOP */}
                  <div
                    className="
                      absolute top-full left-1/2 -translate-x-1/2
                      mt-4 w-52
                      bg-white rounded-xl shadow-lg
                      border border-black/10
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all
                    "
                  >
                    {item.submenu.map((sub, i) => (
                      <NavLink
                        key={i}
                        to={sub.ruta}
                        className={({ isActive }) =>
                          `
                          block px-4 py-3 text-sm
                          ${isActive
                            ? "bg-red-700 text-white"
                            : "hover:bg-yellow-100 text-gray-800"}
                        `
                        }
                      >
                        {sub.titulo}
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="w-[120px]" />
      </motion.nav>

      {/* ================= MOBILE BUTTON ================= */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          lg:hidden fixed top-5 left-5
          p-2 rounded-2xl
          bg-white/90 backdrop-blur-md
          border border-red-700/30
          z-50
        "
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            className="
              lg:hidden fixed inset-0
              bg-white z-40 pt-24
              flex flex-col gap-3 px-6
            "
          >
            {links.map((item, index) => (
              <div key={index}>
                {!item.submenu ? (
                  <NavLink
                    to={item.ruta}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-bold border-b"
                  >
                    {item.titulo}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === index ? null : index
                        )
                      }
                      className="w-full flex justify-between items-center py-3 text-lg font-bold border-b"
                    >
                      {item.titulo}
                      <ChevronDown
                        className={`transition ${
                          openSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openSubmenu === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4"
                        >
                          {item.submenu.map((sub, i) => (
                            <NavLink
                              key={i}
                              to={sub.ruta}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-gray-700"
                            >
                              {sub.titulo}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
