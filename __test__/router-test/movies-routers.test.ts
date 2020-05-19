/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as moviesService from '../../src/services/movies-service';
import { moviesRouter } from '../../src/routers/movies-router';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

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
            .mockImplementation(() => []);

        await request(app)
            .get('/movies')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockMovieService.getAllMovies
            .mockImplementation(() => []);

        await request(app)
            .get('/movies')
            .expect(200);
    });
});

/* getMovieByID Function */

describe(`'GET' Method /users/id`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movies/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movies/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockMovieService.getMovieByID
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movie/undefined')
            .expect(500);
    });
});

/* getMovieByGenre Function */

describe(`'GET' Method /movies/genre`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockMovieService.getMovieByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movies/3')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockMovieService.getMovieByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movies/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockMovieService.getMovieByGenre
            .mockImplementation(() => ({}));

        await request(app)
            .get('/movie/null')
            .expect(500);
    });
});

/* getMovieByFirstLetter Function */

describe(`'GET' Method /movies/title`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockMovieService.getMovieByFirstLetter
            .mockImplementation(() => ({}));

        await request(app)
            .get(`/movies/'T'`)
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockMovieService.getMovieByFirstLetter
            .mockImplementation(() => ({}));

        await request(app)
            .get(`/movies/'Z'`)
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockMovieService.getMovieByFirstLetter
            .mockImplementation(() => ({}));
            
        await request(app)
            .get('/movie/452')
            .expect(500);
    });
});

/

/* createNewMovie Function */

describe(`'POST' Method /movies`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of a Movie`, async () => {
        mockMovieService.createNewMovie
            .mockImplementation(() => ({}));
        
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
            .mockImplementation(() => ({}));
        
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
});

/* patchMovie Function */

describe(`'PATCH' Method /movies`, () => {
    test(`'PATCH' should return a 200 Status Code for Patching Up a Movie`, async () => {
        mockMovieService.patchMovie
            .mockImplementation(() => ({}));
        
        const updatedMovie = {
            title: 'Godzilla',
            yearRelease: 6,
            genre: 4,
            totalRatings: 0,
            isAvailable: false,
            currentStatus: 2
        };

        await request(app)
            .post('/movies')
            .send(updatedMovie)
            .expect(200)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'PATCH' should return a 500 Status Code for Error Encounters`, async () => {
        mockMovieService.patchMovie
            .mockImplementation(() => ({}));
        
        const updatedMovie = {
            title: 'Godzilla 2000',
            yearRelease: 6,
            genre: 'Thriller'
        };

        await request(app)
            .post('/books')
            .send(updatedMovie)
            .expect(500);
    });
});