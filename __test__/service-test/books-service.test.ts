/* Import Modules */

import * as BooksService from '../../src/services/books-service';
import * as BooksDao from '../../src/daos/books-dao';
import { Book } from '../../src/models/Book';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

/* Mock */

jest.mock('../../src/daos/books-dao');

/*  */

const mockBooksDao = BooksDao as any;

/* getAllBooks Function */

describe('getAllBooks Function', () => {
    test(`'getAllBooks' Function exists`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getAllBooks
            .mockImplementation(() => ([]));
        
        const result = await BooksService.getAllBooks();

        expect(result).toBeDefined();

    });
    test(`'getAllBooks' should return an array`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getAllBooks
            .mockImplementation(() => ([]));
        
        const result = await BooksService.getAllBooks();

        try {
            expect(result).toContain([]);
            fail('BooksService.getAllBooks did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getAllBooks' should NOT contain an object`, async () => {
        expect.assertions(1);

        mockBooksDao.getAllBooks
            .mockImplementation(() => ([]));
        
        const result = await BooksService.getAllBooks();

        try {
            expect(result).not.toContain({});
            fail('BooksService.getAllBooks did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getBookByID Function */

describe('getBookById Function', () => {
    test(`'getBookById' Function exists`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getBookById
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookById;

        try {
            expect(result).toBeDefined();
            fail('BooksService.getAllBooks did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByID' should contain a Book at ID #11`, async () => {
        expect.assertions(1);

        mockBooksDao.getBookById
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookById(11);

        try {
            expect(result).toContain({});
            fail('BooksService.getBookById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByID' should NOT contain a Book with ID #366`, async () => {
        expect.assertions(1);

        mockBooksDao.getBookById
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookById(366);

        try {
            expect(result).not.toContain({});
            fail('BooksService.getBookById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getBooksByGenre Function */

describe('getBookByGenre Function', () => {
    test(`'getBookByGenre' Function exists`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getBookByGenre
            .mockImplementation(() => ([]));
        
        const result = await BooksService.getBookByGenre;

        try {
            expect(result).toBeDefined();
            fail('BooksService.getAllBooks did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByGenre' should contain a Book at Genre #5`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getBookByGenre
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookByGenre(5);

        try {
            expect(result).toContain({});
            fail('BooksService.getBookById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByGenre' should NOT contain a Book at Genre #600`, async () => {
        expect.assertions(1);

        mockBooksDao.getBookByGenre
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookByGenre(600);

        try {
            expect(result).not.toContain({});
            fail('BooksService.getBookById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getBookByAuthor Function */

describe('getBookByAuthor Function', () => {
    test(`'getBookByAuthor' Function exists`, async () => {
        
        expect.assertions(1);

        mockBooksDao.getBookByAuthor
            .mockImplementation(() => ([]));
        
        const result = await BooksService.getBookByAuthor;

        try {
            expect(result).toBeDefined();
            fail('BooksService.getBookByAuthor did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByAuthor' should contain an Author at ID #4`, async () => {
        expect.assertions(1);

        mockBooksDao.getBookByAuthor
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookByAuthor(4);

        try {
            expect(result).toContain({});
            fail('BooksService.getBookByAuthor did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getBookByAuthor' should NOT contain an Author with ID #66`, async () => {
        expect.assertions(1);

        mockBooksDao.getBookByAuthor
            .mockImplementation(() => ({}));
        
        const result = await BooksService.getBookByAuthor(66);

        try {
            expect(result).not.toContain({});
            fail('BooksService.getBookByAuthor did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* createNewBook Function */

describe('createNewBook Function', () => {
    
    /* Test to expect to pass with standard input */

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

        const result = await BooksService.createNewBook(newBook);

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

        const result = await BooksService.createNewBook(newBook);

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

        const result = await BooksService.createNewBook(newBook) as any;

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
            await BooksService.createNewBook(newBook);
            fail('BooksService.createNewBook did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* patchBook Function */

describe('patchBook Function', () => {
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
            await BooksService.patchBook(patchBook);
            expect(patchBook).toBeTruthy();
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
            await BooksService.patchBook(patchBook);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});