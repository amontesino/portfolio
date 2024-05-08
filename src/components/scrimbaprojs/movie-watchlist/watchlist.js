const watchlistEl = document.getElementById("watchlist")

document.addEventListener("click", function(e){
    if(e.target.dataset.remove){
        localStorage.removeItem(e.target.dataset.remove)
        watchlistRender()
    }
})

function watchlistRender() {
    for (let i = 0; i < localStorage.length; i++) {
        watchlistEl.innerHTML = ""
        fetch(`https://www.omdbapi.com/?apikey=19ae82f6&i=${localStorage.key(i)}`)
        .then(res => res.json())
        .then(data => 
            {watchlistEl.innerHTML += `
                <div id="movie-container">
                    <img class="poster" src="${data.Poster}">
                    <div id="movie-info">
                        <div id="top-row">
                            <h3 class="title">${data.Title}</h3>
                            <img src="images/star.png">
                            <p class="rating">${data.imdbRating}</p>
                        </div>
                        <div id="bottom-row">
                            <p class="detail">${data.Runtime}</p>
                            <p class="detail">${data.Genre}</p>
                            <div class="add-to-watchlist" >
                                <img data-remove="${data.imdbID}" src="images/remove.png">
                                <p data-remove="${data.imdbID}">Watchlist</p>
                            </div>
                        </div>
                        <p class="plot">${data.Plot}</p>
                    </div>
                </div>
                <hr>
        `
        })
    }
}

watchlistRender()