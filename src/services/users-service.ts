/* Import Modules */

import { User } from '../models/User';
import * as usersDao from '../daos/users-dao';

/* Read / Retrieve All Users From Database */

export function getAllUsers (): Promise<User[]> {
    return usersDao.getAllUsers();
}

/* Read / Retrieve A Single User By ID */

export function getUserById (id: number): Promise<User> {
    return usersDao.getUserById(id);
}

/* Read / Retrieve Users By Number of Ratings */

export function getUserByRatings (totalratings: number): Promise<User> {
    return usersDao.getUserByRatings(totalratings);
}

/* Create / Post A New User To The Database */

export function createNewUser (user: any): Promise<User> {
    const newUser = new User (
        undefined, user.fulllName,
        user.handler, user.totalRatings
    );

    const params = (
        user.fulllName && user.handler && 
        user.totalRatings
    );

    if (params) {
        return usersDao.createNewUser(newUser);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

/* Update (Partial) / Patch A Current User */

export function patchUser (input: any): Promise<User> {
    const user = new User (
        input.id, input.fullName,
        input.handler, input.totalRatings
    );

    if (!user.id) {
        throw new Error('400');
    }

    return usersDao.patchUser(user);
}