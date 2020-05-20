/* Import Modules */

import express from 'express';
import * as moviesServices from '../services/movies-service';

/* Export Movie Router Funtions */

export const moviesRouter = express.Router();

/* Read / Retreieve All Movies From The Database */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('', (request, response, next) => {
    moviesServices.getAllMovies()
        .then(movies => {
            response.set('Content-Type', 'Application/JSON');
            response.json(movies);
            next();
        }).catch(error => {
            response.sendStatus(500);
        });
});

/* Read / Retrieve A Single Movie Title By ID */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/:id', (request, response, next) => {
    const id = +request.params.id;
    moviesServices.getMovieById(id)
        .then(movie => {
            if (!movie) {
                response.sendStatus(404);
            } else {
                response.json(movie);
            }
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Read / Retrieve All Movie Titles By Genre */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/genre/:genre', (request, response, next) => {
    const genre = +request.params.genre;
    moviesServices.getMovieByGenre(genre)
        .then(genre => {
            if (!genre) {
                response.sendStatus(404);
            } else {
                response.json(genre);
            }
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Read / Retrieve Movie Titles By First Letter */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/title/:title', (request, response, next) => {
    const title = request.params.title;
    moviesServices.getMovieByFirstLetter(title)
        .then(title => {
            if (!title) {
                response.sendStatus(404);
            } else {
                response.json(title);
            }
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Read / Retrieve Movie Titles By Year */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/year/:year', (request, response, next) => {
    const year = +request.params.year;
    moviesServices.getMovieByYear(year)
        .then(year => {
            if (!year) {
                response.sendStatus(404);
            } else {
                response.json(year);
            }
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Create / Post A Single Movie To The Database */

/*
    POST http://localhost:3000/movies
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

moviesRouter.post('', (request, response, next) => {
    const movie = request.body;
    moviesServices.createNewMovie(movie)
        .then(newMovie => {
            response.status(201);
            response.json(newMovie);
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Upadte (Partial) / Patch A Current Movie */

moviesRouter.patch('', (request, response, next) => {
    const movie = request.body;
    moviesServices.getAllMovies()
        .then(updatedMovie => {
            if (updatedMovie) {
                response.json(updatedMovie);
            } else {
                response.sendStatus(404);
            }
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});