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

export function getBookByGenre (genre: number): Promise<Book[]> {
    return booksDao.getBookByGenre(genre);
}

/* Read / Retrieve Books By First Letter of Title */

export function getBookByFirstLetter (title: string): Promise<Book> {
    return booksDao.getBookByFirstLetter(title);
}

/* Read / Retrieve Books By Author */

export function getBookByAuthor (author: number): Promise<Book[]> {
    return booksDao.getBookByAuthor(author);
}

/* Create / Post A New Book To The Database */

export function createNewBook (book: any): Promise<Book> {
    const newBook = new Book(
        undefined, book.title, book.author,
        book.genre, book.totalRatings, 
        book.currentStatus, book.isAvailable
    );

    const params = (book.title && book.author &&
        book.genre && book.totalRatings && 
        book.currentStatus && book.isAvailable)
    
    if (params) {
        return booksDao.createNewBook(newBook);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

/* Update (Partial) / Patch A Book From The Database */

export function patchBook (input: any): Promise<Book> {
    const book = new Book (
        input.id, input.title,
        input.author, input.genre,
        input.totalRatings, input.isAvailable,
        input.currentStatus
    );

    if (!book.id) {
        throw new Error('400');
    }

    return booksDao.patchBook(book);
}