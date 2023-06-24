require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const experienceRoutes = require('./routes/experiences');

// express app
const app = express();

//Middleware to parse json data and below to log requests
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes. The /api/experiences is a prefix for all routes in experienceRoutes
app.use('/api/experiences', experienceRoutes);

// connect to mongodb & listen for requests
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests.
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & server is listening on port:', process.env.PORT);
            }
        );
    })
    .catch(err => console.log('Error: ', err));

