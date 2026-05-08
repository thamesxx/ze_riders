import { useState } from "react";
import { Link } from "wouter";
import { Briefcase, Users, TrendingUp, Heart, MapPin, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Careers() {
  const [b2bFormData, setB2bFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    collaborationDetails: "",
  });

  const [b2bSubmitting, setB2bSubmitting] = useState(false);
  const submitContactMutation = trpc.forms.submitContact.useMutation();

  const handleB2bChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setB2bFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleB2bSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setB2bSubmitting(true);

    try {
      await submitContactMutation.mutateAsync({
        fullName: b2bFormData.companyName,
        email: b2bFormData.email,
        phone: b2bFormData.phone,
        subject: `B2B Collaboration Inquiry - ${b2bFormData.contactPerson}`,
        message: b2bFormData.collaborationDetails,
      });

      toast.success("Thank you! We'll review your collaboration proposal and get back to you soon.");
      setB2bFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        collaborationDetails: "",
      });
    } catch (error) {
      console.error("Error submitting B2B inquiry:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setB2bSubmitting(false);
    }
  };

  const jobListings = [
    {
      title: "Motorcycle Rider",
      location: "Karachi",
      type: "Full-time",
      description: "Join our fleet of professional riders and earn competitive income while providing excellent service to our customers.",
    },
    {
      title: "Delivery Executive",
      location: "Karachi",
      type: "Full-time",
      description: "Manage deliveries, coordinate with customers, and ensure timely service. No motorcycle required.",
    },
    {
      title: "Customer Support Representative",
      location: "Karachi",
      type: "Full-time",
      description: "Provide excellent customer service through phone, email, and chat. Help resolve customer issues and inquiries.",
    },
    {
      title: "Operations Coordinator",
      location: "Karachi",
      type: "Full-time",
      description: "Coordinate daily operations, manage schedules, and ensure smooth workflow across all departments.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression paths and professional development opportunities.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your family.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Work schedules that fit your lifestyle and personal commitments.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Culture",
      description: "Work with a supportive and collaborative team environment.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Training",
      description: "Ongoing training and skill development programs for all employees.",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Recognition Program",
      description: "Monthly recognition and reward programs for outstanding performers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/manus-storage/pasted_file_mp90Lm_image_365c7a91.png)'}}>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Build Your Career With Us
              </h1>
              
              {/* Glassy Card for Description */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Join Ze Rider and be part of a growing team revolutionizing ride-hailing and courier services in Pakistan.
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all mb-8 inline-block shadow-lg hover:shadow-xl hover:scale-105 transform">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Why Join Ze Rider?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're committed to creating a workplace where talent thrives, innovation flourishes, and everyone has the opportunity to succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Open Positions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Check out our current openings below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <Link href="/apply">
                  <button className="w-full bg-[#2563eb] text-white font-semibold py-2 rounded-lg hover:bg-[#1d4ed8] transition-all">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
                Our Culture & Values
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                At Ze Rider, we believe in creating a workplace where every team member feels valued and empowered to make a difference.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our core values guide everything we do: integrity, customer focus, teamwork, and continuous improvement. We foster an environment where innovation is encouraged and diverse perspectives are celebrated.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Whether you're a rider, support staff, or management, you'll find a community dedicated to excellence and mutual success.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-[#1a1a1a] font-medium">Inclusive and diverse workplace</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-[#1a1a1a] font-medium">Continuous learning opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-[#1a1a1a] font-medium">Work-life balance initiatives</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-[#1a1a1a] font-medium">Recognition and reward programs</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="/manus-storage/who-we-are-image_94f99c35.png"
                alt="Ze Riders Team Culture"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* B2B Collaboration Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563eb]/10 to-[#1d4ed8]/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                B2B Collaboration
              </h2>
              <p className="text-gray-600 text-lg">
                Are you a business looking to partner with Ze Rider? We welcome collaboration opportunities with companies interested in logistics, delivery, or ride-sharing partnerships.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <form onSubmit={handleB2bSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={b2bFormData.companyName}
                      onChange={handleB2bChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={b2bFormData.contactPerson}
                      onChange={handleB2bChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={b2bFormData.email}
                      onChange={handleB2bChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={b2bFormData.phone}
                      onChange={handleB2bChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Collaboration Details *</label>
                  <textarea
                    name="collaborationDetails"
                    value={b2bFormData.collaborationDetails}
                    onChange={handleB2bChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Tell us about your collaboration proposal, partnership ideas, or business inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={b2bSubmitting}
                  className="w-full bg-[#2563eb] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {b2bSubmitting ? "Sending..." : "Send Collaboration Inquiry"}
                </button>
              </form>
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
