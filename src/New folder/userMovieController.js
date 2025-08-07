const { User, Movie, UserMovie } = require('../models');

const addMovieToUser = async (req, res) => {
  const { userId, movieId } = req.params;
  const { status, rating } = req.body;

  try {
    const user = await User.findByPk(userId);
    const movie = await Movie.findByPk(movieId);

    if (!user || !movie) {
      return res.status(404).json({ message: 'User or Movie not found' });
    }

    await user.addMovie(movie, { through: { status, rating } });

    res.status(201).json({ message: 'Movie added to user list' });
  } 
  catch (error) {
    res.status(500).json({ message: 'Failed to add movie to user', error });
  }
};


const getUserMovies = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const movies = await user.getMovies();

    return res.json(movies);
  } 
  catch (error) {
    console.error('Error fetching user movies:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const removeMovieFromUser = async (req, res) => {
  const { userId, movieId } = req.params;

  try {
    const deleted = await UserMovie.destroy({
      where: {
        UserId: userId,
        MovieId: movieId
      }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.json({ message: 'Movie removed from user list' });
  } 
  catch (error) {
    res.status(500).json({ message: 'Delete failed', error });
  }
};

module.exports = {
  addMovieToUser,
  getUserMovies,
  removeMovieFromUser
};
