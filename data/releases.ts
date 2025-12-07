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
        coverImage: '/covers/suizid.jpg', // Placeholder (reusing Suizid style or generic)
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
        coverImage: '/covers/hass.jpg', // Placeholder
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    {
        id: 'justin',
        title: 'justin',
        type: 'ep',
        year: 2021,
        coverImage: '/covers/introvertiert.jpg', // Placeholder
        links: {
            spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g",
        },
    },
    {
        id: 'der-beste',
        title: 'Der Beste',
        type: 'ep',
        year: 2020,
        coverImage: '/covers/suizid.jpg', // Placeholder
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
        coverImage: '/covers/halloween-forever.jpg',
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'freiheit',
        title: 'Freiheit',
        type: 'single',
        year: 2025,
        coverImage: '/covers/suizid.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'luxusprobleme',
        title: 'Luxusprobleme',
        type: 'single',
        year: 2024,
        coverImage: '/covers/suizid.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'halloween-party',
        title: 'Halloween Party',
        type: 'single',
        year: 2024,
        coverImage: '/covers/halloween-party.jpg',
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'halloween-3',
        title: 'Halloween 3',
        type: 'single',
        year: 2024,
        coverImage: '/covers/halloween-forever.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'cest-la-vie',
        title: "C'est la vie",
        type: 'single',
        year: 2023,
        coverImage: '/covers/suizid.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'trennung',
        title: 'Trennung',
        type: 'single',
        year: 2022,
        coverImage: '/covers/hass.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'marketingtrick',
        title: 'Marketingtrick',
        type: 'single',
        year: 2022,
        coverImage: '/covers/hass.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'wie-gott-mich-bestraft',
        title: 'Wie Gott mich bestraft',
        type: 'single',
        year: 2021,
        coverImage: '/covers/introvertiert.jpg', // Placeholder
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'introvertiert-und-arrogant',
        title: 'INTROVERTIERT UND ARROGANT',
        type: 'single',
        year: 2020,
        coverImage: '/covers/introvertiert.jpg',
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'suizid',
        title: 'Suizid',
        type: 'single',
        year: 2020, // Estimated
        coverImage: '/covers/suizid.jpg',
        links: { spotify: "https://open.spotify.com/artist/1clS0Ijkk1t2nJ370axf0g" },
    },
    {
        id: 'hass',
        title: 'Hass',
        type: 'single',
        year: 2020,
        coverImage: '/covers/hass.jpg',
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
