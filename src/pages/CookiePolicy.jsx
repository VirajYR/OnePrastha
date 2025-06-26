import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
            Cookie Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            How we use cookies to improve your experience
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="mb-8">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They help us provide you with a better experience by remembering 
                your preferences and analyzing how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="mb-6">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, form submissions, and access to secure areas.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="mb-6">
                We use analytics cookies to understand how visitors interact with our website. 
                This helps us improve our services and provide more relevant property recommendations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
              <p className="mb-6">
                These cookies remember your settings and preferences, such as your preferred language, 
                search filters, and property types, to provide a more personalized experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="mb-8">
                With your consent, we use marketing cookies to show you relevant advertisements 
                and track the effectiveness of our marketing campaigns.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="mb-6">
                We may use third-party services that place cookies on your device, including:
              </p>
              <ul className="mb-8 space-y-2">
                <li><strong>Google Analytics:</strong> For website performance analysis</li>
                <li><strong>Facebook Pixel:</strong> For social media marketing</li>
                <li><strong>Google Maps:</strong> For location services and property mapping</li>
                <li><strong>YouTube:</strong> For embedded property tour videos</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="mb-6">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="mb-8 space-y-2">
                <li>View and delete existing cookies</li>
                <li>Block all cookies from being set</li>
                <li>Block third-party cookies only</li>
                <li>Clear cookies when you close your browser</li>
                <li>Open a private/incognito browsing session</li>
              </ul>

              <p className="mb-8">
                Please note that blocking or deleting cookies may affect the functionality of our 
                website and limit your user experience.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
              <p className="mb-8">
                By continuing to use our website, you consent to our use of cookies as described 
                in this policy. You can withdraw your consent at any time by adjusting your browser 
                settings or contacting us directly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> privacy@luxeestate.com</p>
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

export default CookiePolicy;
