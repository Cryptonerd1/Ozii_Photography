
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

const services = [
  "Wedding Photography",
  "Portrait Session",
  "Brand & Commercial",
  "Event Coverage",
  "Lifestyle & Editorial",
  "Other",
];

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@oziiphotos.com",
    href: "mailto:hello@oziiphotos.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (555) 012-3456",
    href: "tel:+15550123456",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Studio",
    value: "Downtown Creative District",
    href: "#",
  },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all duration-200";

  return (
    <section id="contact" className="bg-neutral-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Let's Create Something<br className="hidden md:block" /> Beautiful Together
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base">
            Ready to book your session or have a question? Fill out the form and Ozii will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>
              <div className="space-y-5">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors duration-200 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest">{item.label}</p>
                      <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                  Currently Booking
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Limited slots available for 2025. Early inquiries are encouraged to secure your preferred date.
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Follow the Journey</p>
              <div className="flex gap-3">
                {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">
                  Thank you, {form.name}! Ozii will be in touch within 24 hours to discuss your session.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", date: "", message: "" }); }}
                  className="mt-6 text-amber-400 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-neutral-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputBase} [color-scheme:dark]`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your session, location ideas, mood, or any special requests..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-4 rounded-xl hover:from-amber-300 hover:to-orange-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send My Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
  