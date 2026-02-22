import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Palette, 
  Code, 
  Rocket, 
  Users, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Play
} from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      showError("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      showSuccess("Message sent successfully! We'll get back to you soon.");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Fast, responsive websites built with modern tech",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Memorable branding that tells your story",
      color: "bg-pink-100 text-pink-700"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Data-driven plans for business growth",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const testimonials = [
    {
      name: "Alex Morgan",
      role: "CEO, TechFlow",
      content: "Their team transformed our digital presence completely. The results exceeded our expectations.",
      avatar: "AM"
    },
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      content: "The attention to detail and creative approach made all the difference for our rebranding.",
      avatar: "SC"
    },
    {
      name: "Marcus Rivera",
      role: "Product Manager",
      content: "Outstanding work on our mobile app. User engagement increased by 300% after launch.",
      avatar: "MR"
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 rounded-full">
              <Sparkles className="h-4 w-4 mr-2" />
              We're launching new services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We create stunning digital experiences that drive results. From concept to launch, we're with you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-2">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
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
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 text-purple-600 hover:text-purple-700">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                  <Mail className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-slate-700">hello@creativeagency.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-slate-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-slate-700">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-lg"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />
      <MadeWithDyad />
    </div>
  );
};

export default Index;