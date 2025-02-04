import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
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
                        <a href="/">HOME</a>
                        <a href="/contacto">Contact</a>
                        <a href="/donaciones">Donations</a>
                        <a href="/nosotros">ABOUT US</a>
                        <a href="/servicios">Services</a>
                        <a href="/colaboradores">Collaborators</a>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
