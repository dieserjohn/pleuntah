import { Video } from '@/data/videos';

interface VideoCardProps {
    video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl bg-pleuntah-card border border-white/5 hover:border-pleuntah-neon/30 transition-all duration-300">
            <div className="relative aspect-video w-full bg-black">
                {/* In a real app, you might use a thumbnail image here before loading the iframe, or use the iframe directly if lazy loaded */}
                <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-pleuntah-neon transition-colors">
                    {video.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-2 flex-1">
                    {video.description}
                </p>
                <div className="mt-4 text-xs text-gray-600">
                    {video.year}
                </div>
            </div>
        </div>
    );
}
