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
    usersService.getAllUsers()
    .then(users => {
        response.set('content-type', 'application/json');
        response.json(users);
        next();
    }).catch (error => {
        response.sendStatus(500);
    });
});

/* Read / Retieve A Single User By ID */

/*
    http://localhost:3000/users/1
    Retrieves an array of people from database
*/

usersRouter.get('/:id', (request, response, next) => {
    const id = +request.params.id;
    usersService.getUserById(id)
        .then(user => {
            if (!user) {
                response.sendStatus(404);
            } else {
                response.json(user);
            }
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        })
});

/* Read / Retrieve User By Number Of Ratings */

usersRouter.get('/:totalratings', (request, response, next) => {
    const totalratings = +request.params.totalratings;
    usersService.getUserByRatings(totalratings)
        .then(totalratings => {
            if (!totalratings) {
                response.sendStatus(404);
            } else {
                response.json(totalratings);
            }
        }).catch(error => {
            response.sendStatus(500);
        });
});

/* Create / Post A New User To The Database */

/*
    POST http://localhost:3000/users
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

usersRouter.post('', (request, response, next) => {
    const user = request.body;
    usersService.createNewUser(user)
        .then(newUser => {
            response.status(201);
            response.json(newUser);
            next();
        }).catch(error => {
            response.sendStatus(500);
            next();
        });
});

/* Update (Partial) / Patch A Current User */

usersRouter.patch('', (request, response, next) => {
    const user = request.body;
    usersService.patchUser(user)
        .then(updatedUser => {
            if (!user) {
                response.json(updatedUser);
            } else {
                response.sendStatus(404);
            }
        }).catch(error => {
            response.sendStatus(500);
        })
});