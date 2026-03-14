export default function Partners() {
  const avatars = [
    "https://api.builder.io/api/v1/image/assets/TEMP/1c6a1dd2adb30d1e500528c039e522b469d21223?width=100",
    "https://api.builder.io/api/v1/image/assets/TEMP/63fa17940481a8c69fb2afee179f88537a98f066?width=100",
    "https://api.builder.io/api/v1/image/assets/TEMP/2e13c0651a3c9d728b221bc93825dddae93c569d?width=100",
  ];

  return (
    <section className="relative py-[10px] px-8">
      <div className="max-w-[1216px] mx-auto">
        {/* Social Proof Badge */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            {/* Overlapping Avatars */}
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#07080A] bg-[#1a1b1e]"
                  style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <span className="font-inter text-sm font-medium text-white/80 whitespace-nowrap">
              Acknowledge by 50+ Companies Globally
            </span>
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
              <div
                className="absolute inset-[1px] rounded-2xl pointer-events-none"
                style={{ background: "rgba(12, 13, 15, 0.40)" }}
              />
              <img
                src={partner.url}
                alt={partner.name}
                className="relative z-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ maxWidth: partner.width, maxHeight: partner.height }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
