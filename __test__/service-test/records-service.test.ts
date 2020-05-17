/* Import Modules */

import * as recordService from '../../src/services/records-services';
import * as recordDao from '../..src/daos/records-dao';
import ( Record ) from '../../src/models/Record';

/*  */

beforeAll()
afterAll()

/* Mock */

jest.mock('../../src/daos/records-dao');

/* getAllRecords Function */

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

/* getRecordByID Function */

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

/* getRecordsByCategory Function */

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

/* getRecordsByNumbers */

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

/* getRecordByUser Function */

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

/* createNewRecord Function */

describe('', () => {
    test('New Input Object should create a new Book Object', async () => {
        mockBooksDao.createNewBook
            .mockImplementation(object => object);

        const newBook = {
            title: 'The Diary of Anne Frank',
            author: 3,
            genre: 2,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        const result = await booksService.createNewBook(newBook);

        expect(newBook).not.toBeInstanceOf(Book);
        expect(result).toBeInstanceOf(Book);
    });
    test('Input ID value should not be pass test', async () => {
        mockBooksDao.createNewBook
            .mockImplementation(object => object);

        const newBook = {
            id: 23,
            title: 'The Diary of Anne Frank',
            author: 3,
            genre: 2,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        const result = await booksService.createNewBook(newBook);

        expect(result.id).not.toBe(newBook.id);
        expect(result.id).not.toBeTruthy();
    });
    test('Extra properties should not be able to pass', async () => {
        mockBooksDao.createNewBook
            .mockImplementation(object => object);

        const newBook = {
            title: 'The Diary of Anne Frank',
            author: 3,
            genre: 2,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1,
            publisher: 'Penguin Press'
        };

        const result = await booksService.createNewBook(newBook) as any;

        expect(result.publisher).not.toBeInstanceOf(Book);
        expect(result.publisher).not.toBeDefined();
    });
    test(`A '422' Error should return if no Genre Input is provided`, async () => {
        expect.assertions(1);

        mockBooksDao.createNewBook
            .mockImplementatin(() => ({}));
        
        const newBook = {
            title: 'Diary of Anne Frank',
            author: 3,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        try {
            await booksService.createNewBook(newBook);
            fail('booksService.createNewBook did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* patchRecord Function */

describe('', () => {
    test('Successfully Patch a Book Up', async () => {
        expect.assertions(1);

        mockBooksDao.patchBook
            .mockImplementation(() => ({}));

        const patchBook = {
            id: 13,
            title: 'The Power of Habits',
            genre: 17
        };

        try {
            await booksService.patchBook(patchBook);
            expect(result).toBeTruthy();
        } catch (error) {
            expect(error).toBeTruthy();
        }

    });
    test('Could not patch book up with no valid ID', async () => {
        expect.assertions(1);

        mockBooksDao.patchBook
            .mockImplementation(() => ({}));

        const patchBook = {
            title: 'The Power of Habits',
            genre: 17,
            author: 5
        };

        try {
            await booksService.patchBook(patchBook);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});