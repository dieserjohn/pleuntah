import { Release } from '@/data/releases';
import Link from 'next/link';

interface ReleaseCardProps {
    release: Release;
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-pleuntah-card border border-white/5 hover:border-pleuntah-purple/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <div className="aspect-square w-full bg-neutral-800 relative">
                {release.coverImage ? (
                    <img
                        src={release.coverImage}
                        alt={release.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold text-2xl group-hover:text-pleuntah-purple transition-colors">
                        {release.title[0]}
                    </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                    {release.links.spotify && (
                        <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#1DB954] text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Spotify
                        </a>
                    )}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-white truncate group-hover:text-pleuntah-neon transition-colors">{release.title}</h3>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-400 capitalize">{release.type}</span>
                    <span className="text-sm text-gray-500">{release.year}</span>
                </div>
                {release.highlightTracks && (
                    <div className="mt-3 text-xs text-gray-500">
                        <span className="text-pleuntah-purple">Hits:</span> {release.highlightTracks.join(", ")}
                    </div>
                )}
            </div>
        </div>
    );
}
