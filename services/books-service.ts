/* Import Modules */

import { Book } from '../models/Book';
import * as booksDao from '../daos/books-dao';

/* Read / Retrieve All Books From THe Database */

export function getAllBooks (): Promise<Book[]> {
    return booksDao.getAllBooks();
}

/* Read / Retrieve A Single Book By ID */

export function getBookById (id: number): Promise<Book> {
    return booksDao.getBookById(id);
}

/* Read / Retrieve Books By Genre */

export function getBookByGenre (genre: string): Promise<Book> {}

/* Read / Retrieve Books By First Letter of Title */

export function getBookByFirstLetter (title: string): Promise<Book> {}

/* Read / Retrieve Books By Author */

export function getBookByAuthor (author: string): Promise<Book> {}

/* Create / Post A New Book To The Database */

export function createNewBook (user: any): Promise<Book> {}

/* Update (Partial) / Patch A Book From The Database */

export function patchBook (input: any): Promise<Book> {}