import Book from '../models/Bookmodel';

export default {
    addBook: async(req, res) => {
        const { title } = req.body;
        const titleExist = await Book.findOne({ title });
        if (titleExist) {
            return res.status(400).json({
                message: 'Book already exists'
            });
        }

        const book = new Book({
            title: req.body.title,
            author: req.body.author
        });

        try {
            const savedBook = await book.save();
            return res.status(201).json({
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
    },

    updateBook: async(req, res) => {
        try {
            const updatedBook = await Book.updateOne({ _id: req.params.bookId }, { $set: { title: req.body.title, author: req.body.author } });
            return res.status(201).json({
                message: 'Book Updated',
                updatedBook
            });

        } catch (err) {
            res.json({
                message: err
            })
        }
    },

    deleteBook: async(req, res) => {
        try {
            const removedBook = await Book.deleteOne({ _id: req.params.bookId });
            return res.status(201).json({
                message: 'Book deleted',
                removedBook
            });
        } catch (err) {
            res.json({
                message: err
            })
        }
    }
}