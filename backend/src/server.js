import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routes/user-route';
import bookRoute from './routes/book-route';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Mongodb connection string
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        else console.log('connected to db!')
    });

app.use('/api/auth', userRoute);
app.use('/', bookRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port} yaay :)`);
})

export default app;