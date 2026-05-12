import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#d3e4fa]/80 backdrop-blur-md border-b border-[#2563eb]/20 shadow-lg">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo with provided image */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <img
              src="/zerider_logo.jpg"
              alt="Ze Rider Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-[#1a1a1a]">Ze Rider</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <div className="relative text-gray-700 font-medium group cursor-pointer">
              <span className="transition-all duration-300 group-hover:text-[#2563eb] group-hover:scale-110 inline-block">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          <Link href="/about">
            <div className="relative text-gray-700 font-medium group cursor-pointer">
              <span className="transition-all duration-300 group-hover:text-[#2563eb] group-hover:scale-110 inline-block">
                About Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="relative text-gray-700 font-medium group cursor-pointer">
              <span className="transition-all duration-300 group-hover:text-[#2563eb] group-hover:scale-110 inline-block">
                Contact Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
          <Link href="/careers">
            <div className="relative text-gray-700 font-medium group cursor-pointer">
              <span className="transition-all duration-300 group-hover:text-[#2563eb] group-hover:scale-110 inline-block">
                Careers
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-[#2563eb]/20 rounded-lg transition-all duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-[#2563eb] transition-colors duration-300" />
          ) : (
            <Menu size={24} className="text-gray-700 hover:text-[#2563eb] transition-colors duration-300" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#2563eb]/20 bg-[#d3e4fa]/50 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container py-4 space-y-2">
            <Link href="/">
              <div className="block text-gray-700 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/60 hover:text-[#2563eb] hover:shadow-md hover:translate-x-1">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="block text-gray-700 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/60 hover:text-[#2563eb] hover:shadow-md hover:translate-x-1">
                About Us
              </div>
            </Link>
            <Link href="/contact">
              <div className="block text-gray-700 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/60 hover:text-[#2563eb] hover:shadow-md hover:translate-x-1">
                Contact Us
              </div>
            </Link>
            <Link href="/careers">
              <div className="block text-gray-700 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/60 hover:text-[#2563eb] hover:shadow-md hover:translate-x-1">
                Careers
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
