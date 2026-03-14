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

  const inputClass =
    "w-full px-4 py-3 rounded-xl font-inter text-white placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#1560FF] transition-all text-sm";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
  };
  const labelClass = "block font-inter text-white/60 mb-2 text-[13px]";

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#07080A" }}
    >
      {/* Full-section grid image with radial gradient mask (fades to dark at edges, visible in center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(50% 48% at 50% 45.8%, rgba(0,0,0,0.80) 34.28%, rgba(0,0,0,0.10) 100%)",
          WebkitMaskImage:
            "radial-gradient(50% 48% at 50% 45.8%, rgba(0,0,0,0.80) 34.28%, rgba(0,0,0,0.10) 100%)",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F766559904cb240c09cbbee0e5843aa34%2F141c7cd4eef448edb7b61cbbe6893e4e?format=webp&width=1600"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.23 }}
        />
      </div>

      {/* Gradient glow at top — exact Figma gradient image, full-width centered */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1440px",
          height: "560px",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F766559904cb240c09cbbee0e5843aa34%2F5cd21d08fdab44ff94d3acefdbcac864?format=webp&width=1440"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[660px] mx-auto px-6 pt-20 pb-20 text-center">
        {/* Heading */}
        <h2
          className="font-space-grotesk font-bold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(36px, 5.5vw, 60px)" }}
        >
          Ready to Design Smarter?
        </h2>

        {/* Subtitle */}
        <p
          className="font-inter text-white/55 mb-10 max-w-[420px] mx-auto leading-relaxed"
          style={{ fontSize: "15px" }}
        >
          Whether you're a freelancer, a team, or a growing agency—our tools
          adapt to your workflow. Design faster. Deliver better.
        </p>

        {/* Get Started Button */}
        <div className="flex justify-center mb-14">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-inter font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: "#1560FF",
              fontSize: "15px",
            }}
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33 8H12.67M12.67 8L9.33 4.67M12.67 8L9.33 11.33"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Contact Form Card */}
        <div
          id="contact-form"
          className="rounded-2xl p-7 text-left"
          style={{
            background: "rgba(14, 15, 18, 0.92)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.45), 0 0.5px 0 0.5px rgba(255,255,255,0.06) inset",
            backdropFilter: "blur(12px)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Name*</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className={labelClass}>Email*</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2: Contact number & Company name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Contact number*</label>
                <input
                  type="tel"
                  required
                  placeholder="+1"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className={labelClass}>Company name*</label>
                <input
                  type="text"
                  required
                  placeholder="Technology PVT."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message*</label>
              <textarea
                required
                rows={5}
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="px-8 py-2.5 rounded-full font-inter font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "#1560FF",
                  fontSize: "14px",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Email note */}
        <p className="mt-8 font-inter text-white/35 text-sm">
          or write to us at{" "}
          <a
            href="mailto:hello@specurity.com"
            className="text-white/55 hover:text-white transition-colors underline underline-offset-2"
          >
            hello@specurity.com
          </a>
        </p>
      </div>
    </section>
  );
}
