/* Import Modules */

import express from 'express';
import * as ratingsService from '../services/ratings-service';

/* Export Ratings Routers Functions */

export const ratingsRouter = express.Router();

/* Read / Retrieve All Ratings From The Database */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

ratingssRouter.get('', (request, response, next) => {

});

/* Read / Retrieve A Single Rating By ID */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

ratingsRouter.get('/:id', (request, response, next) => {
    
});

/* Read / Retrieve All Ratings By Category */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

ratingsRouter.get('/:category', (request, response, next) => {

});

/* Read / Retrieve A Rating By Number of Ratings */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

ratingsRouter.get('????', (request, response, next) => {
    
});

/* Read / Retrieve All Ratings By Handler Name */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

ratingsRouter.get('/:handlers', (request, response, next) => {
    
});

/* Create / Post A New Rating To The Database */

/*
    POST http://localhost:3000/people
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

ratingsRouter.post('', (request, response, next) => {
    
});

/* Update (Partial) / Patch A Current Rating */

ratingsRouter.patch('', (request, response, next) => {
    
});