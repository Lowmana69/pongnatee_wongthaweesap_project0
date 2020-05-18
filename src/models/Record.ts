/* Export Rating Class */

export class Record {
    id: number;
    mediatitle: string;
    category: number;
    handler: number;
    recommendation: number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: RecordRow): Record {
        const record = new Record(
            obj.id,
            obj.mediatitle,
            obj.category,
            obj.handler,
            obj.recommendation
        );
        return record;
    }

    constructor(
    id: number,
    mediatitle: string,
    category: number,
    handler: number,
    recommendation: number
    ) {
        this.id = id;
        this.mediatitle = mediatitle;
        this.category = category;
        this.handler = handler;
        this.recommendation = recommendation;
    }
}

/* Export Rating Interface */

export interface RecordRow {
    id: number;
    mediatitle: string;
    category: number;
    handler: number;
    recommendation: number;
}