function findAuthorById(authors, id) {
  return authors.filter((author) => author.id === id)[0];
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // Filter books with reduce
  const filterBookByReturnStatus = (books, statToCompare) =>
    books.reduce((acc, book) => {
      return book.borrows[0].returned === statToCompare
        ? acc.concat(book)
        : acc;
    }, []);

  const returnedBooks = filterBookByReturnStatus(books, true);
  const borrowedBooks = filterBookByReturnStatus(books, false);

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const bookBorrowers = book.borrows;
  const borrowersArray = [];
  for (let item in bookBorrowers) {
    const borrowerId = bookBorrowers[item].id;
    const returnStatus = bookBorrowers[item].returned;
    const borrower = accounts.find((account) => account.id === borrowerId);
    const { name, email } = borrower;
    borrowersArray.push({ name, email, returned: returnStatus });
  }
  return borrowersArray.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
