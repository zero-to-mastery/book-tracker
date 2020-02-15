import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 150
    },
    author: {
        type: String,
        required: true,
        min: 2,
        max: 100
    }
}, { timestamps: true });

export default mongoose.model('books', bookSchema);