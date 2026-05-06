import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { MapView } from "@/components/Map";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // tRPC mutation
  const submitContactMutation = trpc.forms.submitContact.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);

    try {
      await submitContactMutation.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setContactSubmitting(false);
    }
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
      <section className="relative w-full h-[600px] overflow-hidden" style={{backgroundImage: 'url(/manus-storage/contact-hero-bg_26757d7d.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Contact Us
              </h1>
              
              {/* Glassy Card for Description */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Get in touch with us. We're here to help and answer any questions you might have.
                </p>
              </div>

              {/* Book Now Button */}
              <button className="bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all mb-8 inline-block shadow-lg hover:shadow-xl hover:scale-105 transform">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-md border border-white/30 p-8 rounded-xl shadow-lg">
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
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter your name"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter your email"
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter subject"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="w-full bg-[#2563eb] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
                Get in Touch With Us
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Phone</h3>
                    <p className="text-gray-600">+92 314 2560770</p>
                    <p className="text-gray-600">021-34491808 (PTCL)</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Address</h3>
                    <p className="text-gray-600">Malir Cantt, 4 Dots, Karachi, Pakistan</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Email</h3>
                    <p className="text-gray-600">COOZebickriders@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 bg-gray-50 p-4 rounded-lg overflow-hidden">
                <MapView
                  onMapReady={(map) => {
                    new window.google.maps.Marker({
                      map,
                      position: { lat: 24.8245, lng: 67.1338 },
                      title: "Ze Rider - Malir Cantt",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1a1a1a] text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#2563eb] transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Ready to be part of Ze Rider? Explore exciting career opportunities and apply now.
              </p>
              <Link href="/careers" className="inline-block bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                View Careers
              </Link>
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
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-[#2563eb] transition-colors">
                    Careers
                  </Link>
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
