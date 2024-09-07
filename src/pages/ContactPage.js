import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-[#13072e] min-h-screen text-white pt-28">
      <div className="max-w-6xl mx-auto bg-[#1f0f47] rounded-3xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400" placeholder="Your name" />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400" placeholder="Your email" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400" placeholder="Your phone" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows="6" className="w-full bg-[#3d2373] rounded-lg p-3 text-white placeholder-gray-400" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-white text-[#13072e] font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                Submit
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