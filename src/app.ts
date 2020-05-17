/* Import Modules*/

require('dotenv').config();
import express from 'express';
import { db } from './daos/database';
import { usersRouter } from '../src/routers/users-router';
import { moviesRouter } from '../src/routers/movies-router';
import { booksRouter } from '../src/routers/books-router';
import { recordsRouter } from '../src/routers/records-router';

/* Initialize Express */

const app = express();

/* Setting the Port */

const PORT = process.env.port || 3000;

app.set('PORT', PORT);

/* Register Middleware */

app.use(express.json());

/* Register Routes Middleware */

app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/books', booksRouter);
app.use('/records', recordsRouter);

/* Initialize Port to Listen */

app.listen(PORT, () => {
    console.log(`Home app running at http://localhost:${port}`);
});