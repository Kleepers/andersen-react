export interface Card {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: Location;
    image: string;
    episode: Array<String>;
    url: string;
    created: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface Info {
    count: number;
    pages: number;
    next: string;
}
