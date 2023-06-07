window.onload = () => {
    showMovies();
}

const showMovies = async () => {
    let responseMovies = await fetch("./movies.json");
    let arrayMovies = await responseMovies.json();

    let containerMovies = document.querySelector(".container-filmes");

    arrayMovies.map(movie => {
        if (movie) {
            let subcontainerMovies = document.createElement("div");
            subcontainerMovies.classList.add("container-descricao-filme");
    
            let imageMovie = document.createElement("img");
            imageMovie.alt = "Batman";
            imageMovie.src = movie.image;
            imageMovie.width = "400";
            imageMovie.height = "150";
            subcontainerMovies.appendChild(imageMovie);

            let containerNameMovie = document.createElement("div");
            containerNameMovie.classList.add("container-nome-filme");

            let nameMovie = document.createElement("p");
            nameMovie.textContent = `${movie.title} (${movie.year})`;
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
            textRating.textContent = movie.rating;
            subcontainerIcons.appendChild(iconStar);
            subcontainerIcons.appendChild(textRating);

            containerIcons.appendChild(subcontainerIcons);
            containerNameMovie.appendChild(containerIcons);

            if (movie.isFavorited) {
                let subcontainerFavorite = document.createElement("div");
                subcontainerFavorite.classList.add("container-icones");

                let iconHeart = document.createElement("img");
                iconHeart.src = "./assets/icon-heart.svg";
                iconHeart.alt = "Coração";

                let textFavorite = document.createElement("p");
                textFavorite.textContent = "Favoritar";

                subcontainerFavorite.appendChild(iconHeart);
                subcontainerFavorite.appendChild(textFavorite);
                containerIcons.appendChild(subcontainerFavorite);
            }

            let descriptionMovie = document.createElement("p");
            descriptionMovie.textContent = movie.description;

            subcontainerMovies.appendChild(containerNameMovie);
            subcontainerMovies.appendChild(descriptionMovie);
            containerMovies.appendChild(subcontainerMovies);

        }
    })
}