export default function AIFeatures() {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-20 max-w-[582px] mx-auto">
          {/* AI Badge */}
          <div 
            className="relative flex items-center h-12"
            style={{
              background: "radial-gradient(50% 13.65% at 50% 50%, rgba(245, 48, 107, 0.10) 0%, rgba(255, 103, 167, 0.00) 100%)",
            }}
          >
            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M272 1.00002L0.5 1" stroke="url(#paint0_linear_ai)" />
              <defs>
                <linearGradient id="paint0_linear_ai" x1="272.5" y1="1.49877" x2="0.500002" y2="0.999173" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ECA5A7"/>
                  <stop offset="0.165137" stopColor="#581D27"/>
                  <stop offset="1" stopColor="#190E14"/>
                </linearGradient>
              </defs>
            </svg>

            <div className="px-3">
              <span className="text-sm font-medium text-brand-red">AI</span>
            </div>

            <svg width="272" height="2" viewBox="0 0 272 2" fill="none" className="shrink-0">
              <path d="M0 1H271.5" stroke="url(#paint1_linear_ai)" />
              <defs>
                <linearGradient id="paint1_linear_ai" x1="0" y1="1" x2="272" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ECA5A7"/>
                  <stop offset="0.165137" stopColor="#581D27"/>
                  <stop offset="1" stopColor="#190E14"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-center max-w-[438px]">
            <h2 className="text-xl font-medium text-white mb-2">
              Your Mac just got smarter.
            </h2>
            <p className="text-xl font-medium text-brand-gray-dark">
              AI where it's most useful - on your OS.
            </p>
          </div>
        </div>

        {/* AI Dashboard Preview */}
        <div className="relative max-w-[1066px] mx-auto">
          <div 
            className="p-2 rounded-2xl border overflow-hidden backdrop-blur-sm"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "radial-gradient(49.97% 85.77% at 51% 5.12%, rgba(255, 148, 148, 0.11) 0%, rgba(222, 226, 255, 0.08) 45.83%, rgba(241, 242, 255, 0.02) 100%), rgba(0, 0, 0, 0.44)",
              boxShadow: "0 0 40px 20px rgba(255, 255, 255, 0.03), 0 0.5px 0 1px rgba(255, 255, 255, 0.30) inset",
            }}
          >
            <div 
              className="relative rounded-xl border overflow-hidden min-h-[477px] flex items-center justify-center"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "linear-gradient(0deg, #0C0D0F 0%, #0C0D0F 33.33%, #07080A 33.33%, #07080A 100%)",
                boxShadow: "0 0 2px 0 rgba(255, 255, 255, 0.19), 0 0.5px 0 1px rgba(255, 255, 255, 0.10) inset",
              }}
            >
              {/* Red gradient image */}
              <div className="absolute right-0 top-0 w-[700px] h-[700px] opacity-60 pointer-events-none">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2e13c0651a3c9d728b221bc93825dddae93c569d?width=1400"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: "blur(0px)" }}
                />
              </div>

              {/* Search Dialog */}
              <div 
                className="relative z-10 w-full max-w-[750px] mx-auto p-8 rounded-xl backdrop-blur-xl"
                style={{
                  border: "1px solid rgba(143, 141, 145, 0.20)",
                  background: "rgba(0, 0, 0, 0.60)",
                  boxShadow: "0 4px 40px 8px rgba(0, 0, 0, 0.40), 0 0 0 0.5px rgba(0, 0, 0, 0.80), 0 0.5px 0 1px rgba(255, 255, 255, 0.30) inset",
                }}
              >
                {/* Search Header */}
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                  <span className="text-white">How do I quit Vim?</span>
                  <div className="w-0.5 h-4 bg-white/60 rounded-full ml-2" />
                </div>

                {/* Search Results */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">
                      Answer • Powered by Perplexity AI
                    </h3>
                    <p className="text-sm text-brand-gray-light leading-relaxed opacity-100">
                      Quitting Vim involves several methods. The simplest is pressing Esc then typing :q! and Enter to quit without saving.
                      Press Esc to enter command mode, then type :wq and Enter to save and quit. Press Esc then type :x and Enter for another
                      way to save and quit. These commands combine the power of AI with the web to answer any question.
                    </p>
                  </div>

                  <div className="space-y-4 opacity-50">
                    <p className="text-sm text-white font-medium">
                      Always On ChatGPT.{" "}
                      <span className="text-brand-gray-darker">
                        Stuck while coding? Need help writing an email? Meet your new virtual assistant.
                      </span>
                    </p>
                  </div>

                  <div className="space-y-4 opacity-50">
                    <p className="text-sm text-white font-medium">
                      Your Automation Assistant.{" "}
                      <span className="text-brand-gray-darker">
                        Create your own AI Commands to automate repetitive tasks and eliminate chores.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More About Pro Link */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="white" opacity="0.1" />
            </svg>
            <button className="flex items-center gap-1 text-white hover:text-brand-blue transition-colors">
              <span className="text-base font-medium">More about Pro</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
