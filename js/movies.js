"use strict"

// <!--******LOADING BAR SCRIPT*****-->
// <!--******LOADING BAR SCRIPT*****-->
// <!--******LOADING BAR SCRIPT*****-->
$( "#carouselExampleIndicators").css('display', 'none')

$( "body" ).css('background-color', 'black')

$( "#movies" ).css('display', 'none')

$( ".navbar" ).css('display', 'none')

window.onload = function () {
    $( "#loading" ).css('display', 'none')
    $( "#movies" ).css('display', 'flex')
    $( ".navbar" ).css('display', 'block')
    $( "#carouselExampleIndicators").css('display', 'block')
}
// <!--******LOADING BAR SCRIPT*****-->
// <!--******LOADING BAR SCRIPT*****-->
// <!--******LOADING BAR SCRIPT*****-->


//************************************************************
// *********Movie Genres with id code to display genres *******
//************************************************************

const keptMovieGenres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]
//************************************************************
// *********Movie Genres with id code to display genres *******
//************************************************************



//************************************************************
// ************ Constant URL's for Api Requests **************
//************************************************************

const url = "https://api.themoviedb.org/3/search/movie?api_key="
const imageUrl ="https://image.tmdb.org/t/p/w500/"
const nowMovie = "https://api.themoviedb.org/3/movie/now_playing?api_key="
const movieGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key="

//************************************************************
// ************ Constant URL's for Api Requests **************
//************************************************************



//************************************************************
//****** will populate now playing movies for page loadup***
//************************************************************

let popularMovies;
function getPopMovies(string){
    return fetch(`${nowMovie}${versionThree}&language=en-US&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())
        .catch(console.error);
}
getPopMovies().then(movies => {
    popularMovies = movies.results
    renderSearchedMovies(popularMovies);
})

//************************************************************
//****** will populate now playing movies for page loadup***
//************************************************************



//********************************************************************************
//********************SEARCHED USERS INPUT AND RENDERING**************************
//********************************************************************************
const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    $( "#movies" ).css('display', 'none')
    $( ".navbar" ).css('display', 'none')
    $( "#carouselExampleIndicators").css('display', 'none')
    $( "#loading" ).css('display', 'block')
    let searchValue = $('#searchbar').val();
    movieSearch(searchValue)

})
//********************************************************************************
//*********SEARCHED USERS INPUT AND RENDERING WHEN USER HITS ENTER KEY************
//********************************************************************************
document.querySelector('#searchbar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        $("#movies").css('display', 'none')
        $(".navbar").css('display', 'none')
        $("#carouselExampleIndicators").css('display', 'none')
        $("#loading").css('display', 'block')
        let searchValue = $('#searchbar').val();
        movieSearch(searchValue);
        e.preventDefault();
    }
});
//********************************************************************************
//*********SEARCHED USERS INPUT AND RENDERING WHEN USER HITS ENTER KEY************
//********************************************************************************

let userInput;
function movieSearch (value){
    userInput = value.toLowerCase();
    if (userInput === ""){
        renderSearchedMovies(popularMovies);
    }
    getSearchedMovies(userInput)
}
let searchedMovies;
function getSearchedMovies(input){
        fetch(`${url}${versionThree}&query=${input}&page=1&include_adult=false`,
        {headers: {'Authorization': 'token' + versionThree}})
        .then(res => res.json())
        .then(movies => {
            searchedMovies = movies.results
            renderSearchedMovies(searchedMovies);
        })
        .catch(console.error);

}

//********************************************************************************
//***************************SEARCHED USERS INPUT AND RENDERING*******************
//********************************************************************************



//********************************************************************************
//***************************HTML BUILD TTO RENDER MOVIE DATA*********************
//********************************************************************************
function renderSearchedMovies (input){
    let html = ``;
    let test = 0;
    let htmlrating = ``;

    for(let movie of input){
        let movieRating = movie.vote_average / 2;
        if(movieRating <= .5) {
        htmlrating = `<i class="fas fa-star-half"></i>`
        }else if(movieRating <= 1) {
            htmlrating = `<i class="fas fa-star"></i>`
        } else if(movieRating <= 1.5) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star-half"></i>`
        }else if(movieRating <= 2) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i>`
        }else if(movieRating <= 2.5) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>`
        }else if(movieRating <= 3) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
        }else if(movieRating <= 3.5) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>`
        }else if(movieRating <= 4) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
        }else if(movieRating <= 4.5) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>`
        }else if(movieRating <= 5) {
            htmlrating = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
        }

        html += `<div class='card col-4 flip-box card${test}' id="testing">
                 <form>
                 <img class ="w-100" src="${imageUrl}${movie.poster_path}" + alt="Not Found" onerror=this.src="img/error.jpg">
                 <h5 class='card_header'><strong>${movie.title}</strong></h5>
                 <h6 class='card_header'><strong>Overview</strong></h6>
                 <p contenteditable="false" class="paragraph" id="overviewParagraph${test}"> ${movie.overview}</p>
                  <p contenteditable="false" class="paragraph"> <strong>Rating: </strong>${htmlrating}</p>
                  
                  <p contenteditable="false" class="paragraph"> <strong>Release Date:</strong> ${movie.release_date}</p>
                 <button  class="editMovieButton added-style-button">Edit Movie</button>
                 <button class="deleteMovieButton added-style-button">Delete Movie</button>
                 </form> 
                 </div>`
                test +=1;
    }
    document.getElementById('movies').innerHTML = html;
        $( "#loading" ).css('display', 'none')
        // $( "#carouselExampleIndicators").css('display', 'block')
        $( "#movies" ).css('display', 'flex')
        $( ".navbar" ).css('display', 'block')

//************************************************************
//************************ EDIT BUTTON PRESSED****************
//************************************************************



       $('.editMovieButton').click(function (e){
           e.preventDefault();
            $('.paragraph').attr('contenteditable', function (i, a){
                return a === 'true' ? "false":"true";
            })
                 });



    $('.deleteMovieButton').click( function (e){
        e.preventDefault();
        $(this).parent().parent().css('display', 'none')
    });

//************************************************************
//******************EDIT BUTTON PRESSED***********************
//************************************************************

        getMovieGenres(input);
}

//************************************************************
//**********Genre Generator after movies rendered*************
//************************************************************
let getMovieGenres = function (input){
    let html;
    let test = 0;
    for (let movie of input){
        html = `<p id="genreID"><strong>Genre : </strong> `
        let currentMovieGenreIds = movie.genre_ids;
        let x = 0;

        for (let i = 0; i <= keptMovieGenres.length; i++) {
        if (currentMovieGenreIds[x] === undefined){
            break
        }
        if (keptMovieGenres[i] === undefined){
            break
        }
        if (currentMovieGenreIds[x] === keptMovieGenres[i].id) {

            html += `${keptMovieGenres[i].name} `
            i = 0;
            x += 1;
        }}
        document.getElementById("overviewParagraph" + test.toString()).innerHTML += `${html} </p>`;
        test += 1;
    }
};
//************************************************************
//**********Genre Generator after movies rendered*************
//************************************************************

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function addMovieFunction(){
    let title = $("#newMovieTitle").val();
    let overview = $("#newMovieOverview").val();
    let genres = $("#newMovieGenres").val();
    let poster = $("#newMoviePoster").val();
   let html = ``
        html += `<div class='card col-4 flip-box card' id="testing">
                 <form>
                 <img class ="w-100" src="${poster}" + alt="Not Found" onerror=this.src="img/error.jpg">
                 <h5 class='card_header makeEditable'>${title}</h5>
                 <p contenteditable="false" class="makeEditable" id="overviewParagraph">Overview: ${overview}</p>
                 <p class="makeEditable">Genres: ${genres}</p>
                 <button  class="editNewMovieButton">Edit Movie</button>
                 <button class="deleteNewMovieButton">Delete Movie</button>
                 </form> 
                 </div>`
    document.getElementById('movies').innerHTML += html


    $('.editNewMovieButton').click(function (e){
        e.preventDefault();
        $('.makeEditable').attr('contenteditable', function (i, a){
            return a === 'true' ? "false":"true";
        })
    });



    $('.deleteNewMovieButton').click( function (e){
        e.preventDefault();
        $(this).parent().parent().css('display', 'none')
    });
}

//
// function renderSearchedMovies (input){
//     let html = ``;
//     for(let movie of input){html = `<div class="movies flip-box col-4">
//         <div class="flip-box-inner">
//             <div class="flip-box-front">
//                 <img src="${imageUrl}${movie.poster_path}" style="width: 20em">
//             </div>
//             <div class="flip-box-back">
//                 <h5>${movie.title}</h5>
//                 <p>${movie.overview}</p>
//                 </div>
//              </div>;
//     </div>`
//     }
//     return html;
//     document.getElementById('movies').innerHTML = html;
//     $( "#loading" ).css('display', 'none')
//     $( "#movies" ).css('display', 'block')
//     $( ".navbar" ).css('display', 'block')
// }
