import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { toast } from "sonner";

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
      question: "When can I start earning as a rider?",
      answer: "Once your application is approved and you complete the onboarding process, you can start accepting rides immediately. The approval process typically takes 2-3 business days.",
    },
    {
      question: "What are the requirements to become a rider?",
      answer: "You must be at least 18 years old, have a valid motorcycle license, insurance, and pass our safety verification. A smartphone with our app is also required.",
    },
    {
      question: "How does the payment system work?",
      answer: "Earnings are calculated based on distance, time, and demand. You can withdraw your earnings daily to your bank account. We provide transparent breakdowns of all earnings.",
    },
    {
      question: "Is there customer support available?",
      answer: "Yes, we offer 24/7 customer support through phone, email, and in-app chat. Our support team is always ready to help with any questions or issues.",
    },
    {
      question: "What safety measures are in place?",
      answer: "We provide comprehensive insurance coverage, safety training, emergency support, and a verified user system to ensure the safety of both riders and passengers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663596086202/YvPzrgTJTNVygv8TaE4iFd/hero-contact-9LYvZRh5iz4vdBck5TZwR3.webp"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Get in touch with us. We're here to help and answer any questions you might have.
            </p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e] resize-none"
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
                  <div className="w-12 h-12 bg-[#22c55e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Phone</h3>
                    <p className="text-gray-600">+92 313 4666615</p>
                    <p className="text-gray-500 text-sm">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#22c55e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Email</h3>
                    <p className="text-gray-600">info@zainabenterprises.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#22c55e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Address</h3>
                    <p className="text-gray-600">123 Gulshan-e-Iqbal, Karachi, Pakistan</p>
                    <p className="text-gray-500 text-sm">Office Hours: 9 AM - 6 PM (Mon-Fri)</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-gray-400" size={32} />
                  <p className="text-gray-600">Our Location on Map</p>
                </div>
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
                    className={`text-[#22c55e] transition-transform ${
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
            Still Have Questions?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our support team is ready to help. Reach out to us via phone, email, or visit our office.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
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
