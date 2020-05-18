/* Import Modules */

import { db } from '../daos/database';
import { Book, BookRow } from '../../src/models/Book';

/* Read / Retrieve All Books From The Database */

/**
 * [getAllBooks description]
 *
 * @return  {Promise<Book>[]}  [return description]
 */

export function getAllBooks(): Promise<Book[]> {
   
    const sql = 'SELECT * FROM books';

    return db.query<BookRow>(sql, []).then(result => {
        const rows: BookRow[] = result.rows;

        const book: Book[] = rows.map(row => Book.from(row));
        return book;
    });
}

/* Read / Retrieve A Single Book By ID */

export function getBookById (id: number): Promise<Book> {
    
    const sql = 'SELECT * FROM books WHERE id = $1';
    
    return db.query<BookRow>(sql, [id])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Read / Retrieve Book Titles By Genre */

export function getBookByGenre (genre: number): Promise<Book> {
    
    const sql = 'SELECT * FROM books WHERE genre = $1';
    
    return db.query<BookRow>(sql, [genre])
        .then(result => result.rows.map(row => Book.from(row))[0]);

}

/* Read / Retrieve Book Title(s) By First Letter */

export function getBookByFirstLetter (title: string): Promise<Book> {
    
    const sql = `SELECT * FROM books WHERE title LIKE '%%'`;
    
    return db.query<BookRow>(sql, [title])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Read / Retrieve Book Titles By Auther */

export function getBookByAuthor (author: number): Promise<Book>{
   
    const sql = 'SELECT * FROM books WHERE author = $1';
    
    return db.query<BookRow>(sql, [author])
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Create / Post A New book To The Database */

export function createNewBook (book: Book): Promise<Book> {
    const sql = `INSERT INTO books (title, author, genre, totalratings, isavailable, currentstatus) VALUES
	($1, $2, $3, $4, $5, $6) RETURNING *`;
    
    const params = [book.title, book.author, book.genre,
        book.totalRatings, book.isAvailable, book.currentStatus];
    
        return db.query<BookRow>(sql, params)
        .then(result => result.rows.map(row => Book.from(row))[0]);
}

/* Update (Partial) / Patch A Current Book */

export function patchBook (book: Book): Promise<Book> {
    
    const sql = `UPDATE books SET title = COALESCE($1, title), \ 
        author = COALESCE($2, author), genre = COALESCE($3, genre), \
        totalratings = COALESCE($4, totalratings), isavailable = COALESCE($5, isavailable) \
        currentstatus = COALESCE($6, currentstatus) WHERE id = $7 RETURNING *`;
    
    const params = [book.title, book.author, book.genre,
        book.totalRatings, book.isAvailable, book.currentStatus];
    
    return db.query<BookRow>(sql, params)
        .then(result => result.rows.map(row => Book.from(row))[0]);
}
