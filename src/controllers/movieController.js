const { Movie } = require('../models');

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to get movies', error: err });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to get movie', error: err });
  }
};

const createMovie = async (req, res) => {
  const { title, director, year } = req.body;
  try {
    const newMovie = await Movie.create({ title, director, year });
    res.status(201).json(newMovie);
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to create movie', error: err });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Movie.destroy({ where: { id } });
    res.status(200).json({ message: 'Movie deleted successfully' });
  } 
  catch (err) {
    res.status(500).json({ message: 'Failed to delete movie', error: err });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
};
