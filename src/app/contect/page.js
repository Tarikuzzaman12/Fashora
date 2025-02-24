export default function Contact() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-900">Contact Us</h1>
        <p className="text-lg text-center text-gray-700 mt-4">
          Have questions? Get in touch with us through the form below or reach us via phone or email.
        </p>
  
        {/* Contact Info */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">📞 Phone</h3>
            <p className="text-gray-600 mt-2">+123 456 7890</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">📧 Email</h3>
            <p className="text-gray-600 mt-2">info@example.com</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">📍 Address</h3>
            <p className="text-gray-600 mt-2">123 Street, City, Country</p>
          </div>
        </div>
  
        {/* Contact Form */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Send us a Message</h2>
          <form className="mt-8 max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-lg mb-4"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="w-full p-3 border rounded-lg mb-4"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  