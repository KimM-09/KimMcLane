import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS configuration from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

  // Check if EmailJS is properly configured
  const isEmailJSConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && CONTACT_EMAIL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailJSConfigured) {
      setSubmitMessage('Email service is not configured. Please check your environment variables.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: CONTACT_EMAIL
        },
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='p-4'>
    <div id="contact" className="scroll-mt-24 max-w-2xl mx-auto mb-4 p-6 bg-stone-100 text-stone-900 dark:text-stone-100 dark:bg-[#1c1917] dark:border-slate-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-stone-900 dark:text-stone-100">Contact Me</h2>

      {!isEmailJSConfigured && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          <strong>Development Notice:</strong> EmailJS is not configured. Please set up your environment variables in the .env file.
        </div>
      )}

      {submitMessage && (
        <div className={`mb-6 p-4 rounded-md ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-900 dark:text-stone-100 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent resize-vertical"
            placeholder="Tell me what's on your mind..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-violet-600 dark:bg-fuchsia-600 cursor-pointer'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
