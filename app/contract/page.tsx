"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Contract = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would normally send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're excited to hear about your project. Fill out the form below and we'll get back to you within 24 hours to discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="bg-[#53c28b] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Quick turnaround time</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#53c28b] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">100% satisfaction</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 sm:h-72 md:h-96 w-full">
            <Image
              src="/contact.png"
              alt="Contact illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#53c28b] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Your contract request has been submitted successfully. We'll contact you shortly to discuss the next steps.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="py-3 px-6 bg-[#53c28b] text-white rounded-md hover:bg-[#45a475] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Contract Request Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      >
                        <option value="">Select Project Type</option>
                        <option value="website">Website Development</option>
                        <option value="app">Mobile App</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over50k">Over $50,000</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Urgent - ASAP</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">1-3 months</option>
                        <option value="6months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#53c28b]"
                      placeholder="Please describe your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-3 px-8 bg-[#53c28b] text-white rounded-md hover:bg-[#45a475] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          {/* Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#53c28b] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Initial Consultation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We'll discuss your project requirements and goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#53c28b] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Proposal & Contract</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We'll provide a detailed proposal and contract</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#53c28b] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Design & Development</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Our team will design and develop your project</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#53c28b] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Delivery & Support</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Project delivered with ongoing support options</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 text-[#53c28b]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:contact@example.com" className="text-sm text-[#53c28b] hover:underline">contact@example.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-[#53c28b]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+11234567890" className="text-sm text-[#53c28b] hover:underline">+1 (123) 456-7890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-[#53c28b]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Office Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monday-Friday: 9am-6pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How long does a typical project take?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take several months. We'll provide a detailed timeline during our proposal phase.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What's your payment structure?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically require a 30% deposit to begin work, with remaining payments tied to project milestones. For projects under $5,000, we may require a 50% upfront payment.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Do you offer maintenance and support?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly after launch. These can be discussed during the contract phase.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What if I'm not satisfied with the work?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work iteratively and value your feedback throughout the process. Our contracts include revision clauses to ensure you're completely satisfied with the final product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
