/* Export Rating Class */

export class Rating {
    id: number;
    category: number;
    handler: number;
    totalRatings: number;
    recommendation: number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: RatingRow): Rating {
        const rating = new Rating(
            obj.id,
            obj.category,
            obj.handler,
            obj.totalRatings,
            obj.recommendation
        );
        return rating;
    }

    constructor(
    id: number,
    category: number,
    handler: number,
    totalRatings: number,
    recommendation: number
    ) {
        this.id = id;
        this.category = category;
        this.handler = handler;
        this.totalRatings = totalRatings;
        this.recommendation = recommendation;
    }
}

/* Export Rating Interface */

export interface RatingRow {
    id: number;
    category: number;
    handler: number;
    totalRatings: number;
    recommendation: number;
}