import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-2">
                                <Image src="/icon.png" alt="logo" width={40} height={40} priority className="brightness-110" />
                                <span className="text-2xl font-bold text-white tracking-tight">LearnNext</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                            Experience the best stay with our premium rooms and exceptional service. Your comfort is our priority since 2024.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<FaFacebookF size={18} />} />
                            <SocialLink href="#" icon={<FaTwitter size={18} />} />
                            <SocialLink href="#" icon={<FaInstagram size={18} />} />
                            <SocialLink href="#" icon={<FaLinkedinIn size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/room">Our Rooms</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                            <FooterLink href="#">Booking Policy</FooterLink>
                            <FooterLink href="#">Refund Policy</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Subscribe to get latest updates and offers.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                required
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} LearnNext. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link
            href={href}
            className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
        >
            {children}
        </Link>
    </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link
        href={href}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
        {icon}
    </Link>
);

export default Footer;