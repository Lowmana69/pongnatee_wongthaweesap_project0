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

export function getAllUsers(): Promise<User[]> {
    const sql = '';
    return db.query<UserRow>(sql, [])
        .then(result => {
            const rows: UserRow[]= result.rows;
            const user: User[] = rows.map(row => User.from(row));
            return user; 
        });
}

/* Read / Retrieve A Single User By ID */

export function getUserById(id: number): Promise<User> {
    const sql = '';
    return db.query<UserRow> (sql, [id])
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Read / Retrivve A User(s) By Number of Ratings */

export function getUserByRatings(totalratings: number): Promise<User> {
    const sql = '';
    return db.query<UserRow> (sql, [totalratings])
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Create / Post A New User To The Database */

export function createNewUser(user: User): Promise<User> {
    const sql = '';
    const params = [user.fullName, user.handler,
        user.totalRatings];
    return db.query<UserRow> (sql, params)
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Update (Partial) / Patch A Current User */

export function patchUser(user: User): Promise<User> {
    const sql = '';
    const params = [user.fullName, user.handler, 
            user.totalRatings];
    return db.query<UserRow> (sql, params)
        .then(result => result.rows.map(row => User.from(row))[0]);
}

