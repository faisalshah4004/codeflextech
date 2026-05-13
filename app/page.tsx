'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Users,
  FileText,
  Check,
  Star,
} from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

// ── Data ──────────────────────────────────────────────────────────────────────
const services = [
  { icon: Code2,       title: "Software Development", desc: "Custom web apps, SaaS products, APIs, and backend systems built with PHP, Laravel, and Node.js." },
  { icon: Smartphone,  title: "Mobile Development",   desc: "Cross-platform mobile apps built with Flutter and React Native for iOS and Android." },
  { icon: Palette,     title: "Graphic Design",       desc: "Brand identity, UI/UX design, social media creatives, flyers, brochures, and print materials." },
  { icon: TrendingUp,  title: "SEO & Digital Marketing", desc: "Search engine optimization, Google Ads, social media marketing, and content strategy." },
  { icon: Users,       title: "Dedicated Teams",      desc: "Hire full-stack developers, designers, and marketers as an extension of your in-house team." },
  { icon: FileText,    title: "Content Writing",      desc: "SEO-optimized website copy, blog articles, academic writing, and technical documentation." },
];

const techStack = ["PHP", "Laravel", "Node.js", "React", "Next.js", "MySQL", "WordPress", "Figma", "Flutter", "TypeScript", "Tailwind", "AWS"];

const stats = [
  { num: 50, suffix: "+", label: "Projects delivered" },
  { num: 15, suffix: "+", label: "Happy clients" },
  { num: 6,  suffix: "+", label: "Years of experience" },
  { num: 3,  suffix: "",  label: "Countries served" },
];

const projects = [
  { tag: "SaaS · PHP · MySQL",       title: "FCM EU — Vehicle Management Platform",  desc: "Global SaaS platform for fleet management. Deployed in Europe with 99.9% uptime.",                color: "from-accent/30 to-blue-500/20" },
  { tag: "SaaS · Laravel · Livewire", title: "Gulf Travel Management System",          desc: "End-to-end travel agency SaaS handling visa processing, payments, and bookings.",               color: "from-orange-500/30 to-accent/20" },
  { tag: "E-commerce · Laravel",      title: "Healthcare E-Commerce Platform",         desc: "Pharmacy and health product marketplace with Stripe integration and admin dashboard.",          color: "from-pink-500/30 to-purple-500/20" },
];

const whyUs = [
  "Full-cycle delivery — from discovery to deployment and maintenance",
  "Transparent communication — daily updates, Slack/email access to your team",
  "Senior-led teams — no juniors handed your project unsupervised",
  "Time-zone flexible — we adapt to your working hours (EST, GMT, GST)",
];

const testimonials = [
  { quote: "Codeflextech delivered our Laravel platform on time and on budget. The communication was flawless throughout the project.", name: "Sarah M.", role: "Product Manager · UK" },
  { quote: "Their team integrated seamlessly with ours. The developers were skilled, proactive, and easy to work with.",               name: "Ahmed R.", role: "CTO · UAE" },
  { quote: "From UI design to SEO, they handled everything. Our organic traffic doubled in 4 months.",                                 name: "James K.", role: "Founder · USA" },
];

// ── Counter component ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref   = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count  = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] });
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-4 py-1.5 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Available for new projects · Q3 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance max-w-5xl"
          >
            We build digital
            <br />
            products that{" "}
            <span className="relative inline-block">
              <span className="text-accent">scale.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4 Q 50 0 100 4 T 200 4" stroke="currentColor" className="text-accent" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Codeflextech is a full-service IT agency delivering software development, design systems, SEO, and dedicated engineering teams to ambitious businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition shadow-lg shadow-accent/20"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 backdrop-blur px-7 py-4 font-semibold hover:bg-surface transition"
            >
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>Trusted across 3+ countries</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>50+ projects delivered</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>6+ years of expertise</span>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-surface/40 py-6 overflow-hidden">
          <div className="flex marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="mx-8 font-mono text-sm text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl text-balance">
              Every service your business needs — under one roof.
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-surface p-8 hover:border-accent/40 transition-all overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-3xl transition-all duration-500" />
                <s.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-5xl md:text-6xl text-accent">
                  <Counter to={s.num} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionLabel>Our work</SectionLabel>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Projects we&apos;re proud of.
              </h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent font-semibold">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display font-bold text-7xl text-foreground/10">0{i + 1}</div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-accent/10 text-accent text-xs font-mono px-3 py-1">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <SectionLabel>Why us</SectionLabel>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
                An agency that thinks like a product company.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                We don&apos;t just write code. We architect solutions that align with your business goals.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="space-y-1">
              {whyUs.map((f) => (
                <div key={f} className="flex gap-4 py-5 border-b border-border last:border-b-0">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                  </div>
                  <p className="text-foreground">{f}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <SectionLabel>Client feedback</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              What our clients say.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex gap-1 text-accent mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-surface to-background p-12 lg:p-20 text-center"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
                Ready to build something great?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Let&apos;s talk about your project. No obligations, no sales pitch — just a real conversation.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent-dark transition shadow-lg shadow-accent/30"
              >
                Book a free discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}