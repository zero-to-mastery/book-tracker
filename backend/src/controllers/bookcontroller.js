import books from '../models/Bookmodel';
import express from 'express';

export default {
    addBook: async(req, res) => {
        const book = new books({
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
    }
}