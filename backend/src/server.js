import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port} yaay :)`);
})

export default app;