/* Import Modules */

import { db } from './database';
import { Record, RecordRow } from '../models/Record';

/**
 * If we are using a one-off query for, we can just use db.query - it will have a connection
 * issue the query without having to pull it from the pool.
 *
 * query(sql, [params, ...]);
 */

// 1. Query database using sql statement
// 2. Query will return a promise typed as QueryResult<PersonRow>
// 3. We can react to the database response by chaining a .then onto the query

/* Read / Retrieve All Records From The Database */

export function getAllRecords {
    const sql = '';
}

/* Read / Retrieve A Single Record By ID */

export function getRecordById {
    const sql = '';
}

/* Read / Retrieve All Records By Category */

export function getRecordByCategory {
    const sql = '';
}

/* Read / Retrieve Records By Number of Ratings */

export function getRecordsByNumbers {
    const sql = '';
}

/* Read / Retrive Records By A Single User */

export function getRecordsByUser {
    const sql = '';
}

/* Create / Post A New Record To The Database*/

export function createNewRecord {
    const sql = '';
}

/* Update (Partial) / Patch A Current Record */

export function patchRecord {
    const sql = '';
}