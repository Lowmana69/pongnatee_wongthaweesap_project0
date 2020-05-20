/* Import Modules */

import express from 'express';
import * as booksService from '../../src/services/books-service';

/* Export Book Router Functions */

export const booksRouter = express.Router();

/* Read / Retrieve All Books From The Database */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('', (request, response, next) => {
    booksService.getAllBooks()
        .then(books => {
            response.set('Content-Type', 'application/json');
            response.json(books);
            next();
        }).catch(error => {
            response.sendStatus(500);
        });
});

/* Read / Retrieve A Single Book By ID */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/

booksRouter.get('/:id', (request, response, next) => {
    const id = +request.params.id;
    booksService.getBookById(id)
        .then(book => {
            if (!book) {
                response.sendStatus(404);
            } else {
                response.json(book)
            }
            next();
        }).catch(error => {
            next();
        });
});

/* Read / Retrieve Books By Genre */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/
// TODO: Check the logic out
booksRouter.get('/genre/:genre', (request, response, next) => {
    const genre = +request.params.genre;
    booksService.getBookByGenre(genre)
        .then(genre => {
            if (!genre) {
                response.sendStatus(404);
            } else {
                response.json(genre)
            }
            next();
        }).catch(error => {
            next();
        });
});

/* Read / Retrieve Books By Number of Ratings */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/
// TODO: Check the logic out
booksRouter.get('/:title', (request, response, next) => {
    const title = request.params.title;
    booksService.getBookByFirstLetter(title)
        .then(title => {
            if (!title) {
                response.sendStatus(404);
            } else {
                response.json(title)
            }
            next();
        }).catch(error => {
            next();
        });
});

/* Read / Retrieve Books By Author */

/*
    http://localhost:3000/people
    Retrieves an array of people from database
*/
// TODO: Check the logic out
booksRouter.get('/author/:author', (request, response, next) => {
    const author = +request.params.author;
    booksService.getBookByAuthor(author)
        .then(author => {
            if (!author) {
                response.sendStatus(404);
            } else {
                response.json(author)
            }
            next();
        }).catch(error => {
            next();
        });
});

/* Create / Post A New Book To The Database */

/*
    POST http://localhost:3000/people
    Creates a new person and saves them to the database.
    Returns the inserted data as JSON with status 201.
*/

booksRouter.post('', (request, response, next) => {
    const book = request.body;
    booksService.createNewBook(book)
        .then(newBook => {
            response.status(201);
            response.json(newBook);
            next();
        }).catch(err => {
            response.sendStatus(500);
            next();
        });
});

/* Update (Partia) / Patch A Current Book */

booksRouter.patch('', (request, response, next) => {
    const book = request.body;
    booksService.patchBook(book)
        .then(updatedBook => {
            if (updatedBook) {
                response.json(updatedBook);
            } else {
                response.sendStatus(404);
            }
        }).catch(err => {
            response.sendStatus(500);
            next();
        });
});