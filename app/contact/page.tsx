'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { toast } from "sonner";

const serviceOptions = [
  "Software Development",
  "Mobile App",
  "Graphic Design",
  "Video Animation",
  "SEO",
  "Content Writing",
  "Social Media Marketing",
  "Google Ads",
  "Hire a Developer / Team",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition"
      >
        <Icon className="h-5 w-5 text-accent" />
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="mt-1 font-medium">{value}</p>
      </a>
    );
  }
  return (
    <div className="block rounded-2xl border border-border bg-surface p-6">
      <Icon className="h-5 w-5 text-accent" />
      <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

export default function ContactPage() {
  const [services, setServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl tracking-tight max-w-3xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tell us about your project. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-transparent p-12 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <Check className="h-8 w-8 text-accent" strokeWidth={2.5} />
                </div>
                <h2 className="mt-6 font-display font-bold text-3xl">
                  Thanks for reaching out!
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  We&apos;ll respond within 24 hours. In the meantime, feel free to book a quick discovery call.
                </p>
                <a
                  href="https://calendly.com/codeflextech/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold"
                >
                  Book a call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-surface p-8 lg:p-10 space-y-8"
              >
                {/* Service selector */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    What do you need? (Select all that apply)
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`rounded-full px-4 py-2 text-sm border transition ${
                          services.includes(s)
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-background border-border hover:border-accent/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Your name" required>
                    <input required type="text" className={inputClass} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Company">
                    <input type="text" className={inputClass} placeholder="Acme Inc." />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" className={inputClass} placeholder="jane@acme.com" />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input type="tel" className={inputClass} placeholder="+1 555 000 0000" />
                  </Field>
                  <Field label="Estimated budget">
                    <select className={inputClass}>
                      <option>Not sure</option>
                      <option>{"< $1,000"}</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000+</option>
                    </select>
                  </Field>
                  <Field label="Project timeline">
                    <select className={inputClass}>
                      <option>ASAP</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Flexible</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" required>
                  <textarea
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="Tell us a bit about your project, goals, and any constraints..."
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <InfoCard
              icon={Mail}
              title="Email"
              value="hello@codeflextech.com"
              href="mailto:hello@codeflextech.com"
            />
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              value="+92 321 6808401"
              href="https://wa.me/923216808401"
            />
            <InfoCard
              icon={MapPin}
              title="Location"
              value="Faisalabad, Pakistan"
            />
            <InfoCard
              icon={Clock}
              title="Response time"
              value="Within 24 hours · PKT (UTC+5)"
            />
          </aside>
        </div>
      </section>
    </>
  );
}