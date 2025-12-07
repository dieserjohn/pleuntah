import Link from 'next/link';
import { SOCIALS } from '@/data/socials';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-pleuntah-dark/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-pleuntah-purple transition-colors">
                    PLEUNTAH
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-gray-300 hover:text-pleuntah-neon transition-colors">
                        Home
                    </Link>
                    <Link href="/music" className="text-sm font-medium text-gray-300 hover:text-pleuntah-neon transition-colors">
                        Musik
                    </Link>
                    <Link href="/videos" className="text-sm font-medium text-gray-300 hover:text-pleuntah-neon transition-colors">
                        Videos
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-pleuntah-neon transition-colors">
                        Über
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-pleuntah-neon transition-colors">
                        Kontakt
                    </Link>
                </div>

                {/* Mobile Menu Button Placeholder - could be expanded */}
                <div className="md:hidden">
                    {/* Simple mobile menu link for now */}
                    <Link href="/music" className="text-sm font-medium text-pleuntah-purple">
                        Menu
                    </Link>
                </div>
            </div>
        </nav>
    );
}
