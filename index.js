function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
<<<<<<< HEAD
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => renderBooks(json));
=======
  fetch(https://anapioficeandfire.com/api/books)
  .then function(response) {
    return response.json()
  }
}

>>>>>>> dbf4da01e86526e682903d7570454c6ea01aff82
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
