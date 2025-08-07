const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie
} = require('../controllers/movieController');

router.get('/', getAllMovies);

router.get('/:id', getMovieById);

router.post('/', createMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
