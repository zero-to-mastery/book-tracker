import Book from '../models/Bookmodel';

export default {
    addBook: async(req, res) => {
        const book = new Book({
            title: req.body.title,
            author: req.body.author
        });

        try {
            const savedBook = await book.save();
            res.status(201).json({
                message: 'Book has been added successfully',
                savedBook
            });

        } catch (err) {
            res.json({
                message: err
            });
        }
    },

    getAllBooks: async(req, res) => {
        try {
            const getbooks = await Book.find({});
            return res.json({
                message: 'View all books',
                getbooks
            });

        } catch (err) {
            return res.json({
                message: err
            });
        }
    },

    getOneBook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.bookId);
            return res.status(200).json(book);

        } catch (err) {
            res.json({
                message: err
            })
        }
    }
}