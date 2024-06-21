import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <Link className="header-name" to="/">A. Montesino</Link>
            <nav class="navlink-container">
                {/* Figure out how to transition between NavLinks */}
                <NavLink
                    className="header-link"
                    to="portfolio"
                    // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    className="header-link"
                    to="about"
                >
                    About
                </NavLink>
                <NavLink
                    className="header-link"
                    to="contact"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}