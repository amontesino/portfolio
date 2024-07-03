import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPerson, faSuitcase } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="header">
            <Link className="header-name" to="/">
                {/* <img src={null} /> */}
                <FontAwesomeIcon icon={faHome} className='mobile-hidden' />
                <h1 className="desktop-hidden">A. Montesino</h1>
            </Link>
            <hr className="rounded mobile-hidden" />
            <nav className="navlink-container">
                {/* Figure out how to transition between NavLinks */}
                <NavLink
                    className="header-link"
                    to="portfolio"
                    // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <FontAwesomeIcon icon={faSuitcase} />
                </NavLink>
                <NavLink
                    className="header-link"
                    to="about"
                >
                    <FontAwesomeIcon icon={faPerson} />
                </NavLink>
                <NavLink
                    className="header-link"
                    to="contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
        </header>
    )
}