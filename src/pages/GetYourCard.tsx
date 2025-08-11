import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CreditCard, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const GetYourCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateEnglishOnly = (value: string, fieldName: string) => {
    const englishOnlyRegex = /^[a-zA-Z\s]*$/;
    if (!englishOnlyRegex.test(value)) {
      return `${fieldName} must contain only English letters`;
    }
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      return 'Phone number must contain only numbers';
    }
    if (phone.length < 11) {
      return 'Phone number must be at least 11 digits';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Apply input restrictions
    let filteredValue = value;
    
    if (name === 'name') {
      // Allow only English letters and spaces
      filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phone') {
      // Allow only numbers
      filteredValue = value.replace(/[^0-9]/g, '');
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: filteredValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {[key: string]: string} = {};

    // Validate all fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else {
      const nameError = validateEnglishOnly(formData.name, 'Name');
      if (nameError) newErrors.name = nameError;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneError = validatePhone(formData.phone);
      if (phoneError) newErrors.phone = phoneError;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailError = validateEmail(formData.email);
      if (emailError) newErrors.email = emailError;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Application Submitted - Get Your Payless Card | Egypt's Best Travel Discount Card</title>
          <meta name="description" content="Your Payless Card application has been submitted successfully. You'll receive your discount card soon to start saving on travel in Egypt." />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h1>
              <p className="text-gray-600 leading-relaxed">
                Thank you for applying for your Payless Card. We'll process your application and contact you within 2-3 business days.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h2 className="font-semibold text-gray-900 mb-2">What's Next?</h2>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Application review (1-2 days)</li>
                <li>• Card production and shipping</li>
                <li>• Activation instructions via email</li>
                <li>• Start saving on your travels!</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', phone: '', email: '', address: '' });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Get Your Payless Card - Apply for Egypt's Best Travel Discount Card</title>
        <meta name="description" content="Apply for your Payless Card today and start saving up to 20% on hotels, flights, visa services, and Umrah packages across Egypt. Quick and easy application process." />
        <meta name="keywords" content="payless card application, egypt travel discount card, apply payless card, travel savings egypt, discount card registration, hotel discounts egypt" />
        <meta property="og:title" content="Get Your Payless Card - Apply for Egypt's Best Travel Discount Card" />
        <meta property="og:description" content="Apply for your Payless Card and start saving up to 20% on travel services in Egypt" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paylesscard.com/get-your-card" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Get Your Payless Card - Apply Now" />
        <meta name="twitter:description" content="Apply for Egypt's premier travel discount card" />
        <link rel="canonical" href="https://paylesscard.com/get-your-card" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Payless Card
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied customers and start saving up to 20% on hotels, flights, and travel services across Egypt
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Get a Payless Card?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">20%</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Save Up To 20%</h3>
                <p className="text-sm text-gray-600">On all bookings</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">500+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Partner Hotels</h3>
                <p className="text-sm text-gray-600">Across Egypt</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">24/7</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Customer Support</h3>
                <p className="text-sm text-gray-600">Always available</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">FREE</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">No Annual Fee</h3>
                <p className="text-sm text-gray-600">Lifetime membership</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for Your Card
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01xxxxxxxxx (minimum 11 digits)"
                    inputMode="numeric"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-describedby={errors.address ? 'address-error' : undefined}
                />
                {errors.address && (
                  <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Card is valid for 2 years from issue date</li>
                  <li>• Discounts apply to participating partners only</li>
                  <li>• Card is non-transferable and for personal use only</li>
                  <li>• Processing time is 2-3 business days</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              Already have a Payless Card?{' '}
              <a href="/reservation" className="text-blue-600 hover:text-blue-800 font-semibold">
                Make a reservation
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetYourCard;