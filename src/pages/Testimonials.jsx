import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Gupta",
      role: "Tech Executive",
      company: "Microsoft India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "LuxeEstate made finding our dream home in Gurgaon effortless. Their attention to detail and professional service exceeded our expectations. The entire process was smooth and transparent.",
      rating: 5,
      property: "DLF Phase 1 Villa",
      location: "Gurgaon"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Investment Banker",
      company: "Goldman Sachs",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Outstanding service! The team understood exactly what we were looking for and presented options that matched our criteria perfectly. Highly recommended for luxury property investments.",
      rating: 5,
      property: "Greater Kailash Penthouse",
      location: "New Delhi"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Entrepreneur",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Professional, knowledgeable, and trustworthy. LuxeEstate helped us secure an excellent property in Noida with great investment potential. Their market insights were invaluable.",
      rating: 5,
      property: "Sector 62 Apartment",
      location: "Noida"
    },
    {
      id: 4,
      name: "Kavita Reddy",
      role: "Doctor",
      company: "Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Exceptional experience from start to finish. The team's dedication and expertise made our home buying journey stress-free. We couldn't be happier with our new home.",
      rating: 5,
      property: "Dwarka Modern Villa",
      location: "New Delhi"
    },
    {
      id: 5,
      name: "Sanjay Malhotra",
      role: "Finance Director",
      company: "HDFC Bank",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "LuxeEstate's premium service and attention to client needs is unmatched. They helped us find the perfect family home with all the amenities we desired.",
      rating: 5,
      property: "Faridabad Independent House",
      location: "Faridabad"
    },
    {
      id: 6,
      name: "Neha Agarwal",
      role: "Marketing Head",
      company: "Unilever",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: "The team's market knowledge and negotiation skills saved us both time and money. Their commitment to finding the right property for our needs was impressive.",
      rating: 5,
      property: "Cyber City Apartment",
      location: "Gurgaon"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "₹2000Cr+", label: "Properties Sold", icon: "🏠" },
    { number: "15+", label: "Years Experience", icon: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Client Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Discover how we've helped families across Delhi NCR find their perfect homes 
            and make their real estate dreams come true.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real people who trusted us with their most important investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-yellow-400 text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-8 leading-relaxed text-center italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Property Info */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6 text-center">
                  <p className="text-sm text-blue-600 font-semibold">Property Purchased</p>
                  <p className="text-gray-800 font-medium">{testimonial.property}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Featured Client Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how we helped the Gupta family find their dream villa in DLF Phase 1.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BHACKCNDMW8"
                title="Client Success Story - Luxury Real Estate Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join hundreds of satisfied clients who found their dream properties with LuxeEstate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Search
              </motion.div>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
