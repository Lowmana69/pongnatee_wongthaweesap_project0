/* Import Modules */

import { db } from '../daos/database';
import { Book, BookRow } from '../models/Book';

/* Read / Retrieve All Books From The Database */

/**
 * [getAllBooks description]
 *
 * @return  {Promise<Book>[]}  [return description]
 */

export function getAllBooks(): Promise<Book[]> {
    const sql = '';

    return db.query<BookRow>(sql, []).then(result => {
        const rows: BookRow[] = result.rows;

        const book: Book[] = rows.map(row => Book.from(row));
        return book;
    });
}

/* Read / Retrieve A Single Book By ID */

export function getBookById (id: number): Promise<Book> {
    const sql = '';
    return db.query<BookRow>(sql, [id])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Read / Retrieve Book Titles By Genre */

export function getBookByGenre (genre: number): Promise<Book> {
    const sql = '';
    return db.query<BookRow>(sql, [genre])
        .then(result => result.rows.map(row => Book.from(row))[0]);

}

/* Read / Retrieve Book Title(s) By First Letter */

export function getBookByFirstLetter (title: string): Promise<Book> {
    const sql = '';
    return db.query<BookRow>(sql, [title])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Read / Retrieve Book Titles By Auther */

export function getBookByAuthor (author: number): Promise<Book>{
    const sql = '';
    return db.query<BookRow>(sql, [author])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Create / Post A New book To The Database */

export function createNewBook (book: Book): Promise<Book> {
    const sql = '';
    const params = [book.title, book.author, book.genre,
        book.totalRatings, book.isAvailable, book.currentStatus];
    return db.query<BookRow>(sql, params)
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Update (Partial) / Patch A Current Book */

export function patchBook (book: Book): Promise<Book> {
    const sql = '';
    const params = [book.title, book.author, book.genre,
        book.totalRatings, book.isAvailable, book.currentStatus];
    return db.query<BookRow>(sql, params)
        .then(result => result.rows.map(row => Book.from(row))[0]);
}
