import { useState } from "react";
import { Button } from "./ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-[680px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-medium"
            style={{
              background: "#143CA3",
              boxShadow: "0 0 20px 0 rgba(245, 48, 107, 0.10)",
            }}
          >
            <div className="px-2 py-0.5 rounded-full bg-[#0A1030] flex items-center gap-1.5">
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#143CA3"/>
              </svg>
              <span className="text-white">Project Sold Out</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-space-grotesk font-semibold text-white mb-4">
            Let's Build the Future Together
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-gray-light mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-gray-light mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-gray-light mb-2">
              Company Name*
            </label>
            <input
              type="text"
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              placeholder="Enter company name"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-gray-light mb-2">
              Message*
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
              placeholder="Tell us about your project"
            />
          </div>

          {/* Privacy Notice */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              required
              className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-brand-blue focus:ring-brand-blue"
            />
            <label htmlFor="privacy" className="text-sm text-brand-gray">
              By submitting this form, you agree to our privacy policy and consent to being contacted about your inquiry.
            </label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            className="w-full py-6 text-base font-semibold bg-brand-red hover:bg-brand-red-light transition-colors rounded-lg"
          >
            Submit Message
          </Button>
        </form>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 text-sm text-brand-gray">
          <span>Or write to us: hello@specurity.io</span>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>
      </div>
    </section>
  );
}
