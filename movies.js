const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.post('/', async (req, res) => {
    const movie = new Movie(req.body);
    try {
        const savedMovie = await movie.save();
        res.json(savedMovie);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:movieId', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        res.json(movie);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:movieId', async (req, res) => {
    try {
        const updatedMovie = await Movie.updateOne(
            { _id: req.params.movieId },
            { $set: req.body }
        );
        res.json(updatedMovie);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:movieId', async (req, res) => {
    try {
        const removedMovie = await Movie.deleteOne({ _id: req.params.movieId });
        res.json(removedMovie);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
