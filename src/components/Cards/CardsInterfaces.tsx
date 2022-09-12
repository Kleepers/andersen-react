export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: Location;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
    origin: Origin;
}

export interface Location {
    name: string;
    url: string;
}

interface Origin {
    name: string;
    url: string;
}

export interface Info {
    count: number | null;
    next: string | null;
    pages: number;
    prev: string | null;

}

export interface FetchedData {
    info: Info;
    results: Array<Character> | null;
}