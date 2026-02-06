import Image from "next/image";

const HeaderSection = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <header className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/zee_duduk.jpg"
                    alt="Header Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-xl">
                    {title}
                </h1>
                <div className="w-20 h-1.5 bg-orange-400 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md">
                    {subtitle}
                </p>
            </div>
        </header>
    );
};

export default HeaderSection;