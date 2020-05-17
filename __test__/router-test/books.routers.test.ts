/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as booksService from '../../src/services/books-services';
import { booksRouter } from '../../src/rputers/books-router';

/*  */

beforeAll()
afterAll()

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
            .mockImplementation(async () => []);
        awit request(app)
            .get('/books')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockBookService.getAllBooks
            .mockImplementation(async () => []);
        awit request(app)
            .get('/books')
            .expect(200);
    });
    test('should ', async () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});

/* getBookByID Function */

describe(`'GET' Method /books/id`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockBookService.getBookByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/books/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockBookService.getBookByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/books/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockBookService.getBookByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/books/undefined')
            .expect(500);
    });
    test('should ', () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});

/* getBookByGenre Function */

describe('', () => {
    test('should ', () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});

/* getBookByAuthor Function */

describe('', () => {
    test('should ', () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});

/* createNewBook Function */

describe(`'POST' Method /people`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of Book`, async () => {
        mockBookService.createNewBook.mockImplementation(async () => ({}));
        
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
        mockBookService.createNewBook.mockImplementation(async () => ({}));
        
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
    test('should ', () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});

/* patchBook Function */

describe('', () => {
    test('should ', () => {
        expect().toBeDefined();
    });
    test('should ', () => {
        expect().toEqual();
    });
    test('should ', () => {
        expect().not.toEqual();
    });
    test('should ', () => {
        expect()
    });
});