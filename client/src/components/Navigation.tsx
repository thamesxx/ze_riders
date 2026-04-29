import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo with provided image */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/manus-storage/ze-rider-logo_4e569ae3.jpg"
              alt="Ze Rider Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-[#1a1a1a]">Ze Rider</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-[#2563eb] font-medium transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-[#2563eb] font-medium transition-colors py-2">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-[#2563eb] font-medium transition-colors py-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
