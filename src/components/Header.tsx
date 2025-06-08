import Link from "next/link";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">L</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-800">Logo</span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Services
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Hidden by default */}
            <div className="md:hidden hidden bg-white border-t">
                <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                    <Link href="/" className="py-2 text-gray-600 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/about" className="py-2 text-gray-600 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="/services" className="py-2 text-gray-600 hover:text-blue-600">
                        Services
                    </Link>
                    <Link href="/blog" className="py-2 text-gray-600 hover:text-blue-600">
                        Blog
                    </Link>
                    <Link href="/contact" className="py-2 text-gray-600 hover:text-blue-600">
                        Contact
                    </Link>
                    <div className="flex flex-col space-y-2 pt-2 border-t">
                        <button className="w-full py-2 text-gray-600 hover:text-blue-600 text-left">
                            Login
                        </button>
                        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header