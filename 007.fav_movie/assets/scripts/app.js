const startAddModalBtn = document.querySelector('header button');

// Modals
const backDrop = document.getElementById('backdrop');
// ADD MODAL
const addMovieModal = document.getElementById('add-modal');
const userInputs = addMovieModal.querySelectorAll('input');
const addMovieBtn = document.querySelector('.modal .modal__actions').lastElementChild;
const cancelAddMovie = document.querySelector('.modal .modal__actions').firstElementChild;
const movieListElement = document.getElementById('movie-list');
const entryText = document.getElementById('entry-text');
const moviesList = [];

//////////////////////////////
//      Event Listners
//////////////////////////////
startAddModalBtn.addEventListener('click', toggleAddModal);
addMovieBtn.addEventListener('click', addNewMovieHandler);
cancelAddMovie.addEventListener('click', toggleAddModal);
backDrop.addEventListener('click', toggleAddModal);

//////////////////////////////
//        functions
//////////////////////////////
function toggleAddModal() {
  backDrop.classList.toggle('visible');
  addMovieModal.classList.toggle('visible');
}

function addNewMovieHandler() {
  const titleInp = userInputs[0].value;
  const imgUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  const isValid = validateInput(titleInp, imgUrl, rating);
  if (isValid)
  {
    const movie = {
      title: titleInp,
      img: imgUrl,
      rating: rating
    };
    moviesList.push(movie);
    renderUI(movie.title, movie.img, movie.rating);
  }  else {
    alert('Please Enter valid input.');
  }
  toggleAddModal();
  entryText.style.display = 'none';
}

function validateInput(title, img, rating) {
  if (
      title.trim() === '' || img.trim() === '' || 
      rating.trim() === '' || +rating.trim() < 1 ||
      +rating.trim() > 5
      )
  {
    return 0;
  }
  return 1;
}
function renderUI(title, img, rating) {
  const newListElem = document.createElement('li');
  newListElem.className = 'movie-element';
  newListElem.innerHTML = `
    <div class="movie-element__image">
      <img src="${img}" />
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5</p>
    </div>
  `;

  movieListElement.append(newListElem);
}