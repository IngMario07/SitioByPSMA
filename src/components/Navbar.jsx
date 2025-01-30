import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import LogoSF from "../assets/images/LogoSF.png"; // Asegúrate de tener la ruta correcta del logo

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.nav 
            className="navbar" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            <div className="navbar-container">
                {/* Logo en el Navbar */}
                <div className="navbar-logo-container">
                    <img src={LogoSF} alt="LogoSF" className="navbar-logo" />
                </div>

                <div className="navbar-links-container">
                    <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <a href="/">Inicio</a>
                        <a href="/contacto">Contacto</a>
                        <a href="/donaciones">Donaciones</a>
                        <a href="/nosotros">SOBRE NOSOTROS</a>
                        <a href="/servicios">Servicios</a>
                        <a href="/colaboradores">Colaboradores</a>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
