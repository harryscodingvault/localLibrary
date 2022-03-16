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

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
