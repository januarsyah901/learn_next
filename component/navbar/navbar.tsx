import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Navlink from "@/component/navbar/navlink";

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md top-0 border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
                <Link href="/" className="flex items-center group transition-all">
                    <div className="relative overflow-hidden rounded-lg">
                        <Image src="/icon.png" alt="Logo" width={35} height={35} priority className="h-auto w-auto transform transition-transform group-hover:scale-110" />
                    </div>
                    <span className="ml-3 text-2xl font-black text-gray-900 tracking-tight">
                        Jan<span className="text-orange-400">book</span>
                    </span>
                </Link>
                <Navlink />
            </div>
        </nav>
    );
};

export default Navbar;