import { Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Blue glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-40"
          style={{
            background: "radial-gradient(ellipse, #0055FF 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-8 leading-tight max-w-[909px] mx-auto px-4"
          style={{
            background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI-Driven Autonomous Security
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          For Modern Infrastructure
        </h1>

        {/* Subheading */}
        <p className="text-lg text-[rgba(239,237,253,0.7)] mb-12 max-w-[440px] mx-auto">
          AI-powered security operations designed for scale, resilience, and the future of digital infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 mb-16">
          {/* Coming Soon Badge */}
          <div 
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg shadow-lg"
            style={{
              background: "#E6E6E6",
              boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.50), 0 0 14px 0 rgba(255, 255, 255, 0.19)",
            }}
          >
            <Flame className="w-4 h-4 text-[#2F3031]" fill="#2F3031" />
            <span className="text-sm font-medium text-[#2F3031]">Coming Soon</span>
          </div>

          {/* Version Info */}
          <div className="flex items-center gap-6 text-xs font-roboto-mono text-brand-gray">
            <span>v1.72.1</span>
            <div className="w-px h-2.5 bg-brand-gray" />
            <span>macOS 12+</span>
            <div className="w-px h-2.5 bg-brand-gray" />
            <button className="hover:text-white transition-colors">Install via homebrew</button>
          </div>

          {/* More AI Models */}
          <div 
            className="px-1 py-1 rounded-full mt-6"
            style={{
              background: "#143CA3",
              boxShadow: "0 0 20px 0 rgba(245, 48, 107, 0.10)",
            }}
          >
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#0A1030]">
              <span className="text-sm font-medium text-white">More AI models</span>
              <div className="w-px h-4 bg-brand-gray-darker" />
              <button className="flex items-center gap-2 text-sm font-medium text-brand-gray hover:text-white transition-colors">
                <span>Join Waitlist</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-[1216px] mx-auto">
          <div 
            className="p-2 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              boxShadow: "0 0 0 9px rgba(255, 255, 255, 0.03) inset",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/24c4e417f8edbd83409015f92fd466b8bc0c804f?width=2396"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(4, 1, 21, 0.00) 0%, rgba(7, 8, 10, 0.41) 34.48%, rgba(7, 8, 10, 0.87) 82.36%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
