import express from 'express';
import User from '../models/Usermodel';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import registerValidation from '../validation/register';
import loginValidation from '../validation/login';

export default {
    register: async(req, res) => {
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const { email } = req.body;
        const emailExist = await User.findOne({ email });
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
    },


    login: async(req, res) => {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Email doesn\'t exist');
        }

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(400).send('Invalid Password');
        }

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send({
            status: 200,
            token,
            message: 'logged in'
        });
    }
};