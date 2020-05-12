/* Export Movie Class */

export class Movie {
    id:             number;
    title:          string;
    yearRelease:    number;
    genre:          number;
    totalRatings:   number;
    isAvailable:    boolean;
    currentStatus:  number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: MovieRow): Movie {
        const movie = new Movie(
            obj.id,
            obj.title, 
            obj.yearRelease, 
            obj.genre,
            obj.totalRatings,
            obj.isAvailable,
            obj.currentStatus
        );
        return movie;
    }

    constructor(
    id: number,
    title: string,
    yearRelease: number,
    genre: number,
    totalRatings: number,
    isAvailable: boolean,
    currentStatus: number
    ) {
        this.id = id;
        this.title = title;
        this.yearRelease = yearRelease;
        this.genre = genre;
        this.totalRatings = totalRatings;
        this.isAvailable = isAvailable;
        this.currentStatus = currentStatus;
    }
}

/* Export Movie Interface */

export interface MovieRow {
    id:             number;
    title:          string;
    yearRelease:    number;
    genre:          number;
    totalRatings:   number;
    isAvailable:    boolean;
    currentStatus:  number;
}