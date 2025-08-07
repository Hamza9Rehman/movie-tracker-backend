require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
const movieRoutes = require('./src/routes/movieRoutes');
const userMovieRoutes = require('./src/routes/userMovieRoutes');

app.use('/api/user', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/usermovie', userMovieRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));