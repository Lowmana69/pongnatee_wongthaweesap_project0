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

/* getMovieByID Function */

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