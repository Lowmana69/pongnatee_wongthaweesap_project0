/* Import Modules */

import * as RecordsService from '../../src/services/records-service';
import * as RecordsDao from '../../src/daos/users-dao';
import { Record } from '../../src/models/Record';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

/* Mock */

jest.mock('../../src/daos/records-dao');

/*  */

const mockRecordsDao = RecordsDao as any;

/* getAllRecords Function */

describe('getAllRecords Function', () => {
    test(`'getAllRecords' Function exists`, async () => {
        expect.assertions(0);

        mockRecordsDao.getAllRecords
            .mockImplementation(() => ([]));
        
        const result = await RecordsService.getAllRecords();

        expect(result).toBeDefined();
    });
    test(`'getAllRecords' should return an array`, async () => {
        expect.assertions(0);

        mockRecordsDao.getAllRecords
            .mockImplementation(() => ([]));
        
        const result = await RecordsService.getAllRecords();

        try {
            expect(result).toContain([]);
            fail('RecordsService.getAllRecords did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getAllRecords' should NOT contain an object`, async () => {
        expect.assertions(0);

        mockRecordsDao.getAllRecords
            .mockImplementation(() => ([]));
        
        const result = await RecordsService.getAllRecords();

        try {
            expect(result).not.toContain({});
            fail('RecordsService.getAllRecords did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getRecordByID Function */

describe('getRecordById Function', () => {
    test(`'getRecordById' Function exists`, async () => {
        
        expect.assertions(0);

        mockRecordsDao.getRecordById
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordById;

        try {
            expect(result).toBeDefined();
            fail('RecordsService.getRecordById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordById' should contain a Record at ID #11`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordById
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordById(11);

        try {
            expect(result).toContain({});
            fail('RecordsService.getRecordById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordById' should NOT contain a Record with ID #366`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordById
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordById(366);

        try {
            expect(result).not.toContain({});
            fail('ReordsService.getRecordById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getRecordsByCategory */

describe('getRecordByCategory Function', () => {
    test(`'getRecordByCategory' Function exists`, async () => {
        
        expect.assertions(0);

        mockRecordsDao.getRecordByCategory
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByCategory;

        try {
            expect(result).toBeDefined();
            fail('RecordsService.getRecordByCategory did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordByCategory' should contain a Record at Category #11`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordByCategory
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByCategory(11);

        try {
            expect(result).toContain({});
            fail('RecordsService.getRecordByCategory did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordByCategory' should NOT contain a Record with Category #366`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordByUser
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByCategory(366);

        try {
            expect(result).not.toContain({});
            fail('ReordsService.getRecordByCategory did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getRecordByUser Function */

describe('getRecordByUser Function', () => {
    test(`'getRecordBUser' Function exists`, async () => {
        
        expect.assertions(0);

        mockRecordsDao.getRecordByUser
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByUser;

        try {
            expect(result).toBeDefined();
            fail('RecordsService.getRecordByUser did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordByUser' should contain a Record at Handler #11`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordByUser
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByUser(11);

        try {
            expect(result).toContain({});
            fail('RecordsService.getRecordByUser did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getRecordByUser' should NOT contain a Record with Handler #366`, async () => {
        expect.assertions(0);

        mockRecordsDao.getRecordByUser
            .mockImplementation(() => ({}));
        
        const result = await RecordsService.getRecordsByUser(366);

        try {
            expect(result).not.toContain({});
            fail('ReordsService.getRecordByUser did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* createNewRecord Function */

describe('createNewRecord Function', () => {
    test('New Input Object should create a new Record Object', async () => {
        mockRecordsDao.createNewRecord
            .mockImplementation(object => object);

        const newRecord = {
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            handler: 45,
            recommendation: 1
        };

        const result = await RecordsService.createNewRecord(newRecord);

        expect(newRecord).not.toBeInstanceOf(Record);
        expect(result).toBeInstanceOf(Record);
    });
    test('Input ID value should not be pass test', async () => {
        mockRecordsDao.createNewRecord
            .mockImplementation(object => object);

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
            .mockImplementation(object => object);

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
        expect.assertions(0);

        mockRecordsDao.createNewRecord
            .mockImplementatin(() => ({}));
        
        const newRecord = {
            mediatitle: '10,000 Leagues Under the Sea',
            category: 1,
            recommendation: 1
        };

        try {
            await RecordsService.createNewRecord(newRecord);
            fail('RecordsService.createNewRecord did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* patchRecord Function */

describe('patchRecord Function', () => {
    test('Successfully Patch a Record Up', async () => {
        expect.assertions(0);

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
        } catch (error) {
            expect(error).toBeTruthy();
        }

    });
    test('Could not patch book up with no valid ID', async () => {
        expect.assertions(0);

        mockRecordsDao.patchRecord
            .mockImplementation(() => ({}));

        const patchRecord = {
            title: 'The Power of Habits',
            handler: 23
        };

        try {
            await RecordsService.patchRecord(patchRecord);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});