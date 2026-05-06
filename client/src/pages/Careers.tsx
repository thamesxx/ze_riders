import { useState } from "react";
import { Link } from "wouter";
import { Briefcase, Users, TrendingUp, Heart, MapPin, DollarSign, Clock } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Careers() {
  const [jobFormData, setJobFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    cnic: "",
    email: "",
    phone: "",
    address: "",
    positionAppliedFor: "",
    hasDrivingLicense: "",
    declarationAgreed: false,
  });

  const [jobSubmitting, setJobSubmitting] = useState(false);

  // tRPC mutation
  const submitJobApplicationMutation = trpc.forms.submitJobApplication.useMutation();

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setJobFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!jobFormData.declarationAgreed) {
      toast.error("Please agree to the declaration.");
      return;
    }

    if (!jobFormData.hasDrivingLicense) {
      toast.error("Please select whether you have a driving license.");
      return;
    }

    setJobSubmitting(true);

    try {
      await submitJobApplicationMutation.mutateAsync({
        fullName: jobFormData.fullName,
        dateOfBirth: jobFormData.dateOfBirth,
        cnic: jobFormData.cnic,
        email: jobFormData.email,
        phone: jobFormData.phone,
        address: jobFormData.address,
        positionAppliedFor: jobFormData.positionAppliedFor,
        hasDrivingLicense: jobFormData.hasDrivingLicense as "yes" | "no",
        declarationAgreed: jobFormData.declarationAgreed,
      });

      toast.success("Application submitted! We'll review it soon.");
      setJobFormData({
        fullName: "",
        dateOfBirth: "",
        cnic: "",
        email: "",
        phone: "",
        address: "",
        positionAppliedFor: "",
        hasDrivingLicense: "",
        declarationAgreed: false,
      });
    } catch (error) {
      console.error("Error submitting job application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setJobSubmitting(false);
    }
  };

  const jobListings = [
    {
      title: "Motorcycle Rider",
      location: "Karachi",
      salary: "PKR 40,000 - 60,000/month",
      type: "Full-time",
      description: "Join our fleet of professional riders and earn competitive income while providing excellent service to our customers.",
    },
    {
      title: "Delivery Executive",
      location: "Karachi",
      salary: "PKR 35,000 - 50,000/month",
      type: "Full-time",
      description: "Manage deliveries, coordinate with customers, and ensure timely service. No motorcycle required.",
    },
    {
      title: "Customer Support Representative",
      location: "Karachi",
      salary: "PKR 30,000 - 45,000/month",
      type: "Full-time",
      description: "Provide excellent customer service through phone, email, and chat. Help resolve customer issues and inquiries.",
    },
    {
      title: "Operations Coordinator",
      location: "Karachi",
      salary: "PKR 35,000 - 50,000/month",
      type: "Full-time",
      description: "Coordinate daily operations, manage schedules, and ensure smooth workflow across all departments.",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      description: "Attractive compensation packages based on experience and performance.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your family.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression paths and professional development opportunities.",
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'}}>
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
                        <DollarSign size={16} /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="text-[#2563eb] font-semibold hover:text-[#1d4ed8] transition-colors">
                  Learn More →
                </button>
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

      {/* Application Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg p-12 text-white text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg text-gray-100">
                Submit your application below and let's explore how you can grow with Ze Rider.
              </p>
            </div>

            <form onSubmit={handleJobSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8">Job Application Form</h3>
              
              {/* Applicant Details */}
              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">Applicant Details</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={jobFormData.fullName}
                      onChange={handleJobChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={jobFormData.dateOfBirth}
                        onChange={handleJobChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">CNIC *</label>
                      <input
                        type="text"
                        name="cnic"
                        value={jobFormData.cnic}
                        onChange={handleJobChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        placeholder="Enter your CNIC"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={jobFormData.email}
                      onChange={handleJobChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={jobFormData.phone}
                      onChange={handleJobChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={jobFormData.address}
                      onChange={handleJobChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>
              </div>

              {/* Job Information */}
              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">Job Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Position Applied For *</label>
                    <input
                      type="text"
                      name="positionAppliedFor"
                      value={jobFormData.positionAppliedFor}
                      onChange={handleJobChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Enter position you're applying for"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Do you have a valid driving license? *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="hasDrivingLicense"
                          value="yes"
                          checked={jobFormData.hasDrivingLicense === "yes"}
                          onChange={handleJobChange}
                          className="w-4 h-4"
                        />
                        <span className="text-[#1a1a1a]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="hasDrivingLicense"
                          value="no"
                          checked={jobFormData.hasDrivingLicense === "no"}
                          onChange={handleJobChange}
                          className="w-4 h-4"
                        />
                        <span className="text-[#1a1a1a]">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">Declaration</h4>
                <p className="text-gray-600 mb-4">
                  I hereby declare that the information provided is true and correct to the best of my knowledge.
                </p>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="declarationAgreed"
                    checked={jobFormData.declarationAgreed}
                    onChange={handleJobChange}
                    required
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-[#1a1a1a]">I agree to the terms and conditions *</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={jobSubmitting}
                className="w-full bg-[#2563eb] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {jobSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
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
