/* Import Modules */

import { db } from '../daos/database';
import { User, UserRow } from '../../src/models/User';

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
    
    const sql = 'SELECT * FROM users';
    
    return db.query<UserRow>(sql, [])
        .then(result => {
            const rows: UserRow[]= result.rows;
            const users: User[] = rows.map(row => User.from(row));
            return users; 
        });
}

/* Read / Retrieve A Single User By ID */

export function getUserById(id: number): Promise<User> {
    
    const sql = 'SELECT * FROM users WHERE id = $1';
    
    return db.query<UserRow> (sql, [id])
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Read / Retrivve A User(s) By Number of Ratings */

export function getUserByRatings(totalratings: number): Promise<User> {
    
    const sql = 'SELECT * FROM users WHERE totalratings > $1';
    
    return db.query<UserRow> (sql, [totalratings])
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Create / Post A New User To The Database */

export function createNewUser(user: User): Promise<User> {
    
    const sql = `INSERT INTO users (fullname, "handler", totalratings) \ 
        VALUES ($1, $2, $3) RETURNING *`;
    
    const params = [user.fullName, user.handler,
        user.totalRatings];
    
    return db.query<UserRow> (sql, params)
        .then(result => result.rows.map(row => User.from(row))[0]);
}

/* Update (Partial) / Patch A Current User */

export function patchUser(user: User): Promise<User> {
    
    const sql = `UPDATE users SET fullName = COALESCE($1, fullName ), \
        "handler" = COALESCE($2, "handler" ), totalratings = COALESCE($3, totalratings) \
        WHERE id = $4 RETURNING *`;
    
    const params = [user.fullName, user.handler, 
            user.totalRatings];
    
    return db.query<UserRow> (sql, params)
        .then(result => result.rows.map(row => User.from(row))[0]);
}

