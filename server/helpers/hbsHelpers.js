const numberOfBooks = (books, status) => {
   return books.filter(book => book.status === status).length
}

module.exports = {numberOfBooks}