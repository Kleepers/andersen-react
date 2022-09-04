export interface CardInterface {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: LocationInterface;
    image: string;
    episode: Array<String>;
    url: string;
    created: string;
}

export interface LocationInterface {
    name: string;
    url: string;
}

export interface InfoInterface {
    count: number;
    pages: number;
    next: string;
}
