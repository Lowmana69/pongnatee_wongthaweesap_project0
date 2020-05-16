/* Import node-postgres Module */

import { Pool } from 'pg';

/* Connecting to the Database */

export const db = new Pool({
    database: 'postgres',
    port: 5432,
    host: process.env.PROSPECTIVE_USER_TEST,
    user: process.env.PROSPECTIVE_USER,
    password: process.env.PROSPECTIVE_USER_CODE
});

/*
    Pool establish new connection to Postgres
    to run setup commands to client.
*/

db.on('connect', (client) => {
    client.query(`SET search_path TO my_schema, public`);
});