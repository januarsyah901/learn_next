import  {LoginGoogleButton} from "@/component/login-button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
};

const SignInPage = () => {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            {/* Sisi Kiri: Visual/Brand */}
            <div className="relative hidden md:block">
                <Image
                    src="/zee_kaca.jpg" // Menggunakan aset yang sama agar konsisten
                    alt="Luxury Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12 text-white">
                    <h2 className="text-4xl font-serif font-bold mb-4 italic">
                        &#34;Your journey to comfort starts here.&#34;
                    </h2>
                    <p className="text-gray-200 max-w-md">
                        Experience the finest hospitality and discover why Janbook is the preferred choice for discerning travelers.
                    </p>
                </div>
            </div>

            {/* Sisi Kanan: Form Login */}
            <div className="flex flex-col justify-center items-center px-8 bg-white">
                <div className="w-full max-w-sm space-y-8 text-center">
                    {/* Logo / Title */}
                    <div>
                        <Link href="/" className="text-3xl font-serif font-extrabold tracking-tighter text-gray-900">
                            JANBOOK
                        </Link>
                        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                            Welcome Back
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Please sign in to access your luxury suite reservations.
                        </p>
                    </div>

                    {/* Login Button Container */}
                    <div className="mt-8 flex justify-center">
                        <LoginGoogleButton />
                    </div>

                    {/* Footer Login */}
                    <p className="mt-10 text-center text-xs text-gray-400">
                        By signing in, you agree to our{" "}
                        <Link href="#" className="underline hover:text-gray-600 transition-colors">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="underline hover:text-gray-600 transition-colors">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;