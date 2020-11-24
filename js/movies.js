"use strict"

const url = "https://api.themoviedb.org/3/search/movie?api_key="
const imageUrl ="https://image.tmdb.org/t/p/w500/"
const getMovies = function (string){
    return fetch(`${url}${versionThree}&query=${string}&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())
        // .then(console.log)
        .catch(console.error);
}
let searchedMovies;

getMovies('titanic').then(movies => {
    searchedMovies = movies.results;
    // console.log(searchedMovies)
// let html = ``;
//     for(let movie of searchedMovies){
//         html += `<div class='card'>`
//             html += `<img src="${imageUrl}${movie.poster_path}">`
//             html += `<h3 class='card_header'>${movie.title}</h3>`
//             html += `<p>${movie.overview}</p>`
//         html += `</div>`
//         document.getElementById('movies').html(getMovies)
//     }
    renderMovies(searchedMovies);
});
function renderMovies (){
    let html = ``;
    for(let movie of searchedMovies){
        html += `<div class='card'>`
        html += `<img src="${imageUrl}${movie.poster_path}" style="width: 20em">`
        html += `<h3 class='card_header'>${movie.title}</h3>`
        html += `<p>${movie.overview}</p>`
        html += `</div>`
        // document.write(html);
    }
    document.write(html);
}
    // searchedMovies = movies.results;
    // console.log(searchedMovies)


// function getMovie(movies){
//     for(let movie of movies){
//         console.log(movie.results);
//     }
//     return null;
// }


// function searchMovies(string){
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${versionThree}`
//     const options = {headers: {'authorization': 'token ' + versionThree}};
//     return fetch(url, options)
//         .then(res => res.json())
//         .then(dateofPushEvent)
//         .catch(console.error);
// }

