import HeaderSection from "@/component/header-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Janbook and our commitment to luxury and comfort.",
}
const AboutPage = () => {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <HeaderSection
                title="About Us"
                subtitle="Learn more about Janbook and our commitment to luxury and comfort."
            />

            {/* Content Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                            Defining the Standard of Excellence
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Founded with a vision to redefine hospitality, **Janbook** stands at the intersection of
                            timeless elegance and modern convenience. We believe that a stay is more than just a
                            place to sleep—it’s an experience that stays with you.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Every detail, from the scent in our lobbies to the thread count of our linens,
                            is meticulously curated to ensure your comfort is never compromised.
                        </p>
                    </div>

                    {/* Stats atau Core Values */}
                    <div className="grid grid-cols-2 gap-8 bg-gray-50 p-10 rounded-2xl">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-amber-600">10+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Years of Service</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-amber-600">50+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Luxury Suites</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-amber-600">100%</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Guest Satisfaction</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-amber-600">24/7</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Conciere Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-gray-900 text-white py-20 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-light italic mb-6">Comfort is the ultimate luxury.</h2>
                    <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-400">
                        Our mission is simple: To provide a sanctuary for travelers who refuse to settle
                        for anything less than extraordinary.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;