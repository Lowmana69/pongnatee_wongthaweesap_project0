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

export function getAllRecords(): Promise<Record[]> {
    const sql = '';
    return db.query<RecordRow>(sql, [])
        .then(result => {
            const rows: RecordRow[]= result.rows;
            const record: Record[] = rows.map(row => Record.from(row));
            return record; 
        });
}

/* Read / Retrieve A Single Record By ID */

export function getRecordById(id: number): Promise<Record> {
    const sql = '';
    return db.query<MovieRow> (sql, [id])
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Read / Retrieve All Records By Category */

export function getRecordByCategory(category: number): Promise<Record> {
    const sql = '';
    return db.query<MovieRow> (sql, [category])
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Read / Retrieve Records By Number of Ratings */

export function getRecordsByNumbers(recommendation: number): Promise<Record> {
    const sql = '';
    return db.query<MovieRow> (sql, [recommendation])
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Read / Retrive Records By A Single User */

export function getRecordsByUser(hander: number): Promise<Record> {
    const sql = '';
    return db.query<MovieRow> (sql, [handler])
        .then(result => result.rows.map(row => Movie.from(row))[0]);
}

/* Create / Post A New Record To The Database*/

export function createNewRecord(record: Record): Promise<Record> {
    const sql = '';
    const params = [record.mediatitle, record.category,
        record.recommendation, record.handler];
    return db.query<RecordRow> (sql, params)
        .then(result => result.rows.map(row => Record.from(row))[0]);
}

/* Update (Partial) / Patch A Current Record */

export function patchRecord(record: Record): Promise<Record> {
    const sql = '';
    const params = [record.mediatitle, record.category,
        record.recommendation, record.handler];
    return db.query<RecordRow> (sql, params)
        .then(result => result.rows.map(row => Record.from(row))[0]);
}