import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent successfully! We'll get back to you soon.");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              ✨ We're launching new services
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We create stunning digital experiences that drive results. From concept to launch, we're with you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium">
                Start Your Project →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love", color: "bg-purple-100 text-purple-700" },
              { title: "Web Development", description: "Fast, responsive websites built with modern tech", color: "bg-blue-100 text-blue-700" },
              { title: "Brand Identity", description: "Memorable branding that tells your story", color: "bg-pink-100 text-pink-700" },
              { title: "Digital Strategy", description: "Data-driven plans for business growth", color: "bg-orange-100 text-orange-700" }
            ].map((service, index) => (
              <div key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg p-6 bg-white">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  {index === 0 ? "🎨" : index === 1 ? "💻" : index === 2 ? "✨" : "🚀"}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Ready to transform your digital presence? Get in touch with our team for a free consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">✉️</span>
                  <span className="text-slate-700">hello@creativeagency.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📞</span>
                  <span className="text-slate-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📍</span>
                  <span className="text-slate-700">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="border-0 shadow-lg rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Send us a message</h3>
              <p className="text-slate-600 mb-4">We'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 text-center border-t border-slate-200 mt-8">
        <a
          href="https://www.dyad.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Made with Dyad
        </a>
      </div>
    </div>
  );
};

export default Index;