const startAddModalBtn = document.querySelector('header button');

// Modals
const backDrop = document.getElementById('backdrop');
// ADD MODAL
const addMovieModal = document.getElementById('add-modal');
const userInputs = addMovieModal.querySelectorAll('input');
const addMovieBtn = document.querySelector('.modal .modal__actions').lastElementChild;
const cancelAddMovie = document.querySelector('.modal .modal__actions').firstElementChild;

// Delete Movie modal
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeleteMovie = deleteMovieModal.querySelector('.modal .modal__actions').firstElementChild;
let deleteMovieBtn = deleteMovieModal.querySelector('.modal .modal__actions').lastElementChild;

const movieListElement = document.getElementById('movie-list');
const entryText = document.getElementById('entry-text');
const moviesList = [];

//////////////////////////////
//      Event Listners
//////////////////////////////
startAddModalBtn.addEventListener('click', toggleAddModal);
addMovieBtn.addEventListener('click', addNewMovieHandler);
cancelAddMovie.addEventListener('click', closeModal);

backDrop.addEventListener('click', closeModal);

//////////////////////////////
//        functions
//////////////////////////////
function clearInput()
{
  for (usrInp of userInputs)
  {
    usrInp.value = '';
  }
}

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
  clearInput();
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
  newListElem.addEventListener('click', deleteMovieHandler.bind(null, title));
}

function deleteMovieHandler (title)
{
  toggleDeleteModal();
  // hacky solution for more then one listners running in background so to remove them.
  deleteMovieBtn.replaceWith(deleteMovieBtn.cloneNode(true));

  deleteMovieBtn = deleteMovieModal.querySelector('.modal .modal__actions').lastElementChild;

  cancelDeleteMovie.addEventListener('click', closeModal);
  deleteMovieBtn.addEventListener('click', deleteMovie.bind(null, title));
}

function deleteMovie(title)
{
  let movieIndex = 0;
  for (movie of moviesList)
  {
    if (movie.title === title)
    {
      break;
    }
    movieIndex++;
  }
  moviesList.splice(movieIndex, 1);
  movieListElement.children[movieIndex].remove();

  if (moviesList.length === 0) 
    entryText.style.display = 'block';
  closeModal();
}

function toggleDeleteModal ()
{
  deleteMovieModal.classList.toggle('visible'); 
  backDrop.classList.toggle('visible');
}
function closeModal () {
  backDrop.classList.remove('visible');
  addMovieModal.classList.remove('visible');
  deleteMovieModal.classList.remove('visible');
}