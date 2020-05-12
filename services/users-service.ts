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

export function getUserByRatings (ratings: number) Promise<User> {}

/* Create / Post A New User To The Database */

export function createNewUser (user: any): Promise<User> {}

/* Update (Partial) / Patch A Current User */

export function patchUser (input: any): Promise<User> {}