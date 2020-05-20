/* Export Movie Class */

export class Movie {
    id:             number;
    title:          string;
    yearrelease:    number;
    genre:          number;
    totalratings:   number;
    isavailable:    boolean;
    currentstatus:  number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: MovieRow): Movie {
        const movie = new Movie(
            obj.id,
            obj.title,
            obj.yearrelease,
            obj.genre,
            obj.totalratings,
            obj.isavailable,
            obj.currentstatus
        );
        return movie;
    }

    constructor(
    id: number,
    title: string,
    yearrelease: number,
    genre: number,
    totalratings: number,
    isavailable: boolean,
    currentstatus: number
    ) {
        this.id = id;
        this.title = title;
        this.yearrelease = yearrelease;
        this.genre = genre;
        this.totalratings = totalratings;
        this.isavailable = isavailable;
        this.currentstatus = currentstatus;
    }
}

/* Export Movie Interface */

export interface MovieRow {
    id:             number;
    title:          string;
    yearrelease:    number;
    genre:          number;
    totalratings:   number;
    isavailable:    boolean;
    currentstatus:  number;
}