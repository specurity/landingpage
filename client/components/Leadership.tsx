export default function Leadership() {
  return (
    <section className="relative py-24 px-8 overflow-hidden bg-[#07080A]">
      {/* Gradient glow at top — matches Figma design */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1440px",
          height: "560px",
          zIndex: 0,
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F766559904cb240c09cbbee0e5843aa34%2F5cd21d08fdab44ff94d3acefdbcac864?format=webp&width=1440"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-[1204px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-0">
          {/* Left: Photo */}
          <div className="w-full lg:w-[553px] shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "1px 1px 0 0 rgba(149, 99, 255, 0.07) inset, 0 0.5px 0 0 rgba(255, 255, 255, 0.25) inset",
                background: "rgba(149, 99, 255, 0.02)",
                backdropFilter: "blur(1px)",
                height: "528px",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1c6a1dd2adb30d1e500528c039e522b469d21223?width=1646"
                alt="Shrey Patel - Founder & CEO"
                className="absolute object-cover"
                style={{
                  width: "823px",
                  height: "614px",
                  left: "-135px",
                  top: "-43px",
                }}
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "rgba(149, 99, 255, 0.02)",
                }}
              />
            </div>

            {/* Decorative bottom divider */}
            <div className="flex justify-center mt-2">
              <div
                className="h-[1px]"
                style={{
                  width: "240px",
                  background:
                    "linear-gradient(90deg, #452324 0%, #ECA5A7 93%, #581D27 100%)",
                }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 lg:pl-16 flex flex-col justify-between" style={{ minHeight: "536px" }}>
            {/* Our Leadership Badge */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-[10px] border border-[#1F1F1F] bg-white mb-8"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.03408 1.33334L7.12075 3.20001C6.46811 4.53357 5.59342 5.74642 4.53408 6.78668L4.41408 6.90001C3.73372 7.56052 3.34499 8.46517 3.33408 9.41334V9.53334C3.31606 11.3901 4.42248 13.0734 6.13408 13.7933L6.30741 13.8667C7.42999 14.3435 8.69817 14.3435 9.82075 13.8667H9.86075C11.5851 13.1175 12.6915 11.4066 12.6674 9.52668V6.63334C12.0928 7.94569 11.0492 8.99644 9.74075 9.58001C9.74075 9.58001 9.74075 9.58001 9.70075 9.58001C9.66075 9.58001 9.19408 9.77334 8.99408 9.58001C8.81545 9.39926 8.79834 9.11415 8.95408 8.91334L9.00075 8.88001H9.03408C10.5646 7.71667 10.9214 5.56116 9.84741 3.96668C8.98075 2.64668 8.03408 1.33334 8.03408 1.33334Z"
                    fill="#1F1F1F"
                  />
                </svg>
                <span
                  className="font-bold text-[#1F1F1F] font-space-grotesk"
                  style={{ fontSize: "21px", letterSpacing: "0.2px" }}
                >
                  Our Leadership
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-medium text-[#F4F0FF] font-space-grotesk mb-8"
                style={{ fontSize: "36px", lineHeight: "40px" }}
              >
                Meet the Brains Behind the Intelligence
              </h2>

              {/* Description */}
              <p
                className="font-space-grotesk font-normal mb-0"
                style={{
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "rgba(239, 237, 253, 0.60)",
                  maxWidth: "563px",
                }}
              >
                Tejas and Ravi, the visionaries behind MeshDefend, bring
                decades of expertise in data protection and cybersecurity. With
                a track record of scaling enterprise platforms to $500M+, they
                are committed to innovation, collaboration, and shaping a safer
                digital future.
              </p>
            </div>

            {/* Person Info */}
            <div className="mt-auto pt-16">
              {/* Name + Line */}
              <div className="flex items-center gap-4 mb-2">
                <h3
                  className="font-medium text-[#F4F0FF] font-space-grotesk shrink-0"
                  style={{ fontSize: "36px", lineHeight: "40px" }}
                >
                  Shrey Patel
                </h3>
                <svg
                  width="341"
                  height="2"
                  viewBox="0 0 341 2"
                  fill="none"
                  className="flex-1 min-w-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 1H340.373"
                    stroke="url(#leadership_line)"
                  />
                  <defs>
                    <linearGradient
                      id="leadership_line"
                      x1="0"
                      y1="1"
                      x2="341"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.165137" stopColor="#0076FF" />
                      <stop offset="1" stopColor="#0076FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Title */}
              <p
                className="font-space-grotesk font-medium text-[#EFEDFD] mb-6"
                style={{ fontSize: "19px", lineHeight: "40px" }}
              >
                Founder &amp; CEO
              </p>

              {/* LinkedIn Button */}
              <button
                className="flex items-center justify-center rounded-[15px] bg-[#141414] text-white font-bold font-inter"
                style={{
                  width: "56px",
                  height: "52px",
                  fontSize: "11px",
                  lineHeight: "20px",
                }}
                aria-label="LinkedIn"
              >
                L
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
