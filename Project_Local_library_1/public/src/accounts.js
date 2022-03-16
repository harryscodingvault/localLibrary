function findAccountById(accounts, id) {
  return accounts.filter((account) => account.id === id)[0];
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const nameA = a.name.last;
    const nameB = b.name.last;
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let totalBorrows = 0;
  books.map((book) => {
    const borrows = book.borrows;
    if (borrows.find((borrower) => borrower.id === accountId)) {
      totalBorrows += 1;
    }
  });
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let result = [];
  const possessedBooks = books.filter(
    (book) => book.borrows[0].id === accountId
  );
  possessedBooks.map((book) => {
    const authorId = book.authorId;
    const thisAuthor = authors.find((author) => author.id === authorId);
    book.author = thisAuthor;
    result.push(book);
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
