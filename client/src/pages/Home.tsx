import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, MapPin, Mail, Smartphone, TrendingUp, Users, Apple } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="thamesxx/ze_riders/client/public/home-hero.jpeg"
          alt="Ze Rider courier on motorcycle with delivery box"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Your Trusted Ride-Hailing Service
              </h1>
              
              {/* Glassy Card for Description */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Fast, reliable, and affordable motorcycle rides and courier delivery services in your city.
                </p>
              </div>


              {/* Contact Info - Glassy Style */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 w-fit shadow-lg">
                <div className="flex flex-col gap-3 text-white">
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="text-[#2563eb]" />
                    <span className="text-lg font-semibold">+92 314 2560770</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="text-[#2563eb]" />
                    <span className="text-lg font-semibold">021-34491808 (PTCL)</span>
                  </div>
                </div>
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
              Book Now →
            </Link>
            <p className="text-gray-600 mt-4 flex flex-col gap-2">
              <span className="flex items-center">
                <Phone size={18} className="inline mr-2" />
                +92 314 2560770
              </span>
              <span className="flex items-center">
                <Phone size={18} className="inline mr-2" />
                021-34491808 (PTCL)
              </span>
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

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>+92 314 2560770</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>021-34491808 (PTCL)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin size={16} className="mt-1" />
                  <span>Malir Cantt, 4 Dots, Karachi, Pakistan</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
                  <span>COOZebickriders@gmail.com</span>
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
