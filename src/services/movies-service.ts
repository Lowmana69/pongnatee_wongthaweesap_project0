/* Import Modules */

import { Movie } from '../models/Movie';
import * as moviesDao from '../daos/movies-dao';

/* Read / Retrieve All Movies From THe Database */

export function getAllMovies (): Promise<Movie[]> {
    return moviesDao.getAllMovies();
}

/* Read / Retrieve A Single Movie By ID */

export function getMovieById (id: number): Promise<Movie> {
    return moviesDao.getMovieById(id);
}

/* Read / Retrieve Movies By Genre */

export function getMovieByGenre (genre: number): Promise<Movie[]> {
    return moviesDao.getMovieByGenre(genre);
}

/* Read / Retrieve Moives By First Letter Of Title */

export function getMovieByFirstLetter (title: string): Promise<Movie> {
    return moviesDao.getMovieByFirstLetter(title);
}

/* Read / Retrieve Movies By Year Release */

export function getMovieByYear (bydecade: number): Promise<Movie[]> {
    return moviesDao.getMovieByYear(bydecade);
}

/* Create / Post A New Movie To The Database */

export function createNewMovie (movie: any): Promise<Movie> {
    const newMovie = new Movie(
        undefined, movie.title, movie.yearrelease,
        movie.genre, movie.totalratings,
        movie.isavailable, movie.currentstatus
    );

    const params = (movie.title, movie.yearRelease,
        movie.genre, movie.totalratings,
        movie.isavailable, movie.currentstatus);
    console.log(newMovie);
    if (params) {
        return moviesDao.createNewMovie(newMovie);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

/* Update (Partial) A Single Movie From THe Database s*/

export function patchMovie (input: any): Promise<Movie> {
    const movie = new Movie (
        input.id, input.title,
        input.yearrelease, input.genre,
        input.totalratings, input.isavailable,
        input.currentstatus
    );

    if (!movie.id) {
        throw new Error('400');
    }

    return moviesDao.patchMovie(movie);
}