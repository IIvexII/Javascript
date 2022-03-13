const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

let movies = [];
let uniqId = 1;

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  }
  else
  {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';
  const filteredList = !filter 
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter) );
  
  filteredList.forEach((movie) => {
    const movieElement = document.createElement('li');
    let text = movie.info.title + ' - '; 
    for (const key in movie.info)
    {
      if (key !== 'title') {
        text += `${key} : ${movie.info[key]}`;
      }
    }

    movieElement.textContent = text;
    movieList.append(movieElement);
  });
}
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName] : extraValue
    },
    id: uniqId++
  };
  movies.push(newMovie);
  renderMovies();
}

const searchHandler = () => {
  const fileterText = document.getElementById('filter-title').value;
  renderMovies(fileterText);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchHandler);