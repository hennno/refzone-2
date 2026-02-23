"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LogIn, UserPlus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-gradient-to-b from-[#ff5eb8]/5 to-[#9114af]/5">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#ff5eb8] to-[#9114af]"></div>
            <span className="text-xl font-bold text-gray-900">RefZone</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-[#9114af]">
                <LogIn className="h-4 w-4 mr-2" />
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-[#9114af] to-[#ff5eb8] hover:from-[#7a1195] hover:to-[#e54da8] text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff5eb8]/5 to-[#9114af]/5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#ff5eb8]/10 to-[#9114af]/10 rounded-full border border-[#ff5eb8]/20">
              <Shield className="h-4 w-4 text-[#9114af]" />
              <span className="text-[#9114af] font-medium">Secure Authentication System</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff5eb8] to-[#9114af] bg-clip-text text-transparent">
              Modern Authentication
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience secure, seamless authentication with email verification, password reset, and Google OAuth integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-[#9114af] to-[#ff5eb8] hover:from-[#7a1195] hover:to-[#e54da8] text-white font-medium">
                  Create free account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-gray-300 hover:border-[#9114af] hover:text-[#9114af]">
                  Sign in to dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authentication Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for secure user management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Email & Password", 
                description: "Secure traditional authentication with email verification", 
                icon: "✉️",
                color: "from-[#ff5eb8]/10 to-[#ff5eb8]/5 border-[#ff5eb8]/20"
              },
              { 
                title: "Google OAuth", 
                description: "One-click sign in with Google accounts", 
                icon: "🔐",
                color: "from-[#9114af]/10 to-[#9114af]/5 border-[#9114af]/20"
              },
              { 
                title: "Password Reset", 
                description: "Secure password recovery with email verification", 
                icon: "🔄",
                color: "from-[#ff5eb8]/10 to-[#9114af]/5 border-[#ff5eb8]/20"
              },
              { 
                title: "Protected Routes", 
                description: "Automatic redirects for unauthenticated users", 
                icon: "🛡️",
                color: "from-[#9114af]/10 to-[#ff5eb8]/5 border-[#9114af]/20"
              },
              { 
                title: "Session Management", 
                description: "Persistent sessions with automatic refresh", 
                icon: "⏱️",
                color: "from-[#ff5eb8]/10 to-[#9114af]/5 border-[#ff5eb8]/20"
              },
              { 
                title: "User Profiles", 
                description: "Custom user profiles with additional data", 
                icon: "👤",
                color: "from-[#9114af]/10 to-[#ff5eb8]/5 border-[#9114af]/20"
              }
            ].map((feature, index) => (
              <div key={index} className={`border-2 ${feature.color} bg-gradient-to-br rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#ff5eb8]/10 to-[#9114af]/10 rounded-2xl p-8 md:p-12 border border-[#ff5eb8]/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust our secure authentication system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-[#9114af] to-[#ff5eb8] hover:from-[#7a1195] hover:to-[#e54da8] text-white font-medium">
                    Create free account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-gray-300 hover:border-[#9114af] hover:text-[#9114af]">
                    Sign in to dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 text-center border-t border-gray-200 mt-8">
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