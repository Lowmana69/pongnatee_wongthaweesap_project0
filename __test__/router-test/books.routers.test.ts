/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as booksService from '../../src/services/books-service';
import { booksRouter } from '../../src/routers/books-router';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

/* Mock */

jest.mock('../../src/daos/books-dao');

const mockBookService = booksService as any

/* Setup Express server nad Middleware */

const app = express();
app.use(express.json());
app.use('/books', booksRouter);

/* getAllBooks Function Router */

describe(`'GET' Method /booka`, () => {
    test(`'GET' request should return normally with a 200 Status Code`, async () => {
        mockBookService.getAllBooks
            .mockImplementation(() => []);
            
        await request(app)
            .get('/books')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockBookService.getAllBooks
            .mockImplementation(() => []);

        await request(app)
            .get('/books')
            .expect(500);
    });
});

/* getBookByID Function */

describe(`'GET' Method /books/id`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockBookService.getBookById
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockBookService.getBookById
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockBookService.getBookById
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/undefined')
            .expect(500);
    });
});

/* getBookByGenre Function */

describe(`'GET' Method /books/genre`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockBookService.getBookByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/2')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockBookService.getBookByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockBookService.getBookByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/undefined')
            .expect(500);
    });
});

/* getBookByAuthor Function */

describe(`'GET' Method /books/author`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockBookService.getBookByAuthor
            .mockImplementation(() => ({}));
        
        await request(app)
            .get('/books/2')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockBookService.getBookByAuthor
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockBookService.getBookByAuthor
            .mockImplementation(() => ({}));

        await request(app)
            .get('/books/undefined')
            .expect(500);
    });
});

/* createNewBook Function */

describe(`'POST' Method /people`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of a Book`, async () => {
        mockBookService.createNewBook
            .mockImplementation(() => ({}));
        
        const newBook = {
            title: 'Diary of Anne Frank',
            author: 3,
            genre: 2,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        await request(app)
            .post('/books')
            .send(newBook)
            .expect(201)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'POST' should return a 500 Status Code for Error Encounters`, async () => {
        mockBookService.createNewBook
            .mockImplementation(() => ({}));
        
        const newBook = {
            title: 'Diary of Anne Frank',
            author: 'Anne Frank',
            genre: 3
        };

        await request(app)
            .post('/books')
            .send(newBook)
            .expect(500);
    });
});

/* patchBook Function */

describe(`'PATCH' Method /books`, () => {
    test(`'PATCH' should return a 200 Status Code for Patch Up`, async () => {
        mockBookService.patchBook
            .mockImplementation(() => ({}));
        
        const updatedBook = {
            id: 34,
            title: 'Diary of Anne Frank',
            author: 4,
            genre: 5,
            totalRatings: 12,
            isAvailable: true,
            currentStatus: 1
        };

        await request(app)
            .patch('/books')
            .send(updatedBook)
            .expect(200)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'PATCH' should return a 500 Status Code for Error Encounters`, async () => {
        mockBookService.patchBook
            .mockImplementation(() => ({}));
        
        const updatedBook = {
            title: 'Diary of Anne Frank',
            author: 'Anne Frank',
            genre: 3
        };

        await request(app)
            .patch('/books')
            .send(updatedBook)
            .expect(500);
    });
});