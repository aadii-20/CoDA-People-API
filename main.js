// main.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 3000;
const databaseRoutes = require('./routes/database'); // Correct path

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

app.use('/api', databaseRoutes); 

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected to DB");
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am Connected`);
        });
    } catch (error) {
        console.log(error); 
    }
};

start();
