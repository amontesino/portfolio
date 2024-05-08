const movieSearch = document.getElementById("movie-search")
const searchBtn = document.getElementById("search-button")
const searchResults = document.getElementById("search-results")

searchBtn.addEventListener("click", () => {
    searchResults.innerHTML = ""
    let movName = movieSearch.value
    fetch(`https://www.omdbapi.com/?apikey=19ae82f6&s=${movName}&type=movie`)
    .then(res => res.json())
    .then(data => {console.log(data)
        movieRender(data)})
})

document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        localStorage.setItem(e.target.dataset.add, e.target.dataset.add)
    }
})

function movieRender(array) {
    if (array.Response == "False") {
            searchResults.innerHTML = `<div id="empty-search">
                <h3>Unable to find what you're looking<br/>for. Please try another search.</h3>
            </div>`
    } else {
        for (let movie of array.Search) {
            fetch(`https://www.omdbapi.com/?apikey=19ae82f6&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(data => 
                {searchResults.innerHTML += `
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
                                    <img data-add="${movie.imdbID}" src="images/add.png">
                                    <p data-add="${movie.imdbID}">Watchlist</p>
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
}