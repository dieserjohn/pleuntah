import SectionTitle from '@/components/SectionTitle';
import { SOCIALS } from '@/data/socials';

export const metadata = {
    title: 'Über Mich | PLEUNTAH',
    description: 'Biografie und Werdegang von Justin Nebel alias PLEUNTAH.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <SectionTitle title="Über Pleuntah" subtitle="Justin Nebel" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            <strong className="text-white">Justin Nebel</strong>, besser bekannt als
                            <span className="text-pleuntah-purple font-bold"> PLEUNTAH</span>,
                            wurde am 17.07.2001 in Deutschland geboren. Was als Leidenschaft für Deutschrap begann,
                            entwickelte sich schnell zu einem der meinungsstärksten YouTube-Kanäle der Szene.
                        </p>
                        <p>
                            Seit 2018 veröffentlicht Pleuntah regelmäßig Videos, in denen er die Deutschrap-Kultur analysiert,
                            kritisiert und feiert. Mit Formaten wie <em>&quot;Rapper und ihre Erfolgsfans&quot;</em> oder
                            <em>&quot;Als Deutschrap noch gut war&quot;</em> trifft er den Nerv einer ganzen Generation.
                        </p>
                        <p>
                            Doch Pleuntah ist nicht nur Kommentator. Mit Releases wie der EP <em>&quot;Der Beste&quot;</em> (2020)
                            und dem Album <em>&quot;Justin 2&quot;</em> (2024) beweist er, dass er auch selbst am Mic abliefern kann.
                            Seine Musik ist persönlich, direkt und oft mit einem Augenzwinkern versehen – genau wie seine Videos.
                        </p>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-8">
                        <div className="bg-pleuntah-card p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">Steckbrief</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Name:</span> <span className="text-white">Justin Nebel</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Geboren:</span> <span className="text-white">17.07.2001</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Herkunft:</span> <span className="text-white">Deutschland</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span>Status:</span> <span className="text-pleuntah-neon">Aktiv</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-pleuntah-card p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">Meilensteine</h3>
                            <ul className="space-y-4 relative border-l border-white/10 ml-2 pl-6">
                                <li className="relative">
                                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-pleuntah-purple"></div>
                                    <span className="block text-xs text-gray-500 mb-1">2024</span>
                                    <span className="text-white font-medium">Album &quot;Justin 2&quot;</span>
                                </li>
                                <li className="relative">
                                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white/20"></div>
                                    <span className="block text-xs text-gray-500 mb-1">2022</span>
                                    <span className="text-white font-medium">EP &quot;PNTH.&quot;</span>
                                </li>
                                <li className="relative">
                                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white/20"></div>
                                    <span className="block text-xs text-gray-500 mb-1">2020</span>
                                    <span className="text-white font-medium">Erste EP &quot;Der Beste&quot;</span>
                                </li>
                                <li className="relative">
                                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white/20"></div>
                                    <span className="block text-xs text-gray-500 mb-1">2018</span>
                                    <span className="text-white font-medium">Start auf YouTube</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
