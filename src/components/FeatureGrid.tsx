
import { Aperture, Heart, Star, Clock, ImageIcon, Award } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Aperture size={24} />,
    title: "Portraits",
    description:
      "Individual and family portraits that reveal personality, warmth, and the quiet beauty in every face.",
  },
  {
    icon: <Heart size={24} />,
    title: "Weddings & Events",
    description:
      "From the first look to the last dance — comprehensive coverage of your most cherished milestones.",
  },
  {
    icon: <Star size={24} />,
    title: "Commercial",
    description:
      "Brand-aligned photography for businesses, products, and editorial spreads that demand attention.",
  },
  {
    icon: <ImageIcon size={24} />,
    title: "Fine Art Prints",
    description:
      "Gallery-quality large-format prints on premium archival paper, ready to adorn your walls.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fast Turnaround",
    description:
      "Professionally edited galleries delivered within 7 days, with rush delivery available on request.",
  },
  {
    icon: <Award size={24} />,
    title: "Award-Winning Eye",
    description:
      "Recognised by regional and national photography bodies for excellence in visual storytelling.",
  },
];

export function FeatureGrid() {
  return (
    <section id="portfolio" className="bg-neutral-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Photography for every
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              chapter of your life
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-neutral-400 text-lg">
            Whether you need a single striking headshot or full event coverage,
            Ozii Photos delivers with precision and heart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  