import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  // Handle external actions
  const handleAction = (type, value) => {
    switch (type) {
      case 'directions':
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`, '_blank');
        break;
      case 'call':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}?subject=Property Inquiry&body=Hi, I'm interested in your real estate services.`, '_self');
        break;
      case 'whatsapp':
        const phoneNumber = value.replace(/\D/g, '');
        window.open(`https://wa.me/${phoneNumber}?text=Hi! I would like to schedule a visit to your office.`, '_blank');
        break;
      default:
        break;
    }
  };

  // Get company data from JSON
  const { company } = websiteData;

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Office",
      details: [company.address],
      action: "Get Directions",
      actionType: "directions",
      actionValue: company.address
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [company.phone],
      action: "Call Now",
      actionType: "call",
      actionValue: company.phone
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: [company.email],
      action: "Send Email",
      actionType: "email",
      actionValue: company.email
    },
    {
      icon: "�",
      title: "Schedule Visit",
      details: [company.whatsapp, "WhatsApp us to schedule"],
      action: "Schedule Visit",
      actionType: "whatsapp",
      actionValue: company.whatsapp
    }
  ];

  // Get team data from JSON
  const agents = websiteData.team;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section id="contact-hero" className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Ready to find your dream property? Get in touch with our expert team 
            and let us guide you through your real estate journey.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="luxury">Luxury</option>
                    <option value="investment">Investment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                    ))}
                    <button 
                      onClick={() => handleAction(info.actionType, info.actionValue)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 mt-2 hover:underline"
                    >
                      {info.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-100 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-blue-100 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Agents */}
        <motion.section
          id="agents"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Agents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{agent.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{agent.role}</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p className="mb-1">{agent.phone}</p>
                  <p className="mb-3">{agent.email}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {agent.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => handleAction('email', agent.email)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Contact Agent
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Our Office</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our office is located in the heart of Delhi NCR, easily accessible 
                and equipped with modern facilities. Come visit us for a personal consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>{company.address}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🚗</span>
                  <span>Free parking available</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🚇</span>
                  <span>Metro accessible</span>
                </div>
              </div>
              <button 
                onClick={() => handleAction('directions', company.address)}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Get Directions
              </button>
            </div>
            <div className="h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5089621071147!2d77.08579931507635!3d28.494343082456785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1938b8876e0b%3A0x9c5ff2e94d091b9e!2sDLF%20Cyber%20City%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1635847294742!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LuxeEstate Office Location"
                className="rounded-r-2xl lg:rounded-r-2xl lg:rounded-l-none"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;