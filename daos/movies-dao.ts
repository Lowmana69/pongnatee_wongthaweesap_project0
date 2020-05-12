/* Import Modules */

import { db } from '../daos/database';
import { Movie, MovieRow } from '../models/Movie';

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

export function getAllMovies {
    const sql = '';
}

/* Read / Retrieve A Single Movie Title By ID */

export function getMovieById {
    const sql = '';
}

/* Read / Retrieve All Movie Title(s) By Genre */

export function getMovieByGenre {
    const sql = '';
}

/* Read / Retrieve A || All Movie Title(s) By First Letter */

export function getMovieByFirstLetter {
    const sql = '';
}

/* Read / Retrieve All Movies By Year Release */

export function getMovieByYear {
    const sql = '';
}

/* Create / Post A New Movie To The Database */

export function createNewMovie {
    const sql = '';
}

/* Update (Partial) / Patch A Current Movie */

export function patchMovie {
    const sql = '';
}