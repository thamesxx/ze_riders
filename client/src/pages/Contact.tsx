import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    {
      question: "How do I book a ride with Ze Rider?",
      answer: "Simply download our app from the App Store or Google Play, create an account, enter your destination, and confirm your booking. A rider will arrive within minutes. You can track your ride in real-time.",
    },
    {
      question: "What are your pricing rates?",
      answer: "Our rates are competitive and transparent. We charge based on distance and time. There are no hidden fees. You will see the estimated fare before confirming your booking.",
    },
    {
      question: "How can I track my delivery or ride?",
      answer: "Once you book, you can track your ride or delivery in real-time through our app. You will receive notifications at every step of your journey.",
    },
    {
      question: "Is my ride safe and secure?",
      answer: "Yes, all our riders are verified and trained. We provide GPS tracking, emergency support, and insurance coverage for all rides. Your safety is our top priority.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, debit cards, and digital wallets. You can choose your preferred payment method when booking or in the app settings.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596086202/YvPzrgTJTNVygv8TaE4iFd/contact-hero-branded-gpSqEeGRXBWGxvEFmEWCjS.webp"
          alt="Ze Rider branded riders"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mb-8">
              Get in touch with us. We're here to help and answer any questions you might have.
            </p>
            <button className="bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all inline-block">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
                Get in Touch With Us
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Phone</h3>
                    <p className="text-gray-600">+92 314 2560770</p>
                    <p className="text-gray-600">021-34491808 (PTCL)</p>
                    <p className="text-gray-500 text-sm">Available 24/7</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Address</h3>
                    <p className="text-gray-600">Malir Cantt, 4 Dots, Karachi, Pakistan</p>
                    <p className="text-gray-500 text-sm">Office Hours: 9 AM - 6 PM (Mon-Fri)</p>
                  </div>
                </div>
              </div>

              {/* Map with Google Maps API */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <MapView
                  initialCenter={{ lat: 24.8245, lng: 67.1338 }}
                  initialZoom={15}
                  onMapReady={(map) => {
                    // Add marker for Ze Rider office
                    new google.maps.marker.AdvancedMarkerElement({
                      map,
                      position: { lat: 24.8245, lng: 67.1338 },
                      title: "Ze Rider - Malir Cantt, 4 Dots, Karachi",
                    });
                  }}
                  className="h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1a1a1a] text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-[#2563eb] transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark-section py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Download our app or call us to book your ride today. Fast, reliable, and affordable service.
          </p>
          <button className="btn-primary">
            Book Now
          </button>
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
