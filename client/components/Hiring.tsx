export default function Hiring() {
  const jobs = [
    {
      badge: "Development",
      title: "AI Architect & Developer",
      type: "Full Time",
      description: "Explore new AI technologies, rapidly prototyping autonomous systems that learn, reason, and act at scale."
    },
    {
      badge: "Development",
      title: "AI Architect & Developer",
      type: "Full Time",
      description: "Explore new AI technologies, rapidly prototyping autonomous systems that learn, reason, and act at scale."
    }
  ];

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-16 max-w-[582px] mx-auto">
          {/* Hiring Badge */}
          <div 
            className="relative flex items-center h-12"
            style={{
              background: "radial-gradient(50% 13.65% at 50% 50%, rgba(245, 48, 107, 0.10) 0%, rgba(255, 103, 167, 0.00) 100%)",
            }}
          >
            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M272 1.00002L0.5 1" stroke="url(#paint0_linear_hiring)" />
              <defs>
                <linearGradient id="paint0_linear_hiring" x1="272.5" y1="1.49877" x2="0.500002" y2="0.999173" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ECA5A7"/>
                  <stop offset="0.165137" stopColor="#581D27"/>
                  <stop offset="1" stopColor="#190E14"/>
                </linearGradient>
              </defs>
            </svg>

            <div className="px-3">
              <span className="text-sm font-medium text-brand-red">We're Hiring</span>
            </div>

            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M0 1H271.5" stroke="url(#paint1_linear_hiring)" />
              <defs>
                <linearGradient id="paint1_linear_hiring" x1="0" y1="1" x2="272" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ECA5A7"/>
                  <stop offset="0.165137" stopColor="#581D27"/>
                  <stop offset="1" stopColor="#190E14"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-center max-w-[438px]">
            <p className="text-xl font-medium text-brand-gray-dark">
              Join a team where your expertise drives impact, and your curiosity fuels progress.
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl border backdrop-blur-sm hover:border-white/15 transition-all cursor-pointer group"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.06)",
                background: "linear-gradient(113deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.90) 75.88%)",
                boxShadow: "0 1px 1px 1px rgba(255, 255, 255, 0.15) inset",
              }}
            >
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-4 rounded-full text-xs"
                style={{
                  background: "#143CA3",
                  boxShadow: "0 0 20px 0 rgba(245, 48, 107, 0.10)",
                }}
              >
                <div className="px-1.5 py-0.5 rounded-full bg-[#0A1030] flex items-center gap-1.5">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#143CA3"/>
                  </svg>
                  <span className="text-white font-medium">{job.badge}</span>
                </div>
              </div>

              {/* Title & Type */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-medium text-white flex-1">
                  {job.title}
                </h3>
                <span className="text-xs font-medium font-roboto-mono text-brand-gray shrink-0">
                  {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-brand-gray mb-4 leading-relaxed">
                {job.description}
              </p>

              {/* Apply Link */}
              <div className="flex items-center gap-1 text-sm font-medium text-white group-hover:text-brand-blue transition-colors">
                <span>Apply Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
