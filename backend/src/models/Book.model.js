const mongoose = require('mongoose');
const Joi = require('joi');

const bookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			min: 2,
			max: 255,
		},
		author: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
	},
	{ timestamps: true }
);

function validateBook(book) {
	const schema = {
		title: Joi.string().trim().required().min(2).max(255),
		author: Joi.string().trim().required().min(2).max(255),
	};
	return Joi.validate(book, schema);
}

module.exports.Book = mongoose.model('Book', bookSchema);
module.exports.validate = validateBook;
