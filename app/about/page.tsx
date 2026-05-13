'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight,  Globe, Clock } from "lucide-react";//Linkedin
import { SectionLabel } from "@/components/shared/SectionLabel";

const values = [
  { title: "Quality over speed",      desc: "We'd rather take an extra day and get it right." },
  { title: "Honest communication",    desc: "No overpromising. We tell you what's realistic." },
  { title: "Ownership mentality",     desc: "We treat your project like our own business." },
  { title: "Continuous improvement",  desc: "We learn, we iterate, we get better." },
];

export default function AboutClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl tracking-tight text-balance max-w-4xl">
            We build like a product company. We deliver like an agency.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            We founded Codeflextech with a simple belief: great software and great design shouldn&apos;t be a luxury reserved for companies with massive budgets.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel>Our story</SectionLabel>
              <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl tracking-tight">
                From a small team to a global agency.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                Codeflextech was founded by engineers who grew tired of watching businesses settle for mediocre digital products. Starting as a small development team in Faisalabad, Pakistan, we&apos;ve grown into a full-service agency delivering for clients across the UK, UAE, USA, and Europe.
              </p>
              <p>
                Our edge is simple: we combine the rigour of a software product company with the agility of an agency. We ship fast, we ship well, and we stay close to our clients long after launch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Core values</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">
            What we believe.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <h3 className="mt-4 font-display font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>The team</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight">
            Led by senior engineers.
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            <div className="md:col-span-1 rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-accent/30 to-blue-500/20 grid-bg flex items-center justify-center">
                <span className="font-display font-bold text-7xl text-foreground/30">FS</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl">Faisal Shah</h3>
                <p className="text-sm text-muted-foreground">Founder & Technical Lead</p>
                <p className="mt-3 text-sm text-muted-foreground font-mono">PHP · Laravel · Node.js · MySQL</p>
                <a
                  href="https://linkedin.com/in/faisalshah404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent"
                >
                  {/* <Linkedin  className="h-4 w-4" />  */}
                  Connect
                </a>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-rows-3 gap-5">
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6">
                <Globe className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <p className="font-semibold">Faisalabad, Pakistan</p>
                  <p className="text-sm text-muted-foreground">Headquartered in Pakistan, serving clients globally.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6">
                <Clock className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <p className="font-semibold">Timezone-flexible</p>
                  <p className="text-sm text-muted-foreground">PKT (UTC+5) · We adapt to EST, GMT, GST hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-transparent p-6">
                <div className="h-6 w-6 rounded-full bg-accent shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold">Remote-first, globally available</p>
                  <p className="text-sm text-muted-foreground">Async-friendly. Slack, Email, and Calendly for sync calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Let&apos;s build something.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:bg-accent-dark transition"
          >
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}