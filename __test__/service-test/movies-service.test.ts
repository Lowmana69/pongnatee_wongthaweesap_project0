/* Import Modules */

import * as MoviesService from '../../src/services/movies-service';
import * as MoviesDao from '../../src/daos/movies-dao';
import { Movie } from '../../src/models/Movie';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');

/* Mock */

jest.mock('../../src/daos/movies-dao');

/*  */

const mockMoviesDao = MoviesDao as any;

/* getAllMovies Function */

describe('getAllMovies Function', () => {
    test(`'getAllMovies Function exists`, () => {
        expect.assertions(1);

        mockMoviesDao.getAllMovies
            .mockImplementation(() => ([]));
        
        const result = await MoviesService.getAllMovies();

        expect(result).toBeDefined();
    });
    test(`'getAllMovies' should return an array`, () => {
        expect.assertions(1);

        mockMoviesDao.getAllMovies
            .mockImplementation(() => ([]));
        
        const result = await MoviesService.getAllMovies();

        try {
            expect(result).toContain([]);
            fail('MoviesService.getAllMovies did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getAllMovies' should NOT contain an object`, () => {
        expect.assertions(1);

        mockMoviesDao.getAllMovies
            .mockImplementation(() => ([]));
        
        const result = await MoviesService.getAllMovies();

        try {
            expect(result).not.toContain({});
            fail('MoviesService.getAllMovies did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getMovieByID Function */

describe('getMovieById Function', () => {
    test(`'getMovieById' Function exists`, async () => {
        
        expect.assertions(1);

        mockMoviesDao.getMovieById
            .mockImplementation(() => ({}));
        
        const result = await MoviesService.getMovieById;

        try {
            expect(result).toBeDefined();
            fail('MoviesService.getMovieById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getMovieById' should contain a Movie at ID #11`, async () => {
        expect.assertions(1);

        mockMoviesDao.getMovieById
            .mockImplementation(() => ({}));
        
        const result = await MoviesService.getMovieById(11);

        try {
            expect(result).toContain({});
            fail('MoviesService.getMovieById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getMovieById' should NOT contain a Movie with ID #366`, async () => {
        expect.assertions(1);

        mockMoviesDao.getMoviekById
            .mockImplementation(() => ({}));
        
        const result = await MoviesService.getMovieById(366);

        try {
            expect(result).not.toContain({});
            fail('MoviesService.getMovieById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getMovieByGenre Function */

describe('getMovieByGenre', () => {
    test(`'getMovieByGenre' Function exists`, async () => {
        
        expect.assertions(1);

        mockMoviesDao.getMovieByGenre
            .mockImplementation(() => ([]));
        
        const result = await MoviesService.getMovieByGenre;

        try {
            expect(result).toBeDefined();
            fail('MoviesService.getMovieByGenre did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getMovieByGenre' should contain a Movie at Genre #5`, async () => {
        
        expect.assertions(1);

        mockMoviesDao.getMovieByGenre
            .mockImplementation(() => ({}));
        
        const result = await MoviesService.getMovieByGenre(5);

        try {
            expect(result).toContain({});
            fail('MoviesService.getMovieByGenre did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getMovieByGenre' should NOT contain a Movie at Genre #600`, async () => {
        expect.assertions(1);

        mockMoviesDao.getMovieByGenre
            .mockImplementation(() => ({}));
        
        const result = await MoviesService.getMovieByGenre(600);

        try {
            expect(result).not.toContain({});
            fail('MvoiesService.getMovieByGenre did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getMovieByFirstLetter Function */



/* createNewMovie Function */

describe('createNewMovie', () => {
    test('New Input Object should create a new Movie Object', async () => {
        mockMoviesDao.createNewMovie
            .mockImplementation(object => object);

        const newMovie = {
            title: 'Diary of Tootsie',
            yearRelease: 7,
            genre: 4,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        const result = await MoviesService.createNewMovie(newMovie);

        expect(newMovie).not.toBeInstanceOf(Movie);
        expect(result).toBeInstanceOf(Movie);
    });
    test('Input ID value should not be pass test', async () => {
        mockMoviesDao.createNewMovie
            .mockImplementation(object => object);

        const newMovie = {
            id: 23,
            title: 'Diary of Tootsie',
            yearRelease: 7,
            genre: 4,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        const result = await MoviesService.createNewMovie(newMovie);

        expect(result.id).not.toBe(newMovie.id);
        expect(result.id).not.toBeTruthy();
    });
    test('Extra properties should not be able to pass', async () => {
        mockMoviesDao.createNewMovie
            .mockImplementation(object => object);

        const newMovie = {
            title: 'Diary of Tootsie',
            yearRelease: 7,
            genre: 4,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1,
            origin: 'Thailand'
        };

        const result = await MoviesService.createNewMovie(newMovie) as any;

        expect(result.origin).not.toBeInstanceOf(Movie);
        expect(result.origin).not.toBeDefined();
    });
    test(`A '422' Error should return if no Genre Input is provided`, async () => {
        expect.assertions(1);

        mockMoviesDao.createNewMovie
            .mockImplementatin(() => ({}));
        
        const newMovie = {
            title: 'Diary of Tootsie',
            yearRelease: 3,
            totalRatings: 0,
            isAvailable: true,
            currentStatus: 1
        };

        try {
            await MoviesService.createNewMovie(newMovie);
            fail('MoviesService.createNewMovie did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* patchMovie Function */

describe('patchMovie Function', () => {
    test('Successfully Patch a Movie Up', async () => {
        expect.assertions(1);

        mockMoviesDao.patchMovie
            .mockImplementation(() => ({}));

        const patchMovie = {
            id: 13,
            title: 'Jaws',
            genre: 11
        };

        try {
            await MoviesService.patchMovie(patchMovie);
            expect(patchMovie).toBeTruthy();
        } catch (error) {
            expect(error).toBeTruthy();
        }

    });
    test('Could not patch movie up with no valid ID', async () => {
        expect.assertions(1);

        mockMoviesDao.patchMovie
            .mockImplementation(() => ({}));

        const patchMovie = {
            title: 'Jaws',
            genre: 17,
            yearRelease: 5
        };

        try {
            await MoviesService.patchMovie(patchMovie);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});