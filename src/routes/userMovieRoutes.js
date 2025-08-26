const express = require('express');
const authenticateToken = require('../middleware/jwtverif');

const router = express.Router();
const {
  addMovieToUser,
  getUserMovies,
  removeMovieFromUser
} = require('../controllers/userMovieController');

router.post('/:userId/movies/:movieId', authenticateToken, addMovieToUser);

router.get('/:userId/movies', authenticateToken, getUserMovies);

router.delete('/:userId/movies/:movieId', authenticateToken, removeMovieFromUser);

module.exports = router;