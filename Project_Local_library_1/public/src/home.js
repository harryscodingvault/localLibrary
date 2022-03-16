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
  for (let unit in books) {
    const genre = books[unit].genre;

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

function getMostPopularBooks(books) {
  let bookPop = [];
  for (let unit in books) {
    const borrowsCount = books[unit].borrows.length;
    const bookName = books[unit].title;
    bookPop.push({ name: bookName, count: borrowsCount });
  }
  const sortedBooks = bookPop.sort((a, b) => b.count - a.count);
  return sortedBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const mostPopAuthor = [];
  for (let unit in books) {
    const borrowsCount = books[unit].borrows.length;
    const authorId = books[unit].authorId;
    const author = authors.find((author) => author.id === authorId);
    const authorName = `${author.name.first} ${author.name.last}`;
    if (!mostPopAuthor.some((item) => item.name === authorName)) {
      mostPopAuthor.push({ name: authorName, count: borrowsCount });
    } else {
      const currIndex = mostPopAuthor.findIndex((element, index) => {
        if (element.name === authorName) {
          return true;
        }
      });
      mostPopAuthor[currIndex].count += 1;
    }
  }
  const sortedAuthors = mostPopAuthor.sort((a, b) => b.count - a.count);
  console.log(sortedAuthors);
  return sortedAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
