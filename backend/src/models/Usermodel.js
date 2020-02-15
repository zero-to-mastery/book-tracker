import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 150
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    }
}, { timestamps: true });

export default mongoose.model('User', userSchema);