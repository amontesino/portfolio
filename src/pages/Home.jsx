import React from 'react'

export default function Home() {

    return (
        <>
            <main className="page-section home">
                <h1 className="page-head desktop-hidden">Home page</h1>
                <h2 className="home-head">Hello!</h2>
                <p className="home-body">Pleased to meet you! My name is Armando, a frontend developer who never stops learning, creating, and exploring the world of code through the lens of personal interest.</p>
                <p className='home-body'>
                    Feel free to click through the links <span className="desktop-hidden"> above </span> <span className="mobile-hidden"> to the left </span> to learn more about me, my work, and how we can get in touch for a potential project!
                </p>
            </main>
        </>
    )
}