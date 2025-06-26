import React from 'react';
import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Navigation Test Page</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map(id => (
                <Link
                  key={id}
                  to={`/blog/${id}`}
                  className="block text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Blog Post {id}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Legal Pages</h2>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/disclaimer" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
