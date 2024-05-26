import Movie from "../models/movie.models.js";

export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const MovieCreate = async (req, res) => {
  console.log(req.body);

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

export const MovieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const MovieUpdate = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const MovieDelete = async (req, res) => {
  const movieID = req.params.id;
  try {
    await Movie.findOneAndDelete({ _id: movieID });
    res.json({ message: "Movie Deleted!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
