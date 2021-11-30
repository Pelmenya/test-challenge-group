export type CatFactResponse = {
    _id: string;
    _v: number;
    user: string;
    text: string;
    login: string;
    updatedAt: string;
    deleted: boolean;
    type: 'cat' | 'dog' | 'horse';
    status: {
        verified: boolean;
        feedback?:string;
        sentCount: number;
    }
};

export type CatFactsResponse = {
    facts: CatFactResponse[];
};

export type IDResponse = {
    id: number;
};

export type EmptyResponse = undefined;

export type ErrorResponse = Error;

export type EmptyRequest = undefined;
