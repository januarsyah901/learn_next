import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline, IoBedOutline, IoResizeOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src="/zee_duo.png"
                    alt="Luxury Room"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        Popular
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 hover:text-orange-400 transition-colors">
                        <Link href="#">Deluxe Ocean View</Link>
                    </h2>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-1.5">
                        <IoPeopleOutline className="text-orange-400 size-5" />
                        <span>2 Guests</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <IoBedOutline className="text-orange-400 size-5" />
                        <span>King Bed</span>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-black text-orange-400">Rp 400k</span>
                        <span className="text-gray-400 text-sm font-medium">/night</span>
                    </div>

                    <Link
                        href="#"
                        className="bg-gray-900 text-white hover:bg-orange-400 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 shadow-md hover:shadow-orange-200"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;