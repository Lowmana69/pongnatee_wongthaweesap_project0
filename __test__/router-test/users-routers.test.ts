/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as usersService from '../../src/services/users-services';
import { usersRouter } from '../../src/rputers/users-router';

/*  */

beforeAll()
afterAll()

/* Mock */

jest.mock('../../src/daos/users-dao');

const mockUserService = usersService as any

/* Setup Express server nad Middleware */

const app = express();
app.use(express.json());
app.use('/users', usersRouter);

/* getAllUsers Function */

describe(`'GET' Method /users`, () => {
    test(`'GET' request should return normally with a 200 Status Code`, async () => {
        mockUserService.getAllUsers
            .mockImplementation(async () => []);
        awit request(app)
            .get('/users')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockUserService.getAllUsers
            .mockImplementation(async () => []);
        awit request(app)
            .get('/users')
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

/* getUserByID Function */

describe('`GET` Method /users/id', () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockUserService.getUserByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/users/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockUserService.getUserByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/users/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockUserService.getUserByID
            .mockImplementation(async () => ({}));
        await request(app)
            .get('/users/undefined')
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

/* getUserByRatings Function */

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

/* createNewUser Function */

describe(`'POST' Method /users`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of Book`, async () => {
        mockUserService.createNewUser
            .mockImplementation(async () => ({}));
        
        const newUser = {
            fullName: 'Gandalf Stormcrow',
            handler: 'GandalfTheWhite',
            totalRatings: 0
        };

        await request(app)
            .post('/users')
            .send(newUser)
            .expect(201)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'POST' should return a 500 Status Code for Error Encounters`, async () => {
        mockBookService.createNewUser
            .mockImplementation(async () => ({}));
        
        const newUser = {
            fullName: 'Gandalf Stormcrow',
            handler: 1
        };

        await request(app)
            .post('/users')
            .send(newUser)
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

/* patchUser Function */

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