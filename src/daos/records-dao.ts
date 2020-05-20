/* Import Modules */

import { db } from '../daos/database';
import { Record, RecordRow } from '../../src/models/Record';

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
    
    const sql = 'SELECT * FROM records';
    
    return db.query<RecordRow>(sql, [])
        .then(result => {
            const rows: RecordRow[]= result.rows;
            const record: Record[] = rows.map(row => Record.from(row));
            return record; 
        });
}

/* Read / Retrieve A Single Record By ID */

export function getRecordById(id: number): Promise<Record> {
    
    const sql = 'SELECT * FROM records WHERE id = $1';
    
    return db.query<RecordRow> (sql, [id])
        .then(result => result.rows.map(row => Record.from(row))[0]);
}

/* Read / Retrieve All Records By Category */

export function getRecordsByCategory(category: number): Promise<Record[]> {
    
    const sql = 'SELECT * FROM records WHERE category = $1';
    
    return db.query<RecordRow> (sql, [category])
        .then(result => {
            const rows: RecordRow[]= result.rows;
            const record: Record[] = rows.map(row => Record.from(row));
            return record; 
        });
}

/* Read / Retrieve Records By Number of Ratings */

export function getRecordsByRecommnedation(recommendation: number): Promise<Record[]> {
    
    const sql = 'SELECT * FROM records WHERE recommendation = $1';
    
    return db.query<RecordRow> (sql, [recommendation])
        .then(result => {
            const rows: RecordRow[]= result.rows;
            const record: Record[] = rows.map(row => Record.from(row));
            return record; 
        });
}

/* Read / Retrive Records By A Single User */

export function getRecordsByUser(handler: number): Promise<Record> {
    
    const sql = 'SELECT * FROM records WHERE "handler" = $1';
    
    return db.query<RecordRow> (sql, [handler])
        .then(result => result.rows.map(row => Record.from(row))[0]);
}

/* Create / Post A New Record To The Database*/

export function createNewRecord(record: Record): Promise<Record> {
    
    const sql = `INSERT INTO records (mediatitle, category, "handler", recommendation) \ 
                VALUES
	            ($1, $2, $3, $4) RETURNING *`;
    
    const params = [record.mediatitle, record.category,
        record.recommendation, record.handler];
    
    return db.query<RecordRow> (sql, params)
        .then(result => result.rows.map(row => Record.from(row))[0]);
}

/* Update (Partial) / Patch A Current Record */

export function patchRecord(record: Record): Promise<Record> {
    
    const sql = `UPDATE records SET mediatitle = COALESCE($1, mediatitle), \
        category = COALESCE($2, category ), "handler" = COALESCE($3, "handler" ) \
        recommendation = COALESCE($4, recommendation ) WHERE id = $5 RETURNING *`;
    
    const params = [record.mediatitle, record.category,
        record.recommendation, record.handler];

    return db.query<RecordRow> (sql, params)
        .then(result => result.rows.map(row => Record.from(row))[0]);
}