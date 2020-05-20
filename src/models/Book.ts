/* Export The Book Class */

export class Book {
    id:             number;
    title:          string;
    author:         number;
    genre:          number;
    totalratings:   number;
    isavailable:    boolean;
    currentstatus:  number;
    
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
            obj.totalratings,
            obj.isavailable,
            obj.currentstatus
        );
        return book;
    }

    constructor(
        id: number,
        title: string,
        author: number,
        genre: number,
        totalratings: number,
        isavailable: boolean,
        currentstatus: number 
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.totalratings = totalratings;
        this.isavailable = isavailable;
        this.currentstatus = currentstatus;
    }
}

/* Export The BookRow Interface */

export interface BookRow {
    id:             number;
    title:          string;
    author:         number;
    genre:          number;
    totalratings:   number;
    isavailable:    boolean;
    currentstatus:  number;
}
