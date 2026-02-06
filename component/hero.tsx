import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/zee_duduk.jpg"
                    alt="Luxury Hotel Room"
                    fill
                    className="object-cover object-center w-full"
                    priority
                />
                {/* Improved Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl px-6 text-center lg:text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md">
                    Experience <span className="text-orange-400">Luxury</span> <br /> Like Never Before
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-sm">
                    Discover a perfect blend of comfort, elegance, and world-class service. Book your dream stay at Janbook today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/room" className="px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Book Your Room
                    </Link>
                    <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/30 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator (Decorative) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-1 h-12 rounded-full bg-linear-to-b from-orange-400 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;