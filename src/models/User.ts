/* Export User Class */

export class User {
    id:                     number;
    fullName:               string;
    handler:                string;
    totalRatings:           number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: UserRow): User {
        const user = new User(
            obj.id,
            obj.fullName,
            obj.handler,
            obj.totalRatings
        );
        return user;
    }

    constructor(
    id: number,
    fullName: string,
    handler: string,
    totalRatings: number

    ) {
        this.id = id;
        this.fullName = fullName;
        this.handler = handler;
        this.totalRatings = totalRatings;
    }
}

/* Export UserRow Interface */

export interface UserRow {
    id:                     number;
    fullName:               string;
    handler:                string;
    totalRatings:           number;
}