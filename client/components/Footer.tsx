export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "#07080A",
        borderTop: "1px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      <div className="max-w-[1128px] mx-auto px-6">
        {/* Top row: Logo + Nav links */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <span className="font-ethnocentric text-white tracking-wide text-lg md:text-xl">
            SPECURITY
          </span>

          {/* Nav links */}
          <nav className="flex items-center gap-8 md:gap-10">
            <a
              href="#team"
              className="font-inter text-sm text-white/55 hover:text-white transition-colors tracking-wide"
            >
              Team
            </a>
            <a
              href="#career"
              className="font-inter text-sm text-white/55 hover:text-white transition-colors tracking-wide"
            >
              Career
            </a>
            <a
              href="#contact"
              className="font-inter text-sm text-white/55 hover:text-white transition-colors tracking-wide"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
        />

        {/* Bottom row: Copyright + Social icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          {/* Copyright */}
          <p className="font-inter text-sm text-white/35 flex items-center gap-2">
            © 2025 — Copyright Specurity, All Right Reserved
            <span className="text-white/20">•</span>
            <a
              href="/"
              className="text-white/35 hover:text-white transition-colors"
            >
              Privacy
            </a>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="#"
              aria-label="Discord"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9419 5.76947C17.6279 5.16787 16.2407 4.74109 14.8158 4.5C14.6208 4.84857 14.4444 5.20721 14.2872 5.57441C12.7694 5.34569 11.2259 5.34569 9.70802 5.57441C9.55081 5.20725 9.37438 4.84862 9.17947 4.5C7.75362 4.74312 6.36551 5.17092 5.05017 5.77261C2.43887 9.63607 1.73099 13.4036 2.08493 17.1176C3.61417 18.2475 5.32583 19.1067 7.14549 19.6581C7.55523 19.107 7.91779 18.5224 8.22934 17.9104C7.6376 17.6894 7.06647 17.4167 6.52256 17.0956C6.66571 16.9917 6.80571 16.8848 6.94099 16.781C8.52365 17.5252 10.251 17.9111 12 17.9111C13.7489 17.9111 15.4763 17.5252 17.059 16.781C17.1958 16.8926 17.3358 16.9996 17.4774 17.0956C16.9324 17.4173 16.3603 17.6905 15.7675 17.912C16.0786 18.5237 16.4412 19.1078 16.8513 19.6581C18.6726 19.109 20.3855 18.2501 21.915 17.1192C22.3303 12.8121 21.2056 9.0792 18.9419 5.76947ZM8.67766 14.8335C7.69135 14.8335 6.8765 13.9384 6.8765 12.8373C6.8765 11.7361 7.66303 10.8332 8.67452 10.8332C9.686 10.8332 10.4946 11.7361 10.4773 12.8373C10.4599 13.9384 9.68285 14.8335 8.67766 14.8335ZM15.3223 14.8335C14.3344 14.8335 13.5227 13.9384 13.5227 12.8373C13.5227 11.7361 14.3092 10.8332 15.3223 10.8332C16.3354 10.8332 17.1376 11.7361 17.1203 12.8373C17.103 13.9384 16.3275 14.8335 15.3223 14.8335Z" fill="currentColor"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
