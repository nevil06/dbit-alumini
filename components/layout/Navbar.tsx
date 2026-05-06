"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Stories", href: "/newsroom" },
  { label: "Alumni Assist", href: "/alumni-assist" },
  { label: "Achievements", href: "/distinguished" },
  { label: "Contribution", href: "/contribute" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(currentY > 50);

      // Auto-hide logic: hide when in hero zone and scrolling down
      if (currentY > 80 && currentY < heroHeight * 0.8) {
        if (currentY > lastScrollY.current) {
          setIsHidden(true);
        }
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Reveal on mouse near top (within 80px)
      if (e.clientY < 80) {
        setIsHidden(false);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
          if (window.scrollY > 80 && window.scrollY < window.innerHeight * 0.8) {
            setIsHidden(true);
          }
        }, 2500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <>
      {/* Desktop / Main Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          background: isScrolled
            ? "rgba(7, 42, 99, 0.97)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(244, 180, 0, 0.15)"
            : "none",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0,0,0,0.3)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/images/alumni-logo.jpg" alt="Alumni Logo" width={44} height={44} className="rounded-full bg-white object-contain border-2 border-[#0B3D91] shadow-sm" />
              <div className="hidden md:block ml-1">
                <p className="font-[family-name:var(--font-sora)] font-bold text-white text-sm leading-tight tracking-wide">
                  Don Bosco Alumni
                </p>
                <p className="text-[10px] text-[#F4B400] tracking-widest uppercase font-semibold">
                  Association
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/8"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[997] bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[998] w-[300px] flex flex-col"
              style={{
                background: "rgba(7, 42, 99, 0.98)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(244,180,0,0.2)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Image src="/images/alumni-logo.jpg" alt="Alumni Logo" width={36} height={36} className="rounded-full object-contain bg-white" />
                  <span className="font-[family-name:var(--font-sora)] font-bold text-white text-sm ml-1">
                    Don Bosco Alumni
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-all font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
