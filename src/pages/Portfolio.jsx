import React from 'react'
import MovieWatchlist from '../components/scrimbaprojs/movie-watchlist/MovieWatchlist'

export default function Portfolio() {
    return (
        <>
            <main className="page-section">
                <h1 className="page-head">Portfolio</h1>
                <h2>Personal projects</h2>
                <p>Coming soon... ;)</p>
                <h2>Scrimba projects</h2>
                {/* Add the following:
                    -Component Library++
                    -Quizzical App
                    -Movie Watchlist
                    -Restaurant Ordering-App
                    -Travel Journal */}
                <p>These were projects that I made during my time in the<a href="https://scrimba.com">Scrimba bootcamp.</a> I highly recommend the service, you don't just get a balanced curriculum of HTML, CSS, JS and React, but you also get access to a wonderful community of fellow students and supportive leadership. The projects listed speak to both my skills as a developer and the quality of the Scrimba course material.</p>
                <h2>Smaller components</h2>
                {/* Add the following:
                    -Password Generator
                    -Color Scheme Generator
                    -Basketball Scoreboard
                     */}
                <p>These may fall into above categories, but are smaller projects that can easily fit onto a main.</p>
            </main>
        </>
    )
}