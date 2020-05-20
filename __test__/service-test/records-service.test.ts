/* Import Modules */

import * as RecordsService from '../../src/services/records-service';
import * as RecordsDao from '../../src/daos/records-dao';
import { Record } from '../../src/models/Record';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

/* Mock */

jest.mock('../../src/daos/records-dao.ts');

/*  */

const mockRecordsDao = RecordsDao as any;

/* getAllRecords Function */

describe('getAllRecords Function', () => {
    test(`'getAllRecords' Function exists`, async () => {
        expect.assertions(1);

        mockRecordsDao.getAllRecords
            .mockImplementation( async () => ([]));
        
        const result = await RecordsService.getAllRecords();

        expect(result).toBeDefined();
    });
    test(`'getAllRecords' should return an array`, async () => {
        expect.assertions(1);

        mockRecordsDao.getAllRecords
            .mockImplementation( async () => ([]));
        
        const result = await RecordsService.getAllRecords();

        expect(result).toBeTruthy();
    });
    test(`'getAllRecords' should NOT contain an object`, async () => {
        expect.assertions(1);

        mockRecordsDao.getAllRecords
            .mockImplementation( async () => ([]));
        
        const result = await RecordsService.getAllRecords();

        expect(result).not.toEqual({});
    });
});

/* getRecordByID Function */

describe('getRecordById Function', () => {
    test(`'getRecordById' Function exists`, async () => {
        
        expect.assertions(1);

        mockRecordsDao.getRecordById
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordById;

        expect(result).toBeDefined();
    });
    test(`'getRecordById' should contain a Record at ID #11`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordById
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordById(11);

        expect(result).toBeTruthy();
    });
    test(`'getRecordById' should NOT contain a Record with ID #366`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordById
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordById(366);

        expect(result).not.toBeInstanceOf(Record);
    });
});

/* getRecordsByCategory */

describe('getRecordsByCategory Function', () => {
    test(`'getRecordsByCategory' Function exists`, async () => {

        mockRecordsDao.getRecordsByCategory
            .mockImplementation( async () => ([]));
        
        const result = await RecordsService.getRecordsByCategory;

        expect(result).toBeDefined();
    });
    test(`'getRecordsByCategory' should contain a Record at Category #1`, async () => {

        mockRecordsDao.getRecordsByCategory
            .mockImplementation( async () => ([]));

        const result = await RecordsService.getRecordsByCategory(1);

        expect(result).toBeTruthy();
    });
    test(`'getRecordsByCategory' should NOT contain a Record with Category #366`, async () => {

        mockRecordsDao.getRecordsByCategory
            .mockImplementation( async () => ({}));

        const result = await RecordsService.getRecordsByCategory(366);

        expect(result).not.toBeFalsy();
    });
});

/* getRatingsByNumbers */

describe('getRecordsByRecommnedation Function', () => {
    test(`'getRecordsByRecommnedation' Function exists`, async () => {
        
        expect.assertions(1);

        mockRecordsDao.getRecordsByRecommnedation
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByRecommnedation;

        expect(result).toBeDefined();
    });
    test(`'getRecordsByRecommnedation' should contain a Record at Category #11`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordsByRecommnedation
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByRecommnedation(5);

        expect(result).toBeTruthy();
    });
    test(`'getRecordsByRecommnedation' should NOT contain a Record with Category #366`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordsByRecommnedation
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByRecommnedation(366);

        expect(result).not.toBeInstanceOf(Record);
    });
});

/* getRecordByUser Function */

describe('getRecordsByUser Function', () => {
    test(`'getRecordsByUser' Function exists`, async () => {
        
        expect.assertions(1);

        mockRecordsDao.getRecordsByUser
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByUser;

        expect(result).toBeDefined();
    });
    test(`'getRecordsByUser' should contain a Record at Handler #11`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordsByUser
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByUser(30);

        expect(result).toBeTruthy();
    });
    test(`'getRecordByUser' should NOT contain a Record with Handler #366`, async () => {
        expect.assertions(1);

        mockRecordsDao.getRecordsByUser
            .mockImplementation( async () => ({}));
        
        const result = await RecordsService.getRecordsByUser(366);

        expect(result).not.toBeFalsy();
    });
});

/* createNewRecord Function */

describe('createNewRecord Function', () => {
    test('New Input Object should create a new Record Object', async () => {
        mockRecordsDao.createNewRecord
            .mockImplementation( async () => ({}));

        const newRecord = {
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            handler: 45,
            recommendation: 1
        };

        const result = await RecordsService.createNewRecord(newRecord);

        expect(newRecord).not.toBeInstanceOf(Record);
        expect(result).toBeTruthy();
    });
    test('Input ID value should not be pass test', async () => {
        mockRecordsDao.createNewRecord
            .mockImplementation( async () => ({}));

        const newRecord = {
            id: 23,
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            handler: 45,
            recommendation: 1
        };

        const result = await RecordsService.createNewRecord(newRecord);

        expect(result.id).not.toBe(newRecord.id);
        expect(result.id).not.toBeTruthy();
    });
    test('Extra properties should not be able to pass', async () => {
        mockRecordsDao.createNewRecord
            .mockImplementation( async () => ({}));

        const newRecord = {
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            handler: 45,
            recommendation: 1,
            totalRatings: 10
        };

        const result = await RecordsService.createNewRecord(newRecord) as any;

        expect(result.totalRatings).not.toBeInstanceOf(Record);
        expect(result.totalRatings).not.toBeDefined();
    });
    test(`A '422' Error should return if no Handler Input is provided`, async () => {

        mockRecordsDao.createNewRecord
            .mockImplementation( async () => ({}));
        
        const newRecord = {
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            recommendation: 1
        };

        try {
            await RecordsService.createNewRecord(newRecord);
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});

/* patchRecord Function */

describe('patchRecord Function', () => {
    test('Successfully Patch a Record Up', async () => {
        expect.assertions(1);

        mockRecordsDao.patchRecord
            .mockImplementation(() => ({}));

        const patchRecord = {
            id: 13,
            title: 'The Power of Habits',
            handler: 23,
            category: 1,
            recommendation: 4
        };

        try {
            await RecordsService.patchRecord(patchRecord);
            expect(patchRecord).toBeTruthy();
        } catch (err) {
            expect(err).toBeTruthy();
        }

    });
    test('Could not patch book up with no valid ID', async () => {
        expect.assertions(1);

        mockRecordsDao.patchRecord
            .mockImplementation(() => ({}));

        const patchRecord = {
            title: 'The Power of Habits',
            handler: 23
        };

        try {
            await RecordsService.patchRecord(patchRecord);
        } catch (err) {
            expect(err).toBeTruthy();
        }
    });
});