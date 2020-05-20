/* Import Modules */

import * as UsersService from '../../src/services/users-service';
import * as UsersDao from '../../src/daos/users-dao';
import { User } from '../../src/models/User';

/*  */

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initalized...');
const closeDatabase = () => console.log('Database Closed...');
/* Mock */

jest.mock('../../src/daos/users-dao.ts');

/*  */

const mockUsersDao = UsersDao as any;

/* getAllUsers Function */

describe('getAllUsers Function', () => {
    test(`'getAllUsers' Function exists`, async () => {
        expect.assertions(1);

        mockUsersDao.getAllUsers
            .mockImplementation( async () => ([]));
        
        const result = await UsersService.getAllUsers();

        expect(result).toBeDefined();
    });
    test(`'getAllUsers' should return an array`, async () => {

        mockUsersDao.getAllUsers
            .mockImplementation( async () => ([]));
        
        const result = await UsersService.getAllUsers();

        expect(result).toBeTruthy();
    });
    test(`'getAllUsers' should NOT contain an object`, async () => {

        mockUsersDao.getAllUsers
            .mockImplementation( async () => ([]));
        
        const result = await UsersService.getAllUsers();

        expect(result).not.toBeFalsy();
           
    });
});

/* getUserByID Function */

describe('getUserById Function', () => {
    test(`'getUserById' Function exists`, async () => {
        
        expect.assertions(1);

        mockUsersDao.getUserById
            .mockImplementation( async () => ({}));
        
        const result = await UsersService.getUserById;

        expect(result).toBeDefined();
          
    });
    test(`'getUserById' should contain a Record at ID #44`, async () => {

        mockUsersDao.getUserById
            .mockImplementation( async () => ({}));
        
        const result = await UsersService.getUserById(44);

        expect(result).toBeTruthy();
        
    });
    test(`'getUserById' should NOT contain a Record with ID #366`, async () => {

        mockUsersDao.getUserById
            .mockImplementation( async () => ({}));
        
        const result = await UsersService.getUserById(366);

        expect(result).not.toBeFalsy();
    
       
    });
});

/* getUserByRatings Function */

describe('getUserByRatings Function', () => {
    test(`'getUserByRatings' Function exists`, async () => {
        
        expect.assertions(1);

        mockUsersDao.getUserByRatings
            .mockImplementation( async () => ([]));
        
        const result = await UsersService.getUserByRatings;

        expect(result).toBeDefined();
        
    });
    test(`'getUserByRatings' should contain Users with # of Ratings`, async () => {

        mockUsersDao.getUserByRatings
            .mockImplementation( async () => ({}));
        
        const result = await UsersService.getUserByRatings(5);

        expect(result).toBeTruthy();

    });
    test(`'getUserByRatings' should NOT contain a User(s) with this # of Ratings`, async () => {

        mockUsersDao.getUserByRatings
            .mockImplementation( async () => ({}));
        
        const result = await UsersService.getUserByRatings(600);

        expect(result).not.toBeFalsy();
    });
});

/* createNewUser Function */

describe('createNewUser Function', () => {
    test('New Input Object should create a new User Object', async () => {
        mockUsersDao.createNewUser
            .mockImplementation( async () => ({}));

        const newUser = {
            fullName: 'Gollum',
            handler: 'Precious',
            totalRatings: 0
        };

        const result = await UsersService.createNewUser(newUser);

        expect(newUser).not.toBeInstanceOf(User);
        expect(result).toBeInstanceOf(User);
    });
    test('Input ID value should not be pass test', async () => {
        mockUsersDao.createNewUser
            .mockImplementation( async () => ({}));

            const newUser = {
                id: 12,
                fullName: 'Gollum',
                handler: 'Precious',
                totalRatings: '0'
            };

        const result = await UsersService.createNewUser(newUser);

        expect(result.id).not.toBe(newUser.id);
    });
    test('Extra properties should not be able to pass', async () => {
        mockUsersDao.createNewUser
            .mockImplementation( async () => ({}));

        const newUser = {
            fullName: 'Gollum',
            handler: 'Precious',
            totalRatings: 0,
            deathBy: 'Mount Doom'
        };

        const result = await UsersService.createNewUser(newUser) as any;

        expect(result.deathBy).not.toBeDefined();
    });
    test(`A '422' Error should return if no Handler Input is provided`, async () => {
        expect.assertions(1);

        mockUsersDao.createNewUser
            .mockImplementation( async () => ({}));
        
        const newUser = {
            fullName: 'Gollum',
            totalRatings: 0
        };

        try {
            await UsersService.createNewUser(newUser);
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});

/* patchUser Function */

describe('patchUser Function', () => {
    test('Successfully Patch a User Up', async () => {
        expect.assertions(1);

        mockUsersDao.patchUser
            .mockImplementation( async () => ({}));

        const patchUser = {
            id: 13,
            title: 'Gollum',
            handler: 'MyPrecious'
        };

        try {
            await UsersService.patchUser(patchUser);
            expect(patchUser).toBeTruthy();
        } catch (error) {
            expect(error).toBeTruthy();
        }

    });
    test('Could not patch user up with no valid ID', async () => {
        expect.assertions(1);

        mockUsersDao.patchUser
            .mockImplementation( async () => ({}));

        const patchUser = {
            fullName: 'Gollum',
            handler: 'MyPrecious',
            totalRatings: 0
        };

        try {
            await UsersService.patchUser(patchUser);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});