/* Import Modules */

import express from 'express';
import request from 'supertest';
import * as recordsService from '../../src/services/records-service';
import { recordsRouter } from '../../src/routers/records-router';

/*  */

beforeAll()
afterAll()

/* Mock */

jest.mock('../../src/daos/records-dao');

const mockRecordService = recordsService as any

/* Setup Express server nad Middleware */

const app = express();
app.use(express.json());
app.use('/records', recordsRouter);

/* getAllRecords Function */

describe(`'GET' Method /records`, () => {
    test(`'GET' request should return normally with a 200 Status Code`, async () => {
        mockRecordService.getAllRecords
            .mockImplementation(async () => []);

        awit request(app)
            .get('/records')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should 500 Status Code from a Bad Request`, async () => {
        mockRecordService.getAllRecords
            .mockImplementation(async () => []);

        awit request(app)
            .get('/records')
            .expect(200);
    });
});

/* getRecordByID Function */

describe(`'GET' Method /records/id`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockRecordService.getRecordByID
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockRecordService.getRecordByID
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockRecordService.getRecordByID
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/undefined')
            .expect(500);
    });
});

/* getRecordsByCategory Function */

describe(`'GET' Method /records/category`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockRecordService.getRecordByCategory
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/5')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockRecordService.getRecordByCategory
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/465')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockRecordService.getRecordByCategory
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/undefined')
            .expect(500);
    });
});

/* getRecordsByNumbers */

describe(`'GET' Method /records/recommendation`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockRecordService.getRecordByNumbers
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockRecordService.getRecordByNumbers
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/45')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockRecordService.getRecordByNumbers
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/unknown')
            .expect(500);
    });
});

/* getRecordByUser Function */

describe(`'GET' Method /records/handler`, () => {
    test(`'GET' request should return a JSON File with 200 Status Code`, async () => {
        mockRecordService.getRecordByUser
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/54')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });
    test(`'GET' request should return a 404 Status Code if JSON File is Not Found`, async () => {
        mockRecordService.getRecordByUser
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/300')
            .expect(404);
    });
    test(`'GET' request should return a 500 Status Code for Internal Server Error`, async () => {
        mockRecordService.getRecordByUser
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/records/uncategorized')
            .expect(500);
    });
});

/* createNewRecord Function */

describe(`'POST' Method /records`, () => {
    test(`'POST' should return a 201 Status Code for Successful Creation of a Record`, async () => {
        mockRecordService.createNewRecord
            .mockImplementation(async () => ({}));
        
        const newRecord = {
            mediatitle: 'Journey To The West',
            totalRatings: 12,
            category: 1,
            recommedation: 3
        };

        await request(app)
            .post('/records')
            .send(newRecord)
            .expect(201)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'POST' should return a 500 Status Code for Error Encounters`, async () => {
        mockRecordService.createNewRecord
            .mockImplementation(async () => ({}));
        
        const newRecord = {
            mediatitle: 'Journey To The West',
            totalRatings: 12,
            category: 3,
            recommedation: 3
        };

        await request(app)
            .post('/records')
            .send(newRecord)
            .expect(500);
    });
});

/* patchRecord Function */

describe(`'PATCH' Method /records` , () => {
    test(`'PATCH' should return a 200 Status Code for Patching Up a Record`, async () => {
        mockRecordService.patchRecord
            .mockImplementation(async () => ({}));
        
        const updatedRecord = {
            mediatitle: 'Journey To The West',
            totalRatings: 12,
            category: 2,
            recommedation: 4
        };

        await request(app)
            .post('/records')
            .send(updatedRecord)
            .expect(200)
            .expect('content-type', 'application.json; charset=utf-8');
    });
    test(`'PATCH' should return a 500 Status Code for Error Encounters`, async () => {
        mockRecordService.patchRecord
            .mockImplementation(async () => ({}));
        
        const updatedRecord = {
            mediatitle: 'Journey To The West',
            totalRatings: 12,
            category: 3,
            recommedation: 3
        };

        await request(app)
            .post('/records')
            .send(updatedRecord)
            .expect(500);
    });
});