/* Import Modules */

import express from 'express';
import * as usersService from '../services/users-service';

/* Export User Router Functions */

export const usersRouter = express.Router();

/* Read / Retrieve All Users From The Database */

/*
    http://localhost:3000/users
    Retrieves an array of people from database
*/

usersRouter.get('', (request, response, next) => {
    usersService.getAllUsers().then(users => {
        response.json(users);
        next();
    }).catch (error => {
        console.log(error);
        response.sendStatus(500);
    });
});

/* Read / Retieve A Single User By ID */

/*
    http://localhost:3000/users/1
    Retrieves an array of people from database
*/

usersRouter.get('/:id', (request, response, next) => {
    const id = request.params.id;
    
});

/* Read / Retrieve User By Number Of Ratings */

usersRouter.get('????', (request, response, next) => {

});

/* Create / Post A New User To The Database */

/*
    POST http://localhost:3000/users
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

usersRouter.post('', (request, response, next) => {
    
});

/* Update (Partial) / Patch A Current User */

usersRouter.patch('', (request, response, next) => {
    
});