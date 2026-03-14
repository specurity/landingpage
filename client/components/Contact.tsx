import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#F5F6FA",
      }}
    >
      {/* Blue radial glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(100, 130, 255, 0.55) 0%, rgba(180, 200, 255, 0.25) 45%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 pt-24 pb-20 text-center">
        {/* Heading */}
        <h2
          className="font-space-grotesk font-bold text-white mb-4 leading-tight"
          style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
        >
          Ready to Design Smarter?
        </h2>

        {/* Subtitle */}
        <p
          className="font-inter text-white/60 mb-10 max-w-[480px] mx-auto"
          style={{ fontSize: "16px", lineHeight: "1.6" }}
        >
          Whether you're a freelancer, a team, or a growing agency—our tools
          adapt to your workflow. Design faster. Deliver better.
        </p>

        {/* Get Started Button */}
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-inter font-semibold text-white transition-opacity hover:opacity-90 mb-16"
          style={{
            background: "#1560FF",
            fontSize: "16px",
          }}
        >
          Get Started
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Contact Form Card */}
        <div
          id="contact-form"
          className="rounded-2xl p-8 text-left"
          style={{
            background: "#111216",
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-inter text-white/70 mb-2"
                  style={{ fontSize: "13px" }}
                >
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  className="block font-inter text-white/70 mb-2"
                  style={{ fontSize: "13px" }}
                >
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {/* Row 2: Contact number & Company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-inter text-white/70 mb-2"
                  style={{ fontSize: "13px" }}
                >
                  Contact number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  className="block font-inter text-white/70 mb-2"
                  style={{ fontSize: "13px" }}
                >
                  Company name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Technology PVT."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block font-inter text-white/70 mb-2"
                style={{ fontSize: "13px" }}
              >
                Message*
              </label>
              <textarea
                required
                rows={5}
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all resize-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-full font-inter font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "#1560FF",
                  fontSize: "15px",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
