import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ReleaseCard from "@/components/ReleaseCard";
import VideoCard from "@/components/VideoCard";
import { RELEASES, POPULAR_SONGS } from "@/data/releases";
import { VIDEOS } from "@/data/videos";
import { SOCIALS } from "@/data/socials";

export default function Home() {
  // Filter latest releases (e.g., top 4)
  const latestReleases = RELEASES.slice(0, 4);

  // Filter popular videos (e.g., top 3)
  const popularVideos = VIDEOS.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pleuntah-purple/20 to-pleuntah-dark z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" /> {/* Optional grid pattern */}

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            PLEUNTAH
          </h1>
          <p className="text-xl md:text-2xl text-pleuntah-neon font-medium mb-6">
            YouTuber & Rapper aus Deutschland
          </p>
          <p className="max-w-2xl text-gray-400 mb-10 text-lg leading-relaxed">
            Deutschrap-Kommentare mit Schärfe und eigene Musik mit Tiefe.
            Willkommen in der Welt von Pleuntah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/music"
              className="px-8 py-4 bg-pleuntah-purple text-white font-bold rounded-full hover:bg-pleuntah-purple/80 hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Musik anhören
            </Link>
            <a
              href={SOCIALS.youtubeMain}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all"
            >
              YouTube-Kanal
            </a>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="container mx-auto px-4">
        <SectionTitle title="Neueste Releases" subtitle="Frisch aus dem Studio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestReleases.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/music" className="text-pleuntah-neon hover:underline underline-offset-4">
            Alle Releases anzeigen →
          </Link>
        </div>
      </section>

      {/* Popular Songs List */}
      <section className="bg-pleuntah-card/50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Beliebte Songs" centered />
          <div className="max-w-3xl mx-auto mt-8 flex flex-col gap-2">
            {POPULAR_SONGS.map((song, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
                <span className="text-gray-500 w-8 font-mono text-lg">{index + 1}</span>
                <span className="text-white font-medium text-lg flex-grow group-hover:text-pleuntah-purple transition-colors">
                  {song}
                </span>
                <a
                  href={SOCIALS.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 text-sm text-gray-400 hover:text-white transition-all"
                >
                  Play
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Videos */}
      <section className="container mx-auto px-4">
        <SectionTitle title="Beliebte Videos" subtitle="YouTube Highlights" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/videos" className="text-pleuntah-neon hover:underline underline-offset-4">
            Mehr Videos ansehen →
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="container mx-auto px-4 mb-10">
        <div className="bg-gradient-to-r from-pleuntah-purple/10 to-transparent p-8 md:p-12 rounded-2xl border border-pleuntah-purple/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Über Pleuntah</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Seit 2018 mischt Pleuntah die Deutschrap-Szene auf – nicht nur als kritischer Beobachter auf YouTube, sondern auch als Künstler mit eigener Vision. Erfahre mehr über den Weg von Justin Nebel.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
            {/* Optional: Add an image here if available, otherwise just text layout */}
          </div>
        </div>
      </section>
    </div>
  );
}
