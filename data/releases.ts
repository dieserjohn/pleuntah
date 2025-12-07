export type ReleaseType = 'album' | 'ep' | 'single';

export interface Release {
    id: string;
    title: string;
    type: ReleaseType;
    year: number;
    highlightTracks?: string[];
    coverImage?: string; // Placeholder for now
    links: {
        spotify?: string;
        appleMusic?: string;
        youtubeMusic?: string;
    };
}

export const RELEASES: Release[] = [
    // Albums
    {
        id: 'justin-2',
        title: 'Justin 2',
        type: 'album',
        year: 2024,
        highlightTracks: ["C'est la vie", "Scheitern", "Luxusprobleme"],
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    // EPs
    {
        id: 'pnth',
        title: 'PNTH.',
        type: 'ep',
        year: 2022,
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    {
        id: 'justin',
        title: 'justin',
        type: 'ep',
        year: 2021,
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    {
        id: 'der-beste',
        title: 'Der Beste',
        type: 'ep',
        year: 2020,
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    // Singles (Selected)
    {
        id: 'halloween-forever',
        title: 'Halloween Forever',
        type: 'single',
        year: 2025,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'freiheit',
        title: 'Freiheit',
        type: 'single',
        year: 2025,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'luxusprobleme',
        title: 'Luxusprobleme',
        type: 'single',
        year: 2024,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'halloween-3',
        title: 'Halloween 3',
        type: 'single',
        year: 2024,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'cest-la-vie',
        title: "C'est la vie",
        type: 'single',
        year: 2023,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'trennung',
        title: 'Trennung',
        type: 'single',
        year: 2022,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'marketingtrick',
        title: 'Marketingtrick',
        type: 'single',
        year: 2022,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'wie-gott-mich-bestraft',
        title: 'Wie Gott mich bestraft',
        type: 'single',
        year: 2021,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'introvertiert-und-arrogant',
        title: 'INTROVERTIERT UND ARROGANT',
        type: 'single',
        year: 2020,
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'suizid',
        title: 'Suizid',
        type: 'single',
        year: 2020, // Estimated
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
];

export const POPULAR_SONGS = [
    "Suizid",
    "INTROVERTIERT UND ARROGANT",
    "Hass",
    "Luxusprobleme",
    "Trennung"
];
