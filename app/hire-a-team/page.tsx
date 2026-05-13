'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Layout, Smartphone, Palette, TrendingUp, Briefcase, Check } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";

const roles = [
  { icon: Code2,       title: "Backend Developer",  skills: "PHP · Laravel · Node.js · MySQL",      availability: "Full-time" },
  { icon: Layout,      title: "Frontend Developer", skills: "React · Next.js · Vue · Tailwind",     availability: "Full-time" },
  { icon: Smartphone,  title: "Mobile Developer",   skills: "Flutter · React Native",               availability: "Full-time" },
  { icon: Palette,     title: "UI/UX Designer",     skills: "Figma · Adobe XD · Design Systems",   availability: "Part-time" },
  { icon: TrendingUp,  title: "SEO Specialist",     skills: "Technical SEO · Content SEO",          availability: "Full-time" },
  { icon: Briefcase,   title: "Project Manager",    skills: "Scrum · Jira · Agile",                 availability: "Part-time" },
];

const models = [
  { title: "Full-Time Dedicated", price: "160 hrs/month", featured: false, features: ["Single point of contact", "Daily standups", "Direct Slack access", "Sprint planning"] },
  { title: "Part-Time",           price: "80 hrs/month",  featured: true,  features: ["Flexible hours", "Weekly check-ins", "Async-friendly", "Pause anytime"] },
  { title: "Project-Based",       price: "Fixed scope",   featured: false, features: ["Milestone payments", "Defined timeline", "Clear deliverables", "Post-launch support"] },
];

const steps = [
  { n: "01", t: "Tell us what you need", d: "Share the role, skills, and timeline." },
  { n: "02", t: "We match in 48 hours",  d: "Vetted candidates ready for interview." },
  { n: "03", t: "Interview & select",    d: "Pick the right fit for your team." },
  { n: "04", t: "Start working",         d: "We handle HR, payroll, and admin." },
];

export default function HireATeamPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <SectionLabel>Team Augmentation</SectionLabel>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
            Extend your team with senior talent — on demand.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Hire dedicated developers, designers, and digital marketers who integrate seamlessly with your team and hit the ground running.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
            >
              Start hiring <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#roles"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-4 font-semibold hover:bg-surface-light transition"
            >
              See available roles
            </a>
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      <section id="roles" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Available roles</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight max-w-3xl">
            Senior talent, ready to plug in.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-accent/40 transition"
              >
                <div className="flex justify-between items-start">
                  <r.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-mono rounded-full border border-accent/30 bg-accent/10 text-accent px-3 py-1">
                    {r.availability}
                  </span>
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-mono">{r.skills}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-accent"
                >
                  Request profile <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="py-24 lg:py-32 border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Engagement models</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">
            Pick what fits.
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {models.map((m) => (
              <div
                key={m.title}
                className={`relative rounded-2xl border p-8 ${
                  m.featured
                    ? "border-accent bg-gradient-to-br from-accent/10 to-transparent"
                    : "border-border bg-background"
                }`}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-8 text-xs font-mono uppercase tracking-widest bg-accent text-accent-foreground rounded-full px-3 py-1">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-2xl">{m.title}</h3>
                <p className="mt-2 text-accent font-mono text-sm">{m.price}</p>
                <ul className="mt-6 space-y-3">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">
            From request to ramp-up in 48 hours.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 font-display font-semibold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-surface to-background p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Ready to scale your team?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Tell us what you need. We&apos;ll match you with vetted talent in 48 hours.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
              >
                Start hiring <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}