const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODEwYzU1ZDE2YjBmNjhlZTY5NGVjYjlkMzBiZWRjNiIsInN1YiI6IjY0N2E3ZGMxZTMyM2YzMDEyNzUxMmZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsXtCZsL8Tz81FPIXBuMsG_r2mrCpqo0rxySr0S4s_4'
    }
};

const BASE_URL_MOVIE_DATABASE = 'https://api.themoviedb.org/3';

window.onload = () => {
    getPopularMovies();
}

const getPopularMovies = async () => {
    const URL_MOVIES_POPULAR = `${BASE_URL_MOVIE_DATABASE}/movie/popular?language=pt-BR&page=1`;
    await fetch(URL_MOVIES_POPULAR, options)
    .then(response => response.json())
        .then(response => {
            const arrayMovies = response.results;
            showMovies(arrayMovies);
    })
    .catch(err => console.error(err));
}

const showMovies = async (arrayMovies) => {
    let containerDescriptionMovies = document.querySelector(".main-container-descricao-filmes");

    arrayMovies.map(movie => {
        if (movie && movie.overview) {
            let subcontainerMovies = document.createElement("div");
            subcontainerMovies.classList.add("container-descricao-filme");
    
            let imageMovie = document.createElement("img");
            imageMovie.alt = "Batman";
            // http://image.tmdb.org/t/p/w500/{your_poster_path}
            imageMovie.src = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
            imageMovie.width = "300";
            imageMovie.height = "150";
            subcontainerMovies.appendChild(imageMovie);

            let containerNameMovie = document.createElement("div");
            containerNameMovie.classList.add("container-nome-filme");

            let nameMovie = document.createElement("p");
            let year = movie.release_date.split("-")[0]
            nameMovie.textContent = `${movie.title} (${year})`;
            containerNameMovie.appendChild(nameMovie);

            let containerIcons = document.createElement("div");
            containerIcons.classList.add("container-icones");

            let subcontainerIcons = document.createElement("div");
            subcontainerIcons.classList.add("container-icones");
            subcontainerIcons.classList.add("container-icone-estrela");

            let iconStar = document.createElement("img");
            iconStar.src = "./assets/icon-star.svg";
            iconStar.alt = "Estrela";

            let textRating = document.createElement("p");
            textRating.textContent = movie.vote_average;
            subcontainerIcons.appendChild(iconStar);
            subcontainerIcons.appendChild(textRating);

            containerIcons.appendChild(subcontainerIcons);
            containerNameMovie.appendChild(containerIcons);

            let isFavorited = movie.popularity > 5000;

            if (isFavorited) {
                let subcontainerFavorite = document.createElement("div");
                subcontainerFavorite.classList.add("container-icones");

                let iconHeart = document.createElement("img");
                iconHeart.src = "./assets/icon-heart.svg";
                iconHeart.alt = "Coração";

                let textFavorite = document.createElement("p");
                textFavorite.textContent = "Favorito";

                subcontainerFavorite.appendChild(iconHeart);
                subcontainerFavorite.appendChild(textFavorite);
                containerIcons.appendChild(subcontainerFavorite);
            }

            let descriptionMovie = document.createElement("p");
            descriptionMovie.classList.add("descricao-filme");
            descriptionMovie.textContent = movie.overview;

            subcontainerMovies.appendChild(containerNameMovie);
            subcontainerMovies.appendChild(descriptionMovie);
            containerDescriptionMovies.appendChild(subcontainerMovies);

        }
    })
};

const getMoviesSearch = async () => {
    let movieSearch = document.querySelector("#movie-search").value;
    const URL_MOVIES_SEARCH = `${BASE_URL_MOVIE_DATABASE}/search/movie?query=${movieSearch}&language=pt-BR&page=1`;
    await fetch(URL_MOVIES_SEARCH, options)
        .then(response => response.json())
        .then(response => {
            let containerDescriptionMovies = document.querySelector(".main-container-descricao-filmes");
            containerDescriptionMovies.innerHTML = "";

            const arrayMovies = response.results;
            showMovies(arrayMovies);
        })
        .catch(err => console.error(err));

};

const enterSearchMovie = e => {
    if (e.keyCode == 13) {
        getMoviesSearch();
    }
};

// TODO: Após pesquisar, retornar para lista inicial, se input for vazio