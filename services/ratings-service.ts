/* Import Modules */

import { Rating } from '../models/Rating';
import * as ratingsDao from '../daos/ratings-dao';

 /* Read / Retrieve All Ratings From The Database */

export function getAllRatings (): Promise<Rating[]> {
    return ratingsDao/getAllRatings();
}

/* Read / Retrieve A Single Rating By ID */

export function getRatingById (id: number): Promise<Rating> {
    return ratingsDao.getRatingById(id);
}

/* Read / Retrieve All Ratings By Category */

export function getRatingByCategory (category: string): Promise<Rating> {}

/* Read / Retrieve Ratings By Total Numbers */

export function getRatingByNumbers (numbers: number): Promise<Rating> {}

/* Read / Retrieve All Ratings By A Single User */

export function getRatingByUser (handler: string): Promise<Rating> {}

 /* Create / Post A New Rating To The Database */

export function createNewRating (rating: any): Promise<Rating> {}

/* Update (Partial) / Patch A Current Rating From The Database */

export function patchRating (input: any): Promise<Rating> {}