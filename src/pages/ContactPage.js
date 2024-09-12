import React, { useState } from 'react';
import api from '../utils/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    let newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;  // Assumes a 10-digit phone number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format (10 digits required)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear the error for this field as the user types
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setServerError('');
    setSuccess('');

    if (validateForm()) {
      try {
        const response = await api.post('/contact/submit', formData);
        setSuccess(response.data.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (err) {
        setServerError(err.response?.data?.error || 'An error occurred. Please try again.');
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-[#13072e] min-h-screen text-white pt-28">
      <div className="max-w-6xl mx-auto bg-[#1f0f47] rounded-3xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            {serverError && <p className="text-red-500 mb-4">{serverError}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your name" 
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Your email" 
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="w-1/2">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Your phone" 
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400 ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={submitting}
                className="bg-white text-[#13072e] font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300 mb-8">
              For questions, technical assistance, or collaboration opportunities via the contact information provided.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-[#13072e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-[#13072e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span>virtudress@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-[#13072e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span>123, main street, matara.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;