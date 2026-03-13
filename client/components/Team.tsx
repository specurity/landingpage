const teamMembers = [
  {
    name: "Owen Mitchell",
    photo: "https://images.pexels.com/photos/18460017/pexels-photo-18460017.jpeg?auto=compress&cs=tinysrgb&w=600",
    grayscale: true,
  },
  {
    name: "Lucas Grant",
    photo: "https://images.pexels.com/photos/10904470/pexels-photo-10904470.png?auto=compress&cs=tinysrgb&w=600",
    grayscale: true,
  },
  {
    name: "Lily Harper",
    photo: "https://images.pexels.com/photos/33871730/pexels-photo-33871730.jpeg?auto=compress&cs=tinysrgb&w=600",
    grayscale: false,
  },
  {
    name: "Henry Collins",
    photo: "https://images.pexels.com/photos/30496628/pexels-photo-30496628.jpeg?auto=compress&cs=tinysrgb&w=600",
    grayscale: false,
  },
];

export default function Team() {
  return (
    <section className="relative py-24 px-8 bg-[#07080A]">
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white">
            <span
              className="text-[#0A0A0A] font-inter font-semibold tracking-widest uppercase"
              style={{ fontSize: "13px", letterSpacing: "0.12em" }}
            >
              Meet the Team
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2
            className="font-space-grotesk font-bold text-white"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.1" }}
          >
            The people behind the innovation
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p
            className="font-inter text-[#9C9C9D]"
            style={{ fontSize: "16px", lineHeight: "1.6" }}
          >
            A creative, curious crew building things we believe in—together.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4">
              {/* Photo Card */}
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-white/10"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  style={{
                    filter: member.grayscale ? "grayscale(100%)" : "none",
                  }}
                />
                {/* Subtle bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,8,10,0.6) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Name */}
              <span
                className="font-inter text-white/80 text-center"
                style={{ fontSize: "15px", fontWeight: 400 }}
              >
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
