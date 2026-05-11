import { Zap, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="thamesxx/ze_riders/client/public/about-hero.png"
          alt="Ze Rider courier with delivery box and route map"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                About Us
              </h1>
              
              {/* Glassy Card for Description */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Learn more about our mission to deliver excellence and customer satisfaction.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-md border border-white/30 p-8 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                We are your trusted ride-hailing and courier delivery service, dedicated to providing reliable, safe, and affordable rides and deliveries. Our platform connects motorcycle riders with customers, ensuring fast and dependable service.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our mission is to deliver exceptional service to our customers through reliable, fast, and affordable ride-hailing and courier services. We believe in building a sustainable, customer-driven platform that prioritizes your needs.
              </p>
              <p className="text-gray-600 text-lg">
                With years of experience in the ride-sharing and delivery industry, we've built a reputation for reliability, safety, and customer satisfaction.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="thamesxx/ze_riders/client/public/who-we-are.png"
                alt="Ze Riders Team - About Us"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Customer First
              </h3>
              <p className="text-gray-600">
                Prioritize customer satisfaction with responsive support, transparent pricing, and reliable service that exceeds expectations.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Affordable & Reliable Service
              </h3>
              <p className="text-gray-600">
                Deliver fast, safe, and affordable ride-hailing and courier services that customers can trust and depend on.
              </p>
            </div>

            {/* Mission 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Community Commitment
              </h3>
              <p className="text-gray-600">
                Build a sustainable, community-driven platform that creates positive impact in the cities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Why Choose Ze Rider?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  Clear, upfront pricing with no hidden charges. Know exactly what you'll earn or pay.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Comprehensive safety measures and insurance coverage for all riders and passengers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer support to help you with any questions or issues.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">
                  Track your ride or delivery in real-time with live GPS updates and notifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Professional Riders</h3>
                <p className="text-gray-600">
                  All our riders are verified, trained, and committed to providing excellent service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Easy Booking</h3>
                <p className="text-gray-600">
                  Simple and intuitive app interface for quick and hassle-free ride and delivery bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-section py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="thamesxx/ze_riders/client/public/zerider_logo.jpg"
                  alt="Ze Rider Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="font-bold text-lg text-white">Ze Rider</span>
              </div>
              <p className="text-gray-400">
                Your trusted ride-hailing and courier delivery service.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span>📞 +92 314 2560770</span>
                </li>
                <li className="text-gray-400">
                  <span>📞 021-34491808 (PTCL)</span>
                </li>
                <li className="text-gray-400">
                  <span>📍 Malir Cantt, 4 Dots, Karachi, Pakistan</span>
                </li>
                <li className="text-gray-400">
                  <span>📧 COOZebickriders@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

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
