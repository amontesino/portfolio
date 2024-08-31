import React, { createContext } from 'react'
import { scrimProjList, smallProjList } from '../utils/portfolioList'
import { Link, useLocation } from 'react-router-dom'
import AnimatedPage from '../AnimatedPage'
import PortfolioNav from '../components/PortfolioNav'

export const Expand = createContext(false)

export default function Portfolio() {
    const { search } = useLocation()
    const small = new URLSearchParams(search).get('small')

    return (
        <AnimatedPage>
            <Expand.Provider value={Expand}>
                <main className="page-section">
                    <h1 className="page-head">Portfolio</h1>
                    <h3 className="disclaimer">DISCLAIMER: The below projects are hosted on separate Netlify sites, and are actively being rewritten as React apps that will be displayed/functional on this site, rather than their old Javascript versions. For the time being they will appear janky yet function as intended.</h3>
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
                        <Link
                            className="portfolio-navlink disabled"
                            to={null}
                        >
                            Pokemon Go String Generator
                        </Link>
                        <Link
                            className="portfolio-navlink disabled"
                            to={null}
                        >
                            Karpy
                        </Link>
                    </div>
                </main>
            </Expand.Provider>
        </AnimatedPage>
    )
}