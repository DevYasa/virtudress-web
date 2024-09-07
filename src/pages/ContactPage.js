import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-[#13072e] min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <form className="bg-gradient-to-br from-[#13072e] to-[#3f2182] rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-white rounded p-2" />
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-white rounded p-2" />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="phone" className="block mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-white rounded p-2" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-white rounded p-2"></textarea>
              </div>
              <button type="submit" className="w-24 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">For questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>virtudress@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
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