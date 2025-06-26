import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams();

  // Blog posts data (same as in Blog.jsx)
  const blogPosts = [
    {
      id: 1,
      title: "2024 Real Estate Market Trends: What Buyers Need to Know",
      excerpt: "Discover the latest market trends and insights that are shaping the real estate landscape this year.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center",
      featured: true,
      content: `
        <h2>Understanding the Current Market Landscape</h2>
        <p>The real estate market in 2024 has shown remarkable resilience and adaptation to changing economic conditions. As buyers navigate this dynamic environment, understanding key trends is crucial for making informed decisions.</p>
        
        <h3>Key Market Indicators</h3>
        <p>Recent data shows that while property values have stabilized in most areas, certain segments continue to show strong growth. The luxury market, particularly in Delhi NCR, has demonstrated consistent performance with properties in prime locations maintaining their value proposition.</p>
        
        <h3>Interest Rates and Financing</h3>
        <p>With evolving interest rate policies, buyers are exploring various financing options. The current rates offer opportunities for strategic purchases, especially for investment properties and luxury homes.</p>
        
        <h3>Technology's Impact</h3>
        <p>Digital transformation has revolutionized property search and acquisition processes. Virtual tours, AI-powered matching, and digital documentation have made property transactions more efficient and transparent.</p>
        
        <h3>Future Predictions</h3>
        <p>Looking ahead, we anticipate continued growth in sustainable housing, smart home technology integration, and the emergence of new micro-markets in previously overlooked areas.</p>
        
        <blockquote>
          <p>"The key to successful property investment in 2024 is understanding not just current trends, but anticipating future market shifts." - Sarah Johnson, CEO</p>
        </blockquote>
      `
    },
    {
      id: 2,
      title: "First-Time Homebuyer's Complete Guide",
      excerpt: "Everything you need to know about buying your first home, from financing to closing.",
      category: "buying-guide",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop&crop=center",
      featured: false,
      content: `
        <h2>Your Journey to Homeownership Starts Here</h2>
        <p>Purchasing your first home is one of life's most significant milestones. This comprehensive guide will walk you through every step of the process, ensuring you're well-prepared for this important decision.</p>
        
        <h3>Financial Preparation</h3>
        <p>Before you start house hunting, it's essential to understand your financial position. This includes checking your credit score, calculating your debt-to-income ratio, and determining how much you can afford to spend.</p>
        
        <h3>Pre-Approval Process</h3>
        <p>Getting pre-approved for a mortgage gives you a clear picture of your budget and shows sellers that you're a serious buyer. We recommend shopping around with multiple lenders to find the best rates and terms.</p>
        
        <h3>Finding the Right Property</h3>
        <p>Location, size, amenities, and future resale value are all crucial factors to consider. Our team of experts can help you identify properties that match your criteria and budget.</p>
        
        <h3>Making an Offer</h3>
        <p>Once you've found the perfect home, crafting a competitive offer is crucial. This involves not just the price, but also terms and conditions that can make your offer stand out.</p>
        
        <h3>The Closing Process</h3>
        <p>From home inspection to final walkthrough, the closing process involves several important steps. We'll guide you through each one to ensure a smooth transaction.</p>
      `
    },
    {
      id: 3,
      title: "Luxury Home Investment Strategies",
      excerpt: "Learn how to maximize returns on luxury real estate investments in today's market.",
      category: "investment",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop&crop=center",
      featured: true,
      content: `
        <h2>Maximizing Returns in Luxury Real Estate</h2>
        <p>Luxury real estate investment requires a sophisticated approach that considers market dynamics, property appreciation potential, and long-term value creation strategies.</p>
        
        <h3>Market Analysis and Timing</h3>
        <p>Understanding market cycles is crucial for luxury property investment. We analyze historical data, current trends, and future projections to identify optimal investment timing.</p>
        
        <h3>Location Premium</h3>
        <p>In luxury real estate, location is paramount. Properties in established prime areas of Delhi NCR consistently outperform, offering both stability and appreciation potential.</p>
        
        <h3>Diversification Strategies</h3>
        <p>Successful luxury property investors often diversify across different property types and locations to minimize risk and maximize returns.</p>
        
        <h3>Value-Add Opportunities</h3>
        <p>Identifying properties with improvement potential can significantly boost investment returns. This might include renovations, amenity additions, or strategic repositioning.</p>
        
        <h3>Exit Strategies</h3>
        <p>Having a clear exit strategy is essential. Whether it's long-term appreciation, rental income, or eventual sale, each investment should align with your overall portfolio goals.</p>
      `
    },
    {
      id: 4,
      title: "Top 10 Neighborhoods to Watch in 2024",
      excerpt: "Explore emerging neighborhoods that offer great potential for homebuyers and investors.",
      category: "market-trends",
      author: "Sarah Johnson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=center",
      featured: false,
      content: `
        <h2>Emerging Opportunities in Delhi NCR</h2>
        <p>As the Delhi NCR region continues to expand and develop, new neighborhoods are emerging as attractive destinations for both homebuyers and investors.</p>
        
        <h3>1. Sector 150, Noida</h3>
        <p>With excellent connectivity and planned infrastructure development, this area offers significant growth potential at attractive price points.</p>
        
        <h3>2. Golf Course Extension Road, Gurgaon</h3>
        <p>Already established as a premium location, continued development makes it an excellent investment opportunity.</p>
        
        <h3>3. Dwarka Expressway</h3>
        <p>The upcoming Dwarka Expressway is transforming connectivity and property values along its corridor.</p>
        
        <h3>4. Greater Noida West</h3>
        <p>Planned city development and infrastructure improvements make this area attractive for first-time buyers and investors.</p>
        
        <h3>5. New Gurgaon</h3>
        <p>Affordable housing options with good connectivity to major employment hubs make this area worth watching.</p>
        
        <p>Each of these areas offers unique advantages and investment potential. Our team can provide detailed analysis and current market data to help you make informed decisions.</p>
      `
    },
    {
      id: 5,
      title: "Sustainable Living: Eco-Friendly Home Features",
      excerpt: "Discover the latest eco-friendly home features that are becoming must-haves for modern buyers.",
      category: "lifestyle",
      author: "Michael Chen",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&crop=center",
      featured: false,
      content: `
        <h2>The Future of Sustainable Living</h2>
        <p>As environmental consciousness grows, homebuyers are increasingly seeking properties with eco-friendly features that reduce environmental impact and operating costs.</p>
        
        <h3>Solar Power Systems</h3>
        <p>Solar panels and battery storage systems are becoming standard in luxury homes, offering energy independence and long-term cost savings.</p>
        
        <h3>Smart Home Technology</h3>
        <p>Intelligent systems for lighting, climate control, and energy management help optimize resource usage while enhancing comfort and convenience.</p>
        
        <h3>Water Conservation</h3>
        <p>Rainwater harvesting, greywater recycling, and efficient fixtures significantly reduce water consumption and costs.</p>
        
        <h3>Green Building Materials</h3>
        <p>Sustainable materials not only reduce environmental impact but often provide superior performance and durability.</p>
        
        <h3>Energy-Efficient Design</h3>
        <p>Proper orientation, insulation, and ventilation design can dramatically reduce energy consumption for heating and cooling.</p>
      `
    },
    {
      id: 6,
      title: "Selling Your Home: Staging Tips That Work",
      excerpt: "Professional staging tips to help your home sell faster and for the best price.",
      category: "selling-guide",
      author: "Emily Rodriguez",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&crop=center",
      featured: false,
      content: `
        <h2>Professional Staging for Maximum Impact</h2>
        <p>Proper staging can significantly impact how quickly your home sells and the final sale price. Here are proven strategies that deliver results.</p>
        
        <h3>Declutter and Depersonalize</h3>
        <p>Remove personal items and excess furniture to help potential buyers envision themselves in the space. Less is definitely more when staging.</p>
        
        <h3>Focus on Key Rooms</h3>
        <p>Kitchen, master bedroom, and living areas have the most impact on buyers. Invest your staging budget in these high-impact spaces.</p>
        
        <h3>Lighting and Ambiance</h3>
        <p>Maximize natural light and add warm, inviting lighting throughout the home. Well-lit spaces feel larger and more welcoming.</p>
        
        <h3>Fresh Paint and Minor Repairs</h3>
        <p>A fresh coat of neutral paint and addressing minor maintenance issues can dramatically improve first impressions.</p>
        
        <h3>Curb Appeal</h3>
        <p>First impressions matter. Ensure the exterior and entrance areas are clean, well-maintained, and inviting.</p>
        
        <h3>Professional Photography</h3>
        <p>High-quality photos are essential for online listings. Professional photography can showcase your staged home at its best.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'market-trends', name: 'Market Trends' },
    { id: 'buying-guide', name: 'Buying Guide' },
    { id: 'selling-guide', name: 'Selling Guide' },
    { id: 'investment', name: 'Investment' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              {categories.find(cat => cat.id === post.category)?.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-6">By {post.author}</span>
              <span className="mr-6">{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-12"
          />

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">About the Author</h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{post.author}</h4>
                <p className="text-gray-600">
                  {post.author === 'Sarah Johnson' && 'CEO & Founder of LuxeEstate with 15+ years of experience in luxury real estate.'}
                  {post.author === 'Michael Chen' && 'Senior Property Consultant specializing in residential and commercial properties.'}
                  {post.author === 'Emily Rodriguez' && 'Marketing Director with expertise in luxury real estate branding and investment strategies.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 overflow-hidden text-ellipsis">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Blog
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
