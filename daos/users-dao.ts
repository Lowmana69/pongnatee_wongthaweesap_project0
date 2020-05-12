/* Import Modules */

import { db } from '../daos/database';
import { User, UserRow } from '../models/User';

/**
 * If we are using a one-off query for, we can just use db.query - it will have a connection
 * issue the query without having to pull it from the pool.
 *
 * query(sql, [params, ...]);
 */

// 1. Query database using sql statement
// 2. Query will return a promise typed as QueryResult<PersonRow>
// 3. We can react to the database response by chaining a .then onto the query

/* Read / Retrieve All Users From The Database */

export function getAllUsers {
    const sql = '';
}

/* Read / Retrieve A Single User By ID */

export function getUserById {
    const sql = '';
}

/* Read / Retrivve A User(s) By Number of Ratings */

export function getUserByRatings {
    const sql = '';
}

/* Create / Post A New User To The Database */

export function createNewUser {
    const sql = '';
}

/* Update (Partial) / Patch A Current User */

export function patchUser {
    const sql = '';
}

