import Hero from "@/component/hero";
import Main from "@/component/main";

export default function Home() {
    return (
        <main className="bg-gray-50/50">
            <Hero/>
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Rooms & <span className="text-orange-400">Rates</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Explore our world-class accommodations designed for your ultimate comfort.
                        Each room is a blend of modern luxury and cozy ambiance.
                    </p>
                </div>
                <Main/>
            </section>
        </main>
    );
}
