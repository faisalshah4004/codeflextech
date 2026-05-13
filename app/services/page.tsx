'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2, Smartphone, Palette, Play, TrendingUp,
  FileText, Share2, Target, Users, ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";

const services = [
  { icon: Code2,       title: "Software Development",   tag: "Backend · APIs · SaaS",              desc: "Custom web applications, REST APIs, SaaS platforms, CMS integrations, and legacy system modernization." },
  { icon: Smartphone,  title: "Mobile App Development", tag: "Flutter · React Native",             desc: "Cross-platform mobile applications that feel native on both iOS and Android." },
  { icon: Palette,     title: "Graphic Design",         tag: "Branding · Print · Digital",         desc: "Brand identity systems and creatives that make your business look professional and consistent." },
  { icon: Play,        title: "Video Animation",        tag: "2D · Motion Graphics · Ads",         desc: "Engaging video content that communicates your message clearly and drives action." },
  { icon: TrendingUp,  title: "SEO",                   tag: "On-Page · Technical · Local",         desc: "Data-driven SEO strategies that improve rankings and drive qualified organic traffic." },
  { icon: FileText,    title: "SEO Content Writing",    tag: "Blog · Web Copy · Technical",        desc: "Content that ranks on Google and converts readers into customers." },
  { icon: Share2,      title: "Social Media Marketing", tag: "Facebook · Instagram · LinkedIn",    desc: "Full social media management — strategy, content, posting, and community engagement." },
  { icon: Target,      title: "Google Ads Management",  tag: "Search · Display · Shopping",        desc: "ROI-focused Google Ads campaigns managed by certified specialists." },
  { icon: Users,       title: "Dedicated Teams",        tag: "Developers · Designers · Marketers", desc: "Hire pre-vetted senior talent who embed directly into your team." },
];

const steps = [
  { n: "01", title: "Discovery",           desc: "We learn about your business, goals, audience, and budget. No fluff." },
  { n: "02", title: "Strategy & Proposal", desc: "We send a detailed scope of work with timeline and pricing." },
  { n: "03", title: "Execution",           desc: "Your dedicated team gets to work with regular check-ins and updates." },
  { n: "04", title: "Delivery & Support",  desc: "We launch, monitor, and support you post-delivery." },
];

export default function ServicesClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
            Everything your business needs to grow digitally.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            From strategy to execution — we cover the full spectrum of digital services so you don&apos;t need to manage 10 different vendors.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group rounded-2xl border border-border bg-surface p-8 hover:border-accent/40 transition"
              >
                <s.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <span className="mt-6 inline-block rounded-full bg-accent/10 text-accent text-xs font-mono px-3 py-1">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all"
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 lg:py-32 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Our process</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl text-balance">
            From brief to delivery — a clear, repeatable process.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-8"
              >
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Don&apos;t see what you need?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We tackle custom challenges all the time. Tell us what you&apos;re working on.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}