import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "2024 Real Estate Market Trends: What Buyers Need to Know",
      excerpt: "Discover the latest market trends and insights that are shaping the real estate landscape this year.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "First-Time Homebuyer's Complete Guide",
      excerpt: "Everything you need to know about buying your first home, from financing to closing.",
      category: "buying-guide",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "Luxury Home Investment Strategies",
      excerpt: "Learn how to maximize returns on luxury real estate investments in today's market.",
      category: "investment",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 4,
      title: "Top 10 Neighborhoods to Watch in 2024",
      excerpt: "Explore emerging neighborhoods that offer great potential for homebuyers and investors.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Living: Eco-Friendly Home Features",
      excerpt: "Discover the latest eco-friendly home features that are becoming must-haves for modern buyers.",
      category: "lifestyle",
      author: "Michael Chen",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 6,
      title: "Selling Your Home: Staging Tips That Work",
      excerpt: "Professional staging tips to help your home sell faster and for the best price.",
      category: "selling-guide",
      author: "Emily Rodriguez",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'buying-guide', name: 'Buying Guide' },
    { id: 'selling-guide', name: 'Selling Guide' },
    { id: 'investment', name: 'Investment' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section id="blog-hero" className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Real Estate Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Stay informed with the latest market trends, expert advice, and insider knowledge 
            from our real estate professionals.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        {selectedCategory === 'all' && featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold inline-block w-fit mb-4">
                    Featured Post
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span className="mr-4">By {featuredPost.author}</span>
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-fit inline-block"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3 w-fit">
                  {categories.find(cat => cat.id === post.category)?.name}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight flex-grow">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest real estate insights, 
            market updates, and expert tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blog;