import React from 'react'
import Movie from './components/Movie'

export default function MovieWatchlist() {
    

    return (
        <>
            <header>
                <h1>My Watchlist</h1>
                <a href="index.html">Search for movies</a>
            </header>
            <main id="watchlist">
                <div id="empty-search">
                    <h3>Your watchlist is looking a little empty...</h3>
                    <div class="add-to-watchlist">
                        <img src="images/add.png" />
                        <p>Let's add some movies!</p>
                    </div>
                </div>
            </main>
            <script src="watchlist.js"></script>
        </>
    )
}