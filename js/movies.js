"use strict"

const url = "https://api.themoviedb.org/3/search/movie?api_key="
const imageUrl ="https://image.tmdb.org/t/p/w500/"
const nowMovie = "https://api.themoviedb.org/3/movie/now_playing?api_key="
const movieGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key="








//****** will populate now playing movies for page loadup***
var searchedMovies;


function getpopMovies(string){
    return fetch(`${nowMovie}${versionThree}&language=en-US&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())

        // .then(console.log)
        .catch(console.error);

}
getpopMovies().then(movies => {
    searchedMovies = movies.results
    console.log(searchedMovies);
    renderMovies(searchedMovies);
})


//****** event listeners for the navbar ***
// var userSelectedGenre = " ";
// function updateMoviesNow(e) {
//     // e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedGenre = userSelectedGenre;
//     var moviesToDisplay = [];
//     movies.forEach(function(coffee) {
//         if(selectedRoast === "all"){
//             filteredCoffees.push(coffee)
//         } else if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }



var input = '';
    // let movie_search = document.querySelector('#searchbar');
    // movie_search.addEventListener('click', movieSearch)

var submitBtn = document.getElementById("submit")
console.log(submitBtn)
var textInput = document.getElementById("searchbar")

textInput.addEventListener('input', movieSearch)
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log('i was clciked');
    getMovies(textInput.value);
})





    // function movieSearch (){
    //      input = textInput.value
    //     input = input.toLowerCase();
    //     console.log(input);
    //     getMovies(input);
    //
    // }



// ****** searchers movies based titles in string format.. could be used for a search bar*****
function getMovies(input){
    console.log(input)
     fetch(`${url}${versionThree}&query=${input}&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => console.log(res.json()))
        .catch(console.error);
}


getMovies(input).then(movies => {
    searchedMovies = movies.results;
    console.log(searchedMovies)
    renderMovies(searchedMovies);
});





//*******creating a cards for every single movie populated
function renderMovies (){
    let html = ``;
    for(let movie of searchedMovies){
        html += `<div class='test  card'>
          <img src="${imageUrl}${movie.poster_path}" style="width: 20em">
          <h3 class='card_header'>${movie.title}</h3>
          <p>${movie.overview}</p>
          </div>`

        // document.write(html);
    }
    document.getElementById('movies').insertAdjacentHTML('afterbegin', html);
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

