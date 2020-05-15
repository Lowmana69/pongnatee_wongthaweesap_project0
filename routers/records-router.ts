/* Import Modules */

import express from 'express';
import * as recordsService from '../services/records-service';

/* Export Records Routers Functions */

export const recordsRouter = express.Router();

/* Read / Retrieve All Records From The Database */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

recordsRouter.get('', (request, response, next) => {

});

/* Read / Retrieve A Single Record By ID */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

recordsRouter.get('/:id', (request, response, next) => {
    
});

/* Read / Retrieve All Records By Category */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

recordsRouter.get('/:category', (request, response, next) => {

});

/* Read / Retrieve A Record By Number of Ratings */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

recordsRouter.get('????', (request, response, next) => {
    
});

/* Read / Retrieve All Records By Handler Name */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

recordsRouter.get('/:handlers', (request, response, next) => {
    
});

/* Create / Post A New Record To The Database */

/*
    POST http://localhost:3000/people
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

recordsRouter.post('', (request, response, next) => {
    
});

/* Update (Partial) / Patch A Current Record */

recordsRouter.patch('', (request, response, next) => {
    
});