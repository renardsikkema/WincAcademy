document.querySelector(".movie").innerHTML = data.Movies
.reduce((a, b) => (a + `<a href="https://www.imdb.com/title/${b.imdbID}/" 
target="_blank"><img src="${b.Poster}" alt="film poster ${b.Title}"></a>`), "");

document.querySelectorAll('.options *').forEach((filter) => {
filter.onchange = (selection) => {
    if (selection.target.value === 'New') {
        document.querySelector(".movie").innerHTML = data.Movies
            .filter((data) => (parseInt(data.Year) >= 2014))
            .reduce((a, b) => (a + `<a href="https://www.imdb.com/title/${b.imdbID}/" 
            target="_blank"><img src="${b.Poster}" alt="film poster ${b.Title}"></a>`), "");
    } else {
        document.querySelector(".movie").innerHTML = data.Movies
            .filter(data => data.Title.includes(selection.target.value))
            .reduce((a, b) => (a + `<a href="https://www.imdb.com/title/${b.imdbID}/" 
            target="_blank"><img src="${b.Poster}" alt="film poster ${b.Title}"></a>`), "");
    }
}
});

