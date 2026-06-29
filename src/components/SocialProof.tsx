
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amara Okonkwo",
    role: "Bride, Lagos Wedding 2024",
    quote:
      "Ozii captured every emotion of our wedding day perfectly. The photos are breathtaking — we cry happy tears every time we look at them. Truly a gifted artist.",
    initials: "AO",
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "David Mensah",
    role: "CEO, Mensah Brands",
    quote:
      "Our brand shoot exceeded every expectation. Ozii understood our vision instantly and delivered images that have completely transformed our marketing. Worth every penny.",
    initials: "DM",
    accent: "from-rose-400 to-pink-600",
  },
  {
    name: "Chidinma Eze",
    role: "Model & Content Creator",
    quote:
      "I've worked with many photographers, but Ozii is on another level. The lighting, the angles, the editing — everything is flawless. My portfolio has never looked better.",
    initials: "CE",
    accent: "from-violet-400 to-purple-600",
  },
  {
    name: "Tunde & Folake Adeyemi",
    role: "Couple, Engagement Shoot",
    quote:
      "We were nervous in front of the camera but Ozii made us feel so comfortable. The candid shots are pure magic — they tell our love story better than words ever could.",
    initials: "TF",
    accent: "from-teal-400 to-cyan-600",
  },
];

const stats = [
  { value: "500+", label: "Sessions Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "12", label: "Industry Awards" },
  { value: "98%", label: "Client Satisfaction" },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const animated = useCountUp(numeric, 1600, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-black text-white tracking-tight">
        {visible ? `${animated}${suffix}` : `0${suffix}`}
      </p>
      <p className="mt-1 text-sm text-white/60 uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
}

export function SocialProof() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-neutral-950 py-24 overflow-hidden">
      {/* Stats strip */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border border-white/10 rounded-2xl px-8 py-10 bg-white/5 backdrop-blur-sm">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
          Kind Words
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
          What Clients Say
        </h2>
        <p className="mt-4 text-white/50 max-w-xl mx-auto text-base">
          Real stories from real people who trusted Ozii Photos with their most precious moments.
        </p>
      </div>

      {/* Testimonial carousel */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden" ref={trackRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                  {/* Quote mark */}
                  <svg
                    className="w-10 h-10 text-amber-400/40 mb-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light italic mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t.name}</p>
                      <p className="text-white/40 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
  