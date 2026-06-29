
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-neutral-900 border border-amber-500/20 p-12 sm:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/15 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-400/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 mb-6">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                Limited spots available
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Ready to create something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                unforgettable?
              </span>
            </h2>

            {/* Body */}
            <p className="max-w-lg mx-auto text-neutral-300 text-lg leading-relaxed mb-10">
              Book your session today and let Ozii Photos craft imagery you
              will treasure for a lifetime. Consultations are free and
              no-obligation.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-base transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="mailto:hello@oziiphotos.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Send an Email
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-8 text-neutral-500 text-sm">
              No commitment required · Response within 24 hours · 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
  