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
        <section className="relative overflow-hidden bg-gradient-to-r from-payless-navy via-payless-blue to-payless-dark-navy text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* Orange accent elements */}
          <div className="absolute top-10 right-20 w-4 h-4 bg-payless-orange rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-6 h-6 bg-payless-orange/40 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-payless-orange rounded-full opacity-80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Save Big on Every Trip with <span className="text-payless-orange">Payless Card</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Egypt's premier travel discount card offering exclusive savings up to 20% on hotels, flights, visa services, and Umrah packages
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-your-card"
                  className="bg-payless-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="text-4xl font-bold text-payless-blue mb-2">50,000+</div>
                <p className="text-gray-600 leading-relaxed">Happy Customers</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-payless-orange mb-2">20%</div>
                <p className="text-gray-600 leading-relaxed">Average Savings</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-payless-navy mb-2">500+</div>
                <p className="text-gray-600 leading-relaxed">Partner Hotels</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-payless-orange mb-2">24/7</div>
                <p className="text-gray-600 leading-relaxed">Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-payless-light-blue to-blue-50" aria-labelledby="services-heading">
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
              <div className="group relative bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-payless-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="inline-flex items-center text-payless-blue hover:text-payless-navy font-semibold transition-colors"
                    aria-label="Book hotel with Payless card discount"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>

              {/* Flight Tickets Service */}
              <div className="group relative bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-payless-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="inline-flex items-center text-payless-blue hover:text-payless-navy font-semibold transition-colors"
                    aria-label="Book flight tickets with Payless card"
                  >
                    Book Flight →
                  </Link>
                </div>
              </div>

              {/* Visa Services */}
              <div className="group relative bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-payless-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="inline-flex items-center text-payless-blue hover:text-payless-navy font-semibold transition-colors"
                    aria-label="Apply for visa services with Payless card"
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>

              {/* Umrah Service */}
              <div className="group relative bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-payless-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="inline-flex items-center text-payless-blue hover:text-payless-navy font-semibold transition-colors"
                    aria-label="Book Umrah package with Payless card"
                  >
                    Book Package →
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-payless-blue to-payless-navy rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-8 w-3 h-3 bg-payless-orange rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-12 w-2 h-2 bg-payless-orange rounded-full opacity-80"></div>
              <h3 className="text-2xl font-bold mb-4">Ready to Start Saving on Your Next Trip?</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Join thousands of satisfied customers and get your Payless Card today for exclusive travel discounts
              </p>
              <Link
                to="/get-your-card"
                className="bg-payless-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Get your Payless card and start saving"
              >
                Get Your Card Now
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Hear from Egyptian travelers who saved significantly on their trips with Payless Card
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-orange w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ahmed M.</h3>
                    <p className="text-sm text-gray-600">Cairo</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "I saved over 3,000 EGP on my family vacation to Hurghada! The Payless Card gave us amazing discounts on hotels and activities. Highly recommended!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-navy w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Fatima S.</h3>
                    <p className="text-sm text-gray-600">Alexandria</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The visa processing service was incredibly fast and affordable. I saved both time and money for my business trip to Dubai. Excellent service!"
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-blue w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Omar K.</h3>
                    <p className="text-sm text-gray-600">Giza</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Booked flights to London with 18% discount! The customer service was outstanding and the booking process was seamless. Will definitely use again."
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-orange w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Mona A.</h3>
                    <p className="text-sm text-gray-600">Mansoura</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Our Umrah package was perfectly organized and we saved 2,500 EGP compared to other providers. The spiritual journey was unforgettable!"
                </p>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-navy w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Youssef H.</h3>
                    <p className="text-sm text-gray-600">Aswan</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Stayed at a 5-star resort in Sharm El Sheikh with 20% off! The quality was exceptional and the savings allowed us to extend our vacation."
                </p>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-gradient-to-br from-payless-light-blue to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-payless-light-blue/50">
                <div className="flex items-center mb-4">
                  <div className="bg-payless-blue w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Nadia T.</h3>
                    <p className="text-sm text-gray-600">Port Said</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-payless-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The 24/7 customer support helped me when I needed to change my booking last minute. Professional service and great savings every time!"
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">Join thousands of satisfied customers</p>
              <Link
                to="/get-your-card"
                className="bg-gradient-to-r from-payless-blue to-payless-navy hover:from-payless-navy hover:to-payless-dark-navy text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Card Today
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-payless-light-blue to-blue-50" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to know about the Payless Card
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q1</span>
                  </div>
                  What is the Payless Card?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  The Payless Card is a travel discount card that helps you save money on trips, hotel bookings, and transportation services.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q2</span>
                  </div>
                  How can I apply for a Payless Card?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  You can apply directly through our website by filling in the "Get Your Card" form and following the instructions.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q3</span>
                  </div>
                  How does the Payless Card save me money?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  We have partnerships with trusted travel and service providers, offering exclusive discounts that you can access with your Payless Card.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q4</span>
                  </div>
                  Is the Payless Card free?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  No, there is a one-time payment or subscription fee depending on the plan you choose.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q5</span>
                  </div>
                  How long is my Payless Card valid?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Your card is valid for one year from the date of activation.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q6</span>
                  </div>
                  Can I use the Payless Card internationally?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Yes! Our discounts and offers are available for both domestic and international travel.
                </p>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q7</span>
                  </div>
                  What should I do if I lose my Payless Card?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Contact our support team immediately to block the lost card and request a replacement.
                </p>
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white/80 backdrop-blur-glass rounded-2xl shadow-glass p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-payless-navy mb-3 flex items-center">
                  <div className="w-8 h-8 bg-payless-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">Q8</span>
                  </div>
                  How can I check the latest offers and discounts?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">
                  Log in to your account on our website or subscribe to our newsletter to receive updates.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+201044503305"
                  className="bg-payless-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Call Us: 010 44503305
                </a>
                <a
                  href="mailto:info@paylesscard.com"
                  className="bg-payless-blue hover:bg-payless-navy text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Payless Section */}
        <section id="about" className="py-20 bg-white" aria-labelledby="why-choose-heading">
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
                <div className="bg-payless-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-payless-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Save up to 20% on every booking with our verified partner network across Egypt
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-payless-orange-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-payless-orange" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted by Thousands</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 50,000 satisfied customers trust Payless Card for their travel needs
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-payless-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-payless-navy" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your bookings and personal information are protected with bank-level security
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-payless-orange-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-payless-orange" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock customer support to assist you with all your travel needs
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-payless-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-payless-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to 500+ partner hotels and travel services across Egypt and beyond
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-payless-orange-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-payless-orange" aria-hidden="true" />
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
        <section id="vouchers" className="py-20 bg-gradient-to-br from-payless-light-blue to-blue-50" aria-labelledby="card-display-heading">
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
                className="bg-gradient-to-r from-payless-blue to-payless-navy hover:from-payless-navy hover:to-payless-dark-navy text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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