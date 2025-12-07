import Link from 'next/link';
import { SOCIALS } from '@/data/socials';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-pleuntah-dark py-8 mt-auto">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm text-gray-400">
                    &copy; {currentYear} PLEUNTAH. Alle Rechte vorbehalten.
                </p>

                <div className="flex items-center gap-4">
                    <a href={SOCIALS.youtubeMain} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                        YouTube
                    </a>
                    <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                        Spotify
                    </a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                        Instagram
                    </a>
                    <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        X / Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
