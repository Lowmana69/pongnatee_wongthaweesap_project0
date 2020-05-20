/* Import Modules */

import { db } from '../daos/database';
import { Movie, MovieRow } from '../../src/models/Movie';

/**
 * If we are using a one-off query for, we can just use db.query - it will have a connection
 * issue the query without having to pull it from the pool.
 *
 * query(sql, [params, ...]);
 */

// 1. Query database using sql statement
// 2. Query will return a promise typed as QueryResult<PersonRow>
// 3. We can react to the database response by chaining a .then onto the query

/* Read / Retrieve All Movies From The Database */

export function getAllMovies(): Promise<Movie[]> {
   
    const sql = 'SELECT * FROM movies';
    
    return db.query<MovieRow>(sql, [])
        .then(result => {
            const rows: MovieRow[]= result.rows;
            const movie: Movie[] = rows.map(row => Movie.from(row));
            return movie; 
        });
}

/* Read / Retrieve A Single Movie Title By ID */

export function getMovieById(id: number): Promise<Movie> {
    
    const sql = 'SELECT * FROM movies WHERE id = $1';
    
    return db.query<MovieRow> (sql, [id])
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Read / Retrieve All Movie Title(s) By Genre */

export function getMovieByGenre(genre: number): Promise<Movie[]> {
    
    const sql = 'SELECT * FROM movies WHERE genre = $1';
    
    return db.query<MovieRow> (sql, [genre])
        .then(result => {
            const rows: MovieRow[]= result.rows;
            const movie: Movie[] = rows.map(row => Movie.from(row));
            return movie; 
        });
}

/* Read / Retrieve A || All Movie Title(s) By First Letter */

export function getMovieByFirstLetter(title: string): Promise<Movie> {
    
    const sql = 'SELECT * FROM movies WHERE title LIKE $1+%';
    
    return db.query<MovieRow> (sql, [title])
        .then(result => result.rows.map(row => Movie.from(row))[0])
}

/* Read / Retrieve All Movies By Year Release */

export function getMovieByYear(bydecade: number): Promise<Movie[]> {
    
    const sql = 'SELECT * FROM movies WHERE yearrelease = $1';
    
    return db.query<MovieRow> (sql, [bydecade])
        .then(result => {
            const rows: MovieRow[]= result.rows;
            const movie: Movie[] = rows.map(row => Movie.from(row));
            return movie; 
        });
}

/* Create / Post A New Movie To The Database */

export function createNewMovie(movie: Movie): Promise<Movie> {
    
    const sql = `INSERT INTO movies \
        (title, yearrelease , genre, totalratings, isavailable, currentstatus) \ 
        VALUES
	    ($1, $2, $3, $4, $5, $6) RETURNING *`;
    
    const params = [movie.title, movie.genre,
        movie.yearrelease, movie.totalratings,
        movie.isavailable, movie.currentstatus];
    
    return db.query<MovieRow> (sql, params)
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Update (Partial) / Patch A Current Movie */

export function patchMovie(movie: Movie): Promise<Movie> {
    
    const sql = `UPDATE movies SET title = COALESCE($1, title), \ 
        yearrelease = COALESCE($2, yearrelease), genre = COALESCE($3, genre) \ 
        totalratings = COALESCE($4, totalratings), isavailable = COALESCE($5, isavailable) \
        currentstatus = COALESCE($6, currentstatus)
        WHERE id = $7 RETURNING *`;
    
    const params = [movie.title, movie.genre,
        movie.yearrelease, movie.totalratings,
        movie.isavailable, movie.currentstatus];
    
    return db.query<MovieRow> (sql, params)
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}