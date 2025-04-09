import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import LogoSF from "../assets/images/LogoSF.png"; // Asegúrate de tener la ruta correcta del logo

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleAbout = () => {
        setAboutOpen(!aboutOpen);
        setServicesOpen(false);
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
        setAboutOpen(false); // Cierra el otro si está abierto
    };

    return (
        <motion.nav 
            className="navbar" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <img src={LogoSF} alt="LogoSF" className="navbar-logo" />
                </div>

                <div className="navbar-links-container">
                    <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <a href="/">HOME</a>
                        <a href="/contacto">Contact</a>
                        <a href="/donaciones">Donations</a>
                        <div className="navbar-dropdown" onClick={toggleAbout}>
                            <a href="#">ABOUT US ▾</a>
                            {aboutOpen && (
                                <motion.div 
                                    className="dropdown-menu" 
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a href="/nosotros">Who Are We?</a>
                                    <br/>
                                    <a href="/dragones">Dragones Club</a>
                                    <br/>
                                    <a href="/transparencia">Transparency</a>
                                </motion.div>
                            )}
                        </div>
                        <div className="navbar-dropdown" onClick={toggleServices}>
                            <a href="#">Services ▾</a>
                            {servicesOpen && (
                                <motion.div 
                                    className="dropdown-menu" 
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a href="/servicios">Our Services</a>
                                    <br/>
                                    <a href="/estadisticas">STATISTICS</a>
                                </motion.div>
                            )}
                        </div>
                        <a href="/colaboradores">Collaborators</a>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>☰</div>
                </div>
            </div>
        </motion.nav>
    );
}
