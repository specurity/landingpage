import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-8">
      <div
        className="flex items-center justify-between w-full max-w-[1204px] px-4 md:px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-sm"
        style={{
          background: "linear-gradient(0deg, rgba(12, 13, 15, 0.90) 0%, rgba(12, 13, 15, 0.90) 100%)"
        }}
      >
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <span className="text-base md:text-lg font-ethnocentric text-white tracking-wide">Specurity</span>
        </div>

        {/* Center Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          <Link to="/" className="px-2 py-3 rounded-md hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-brand-gray">Our Services</span>
          </Link>
          <Link to="/" className="px-2 py-3 rounded-md hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-brand-gray">Teams</span>
          </Link>
          <Link to="/" className="px-2 py-3 rounded-md hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-brand-gray">Career</span>
          </Link>
          <Link to="/" className="px-2 py-3 rounded-md hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-brand-gray">Contact</span>
          </Link>
        </div>

        {/* Right Navigation - Action buttons */}
        <div className="flex items-center gap-3 md:gap-6 flex-shrink-0">
          <Link to="/" className="hidden md:block px-2 py-3 rounded-md hover:bg-white/5 transition-colors">
            <span className="text-sm font-medium text-brand-gray">Get In Touch</span>
          </Link>
          <Button
            className="px-3 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-lg h-auto"
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
