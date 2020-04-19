const { Book } = require('../models/Book.model');

export default {
	addBook: async (req, res) => {
		const { title, author } = req.body;
		const titleExist = await Book.findOne({ title });
		if (titleExist) {
			return res.status(400).json({
				message: 'Book already exists',
			});
		}

		const book = new Book({
			title,
			author,
		});

		try {
			const savedBook = await book.save();
			return res.status(201).json({
				message: 'Book has been added successfully',
				savedBook,
			});
		} catch (err) {
			res.json({
				message: err,
			});
		}
	},

	getAllBooks: async (req, res) => {
		try {
			const books = await Book.find({});
			return res.json(books);
		} catch (err) {
			return res.json({
				message: err,
			});
		}
	},

	getOneBook: async (req, res) => {
		try {
			const book = await Book.findById(req.params.bookId);
			return res.json(book);
		} catch (err) {
			res.status(404).json({
				message: err,
			});
		}
	},

	updateBook: async (req, res) => {
		const { title, author } = req.body;
		try {
			const updatedBook = await Book.updateOne(
				{ _id: req.params.bookId },
				{ $set: { title, author } }
			);
			return res.status(201).json({
				message: 'Book Updated',
				updatedBook,
			});
		} catch (err) {
			res.json({
				message: err,
			});
		}
	},

	deleteBook: async (req, res) => {
		try {
			const removedBook = await Book.deleteOne({ _id: req.params.bookId });
			return res.status(201).json({
				message: 'Book deleted',
				removedBook,
			});
		} catch (err) {
			res.json({
				message: err,
			});
		}
	},
};
