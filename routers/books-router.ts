/* Import Modules */

import express from 'express';
import * booksService from '../services/books-service';

/* Export Book Router Functions */

export const booksRouter = express.Router();

/* Read / Retrieve All Books From The Database */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('', (request, response, next) => {

});

/* Read / Retrieve A Single Book By ID */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('/:id', (request, response, next) => {
    
});

/* Read / Retrieve Books By Genre */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('/:genre', (request, response, next) => {

});

/* Read / Retrieve Books By Number of Ratings */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('?', (request, response, next) => {
    
});

/* Read / Retrieve Books By Author */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('/:author', (request, response, next) => {
    
});

/* Create / Post A New Book To The Database */

/*
    POST http://localhost:3000/people
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

booksRouter.post('', (request, response, next) => {
    
});

/* Update (Partia) / Patch A Current Book */

booksRouter.patch('', (request, response, next) => {
    
});