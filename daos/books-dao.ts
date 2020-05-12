/* Import Modules */

import { db } from '../daos/database';
import { Book, BookRow } from '../models/Book';

/**
 * If we are using a one-off query for, we can just use db.query - it will have a connection
 * issue the query without having to pull it from the pool.
 *
 * query(sql, [params, ...]);
 */

// 1. Query database using sql statement
// 2. Query will return a promise typed as QueryResult<PersonRow>
// 3. We can react to the database response by chaining a .then onto the query

/* Read / Retrieve All Books From The Database */

export function getAllBooks {
    const sql = '';
}

/* Read / Retrieve A Single Book By ID */

export function getBookById {
    const sql = '';
}

/* Read / Retrieve Book Titles By Genre */

export function getBookByGenre {
    const sql = '';
}

/* Read / Retrieve Book Title(s) By First Letter */

export function getBookByFirstLetter {
    const sql = '';
}

/* Read / Retrieve Book Titles By Auther */

export function getBookByAuthor {
    const sql = '';
}

/* Create / Post A New book To The Database */

export function createNewBook {
    const sql = '';
}

/* Update (Partial) / Patch A Current Book */

export function patchBook {
    const sql = '';
}
