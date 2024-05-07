import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <>
            <section className="page-section">
                <h1 className="page-head">About</h1>
                <h2>Who am I?</h2>
                <p>I'm <span className="strong">Armando Montesino.</span> I am a frontend developer with over a year of academic and amateur experience after leaving behind my Communications degrees. If you're looking to help me add "professional" to that list of adjectives,
                    <NavLink 
                        className="paragraph-link"
                        to="../contact"
                    >
                        let's talk.!
                    </NavLink>
                </p>
                <h2>Why webdev after communications degrees?</h2>
                <p>Believe me, I've asked myself the same thing. The condensed version is, I realized my heart was not in Journalism, Marketing, PR, or any type of communications work, as valuable as the field is. My original career path in college was actually computer science, but I transferred to the aforementioned communications field a year and a half in because it got too hard. Here I am though, many years later, having come back to it however. If I may part one piece of advice onto you...</p>
                <h3 className="center">If you know you love something, do not let difficulty dissuade you.</h3>
                <h2>Skills</h2>
                <p>I am well versed in the following languages and tools;</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <p>as well as being an avid proponent of these concepts:</p>
                <ul>
                    <li>Responsive Design</li>
                    <li>Accessibility</li>
                    <li>GitHub & general version control</li>
                </ul>
            </section>
        </>
    )
}