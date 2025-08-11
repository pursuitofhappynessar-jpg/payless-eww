import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Phone, Mail, CreditCard, MapPin, CheckCircle } from 'lucide-react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    idSerial: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    serviceType: 'hotel'
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

  const validateIdSerial = (idSerial: string) => {
    if (idSerial.length !== 16) {
      return 'Make sure you enter your Payless card number correctly.';
    }
    if (!idSerial.startsWith('40235050')) {
      return 'Make sure you enter your Payless card number correctly.';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Apply input restrictions
    let filteredValue = value;
    
    if (name === 'name') {
      // Allow only English letters and spaces
      filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phone' || name === 'idSerial') {
      // Allow only numbers
      filteredValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'email') {
      // Allow English letters, numbers, and email-specific characters
      filteredValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
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

    if (!formData.idSerial.trim()) {
      newErrors.idSerial = 'Payless card number is required';
    } else {
      const idError = validateIdSerial(formData.idSerial);
      if (idError) newErrors.idSerial = idError;
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    }

    // Validate check-out is after check-in
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Reservation submitted:', formData);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Reservation Confirmed - Payless Card Members | Thank You for Your Booking</title>
          <meta name="description" content="Your reservation has been confirmed! Thank you for using your Payless Card. You'll receive confirmation details and enjoy exclusive member discounts." />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Reservation Confirmed!</h1>
              <p className="text-gray-600 leading-relaxed">
                Thank you for your reservation. We'll send you confirmation details and contact you within 24 hours.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h2 className="font-semibold text-gray-900 mb-2">Your Benefits</h2>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Up to 20% discount applied</li>
                <li>• Priority booking confirmation</li>
                <li>• 24/7 customer support</li>
                <li>• Flexible cancellation options</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  idSerial: '',
                  destination: '',
                  checkIn: '',
                  checkOut: '',
                  guests: '1',
                  serviceType: 'hotel'
                });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Make a Reservation - Payless Card Members | Book Hotels, Flights & Travel Services</title>
        <meta name="description" content="Make your travel reservation with your Payless Card and save up to 20% on hotels, flights, visa services, and Umrah packages across Egypt. Exclusive member benefits included." />
        <meta name="keywords" content="payless card reservation, book hotel egypt, flight booking discount, travel reservation egypt, payless member booking, hotel discounts egypt" />
        <meta property="og:title" content="Make a Reservation - Payless Card Members" />
        <meta property="og:description" content="Book your travel with Payless Card and save up to 20% on hotels and flights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paylesscard.com/reservation" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Make a Reservation - Payless Card" />
        <meta name="twitter:description" content="Book travel with exclusive Payless Card member discounts" />
        <link rel="canonical" href="https://paylesscard.com/reservation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Make Your Reservation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Book your next trip with your Payless Card and enjoy exclusive member discounts up to 20% on hotels, flights, and travel services
            </p>
          </div>

          {/* Member Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white">
            <h2 className="text-xl font-bold mb-4 text-center">🎉 Exclusive Member Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">20%</div>
                <div className="text-sm">Maximum Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm">Priority Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">FREE</div>
                <div className="text-sm">Cancellation</div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Reservation Details
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type Selection */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="hotel">Hotel Booking</option>
                  <option value="flight">Flight Booking</option>
                  <option value="visa">Visa Services</option>
                  <option value="umrah">Umrah Package</option>
                </select>
              </div>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* ID Serial Field */}
                <div>
                  <label htmlFor="idSerial" className="block text-sm font-medium text-gray-700 mb-2">
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    Payless Card Number *
                  </label>
                  <input
                    type="text"
                    id="idSerial"
                    name="idSerial"
                    value={formData.idSerial}
                    onChange={handleInputChange}
                    placeholder="xxxxxxxxxxxxxxxx"
                    maxLength={16}
                    inputMode="numeric"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.idSerial ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.idSerial ? 'idSerial-error' : undefined}
                  />
                  {errors.idSerial && (
                    <p id="idSerial-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.idSerial}
                    </p>
                  )}
                </div>
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Destination *
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Where would you like to go?"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.destination ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-describedby={errors.destination ? 'destination-error' : undefined}
                />
                {errors.destination && (
                  <p id="destination-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.destination}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Check-in Date */}
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.checkIn ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
                  />
                  {errors.checkIn && (
                    <p id="checkIn-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                {/* Check-out Date */}
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.checkOut ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
                  />
                  {errors.checkOut && (
                    <p id="checkOut-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.checkOut}
                    </p>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💡 Booking Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Your Payless Card discount will be automatically applied</li>
                  <li>• Free cancellation up to 24 hours before check-in</li>
                  <li>• Contact our 24/7 support for special requests</li>
                  <li>• Group bookings (8+ guests) get additional discounts</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              Don't have a Payless Card yet?{' '}
              <a href="/get-your-card" className="text-blue-600 hover:text-blue-800 font-semibold">
                Get your card now
              </a>{' '}
              and start saving on your travels!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;