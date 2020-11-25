"use strict"

const url = "https://api.themoviedb.org/3/search/movie?api_key="
const imageUrl ="https://image.tmdb.org/t/p/w500/"
const nowMovie = "https://api.themoviedb.org/3/movie/now_playing?api_key="
const movieGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key="








//****** will populate now playing movies for page loadup***
let popularMovies;
function getPopMovies(string){
    return fetch(`${nowMovie}${versionThree}&language=en-US&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())

        // .then(console.log)
        .catch(console.error);

}
getPopMovies().then(movies => {
    popularMovies = movies.results
    console.log(popularMovies);
    renderSearchedMovies(popularMovies);
})

//********************************************************************************
//***************************SEARCHED CODE AND RENDERING**************************
//********************************************************************************
var submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    let searchValue = $('#searchbar').val();
    console.log(`This is the function running when button is clicked search value is :${searchValue}`)
    movieSearch(searchValue)
})
let userInput;
function movieSearch (value){
    userInput = value.toLowerCase();
    console.log(`This is the function running 2nd in line :${userInput}`)
    getSearchedMovies(userInput)
}
let searchedMovies;
function getSearchedMovies(input){
    console.log(`This is the getSearchedMovies Function looking for value :${input}`)
        fetch(`${url}${versionThree}&query=${input}&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())
        .then(movies => {
            searchedMovies = movies.results
            console.log(searchedMovies);
            renderSearchedMovies(searchedMovies);
        })
        .catch(console.error);

}

//********************************************************************************
//********************************************************************************
//********************************************************************************

function renderSearchedMovies (input){
    let html = ``;
    for(let movie of input){
        html += `<div class='test  card'>
          <img src="${imageUrl}${movie.poster_path}" style="width: 20em">
          <h3 class='card_header'>${movie.title}</h3>
          <p>${movie.overview}</p>
          </div>`

        // document.write(html);
    }
    document.getElementById('movies').innerHTML = html;
}


