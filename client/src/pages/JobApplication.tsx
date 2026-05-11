import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function JobApplication() {
  const [formData, setFormData] = useState({
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

  const [submitting, setSubmitting] = useState(false);
  const submitJobApplicationMutation = trpc.forms.submitJobApplication.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.declarationAgreed) {
      toast.error("Please agree to the declaration.");
      return;
    }

    if (!formData.hasDrivingLicense) {
      toast.error("Please select whether you have a driving license.");
      return;
    }

    setSubmitting(true);

    try {
      await submitJobApplicationMutation.mutateAsync({
        fullName: formData.fullName,
        dateOfBirth: formData.dateOfBirth,
        cnic: formData.cnic,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        positionAppliedFor: formData.positionAppliedFor,
        hasDrivingLicense: formData.hasDrivingLicense as "yes" | "no",
        declarationAgreed: formData.declarationAgreed,
      });

      toast.success("Application submitted! We'll review it soon.");
      setFormData({
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
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-0 z-40">
        <div className="container">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] transition-colors mb-4">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Careers</span>
          </Link>
          <h1 className="text-4xl font-bold text-[#1a1a1a]">Job Application Form</h1>
          <p className="text-gray-600 mt-2">Complete the form below to apply for a position at Ze Rider</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            {/* Applicant Details Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 pb-4 border-b border-gray-200">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
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
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">CNIC *</label>
                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="e.g., 12345-1234567-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </div>

            {/* Job Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 pb-4 border-b border-gray-200">
                Position Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">Position Applied For *</label>
                  <input
                    type="text"
                    name="positionAppliedFor"
                    value={formData.positionAppliedFor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    placeholder="e.g., Motorcycle Rider, Delivery Executive"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-3">Do you have a valid driving license? *</label>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hasDrivingLicense"
                        value="yes"
                        checked={formData.hasDrivingLicense === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-[#1a1a1a] font-medium">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hasDrivingLicense"
                        value="no"
                        checked={formData.hasDrivingLicense === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-[#1a1a1a] font-medium">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Declaration Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 pb-4 border-b border-gray-200">
                Declaration
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-[#1a1a1a]">
                  I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I understand that any false information may result in rejection of my application or termination of employment.
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declarationAgreed"
                  checked={formData.declarationAgreed}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 cursor-pointer"
                />
                <span className="text-sm text-[#1a1a1a]">I agree to the declaration and terms & conditions *</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-[#2563eb] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
              <Link href="/careers" className="flex-1">
                <button
                  type="button"
                  className="w-full bg-gray-200 text-[#1a1a1a] font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="dark-section py-12 mt-12">
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
