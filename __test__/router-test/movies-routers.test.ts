/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as moviesService from '../../src/services/movies-services';
import { moviesRouter } from '../../src/rputers/movies-router';

/*  */

beforeAll()
afterAll()

/* Mock */

jest.mock('../../src/daos/movies-dao');

const mockMovieService = moviesService as any

/* Setup Express server nad Middleware */

const app = express();
app.use(express.json());
app.use('/movies', moviesRouter);

/* getAllMovies Function */

describe(`'GET' Method /movies`, () => {
    test(`'GET' request should return normally with a 200 Status Code`, async () => {
        mockMovieService.getAllMovies
            .mockImplementation(async () => []);
        awit request(app)
            .get('/movies')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockMovieService.getAllMovies
            .mockImplementation(async () => []);
        awit request(app)
            .get('/movies')
            .expect(200);
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

/* getMovieByID Function */

describe(`'GET' Method /users/id`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/movies/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/movies/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/movie/undefined')
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

/* getMovieByGenre Function */

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

/* getMovieByFirstLetter Function */

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

/

/* createNewMovie Function */

describe(`'POST' Method /movies`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of Book`, async () => {
        mockMovieService.createNewMovie
            .mockImplementation(async () => ({}));
        
        const newMovie = {
            title: 'Godzilla 2000',
            yearRelease: 6,
            genre: 4,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        await request(app)
            .post('/movies')
            .send(newMovie)
            .expect(201)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'POST' should return a 500 Status Code for Error Encounters`, async () => {
        mockMovieService.createNewMovie
            .mockImplementation(async () => ({}));
        
        const newMovie = {
            title: 'Godzilla 2000',
            yearRelease: 6,
            genre: 'Thriller'
        };

        await request(app)
            .post('/books')
            .send(newMovie)
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

/* patchMovie Function */

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