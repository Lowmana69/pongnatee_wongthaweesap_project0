/* Import Modules */

import { db } from '../daos/database';
import { Rating, RatingRow } from '../models/Rating';

/**
 * If we are using a one-off query for, we can just use db.query - it will have a connection
 * issue the query without having to pull it from the pool.
 *
 * query(sql, [params, ...]);
 */

// 1. Query database using sql statement
// 2. Query will return a promise typed as QueryResult<PersonRow>
// 3. We can react to the database response by chaining a .then onto the query

/* Read / Retrieve All Ratings From The Database */

export function getAllRatings {
    const sql = '';
}

/* Read / Retrieve A Single Rating By ID */

export function getRatingById {
    const sql = '';
}

/* Read / Retrieve All Ratings By Category */

export function getRatingByCategory {
    const sql = '';
}

/* Read / Retrieve Ratings By Number of Ratings */

export function getRatingsByNumbers {
    const sql = '';
}

/* Read / Retrive Ratings By A Single User */

export function getRatingByUser {
    const sql = '';
}

/* Create / Post A New Rating To The Database*/

export function createNewRating {
    const sql = '';
}

/* Update (Partial) / Patch A Current Rating */

export function patchRating {
    const sql = '';
}