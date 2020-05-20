/* Export User Class */

export class User {
    id:                     number;
    fullname:               string;
    handler:                string;
    totalratings:           number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: UserRow): User {
        const user = new User(
            obj.id,
            obj.fullname,
            obj.handler,
            obj.totalratings
        );
        return user;
    }

    constructor(
    id: number,
    fullname: string,
    handler: string,
    totalratings: number

    ) {
        this.id = id;
        this.fullname = fullname;
        this.handler = handler;
        this.totalratings = totalratings;
    }
}

/* Export UserRow Interface */

export interface UserRow {
    id:                     number;
    fullname:               string;
    handler:                string;
    totalratings:           number;
}