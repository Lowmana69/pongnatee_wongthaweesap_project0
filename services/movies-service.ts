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

export function getMovieByGenre (genre: string): Promise<Movie> {}

/* Read / Retrieve Moives By First Letter Of Title */

export function getMovieByFirstLetter (title: string): Promise<Movie> {}

/* Read / Retrieve Movies By Year Release */

export function getMovieByYear (year: number): Promise<Movie> {}

/* Create / Post A New Movie To The Database */

export function createNewMovie (user: any): Promise<Movie> {}

/* Update (Partial) A Single Movie From THe Database s*/

export function patchMovie (input: any): Promise<Movie> {}