export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We are dedicated to excellence, innovation, and customer satisfaction. 
          Learn more about our mission, values, and why we stand out.  
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Our mission is to deliver top-notch products and services that 
            enhance people lives. We believe in innovation, quality, and 
            customer satisfaction, striving to build a brand that people trust. <br /><br />
            We focus on continuous improvement, pushing boundaries to bring 
            you the best experiences possible. Our team is passionate about 
            making a difference and bringing cutting-edge solutions to the industry.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-3">
          We stand out in the industry because of our dedication to quality, 
          innovation, and customer satisfaction.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-8 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-2xl font-semibold">🚀 Innovation</h3>
            <p className="text-gray-600 mt-3">
              We constantly push the boundaries of technology and creativity 
              to bring you the best products and services.
            </p>
          </div>
          <div className="p-8 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-2xl font-semibold">💡 Expertise</h3>
            <p className="text-gray-600 mt-3">
              Our team consists of highly skilled professionals with 
              years of experience in the industry.
            </p>
          </div>
          <div className="p-8 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-2xl font-semibold">📞 Customer Support</h3>
            <p className="text-gray-600 mt-3">
              We value our customers and provide 24/7 support to ensure 
              a seamless experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? We would love to hear from you.  
        </p>
        <button className="mt-6 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
