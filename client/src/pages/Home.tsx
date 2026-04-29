import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, MapPin, Mail, Smartphone, TrendingUp, Users, Apple } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596086202/YvPzrgTJTNVygv8TaE4iFd/hero-home-J2Vgfa8QRdJR78SSZh4E2o.webp"
          alt="Motorcycle riders in urban setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Your Trusted Ride-Hailing Service
              </h1>
              <p className="text-lg text-gray-100 mb-8">
                Fast, reliable, and affordable motorcycle rides and courier delivery services in your city.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  <Apple size={20} /> App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13.5v8.25A1.5 1.5 0 004.5 23h15a1.5 1.5 0 001.5-1.5V13.5M1 5.5C1 4.119 2.119 3 3.5 3h17C21.881 3 23 4.119 23 5.5v6c0 1.381-1.119 2.5-2.5 2.5h-17C2.119 14 1 12.881 1 11.5v-6z"/>
                  </svg> Google Play
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-2 text-white">
                <Phone size={20} />
                <span className="text-lg font-semibold">+92 313 4666615</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Why Choose Ze Rider?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experience the best ride-hailing and courier service with our commitment to quality and reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Fast & Reliable</h3>
              <p className="text-gray-600">
                Get to your destination quickly with our professional riders and optimized routes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Affordable Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with transparent rates. No hidden charges or surprise fees.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Easy to Use App</h3>
              <p className="text-gray-600">
                Book rides and track deliveries with our intuitive mobile app. Available on iOS and Android.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
              Get Started →
            </Link>
            <p className="text-gray-600 mt-4">
              <Phone size={18} className="inline mr-2" />
              +92 313 4666615
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-section py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/ze-rider-logo_4e569ae3.jpg"
                  alt="Ze Rider Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="font-bold text-lg text-white">Ze Rider</span>
              </div>
              <p className="text-gray-400">
                Your trusted ride-hailing and courier delivery service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Book a Ride</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Courier Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>+92 313 4666615</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
                  <span>info@zerider.com</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin size={16} className="mt-1" />
                  <span>123 Gulshan-e-Iqbal, Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">© 2026 Ze Rider. All rights reserved.</p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
