import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Importar íconos de React Icons
import './Footer.css';
import LogoSF from "../assets/images/LogoSF.png";

export function Footer() {
    const redes = [
        { red: "Facebook", link: "https://www.facebook.com/bomberosyparamedicossma", icon: <FaFacebookF size={24} /> },
        { red: "Instagram", link: "https://www.instagram.com/bomberos_paramedicos_sma/", icon: <FaInstagram size={24} /> },
        { red: "TikTok", link: "https://www.tiktok.com/@bypsma", icon: <FaTiktok size={24} /> },
    ];

    const routes = [
        { ruta: '/home', titulo: 'HOME' },
        { ruta: '/contacto', titulo: 'Contact' },
        { ruta: '/donaciones', titulo: 'Donations' },
        { ruta: '/nosotros', titulo: 'About Us' },
        { ruta: '/servicios', titulo: 'Services' },
        { ruta: '/colaboradores', titulo: 'Collaborators' },
    ];

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-container">
                {/* Sección superior con el logo */}
                <div className="footer-top">
                    <div className="footer-logo-container">
                        <img src={LogoSF} alt="LogoSF" className="footer-logo" />
                        <p className="footer-title">BOMBEROS Y PARAMEDICOS SMA</p>
                    </div>
                </div>

                {/* Sección de enlaces */}
                <div className="footer-links-container">
                    <div className="footer-links">
                        {routes.map((item, index) => (
                            <a href={item.ruta} key={index}>{item.titulo}</a>
                        ))}
                    </div>
                    <div className="footer-divider"></div>
                    <div className="footer-credit">
                        <p>Made by Ing. Kilian M</p>
                    </div>
                </div>

                {/* Sección de redes sociales */}
                <div className="footer-bottom">
                    <p>&copy; 2025 All rights reserved.</p>
                    <div className="footer-social">
                        {redes.map((red, index) => (
                            <a href={red.link} key={index} target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                {red.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
