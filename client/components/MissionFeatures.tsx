const missionCards = [
  {
    title: "Instant Ideation",
    description:
      "Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds",
    size: "narrow",
  },
  {
    title: "Smart Adaptability",
    description:
      "No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design",
    size: "wide",
  },
  {
    title: "Multi-Format Export",
    description:
      "Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets.",
    size: "wide",
  },
  {
    title: "Seamless Revisions",
    description:
      "Say goodbye to repetitive tweaks and back-and-forths. With intuitive prompt-based editing.",
    size: "narrow",
  },
];

export default function MissionFeatures() {
  return (
    <section className="relative pt-24 pb-[116px] px-8 bg-[#07080A]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-16">
          <div
            className="relative flex items-center h-12"
            style={{
              background:
                "radial-gradient(50% 13.65% at 50% 50%, rgba(245, 48, 107, 0.10) 0%, rgba(255, 103, 167, 0.00) 100%)",
            }}
          >
            {/* Left line */}
            <svg
              width="272"
              height="2"
              viewBox="0 0 272 2"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M272 1.00002L0.5 1"
                stroke="url(#mission_left_line)"
              />
              <defs>
                <linearGradient
                  id="mission_left_line"
                  x1="272.5"
                  y1="1.49877"
                  x2="0.500002"
                  y2="0.999173"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0076FF" />
                  <stop offset="0.165137" stopColor="#0076FF" />
                  <stop offset="1" stopColor="#07080A" />
                </linearGradient>
              </defs>
            </svg>

            {/* Text */}
            <div className="px-3">
              <span className="text-sm font-medium text-white font-inter">
                Our Mission
              </span>
            </div>

            {/* Right line */}
            <svg
              width="272"
              height="2"
              viewBox="0 0 272 2"
              fill="none"
              className="shrink-0"
            >
              <path d="M0 1H271.5" stroke="url(#mission_right_line)" />
              <defs>
                <linearGradient
                  id="mission_right_line"
                  x1="0"
                  y1="1"
                  x2="272"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0076FF" />
                  <stop offset="0.165137" stopColor="#0076FF" />
                  <stop offset="1" stopColor="#07080A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-white font-space-grotesk leading-snug">
            We are on a mission to make organizations&apos;
            <br />
            <span className="text-[#EFEDFD]">Data Infrastructure to be</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: narrow | wide */}
          <div
            className="relative rounded-[20px] overflow-hidden border border-white/20 p-5 flex flex-col justify-between min-h-[199px]"
            style={{
              background:
                "linear-gradient(119deg, rgba(0, 0, 0, 0.00) 23.34%, rgba(0, 85, 255, 0.30) 96.36%), rgba(8, 24, 39, 0.17)",
            }}
          >
            <h3 className="text-[34px] font-normal text-white leading-tight">
              {missionCards[0].title}
            </h3>
            <p className="text-[rgba(217,217,217,0.85)] text-[18px] leading-[19.2px] mt-auto">
              {missionCards[0].description}
            </p>
          </div>

          <div
            className="relative rounded-[20px] overflow-hidden border border-white/20 p-5 flex flex-col justify-between min-h-[199px] md:col-span-2"
            style={{
              background:
                "linear-gradient(119deg, rgba(0, 0, 0, 0.00) 23.34%, rgba(0, 85, 255, 0.30) 96.36%), rgba(8, 24, 39, 0.17)",
            }}
          >
            <h3 className="text-[34px] font-normal text-white leading-tight">
              {missionCards[1].title}
            </h3>
            <p className="text-[rgba(217,217,217,0.85)] text-[18px] leading-[19.2px] mt-auto">
              {missionCards[1].description}
            </p>
          </div>

          {/* Row 2: wide | narrow */}
          <div
            className="relative rounded-[20px] overflow-hidden border border-white/20 p-5 flex flex-col justify-between min-h-[199px] md:col-span-2"
            style={{
              background:
                "linear-gradient(119deg, rgba(0, 0, 0, 0.00) 23.34%, rgba(0, 85, 255, 0.30) 96.36%), rgba(8, 24, 39, 0.17)",
            }}
          >
            <h3 className="text-[34px] font-normal text-white leading-tight">
              {missionCards[2].title}
            </h3>
            <p className="text-[rgba(217,217,217,0.85)] text-[18px] leading-[19.2px] mt-auto">
              {missionCards[2].description}
            </p>
          </div>

          <div
            className="relative rounded-[20px] overflow-hidden border border-white/20 p-5 flex flex-col justify-between min-h-[199px]"
            style={{
              background:
                "linear-gradient(119deg, rgba(0, 0, 0, 0.00) 23.34%, rgba(0, 85, 255, 0.30) 96.36%), rgba(8, 24, 39, 0.17)",
            }}
          >
            <h3 className="text-[34px] font-normal text-white leading-tight">
              {missionCards[3].title}
            </h3>
            <p className="text-[rgba(217,217,217,0.85)] text-[18px] leading-[19.2px] mt-auto">
              {missionCards[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
