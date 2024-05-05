import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Footer() {
    return(
        <footer className="footer">
            <p>Built with <img src={viteLogo} /> + <img src={reactLogo} /></p>
        </footer>
    )
}