import { Link } from "wouter";
import { Zap, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596086202/YvPzrgTJTNVygv8TaE4iFd/hero-about-L3rQAWGhd8P486s2UgCrVW.webp"
          alt="Professional motorcycle riders"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Learn more about our mission to empower riders and deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596086202/YvPzrgTJTNVygv8TaE4iFd/hero-about-L3rQAWGhd8P486s2UgCrVW.webp"
                alt="Team"
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
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Easy Onboarding</h3>
                <p className="text-gray-600">
                  Simple, quick registration process to get started earning or booking rides in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark-section py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to earn as a rider or book reliable transportation, Ze Rider is here for you.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-all inline-block">
            Book Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-section py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Book a Ride</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Courier Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#2563eb] transition-colors">Track Order</a></li>
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
