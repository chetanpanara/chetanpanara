import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('access_key', '9320aea8-0dcb-4d77-9beb-6ff151d65bf7'); // Replace with your actual Web3Forms access key
    formData.append('fullname', e.target.fullname.value);
    formData.append('email', e.target.email.value);
    formData.append('subject', e.target.subject.value);
    formData.append('message', e.target.message.value);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Reset form data
        setFormData({
          fullname: '',
          email: '',
          subject: '',
          message: ''
        });

        // Show success message
        setIsSubmitted(true);

        // Optional: Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Handle error
        console.error('Form submission failed', data);
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-3xl mt-20 md:text-4xl text-center font-bold text-white mb-2">
        Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Us</span>
      </h3>
      <p className="text-gray-300 text-center text-lg lg:text-sm tracking-wide line-clamp-3 mb-6">Let's connect & build something great.</p>

      {isSubmitted && (
        <div className="text-center text-green-400 mb-4">
          Your message has been sent successfully!
        </div>
      )}

      <div className="text-white flex items-center justify-center w-full">
        <div className="w-full lg:px-8">
          <div className="overflow-hidden flex flex-col md:flex-row relative">
            {/* Contact Information Section (unchanged) */}
            {/* Contact Information Section */}
            <div className="text-white p-4 lg:p-8 md:p-8 md:w-1/2 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-green-400">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore nulla quae earum aspernatur dignissimos asperiores! Minus ducimus quasi asperiores?
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">B/H Mira park water tank,Girdharnagar,Botad-364710,Gujarat</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+91 94288 38882</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">chetanpanara8@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="p-4 lg:p-8 md:p-8 md:w-1/2 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullname" className="block text-sm tracking-widest font-medium text-gray-300 mb-2">
                    FullName
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder='Enter FullName'
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full px-3 tracking-wider py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 tracking-wider py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm tracking-widest font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder='Enter Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 tracking-widerpy-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-widest font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter Message'
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 tracking-wider py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;