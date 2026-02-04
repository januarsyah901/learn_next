import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Navlink from "@/component/navbar/navlink";

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white top-0 shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
                <Link href="/" className="flex items-center">
                    <Image src="/icon.png" alt="Logo" width={40} height={40} priority className="w-auto h-auto"/>
                    <span className="ml-2 text-xl font-bold text-gray-800">Janbook</span>
                </Link>
                <Navlink />
            </div>
        </nav>
    );
};

export default Navbar;