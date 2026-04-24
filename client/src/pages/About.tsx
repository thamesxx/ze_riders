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
                Our mission is to empower riders with flexible earning opportunities while delivering exceptional service to our customers. We believe in building a sustainable, community-driven platform that benefits everyone.
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
              <div className="w-16 h-16 bg-[#22c55e] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Empowering Riders
              </h3>
              <p className="text-gray-600">
                Provide flexible earning opportunities with competitive rates, benefits, and support systems that help riders thrive.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#22c55e] rounded-lg flex items-center justify-center mx-auto mb-4">
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
              <div className="w-16 h-16 bg-[#22c55e] rounded-lg flex items-center justify-center mx-auto mb-4">
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
            Why Choose Zaina Riders?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            Whether you want to earn as a rider or book reliable transportation, Zaina Riders is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Become a Rider
            </button>
            <Link href="/contact">
              <a className="px-6 py-3 border-2 border-[#22c55e] text-[#22c55e] font-semibold rounded-lg hover:bg-[#22c55e] hover:text-white transition-all">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-section py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#22c55e] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="font-bold text-lg text-white">Zaina Riders</span>
              </div>
              <p className="text-gray-400">
                Your trusted ride-hailing and courier delivery service.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-gray-400 hover:text-[#22c55e] transition-colors">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-400 hover:text-[#22c55e] transition-colors">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-400 hover:text-[#22c55e] transition-colors">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Become a Rider</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Book a Ride</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Courier Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span>📞 +92 313 4666615</span>
                </li>
                <li className="text-gray-400">
                  <span>📧 info@zainabenterprises.com</span>
                </li>
                <li className="text-gray-400">
                  <span>📍 123 Gulshan-e-Iqbal, Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
            <p className="text-gray-400">© 2026 Zaina Riders. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
