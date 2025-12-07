'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ReleaseCard from '@/components/ReleaseCard';
import { RELEASES, ReleaseType } from '@/data/releases';

export default function MusicPage() {
    const [filter, setFilter] = useState<ReleaseType | 'all'>('all');

    const filteredReleases = filter === 'all'
        ? RELEASES
        : RELEASES.filter(r => r.type === filter);

    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Diskografie" subtitle="Alben, EPs und Singles" />

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 mb-10">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'all'
                            ? 'bg-pleuntah-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                            : 'bg-pleuntah-card text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    Alle
                </button>
                <button
                    onClick={() => setFilter('album')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'album'
                            ? 'bg-pleuntah-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                            : 'bg-pleuntah-card text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    Alben
                </button>
                <button
                    onClick={() => setFilter('ep')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'ep'
                            ? 'bg-pleuntah-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                            : 'bg-pleuntah-card text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    EPs
                </button>
                <button
                    onClick={() => setFilter('single')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'single'
                            ? 'bg-pleuntah-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                            : 'bg-pleuntah-card text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    Singles
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredReleases.map((release) => (
                    <ReleaseCard key={release.id} release={release} />
                ))}
            </div>
        </div>
    );
}
