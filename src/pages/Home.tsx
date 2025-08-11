import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, Hotel, FileText, MapPin, Star, Users, Shield, Clock } from 'lucide-react';
import PaylessCard from '../components/PaylessCard';

const Home: React.FC = () => {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Payless Card",
      "description": "Egypt's premier travel discount card offering up to 20% savings on hotels, flights, and travel services",
      "url": "https://paylesscard.com",
      "logo": "https://paylesscard.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+20-xxx-xxx-xxxx",
        "contactType": "customer service"
      },
      "areaServed": "Egypt",
      "serviceType": ["Travel Discounts", "Hotel Bookings", "Flight Reservations", "Visa Services", "Umrah Packages"]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Payless Card - Egypt's #1 Travel Discount Card | Save Up to 20% on Hotels & Travel</title>
        <meta name="description" content="Get your Payless Card and save up to 20% on hotels, flights, visa services, and Umrah packages in Egypt. Join thousands of satisfied customers enjoying exclusive travel discounts." />
        <meta name="keywords" content="payless card, egypt travel discounts, hotel discount card, cheap flights egypt, travel deals, discount travel services, egypt tourism, hotel bookings, flight reservations" />
        <meta property="og:title" content="Payless Card - Egypt's #1 Travel Discount Card" />
        <meta property="og:description" content="Save up to 20% on hotels, flights, and travel services with Egypt's premier discount card" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paylesscard.com" />
        <meta property="og:image" content="https://paylesscard.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payless Card - Egypt's #1 Travel Discount Card" />
        <meta name="twitter:description" content="Save up to 20% on hotels, flights, and travel services" />
        <meta name="twitter:image" content="https://paylesscard.com/twitter-card.jpg" />
        <link rel="canonical" href="https://paylesscard.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Save Big on Every Trip with <span className="text-yellow-300">Payless Card</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Egypt's premier travel discount card offering exclusive savings up to 20% on hotels, flights, visa services, and Umrah packages
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-your-card"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Apply for your Payless discount card"
                >
                  Get Your Card Now
                </Link>
                <Link
                  to="/reservation"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                  aria-label="Make a travel reservation with Payless card"
                >
                  Make Reservation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">Payless Card Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <p className="text-gray-600 leading-relaxed">Happy Customers</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
                <p className="text-gray-600 leading-relaxed">Average Savings</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600 leading-relaxed">Partner Hotels</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600 leading-relaxed">Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Our Premium Travel Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover amazing travel deals and exclusive discounts with your Payless Card across Egypt's top destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Hotels Service */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Up to 20% OFF
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Luxury hotel rooms with Payless card discounts in Egypt"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Hotel className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Hotels</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Book luxury accommodations at Egypt's finest hotels with exclusive Payless card member discounts
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    <li>• 5-star luxury resorts</li>
                    <li>• Business hotels</li>
                    <li>• Boutique accommodations</li>
                    <li>• Family-friendly resorts</li>
                  </ul>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    aria-label="Book hotel with Payless card discount"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>

              {/* Flight Tickets Service */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Prices
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Airplane and flight booking services with Payless card savings"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Plane className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flight Tickets</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Find the best flight deals to domestic and international destinations with guaranteed lowest prices
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    <li>• Domestic flights within Egypt</li>
                    <li>• International destinations</li>
                    <li>• Group booking discounts</li>
                    <li>• Flexible cancellation</li>
                  </ul>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    aria-label="Book flight tickets with Payless card"
                  >
                    Book Flight →
                  </Link>
                </div>
              </div>

              {/* Visa Services */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Fast Processing
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Visa application and processing services through Payless card"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <FileText className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visa Services</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Hassle-free visa processing for all destinations with expert guidance and fast approval times
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    <li>• Tourist visa processing</li>
                    <li>• Business visa assistance</li>
                    <li>• Document preparation</li>
                    <li>• Express processing available</li>
                  </ul>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    aria-label="Apply for visa services with Payless card"
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>

              {/* Umrah Service */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sacred Journey
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/makkahbanner3.webp"
                    alt="Umrah travel service by Payless"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Umrah Packages</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Complete Umrah packages with accommodation, transportation, and guided spiritual journey experiences
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    <li>• All-inclusive packages</li>
                    <li>• Premium accommodations</li>
                    <li>• Expert spiritual guides</li>
                    <li>• Group and individual options</li>
                  </ul>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    aria-label="Book Umrah package with Payless card"
                  >
                    Book Package →
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Saving on Your Next Trip?</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Join thousands of satisfied customers and get your Payless Card today for exclusive travel discounts
              </p>
              <Link
                to="/get-your-card"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Get your Payless card and start saving"
              >
                Get Your Card Now
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Payless Section */}
        <section className="py-20 bg-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Payless Card?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Experience the benefits that make us Egypt's most trusted travel discount card
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Save up to 20% on every booking with our verified partner network across Egypt
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted by Thousands</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 50,000 satisfied customers trust Payless Card for their travel needs
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your bookings and personal information are protected with bank-level security
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock customer support to assist you with all your travel needs
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to 500+ partner hotels and travel services across Egypt and beyond
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simple online booking process with instant confirmation and flexible options
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payless Card Display */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="card-display-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="card-display-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Your Gateway to Exclusive Travel Savings
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                The Payless Card - your key to unlocking incredible discounts on hotels, flights, and travel services across Egypt
              </p>
            </div>
            <div className="flex justify-center">
              <PaylessCard />
            </div>
            <div className="text-center mt-12">
              <Link
                to="/get-your-card"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Apply for your Payless discount card today"
              >
                Get Your Card Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;