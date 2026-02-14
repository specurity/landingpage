export default function Partners() {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-[1216px] mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-16">
          <div 
            className="relative flex items-center h-12"
            style={{
              background: "radial-gradient(50% 13.65% at 50% 50%, rgba(245, 48, 107, 0.10) 0%, rgba(255, 103, 167, 0.00) 100%)",
            }}
          >
            {/* Left line */}
            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M272 1.00002L0.5 1" stroke="url(#paint0_linear_partners)" />
              <defs>
                <linearGradient id="paint0_linear_partners" x1="272.5" y1="1.49877" x2="0.500002" y2="0.999173" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0076FF"/>
                  <stop offset="0.165137" stopColor="#0076FF"/>
                  <stop offset="1" stopColor="#07080A"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Text */}
            <div className="px-3">
              <span className="text-sm font-medium text-white">Acknowledge By</span>
            </div>

            {/* Right line */}
            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M0 1H271.5" stroke="url(#paint1_linear_partners)" />
              <defs>
                <linearGradient id="paint1_linear_partners" x1="0" y1="1" x2="272" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0076FF"/>
                  <stop offset="0.165137" stopColor="#0076FF"/>
                  <stop offset="1" stopColor="#07080A"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            { name: "Google", url: "https://api.builder.io/api/v1/image/assets/TEMP/24783bca975d41c1cef7c4709fabc3adfb3097d4?width=216", width: "108px", height: "27px" },
            { name: "Hostinger", url: "https://api.builder.io/api/v1/image/assets/TEMP/32088ba599786cb79aa7ad18ad56acf32928af83?width=150", width: "75px", height: "36px" },
            { name: "Meta", url: "https://api.builder.io/api/v1/image/assets/TEMP/b67e40221c0415df0e128100c1197718a18b0c2a?width=180", width: "90px", height: "18px" },
            { name: "Nutanix", url: "https://api.builder.io/api/v1/image/assets/TEMP/b065f87bdaa4a2d375b8e652cc8c10dbaf2d2faa?width=280", width: "140px", height: "24px" },
            { name: "Razorpay", url: "https://api.builder.io/api/v1/image/assets/TEMP/d284ba7fda66bc212e33e993f71da10c55210875?width=252", width: "126px", height: "15px" }
          ].map((partner, index) => (
            <div
              key={index}
              className="relative w-[230px] h-28 flex items-center justify-center rounded-2xl border border-white/15 overflow-hidden group hover:border-white/25 transition-all duration-300"
            >
              {/* Overlay background */}
              <div
                className="absolute inset-[1px] rounded-2xl pointer-events-none"
                style={{
                  background: "rgba(12, 13, 15, 0.40)",
                }}
              />
              {/* Logo */}
              <img
                src={partner.url}
                alt={partner.name}
                className="relative z-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  maxWidth: partner.width,
                  maxHeight: partner.height,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
