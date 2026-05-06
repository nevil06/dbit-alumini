"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Mail, ArrowUpRight
} from "lucide-react";

// Custom SVG Icons for Brands since they were removed from lucide-react
const FacebookIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);
const InstagramIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Members", href: "/members" },
];

const alumniLinks = [
  { label: "Alumni Assist", href: "/alumni-assist" },
  { label: "Distinguished Alumni", href: "/distinguished" },
  { label: "Contribute", href: "/contribute" },
  { label: "Alumni Directory", href: "/members" },
];

const socialLinks = [
  {
    Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=100087399470927",
    label: "Facebook",
  },
  {
    Icon: TwitterIcon, href: "https://twitter.com/donboscoblr",
    label: "Twitter",
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/don-bosco-institute-of-technology-alumni-association-dbitaa-bangalore-2975a4210/",
    label: "LinkedIn",
  },
  {
    Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UC7oDORVrTwyYgEGupzb97vg",
    label: "YouTube",
  },
  {
    Icon: InstagramIcon, href: "https://www.instagram.com/dbit.aa/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#0A1628", borderTop: "1px solid rgba(244,180,0,0.12)" }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Image src="/images/alumni-logo.jpg" alt="Alumni Logo" width={48} height={48} className="rounded-full object-contain bg-white border border-[#0B3D91]" />
              <div className="ml-1">
                <p className="font-[family-name:var(--font-sora)] font-bold text-white text-base leading-tight tracking-wide">
                  Don Bosco Alumni
                </p>
                <p className="text-[10px] text-[#F4B400] tracking-widest uppercase">
                  Association
                </p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              The official alumni network of Don Bosco Institute of Technology,
              Bangalore. Connecting DBITians across the globe since 2001.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#F4B400] flex-shrink-0" />
                <span>Kumbalagodu, Mysore Road,<br />Bengaluru – 560 074</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#F4B400] flex-shrink-0" />
                <a href="mailto:alumni@dbit.co.in" className="hover:text-white transition-colors">
                  alumni@dbit.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] font-semibold text-white mb-5 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-[#F4B400] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F4B400] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alumni Links */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] font-semibold text-white mb-5 text-sm tracking-wide uppercase">
              Alumni
            </h4>
            <ul className="space-y-3">
              {alumniLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-[#F4B400] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F4B400] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-[family-name:var(--font-sora)] font-semibold text-white mb-5 text-sm tracking-wide uppercase">
              Stay Connected
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(244,180,0,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,180,0,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#F4B400";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="https://dbit.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:gap-3"
              style={{ background: "rgba(11,61,145,0.5)", border: "1px solid rgba(11,61,145,0.8)" }}
            >
              Visit DBIT Website
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} DBIT Alumni Association. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((t) => (
              <Link key={t} href="#" className="text-white/35 hover:text-white/60 text-xs transition-colors">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
