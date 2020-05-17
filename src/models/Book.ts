/* Export The Book Class */

export class Book {
    id:             number;
    title:          string;
    author:         number;
    genre:          number;
    totalRatings:   number;
    isAvailable:    boolean;
    currentStatus:  number;
    
    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: BookRow): Book {
        const book = new Book(
            obj.id,
            obj.title, 
            obj.author, 
            obj.genre,
            obj.totalRatings,
            obj.isAvailable,
            obj.currentStatus
        );
        return book;
    }

    constructor(
        id: number,
        title: string,
        author: number,
        genre: number,
        totalRatings: number,
        isAvailable: boolean,
        currentStatus: number 
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.totalRatings = totalRatings;
        this.isAvailable = isAvailable;
        this.currentStatus = currentStatus;
    }
}

/* Export The BookRow Interface */

export interface BookRow {
    id:             number;
    title:          string;
    author:         number;
    genre:          number;
    totalRatings:   number;
    isAvailable:    boolean;
    currentStatus:  number;
}
