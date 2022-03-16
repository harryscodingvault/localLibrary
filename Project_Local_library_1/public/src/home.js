function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const countBooks = books.filter((book) => book.borrows[0].returned === false);
  return countBooks.length;
}

function getMostCommonGenres(books) {
  let allGenres = [];
  for (let i in books) {
    const genre = books[i].genre;

    if (!allGenres.some((item) => item.name === genre)) {
      allGenres.push({ name: genre, count: 1 });
    } else {
      const currIndex = allGenres.findIndex((element, index) => {
        if (element.name === genre) {
          return true;
        }
      });
      allGenres[currIndex].count += 1;
    }
  }
  const sortedGenres = allGenres.sort((a, b) => b.count - a.count);
  return sortedGenres.slice(0, 5);
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
