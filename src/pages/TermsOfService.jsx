import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Terms and conditions for using our services
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> June 26, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-8">
                By accessing and using LuxeEstate's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to these terms, you should 
                not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-6">
                Permission is granted to temporarily use our website and services for personal, 
                non-commercial transitory viewing only. This includes:
              </p>
              <ul className="mb-8 space-y-2">
                <li>Viewing property listings and information</li>
                <li>Contacting our agents for legitimate inquiries</li>
                <li>Using our property search and filter tools</li>
                <li>Accessing educational content and market reports</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Restrictions</h2>
              <p className="mb-6">
                You are expressly prohibited from:
              </p>
              <ul className="mb-8 space-y-2">
                <li>Modifying or copying our materials without permission</li>
                <li>Using materials for commercial purposes or public display</li>
                <li>Attempting to reverse engineer any software on our website</li>
                <li>Removing copyright or proprietary notations</li>
                <li>Using our services for any unlawful purpose</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Property Information</h2>
              <p className="mb-8">
                While we strive to provide accurate and up-to-date property information, we cannot 
                guarantee the accuracy of all details. Property availability, pricing, and features 
                are subject to change. We recommend verifying all information independently.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Accounts</h2>
              <p className="mb-6">
                When creating an account, you agree to:
              </p>
              <ul className="mb-8 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="mb-8">
                LuxeEstate shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="mb-8">
                These terms and conditions are governed by and construed in accordance with the laws 
                of India, and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that state or location.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> legal@luxeestate.com</p>
                <p><strong>Phone:</strong> +91 9999-123-456</p>
                <p><strong>Address:</strong> 123 Business District, Gurgaon, Haryana 122002</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
