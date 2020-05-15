/* Import Modules */

import { Record } from '../models/Record';
import * as recordsDao from '../daos/records-dao';

 /* Read / Retrieve All Records From The Database */

export function getAllRecords (): Promise<Record[]> {
    return recordsDao/getAllRecords();
}

/* Read / Retrieve A Single Record By ID */

export function getRecordById (id: number): Promise<Record> {
    return recordsDao.getRecordById(id);
}

/* Read / Retrieve All Records By Category */

export function getRecordsByCategory (category: string): Promise<Record> {}

/* Read / Retrieve Records By Total Numbers */

export function getRatingsByNumbers (numbers: number): Promise<Record> {}

/* Read / Retrieve All Records By A Single User */

export function getRecordsByUser (handler: string): Promise<Record> {}

 /* Create / Post A New Record To The Database */

export function createNewRecord (rating: any): Promise<Record> {}

/* Update (Partial) / Patch A Current Record From The Database */

export function patchRecord (input: any): Promise<Record> {}