const express = require('express');
const authenticateToken = require('../middleware/jwtverif');

const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie
} = require('../controllers/movieController');

router.get('/', authenticateToken, getAllMovies);

router.get('/:id', authenticateToken, getMovieById);

router.post('/', authenticateToken, createMovie);

router.delete('/:id', authenticateToken, deleteMovie);

module.exports = router;