import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';
import { VIDEOS } from '@/data/videos';

export const metadata = {
    title: 'Videos | PLEUNTAH',
    description: 'Die neuesten YouTube-Videos und Formate von PLEUNTAH.',
};

export default function VideosPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionTitle title="Videos" subtitle="YouTube Content" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIDEOS.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
}
