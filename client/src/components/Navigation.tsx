import { Link } from "wouter";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#22c55e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-xl text-[#1a1a1a]">Zaina</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-[#22c55e] font-medium transition-colors">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-[#22c55e] font-medium transition-colors">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-[#22c55e] font-medium transition-colors">
              Contact Us
            </a>
          </Link>
          <button className="btn-primary">
            Become a Rider
          </button>
        </div>
      </nav>
    </header>
  );
}
