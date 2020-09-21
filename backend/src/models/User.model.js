const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlenth: 2,
			maxlength: 255,
		},
		email: {
			type: String,
			required: true,
			unique: true, //<- This makes sure there would't be 2+ users with the same e-mail address.
			minlength: 6,
			maxlength: 255,
		},
		password: {
			type: String,
			required: true,
			minlenth: 12,
			maxlenth: 1024,
		},
		idAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, isAdmin: this.isAdmin }, // Defines the token's payload.
		process.env.TOKEN_SECRET
	);

	return token;
};

// Performance: This functions validates our input field
//  before making any calls to the server. So that if the user object is not valid,
//  the we don't call the server.

const schema = {
	name: Joi.string().trim().required().min(2).max(255),
	email: Joi.string()
		.trim()
		.required()
		.email()
		.regex(/\S+@\S+\.\S+/)
		.min(6)
		.max(255),
	password: Joi.string().trim().required().min(8).max(1024),
};

function validateRegister(user) {
	const userSchema = Joi.object({ ...schema	});

	return userSchema.validate(user, {
	  errors: {
	    label: false
    }
  });
}

function validateLogin(user) {
	const { password, email } = schema;
	const loginSchema = Joi.object({ password, email });

	return loginSchema.validate(user);
}

module.exports.User = mongoose.model('User', userSchema);
module.exports.validateRegister = validateRegister;
module.exports.validateLogin = validateLogin;
