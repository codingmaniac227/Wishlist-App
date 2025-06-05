const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 18.99 },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 25.50 },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", price: 23.00 },
  { id: 4, title: "Deep Work", author: "Cal Newport", price: 16.75 },
  { id: 5, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 19.99 }
];

const wishlist = [];

function book_loop() {
  let booksEl = document.getElementById("books-list");

  for (let i = 0; i < books.length; ++i) {
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
      <strong>${books[i].title}</strong> - ${books[i].author}: <em>$${books[i].price}</em>
      <button onclick="addToWishlist(${books[i].id})">Save to Wishlist</button>
    `;

    booksEl.appendChild(newDiv);
  }
}

function addToWishlist(bookId) {
  const found = wishlist.find(b => b.id === bookId);

  if (found) {
    alert("Book is already in your wishlist!");
  } else {
    const book = books.find(b => b.id === bookId);
    wishlist.push({ id: book.id, title: book.title, author: book.author });
  }

  renderWishlist();
}

function renderWishlist() {
  let wishlistEl = document.getElementById("wishlist");
  wishlistEl.innerHTML = ""; // Clear previous wishlist

  for (let i = 0; i < wishlist.length; ++i) {
    let item = wishlist[i];
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
      📚 <strong>${item.title}</strong> by ${item.author}
    `;

    wishlistEl.appendChild(newDiv);
  }
}

// Call the loop when the page loads
book_loop();
