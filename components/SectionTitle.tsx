interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
    return (
        <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <div className="mt-2 h-1 w-20 bg-pleuntah-purple rounded-full mx-auto md:mx-0" style={{ marginLeft: centered ? 'auto' : 0 }} />
            )}
        </div>
    );
}
