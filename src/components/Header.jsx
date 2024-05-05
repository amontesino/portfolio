import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <Link className="header-name" to="/">A. Montesino</Link>
            <nav>
                <NavLink
                    to="portfolio"
                    // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="about"
                >
                    About
                </NavLink>
                <NavLink
                    to="contact"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}