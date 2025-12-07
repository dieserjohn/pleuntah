export interface Video {
    id: string;
    title: string;
    year: number;
    description: string;
    youtubeId: string; // ID for embed
}

export const VIDEOS: Video[] = [
    {
        id: 'rapper-erfolgsfans',
        title: "Rapper und ihre Erfolgsfans | Mero wird 'hops' genommen",
        year: 2024,
        description: "Eine kritische Auseinandersetzung mit Erfolgsfans im Deutschrap.",
        youtubeId: "dQw4w9WgXcQ", // Placeholder ID, replace with real if available or keep generic
    },
    {
        id: 'deutschrap-gut',
        title: "Als Deutschrap noch gut war...",
        year: 2023,
        description: "Ein nostalgischer Rückblick auf die goldene Ära.",
        youtubeId: "dQw4w9WgXcQ",
    },
    {
        id: '100-alben-1',
        title: "100 Deutschrap Alben kurz bewerten | Pt. 1/2",
        year: 2024,
        description: "Der erste Teil des großen Album-Rankings.",
        youtubeId: "dQw4w9WgXcQ",
    },
    {
        id: '100-alben-2',
        title: "100 Deutschrap Alben kurz bewerten | Pt. 2/2",
        year: 2024,
        description: "Das Finale des Album-Rankings.",
        youtubeId: "dQw4w9WgXcQ",
    },
    {
        id: 'geklaute-songs',
        title: "Rapper und ihre 'geklauten' Songs...",
        year: 2023,
        description: "Aufdeckung von Plagiaten und Inspirationen.",
        youtubeId: "dQw4w9WgXcQ",
    },
];
