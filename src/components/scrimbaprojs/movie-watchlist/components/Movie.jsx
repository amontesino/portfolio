import React from "react";

export default function Movie(props) {
    return (
        <>
            <div id="movie-container">
                <img className="poster" src="${data.Poster}" />
                <div id="movie-info">
                    <div id="top-row">
                        <h3 className="title">${data.Title}</h3>
                        <img src="images/star.png" />
                        <p className="rating">${data.imdbRating}</p>
                    </div>
                    <div id="bottom-row">
                        <p className="detail">${data.Runtime}</p>
                        <p className="detail">${data.Genre}</p>
                        <div className="add-to-watchlist" >
                            <img data-remove="${data.imdbID}" src="images/remove.png" />
                            <p data-remove="${data.imdbID}">Watchlist</p>
                        </div>
                    </div>
                    <p className="plot">${data.Plot}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}