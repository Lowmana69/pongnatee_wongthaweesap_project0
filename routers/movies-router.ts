/* Import Modules */

import express from 'express';
import * as moviesServices from '../services/movies-service';

/* Export Movie Router Funtions */

export const moviesRouter = express.Router();

/* Read / Retreieve All Movies From The Database */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('', (request, response, next) => {

});

/* Read / Retrieve A Single Movie Title By ID */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviessRouter.get('/:id', (request, response, next) => {
    
});

/* Read / Retrieve All Movie Titles By Genre */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/:genre', (request, response, next) => {

});

/* Read / Retrieve Movie Titles By First Letter */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('????', (request, response, next) => {
    
});

/* Read / Retrieve Movie Titles By Year */

/*
    http://localhost:3000/movies
    Retrieves an array of people from database
*/

moviesRouter.get('/:year', (request, response, next) => {
    
});

/* Create / Post A Single Movie To The Database */

/*
    POST http://localhost:3000/movies
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

moviessRouter.post('', (request, response, next) => {
    
});

/* Upadte (Partial) / Patch A Current Movie */

moviessRouter.patch('', (request, response, next) => {
    
});