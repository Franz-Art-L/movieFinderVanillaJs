var movieApiJsonReq = new XMLHttpRequest();

movieApiJsonReq.onload = () => {
    if(movieApiJsonReq.readyState === XMLHttpRequest.DONE) {
        if(movieApiJsonReq.status === 200) {
            console.log(movieApiJsonReq.responseText);
            
            let movie = JSON.parse(movieApiJsonReq.responseText);

                document.getElementById("poster").src = movie.Poster;

                document.getElementById("title").innerHTML = "<br>" + "<span class='text-primary'>Title: </span>" + movie.Title;
                
                document.getElementById("actors").innerHTML = "<span class='text-primary'>Actors: </span>" + movie.Actors;
                
                document.getElementById("genre").innerHTML = "<span class='text-primary'>Genre: </span>" + movie.Genre;
                
                document.getElementById("plot").innerHTML = "<span class='text-primary'>Plot: </span>" + movie.Plot;
                
                document.getElementById("director").innerHTML = "<span class='text-primary'>Director: </span>" + movie.Director;             ;
                
                document.getElementById("writers").innerHTML = "<span class='text-primary'>Writers: </span>" + movie.Writers;
                
                document.getElementById("language").innerHTML = "<span class='text-primary'>Language: </span>" + movie.Language;
                
                document.getElementById("country").innerHTML = "<span class='text-primary'>Country: </span>" + movie.Country;
                
                document.getElementById("awards").innerHTML = "<span class='text-primary'>Awards: </span>" + movie.Awards;
                
                document.getElementById("boxOffice").innerHTML = "<span class='text-primary'>Box Office: </span>" + movie.BoxOffice;
                
                document.getElementById("production").innerHTML = "<span class='text-primary'>Production: </span>" + movie.Production;
                
                document.getElementById("website").innerHTML = "<span class='text-primary'>Website: </span>" + movie.Website;
               
        } else {
            console.log(movieApiJsonReq.statusText);
        }
    }
}

movieApiJsonReq.onerror = () => {
    console.log(movieApiJsonReq.statusText);
}

var searchMovie = function() {
    var input = document.querySelector('input').value;
    if(input) {
    movieApiJsonReq.open('GET',  "http://www.omdbapi.com/?t=" + input + "&apikey=cb585ed6");

    movieApiJsonReq.send(null);
    }    
}

var searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('keyup', event => {
    if(event.key === "Enter") {
        searchMovie();
    }
});
