import Link from "next/link";
import { Zap, Mail } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Zap className="h-4 w-4 text-accent" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg">Codeflextech</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Building digital products that scale. A full-service IT agency for ambitious businesses worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com/company/codeflextech"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/codeflextech"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@codeflextech.com"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about"       className="hover:text-accent transition">About</Link></li>
              <li><Link href="/portfolio"   className="hover:text-accent transition">Portfolio</Link></li>
              <li><Link href="/services"    className="hover:text-accent transition">Services</Link></li>
              <li><Link href="/hire-a-team" className="hover:text-accent transition">Hire a Team</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
              <li>
                <a href="mailto:hello@codeflextech.com" className="hover:text-accent transition">
                  hello@codeflextech.com
                </a>
              </li>
              <li className="text-muted-foreground">Faisalabad, Pakistan</li>
              <li className="text-muted-foreground">PKT (UTC+5)</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Codeflextech. All rights reserved.</p>
          <p>Built for global businesses · Based in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}