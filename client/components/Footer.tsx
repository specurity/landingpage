import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer 
      className="relative border-t px-8 py-20"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.10)",
        background: "radial-gradient(44.06% 50% at 50% 0%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%), #07080A",
      }}
    >
      <div className="max-w-[1128px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Left Column - Logo & Newsletter */}
          <div className="flex flex-col gap-8 max-w-md">
            <div>
              <h3 className="text-2xl font-ethnocentric text-white mb-6">SPECURITY</h3>
              <p className="text-sm text-brand-gray-light leading-relaxed">
                JOIN OUR NEWSLETTER
              </p>
              <p className="text-xs text-brand-gray mt-2">
                Get the latest updates and news
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#EFEDFD" fillOpacity="0.3"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Discord"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.9419 5.76947C17.6279 5.16787 16.2407 4.74109 14.8158 4.5C14.6208 4.84857 14.4444 5.20721 14.2872 5.57441C12.7694 5.34569 11.2259 5.34569 9.70802 5.57441C9.55081 5.20725 9.37438 4.84862 9.17947 4.5C7.75362 4.74312 6.36551 5.17092 5.05017 5.77261C2.43887 9.63607 1.73099 13.4036 2.08493 17.1176C3.61417 18.2475 5.32583 19.1067 7.14549 19.6581C7.55523 19.107 7.91779 18.5224 8.22934 17.9104C7.6376 17.6894 7.06647 17.4167 6.52256 17.0956C6.66571 16.9917 6.80571 16.8848 6.94099 16.781C8.52365 17.5252 10.251 17.9111 12 17.9111C13.7489 17.9111 15.4763 17.5252 17.059 16.781C17.1958 16.8926 17.3358 16.9996 17.4774 17.0956C16.9324 17.4173 16.3603 17.6905 15.7675 17.912C16.0786 18.5237 16.4412 19.1078 16.8513 19.6581C18.6726 19.109 20.3855 18.2501 21.915 17.1192C22.3303 12.8121 21.2056 9.0792 18.9419 5.76947ZM8.67766 14.8335C7.69135 14.8335 6.8765 13.9384 6.8765 12.8373C6.8765 11.7361 7.66303 10.8332 8.67452 10.8332C9.686 10.8332 10.4946 11.7361 10.4773 12.8373C10.4599 13.9384 9.68285 14.8335 8.67766 14.8335ZM15.3223 14.8335C14.3344 14.8335 13.5227 13.9384 13.5227 12.8373C13.5227 11.7361 14.3092 10.8332 15.3223 10.8332C16.3354 10.8332 17.1376 11.7361 17.1203 12.8373C17.103 13.9384 16.3275 14.8335 15.3223 14.8335Z" fill="#EFEDFD" fillOpacity="0.3"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.8986 7.85709C19.9107 8.03438 19.9107 8.21166 19.9107 8.39058C19.9107 13.8424 15.8139 20.13 8.32282 20.13V20.1267C6.10992 20.13 3.94298 19.4878 2.08008 18.277C2.40185 18.3162 2.72524 18.3358 3.04943 18.3367C4.8833 18.3383 6.66476 17.7149 8.1075 16.5671C6.36476 16.5336 4.83653 15.3824 4.30266 13.7019C4.91314 13.8211 5.54217 13.7966 6.14137 13.6308C4.24137 13.2419 2.87443 11.5507 2.87443 9.58666V9.53438C3.44056 9.85382 4.07443 10.0311 4.72282 10.0507C2.9333 8.83911 2.38169 6.42735 3.46234 4.54173C5.53008 7.11934 8.58088 8.68634 11.8559 8.85219C11.5277 7.41918 11.976 5.91755 13.0341 4.91019C14.6744 3.3481 17.2543 3.42817 18.7962 5.08911C19.7083 4.90692 20.5825 4.56787 21.3825 4.08748C21.0785 5.04254 20.4422 5.85382 19.5922 6.36934C20.3994 6.27294 21.1881 6.05398 21.9309 5.71983C21.3841 6.5499 20.6954 7.27294 19.8986 7.85709Z" fill="#EFEDFD" fillOpacity="0.3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            {/* Product */}
            <div className="min-w-[168px]">
              <h4 className="text-sm font-medium text-[#F4F0FF] mb-5">Product</h4>
              <ul className="space-y-5">
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Changelog</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="min-w-[168px]">
              <h4 className="text-sm font-medium text-[#F4F0FF] mb-5">Company</h4>
              <ul className="space-y-5">
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Our team</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Our values</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Investors</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="min-w-[168px]">
              <h4 className="text-sm font-medium text-[#F4F0FF] mb-5">Resources</h4>
              <ul className="space-y-5">
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Support</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/" className="text-sm text-brand-gray-light/60 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-gray">
            ©2025 Specurity, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-sm text-brand-gray hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="text-sm text-brand-gray hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="text-sm text-brand-gray hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
