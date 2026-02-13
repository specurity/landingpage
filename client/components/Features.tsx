import { 
  Shield, 
  Network, 
  Lock, 
  Zap, 
  FileCode, 
  Target, 
  Activity, 
  Clock 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Built for speed",
    description: "Instant threat detection and response in milliseconds"
  },
  {
    icon: Network,
    title: "Networked safety",
    description: "Comprehensive protection across your entire infrastructure"
  },
  {
    icon: Lock,
    title: "API-first",
    description: "Seamless integration with your existing tools and workflows"
  },
  {
    icon: Zap,
    title: "Bring an AI program",
    description: "Deploy custom AI security models tailored to your needs"
  },
  {
    icon: FileCode,
    title: "Complexity management",
    description: "Simplify security with intelligent threat correlation"
  },
  {
    icon: Target,
    title: "Probing 24/7",
    description: "Continuous monitoring with AI-driven threat intelligence"
  },
  {
    icon: Activity,
    title: "1-point SPCM",
    description: "Unified security policy control and management"
  },
  {
    icon: Clock,
    title: "Priority-free restart",
    description: "Zero-downtime updates and failover protection"
  }
];

export default function Features() {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-blue-darker/30 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue-darker/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-blue" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
