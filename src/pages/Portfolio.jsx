import React, { createContext, useState } from 'react'
import { scrimProjList, smallProjList } from '../utils/portfolioList'
import { Link, useLocation } from 'react-router-dom'
import AnimatedPage from '../AnimatedPage'
import PortfolioNav from '../components/PortfolioNav'


export default function Portfolio() {
    const { search } = useLocation()
    const small = new URLSearchParams(search).get('small')

    return (
        <AnimatedPage>
                <main className="page-section">
                    <h1 className="page-head">Portfolio</h1>
                    <h2>Scrimba projects</h2>
                    {/* Add the following:
                        -Component Library++
                        -Quizzical App
                        -Movie Watchlist
                        -Restaurant Ordering-App
                        -Travel Journal */}
                    <PortfolioNav
                        projectData={scrimProjList}
                    />
                    <p>These were projects that I made during my time in the <a className="body-link" href="https://scrimba.com">Scrimba bootcamp.</a> I highly recommend the service, you don't just get a balanced curriculum of HTML, CSS, JS and React, but you also get access to a wonderful community of fellow students and supportive leadership. The projects listed speak to both my skills as a developer and the quality of the Scrimba course material.</p>
                    <h2>Smaller components</h2>
                    {/* Add the following:
                        -Password Generator
                        -Color Scheme Generator
                        -Digital Business Card
                        -Basketball Scoreboard*/}
                    <PortfolioNav
                        projectData={smallProjList}
                    />
                    <p>These may fall into above categories, but are smaller projects that can easily fit onto a page.</p>
                    <h2>In development</h2>
                    {/* <p>None yet! But we're cooking!</p> */}
                    <div className={'portfolio-nav'}>
                        <button
                            className="portfolio-navlink disabled"
                            disabled
                        >
                            Pokemon Go String Generator
                        </button>
                        <button
                            className="portfolio-navlink disabled"
                            disabled
                        >
                            Karpy
                        </button>
                    </div>
                </main>
        </AnimatedPage>
    )
}