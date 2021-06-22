const BooksService = {
  /**
   * Call API to save the title and author of a book.
   *
   * @param {string} title
   * @param {string} author
  */
  addBook : async({ title, author}) => {
    if (!title || !author) {
      throw new Error('title and author are required');
    }

    const response = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author })
    });

    return {
      error: !response.ok,
      body: await response.json()
    }
  }
};

export default BooksService;