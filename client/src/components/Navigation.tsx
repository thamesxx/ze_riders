import { Link } from "wouter";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">Z</span>
              <div className="absolute top-1 right-1 w-2 h-4 bg-blue-500 rounded-sm"></div>
            </div>
            <span className="font-bold text-xl text-[#1a1a1a]">Ze Rider</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Contact Us
            </a>
          </Link>
          <a href="#" className="btn-primary inline-block">
            Become a Rider
          </a>
        </div>
      </nav>
    </header>
  );
}
