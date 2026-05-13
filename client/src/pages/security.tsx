import {
  Shield,
  Camera,
  MapPin,
  Phone,
  AlertCircle,
  CheckCircle,
  Lock,
  FileText,
  Users,
  Clock,
} from "lucide-react";

export default function Security() {
  const customerFeatures = [
    {
      icon: Camera,
      title: "Body Camera Monitoring",
      description:
        "All riders are equipped with HD body cameras that record every ride for your safety and protection.",
    },
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description:
        "Track your rider's exact location in real-time throughout your entire journey.",
    },
    {
      icon: Phone,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available round-the-clock to assist with any concerns or emergencies.",
    },
    {
      icon: AlertCircle,
      title: "SOS Emergency System",
      description:
        "One-tap emergency button connects you directly to our support team and local authorities if needed.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description:
        "All your personal information and ride data is encrypted with military-grade security protocols.",
    },
    {
      icon: FileText,
      title: "Incident Reporting",
      description:
        "Comprehensive incident reporting system with automatic documentation and follow-up procedures.",
    },
  ];

  const riderFeatures = [
    {
      icon: Shield,
      title: "Rider Verification",
      description:
        "All riders undergo thorough background checks and identity verification before joining our platform.",
    },
    {
      icon: Camera,
      title: "Body Camera Protection",
      description:
        "HD body cameras protect riders by recording interactions and providing evidence in case of disputes.",
    },
    {
      icon: MapPin,
      title: "Live Route Monitoring",
      description:
        "Dispatch team monitors all active routes for rider safety and optimal service delivery.",
    },
    {
      icon: Phone,
      title: "24/7 Rider Support",
      description:
        "Dedicated support line for riders with emergency assistance and dispute resolution.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Assistance",
      description:
        "Quick access to emergency services and immediate support in case of accidents or incidents.",
    },
    {
      icon: Users,
      title: "Community Safety",
      description:
        "Rider community forum and safety tips to help all riders stay secure on the road.",
    },
    {
      icon: Shield,
      title: "Bike & Health Insurance",
      description:
        "Comprehensive coverage including motorcycle insurance for vehicle protection and health insurance covering medical expenses, hospitalization, and disability benefits during recovery.",
    },
  ];

  const securityMeasures = [
    {
      category: "Verification & Screening",
      items: [
        "Background checks for all riders",
        "Identity verification with government-issued ID",
        "Driving license validation",
        "Vehicle registration verification",
        "Regular re-screening and audits",
      ],
    },
    {
      category: "Technology & Monitoring",
      items: [
        "HD body cameras on all motorcycles",
        "GPS tracking with real-time updates",
        "Live dispatch monitoring",
        "Automated incident detection",
        "Secure data storage with encryption",
      ],
    },
    {
      category: "Support & Response",
      items: [
        "24/7 customer support team",
        "Emergency response protocols",
        "SOS button with direct dispatch",
        "Incident investigation team",
        "Insurance coverage for all rides",
      ],
    },
    {
      category: "Privacy & Data Protection",
      items: [
        "End-to-end encryption",
        "GDPR compliant data handling",
        "Secure payment processing",
        "Regular security audits",
        "Data retention policies",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/manus-storage/pasted_file_uls0iM_image_fa3e6594.png"
          alt="Ze Rider Security - Your Safety Our Promise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Your Safety is Our Priority
              </h1>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-white font-medium leading-relaxed">
                  We implement comprehensive security measures to protect both
                  customers and riders. From real-time monitoring to emergency
                  response systems, your safety is at the core of everything we
                  do.
                </p>
              </div>

              <div className="flex items-center gap-4 text-white">
                <Shield size={24} className="text-green-400" />
                <span className="text-lg font-semibold">
                  Trusted by thousands of users daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Security Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Safety Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've implemented multiple layers of protection to ensure every
              ride is safe and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rider Security Features */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rider Safety Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our riders are equipped with the best tools and support to ensure
              their safety and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {riderFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Security Measures */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Security Framework
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A multi-layered approach to security covering verification,
              technology, support, and data protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {measure.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {measure.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-2 border-red-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-red-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">
                  Emergency Response
                </h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                In case of any emergency, our system is designed to respond
                immediately. With a single tap on the SOS button in our app,
                you're connected to our emergency response team who can:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Clock className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Immediate Response:</strong> Average response time
                    under 30 seconds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Direct Communication:</strong> Live chat with
                    support team and dispatch
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Location Sharing:</strong> Automatic location
                    sharing with emergency services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">
                    <strong>Emergency Contacts:</strong> Notification to your
                    emergency contacts
                  </span>
                </li>
              </ul>

              <p className="text-gray-700 font-semibold">
                Contact our support team:{" "}
                <a
                  href="tel:+923142560770"
                  className="text-blue-600 hover:underline"
                >
                  +92 314 2560770
                </a>{" "}
                or{" "}
                <a
                  href="tel:02134491808"
                  className="text-blue-600 hover:underline"
                >
                  021-34491808 (PTCL)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trust & Transparency
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in complete transparency with our users about how we
              protect their safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Regular Audits
              </h3>
              <p className="text-gray-700 mb-4">
                Our security systems undergo regular independent audits and
                compliance checks to ensure we meet the highest standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Monthly security reviews</li>
                <li>✓ Quarterly compliance audits</li>
                <li>✓ Annual penetration testing</li>
                <li>✓ Continuous threat monitoring</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Improvement
              </h3>
              <p className="text-gray-700 mb-4">
                We constantly update and improve our security measures based on
                user feedback and emerging threats.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ User feedback integration</li>
                <li>✓ Technology upgrades</li>
                <li>✓ Training programs</li>
                <li>✓ Incident analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Security?
          </h2>
          <p className="text-blue-100 mb-6">
            Contact our support team for more information about our security
            measures and protocols.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-blue-400" size={24} />
                <span className="font-bold text-lg text-white">Ze Rider</span>
              </div>
              <p className="text-gray-400">
                Your trusted ride-hailing and courier delivery service with
                world-class security.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/security"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

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
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2026 Ze Rider. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
