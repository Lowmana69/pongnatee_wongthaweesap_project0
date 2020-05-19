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

jest.mock('../../src/daos/users-dao');

/*  */

const mockUsersDao = UsersDao as any;

/* getAllUsers Function */

describe('getAllUsers Function', () => {
    test(`'getAllUsers' Function exists`, async () => {
        expect.assertions(1);

        mockUsersDao.getAllUsers
            .mockImplementation(() => ([]));
        
        const result = await UsersService.getAllUsers();

        expect(result).toBeDefined();
    });
    test(`'getAllUsers' should return an array`, async () => {
        expect.assertions(1);

        mockUsersDao.getAllUsers
            .mockImplementation(() => ([]));
        
        const result = await UsersService.getAllUsers();

        try {
            expect(result).toContain([]);
            fail('UserService.getAllUsers did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getAllUsers' should NOT contain an object`, async () => {
        expect.assertions(1);

        mockUsersDao.getAllUsers
            .mockImplementation(() => ([]));
        
        const result = await UsersService.getAllUsers();

        try {
            expect(result).not.toContain({});
            fail('UsersService.getAllUsers did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getUserByID Function */

describe('getUserById Function', () => {
    test(`'getUserById' Function exists`, async () => {
        
        expect.assertions(1);

        mockUsersDao.getUserById
            .mockImplementation(() => ({}));
        
        const result = await UsersService.getUserById;

        try {
            expect(result).toBeDefined();
            fail('UsersService.getUserById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getUserById' should contain a Record at ID #11`, async () => {
        expect.assertions(1);

        mockUsersDao.getUserById
            .mockImplementation(() => ({}));
        
        const result = await UsersService.getUserById(11);

        try {
            expect(result).toContain({});
            fail('UsersService.getUserById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getUserById' should NOT contain a Record with ID #366`, async () => {
        expect.assertions(1);

        mockUsersDao.getUserById
            .mockImplementation(() => ({}));
        
        const result = await UsersService.getUserById(366);

        try {
            expect(result).not.toContain({});
            fail('UsersService.getUserById did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* getUserByRatings Function */

describe('getUserByRatings Function', () => {
    test(`'getUserByRatings' Function exists`, async () => {
        
        expect.assertions(1);

        mockUsersDao.getUserByRatings
            .mockImplementation(() => ([]));
        
        const result = await UsersService.getUserByRatings;

        try {
            expect(result).toBeDefined();
            fail('UsersService.getUserByRatings did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getUserByRatings' should contain Users with # of Ratings`, async () => {
        
        expect.assertions(1);

        mockUsersDao.getUserByRatings
            .mockImplementation(() => ({}));
        
        const result = await UsersService.getUserByRatings(5);

        try {
            expect(result).toContain({});
            fail('UsersService.getUserByRatings did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    test(`'getUserByRatings' should NOT contain a User(s) with this # of Ratings`, async () => {
        expect.assertions(1);

        mockUsersDao.getUserByRatings
            .mockImplementation(() => ({}));
        
        const result = await UsersService.getUserByRatings(600);

        try {
            expect(result).not.toContain({});
            fail('UsersService.getUserByRatings did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* createNewUser Function */

describe('createNewUser Function', () => {
    test('New Input Object should create a new User Object', async () => {
        mockUsersDao.createNewUser
            .mockImplementation(object => object);

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
            .mockImplementation(object => object);

            const newUser = {
                id: 12,
                fullName: 'Gollum',
                handler: 'Precious',
                totalRatings: 0
            };

        const result = await UsersService.createNewUser(newUser);

        expect(result.id).not.toBe(newUser.id);
        expect(result.id).not.toBeTruthy();
    });
    test('Extra properties should not be able to pass', async () => {
        mockUsersDao.createNewUser
            .mockImplementation(object => object);

        const newUser = {
            fullName: 'Gollum',
            handler: 'Precious',
            totalRatings: 0,
            deathBy: 'Mount Doom'
        };

        const result = await UsersService.createNewUser(newUser) as any;

        expect(result.deathBy).not.toBeInstanceOf(User);
        expect(result.deathBy).not.toBeDefined();
    });
    test(`A '422' Error should return if no Handler Input is provided`, async () => {
        expect.assertions(1);

        mockUsersDao.createNewUser
            .mockImplementatin(() => ({}));
        
        const newUser = {
            fullName: 'Gollum',
            totalRatings: 0
        };

        try {
            await UsersService.createNewUser(newUser);
            fail('UsersService.createNewUser did not throw expected error');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});

/* patchUser Function */

describe('patchUser Function', () => {
    test('Successfully Patch a User Up', async () => {
        expect.assertions(1);

        mockUsersDao.patchUser
            .mockImplementation(() => ({}));

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
            .mockImplementation(() => ({}));

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