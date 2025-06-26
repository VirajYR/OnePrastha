import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // GSAP Parallax Effects
    gsap.utils.toArray('.parallax-element').forEach((element) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "DLF Phase 1 Luxury Villa",
      location: "Gurgaon",
      category: "luxury-villas",
      price: "₹8.5 Cr",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Greater Kailash Penthouse",
      location: "New Delhi",
      category: "penthouses",
      price: "₹12 Cr",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 3,
      title: "Sector 62 Modern Complex",
      location: "Noida",
      category: "modern-apartments",
      price: "₹2.8 Cr",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 4,
      title: "Cyber City Commercial Hub",
      location: "Gurgaon",
      category: "commercial",
      price: "₹15 Cr",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 5,
      title: "Dwarka Luxury Residence",
      location: "New Delhi",
      category: "luxury-villas",
      price: "₹4.5 Cr",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 6,
      title: "Faridabad Independent Villa",
      location: "Faridabad",
      category: "luxury-villas",
      price: "₹3.2 Cr",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 7,
      title: "Connaught Place Office",
      location: "New Delhi",
      category: "commercial",
      price: "₹25 Cr",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 8,
      title: "Vasant Kunj Apartment",
      location: "New Delhi",
      category: "modern-apartments",
      price: "₹2.2 Cr",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 9,
      title: "Golf Course Extension Villa",
      location: "Gurgaon",
      category: "luxury-villas",
      price: "₹18 Cr",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 10,
      title: "Sector 137 Penthouse",
      location: "Noida",
      category: "penthouses",
      price: "₹6.8 Cr",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 11,
      title: "MG Road Commercial",
      location: "Gurgaon",
      category: "commercial",
      price: "₹35 Cr",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 12,
      title: "Chattarpur Farmhouse",
      location: "New Delhi",
      category: "luxury-villas",
      price: "₹6.8 Cr",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&crop=center",
      featured: false
    }
  ];

  // Calculate actual counts based on gallery items
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return galleryItems.length;
    return galleryItems.filter(item => item.category === categoryId).length;
  };

  const categories = [
    { id: 'all', name: 'All Projects', count: getCategoryCount('all') },
    { id: 'luxury-villas', name: 'Luxury Villas', count: getCategoryCount('luxury-villas') },
    { id: 'modern-apartments', name: 'Modern Apartments', count: getCategoryCount('modern-apartments') },
    { id: 'penthouses', name: 'Penthouses', count: getCategoryCount('penthouses') },
    { id: 'commercial', name: 'Commercial', count: getCategoryCount('commercial') }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const navigateToProperty = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax-element">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&crop=center"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6"
          >
            Property Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Explore our stunning collection of premium properties across Delhi NCR
          </motion.p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of exceptional properties, each representing the pinnacle of luxury and design.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    item.featured ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => navigateToProperty(item.id)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        item.featured ? 'h-96' : 'h-64'
                      }`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-2">📍 {item.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-yellow-400">{item.price}</span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Properties Completed" },
              { number: "₹5000Cr+", label: "Total Project Value" },
              { number: "50+", label: "Ongoing Projects" },
              { number: "25+", label: "Prime Locations" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
              >
                ✕
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">📍 {selectedImage.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-blue-600">{selectedImage.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Find Your Dream Property?
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
            Let our experts help you discover the perfect property from our premium collection.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Schedule a Viewing
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
