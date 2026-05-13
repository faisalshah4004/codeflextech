'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";

const projects = [
  {
    tag: "SaaS · PHP · MySQL",
    industry: "Fleet & Logistics",
    title: "FCM EU — Vehicle Management Platform",
    desc: "Global SaaS platform for fleet management. Deployed across 3 EU countries with 99.9% uptime.",
    metrics: ["99.9% uptime", "40% less admin work", "3 countries"],
    color: "from-accent/30 via-cyan-500/20 to-blue-500/10",
  },
  {
    tag: "SaaS · Laravel · Livewire",
    industry: "Travel & Tourism",
    title: "Gulf Travel Management System",
    desc: "End-to-end travel agency SaaS handling visa processing, payments, and bookings.",
    metrics: ["80% fewer errors", "Stripe integration", "<2hr onboarding"],
    color: "from-orange-500/30 via-accent/20 to-pink-500/10",
  },
  {
    tag: "E-commerce · Laravel",
    industry: "Healthcare",
    title: "Healthcare E-Commerce Platform",
    desc: "Pharmacy and health product marketplace with Stripe and admin dashboard.",
    metrics: ["10k+ products", "Multi-vendor", "Stripe Connect"],
    color: "from-pink-500/30 via-purple-500/20 to-accent/10",
  },
  {
    tag: "Mobile · Flutter",
    industry: "Fitness",
    title: "FitTrack — Workout Companion App",
    desc: "Cross-platform fitness tracking app with custom workout builder and social features.",
    metrics: ["50k+ downloads", "4.7★ rating", "iOS + Android"],
    color: "from-emerald-500/30 via-accent/20 to-cyan-500/10",
  },
  {
    tag: "SEO · Content",
    industry: "B2B SaaS",
    title: "Organic Growth Campaign",
    desc: "Full-funnel SEO and content strategy for a B2B SaaS targeting US enterprise market.",
    metrics: ["3x organic traffic", "120 keywords ranking", "$0 paid spend"],
    color: "from-amber-500/30 via-orange-500/20 to-accent/10",
  },
  {
    tag: "Branding · UI/UX",
    industry: "Fintech",
    title: "Vault — Fintech Brand & Product",
    desc: "Complete brand identity, design system, and dashboard UI for a fintech startup.",
    metrics: ["Brand system", "60+ components", "Series A funded"],
    color: "from-violet-500/30 via-fuchsia-500/20 to-accent/10",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
            Selected work from the last few years.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Real products, real outcomes. Here&apos;s a snapshot of what we&apos;ve built for clients across industries.
          </p>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display font-bold text-8xl text-foreground/10">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/70">
                      {p.industry}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-accent/10 text-accent text-xs font-mono px-3 py-1">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-2xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Want to be next?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}