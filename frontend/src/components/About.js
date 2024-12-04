import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mt-20 sm:mt-24 min-h-screen bg-gradient-to-r from-teal-100 to-blue-200 flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to Ticket Bus, your one-stop solution for seamless bus ticket booking. 
          We are dedicated to making travel planning effortless, reliable, and enjoyable. 
          Whether you're commuting to work, planning a vacation, or visiting loved ones, 
          we are here to provide a smooth and hassle-free experience.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Our platform connects you with a wide range of bus operators, offering numerous routes and schedules to suit your needs. 
          With real-time updates, secure payment options, and user-friendly features, we ensure that every aspect of your journey 
          is covered with precision and care.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
          <li>Wide network of bus operators and routes</li>
          <li>Simple and secure online booking process</li>
          <li>Real-time seat availability and pricing</li>
          <li>24/7 customer support</li>
          <li>Eco-friendly paperless ticketing</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          At Ticket Bus, our mission is to redefine how people travel by bus. 
          We strive to combine convenience, technology, and exceptional service to create a platform 
          that travelers can trust and rely on.
        </p>
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
