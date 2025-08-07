const express = require('express');
const router = express.Router();
const {
  addMovieToUser,
  getUserMovies,
  removeMovieFromUser
} = require('../controllers/userMovieController');

router.post('/:userId/movies/:movieId', addMovieToUser);

router.get('/:userId/movies', getUserMovies);

router.delete('/:userId/movies/:movieId', removeMovieFromUser);

module.exports = router;
