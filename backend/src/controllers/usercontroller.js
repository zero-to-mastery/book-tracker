import express from 'express';
import User from '../models/Usermodel';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import registerValidation from '../validation/uservalidation';

export default {
    register: async(req, res) => {
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        try {
            const savedUser = await user.save();
            res.send({
                status: 201,
                message: "User successfully registered",
                user: user._id
            });
        } catch (err) {
            res.status(400).json(err);
        }
    }
}