import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
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
            Disclaimer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Important information about our services and liability
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
              <p className="mb-8">
                The information contained on this website is for general information purposes only. 
                While we endeavor to keep the information up to date and correct, we make no 
                representations or warranties of any kind, express or implied, about the completeness, 
                accuracy, reliability, suitability, or availability of the website or the information, 
                products, services, or related graphics contained on the website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Information</h2>
              <p className="mb-6">
                All property information, including but not limited to:
              </p>
              <ul className="mb-8 space-y-2">
                <li>Property prices, dimensions, and specifications</li>
                <li>Amenities and features descriptions</li>
                <li>Location details and nearby facilities</li>
                <li>Photography and virtual tours</li>
                <li>Availability status and possession dates</li>
              </ul>
              <p className="mb-8">
                This information is provided by property developers, owners, and third parties. 
                While we strive to verify all information, we cannot guarantee its accuracy or 
                completeness. Prospective buyers should conduct their own due diligence and 
                verification before making any decisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis and Valuations</h2>
              <p className="mb-8">
                Any market analysis, property valuations, investment advice, or market predictions 
                provided on this website are based on current market conditions and historical data. 
                Real estate markets are subject to fluctuations, and past performance does not 
                guarantee future results. All investment decisions should be made after consulting 
                with qualified financial and legal advisors.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content</h2>
              <p className="mb-8">
                Our website may contain links to external websites and third-party content. 
                These links are provided for convenience only. We have no control over the 
                content of external sites and accept no responsibility for their content, 
                accuracy, or availability.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services</h2>
              <p className="mb-8">
                LuxeEstate provides real estate brokerage and consulting services. We are not 
                licensed to provide legal, financial, or tax advice. Clients should seek 
                independent professional advice for matters relating to legal documentation, 
                financing arrangements, tax implications, and regulatory compliance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="mb-8">
                In no event shall LuxeEstate, its directors, employees, or agents be liable for 
                any direct, indirect, incidental, special, consequential, or punitive damages 
                arising from your use of this website or our services, including but not limited 
                to loss of profits, revenue, data, or business opportunities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
              <p className="mb-8">
                All properties marketed through our platform are subject to applicable local, 
                state, and national laws and regulations, including RERA (Real Estate Regulatory 
                Authority) compliance where applicable. Buyers are advised to verify all 
                regulatory approvals and compliance certificates independently.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates and Changes</h2>
              <p className="mb-8">
                This disclaimer may be updated from time to time without notice. Continued use 
                of our website constitutes acceptance of any changes to this disclaimer.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="mb-6">
                For questions about this disclaimer, please contact us:
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

export default Disclaimer;
