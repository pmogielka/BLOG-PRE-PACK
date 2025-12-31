"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, BookOpen, Phone } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/#o-pre-pack", label: "O Pre-Pack", icon: BookOpen },
  { href: "/kontakt", label: "Kontakt", icon: Phone },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-nav border-b border-slate-100 shadow-glass"
            : "bg-transparent"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow">
                  <span className="font-heading font-bold text-white text-lg">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse-subtle" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
                  PrePack
                  <span className="text-brand-600">.pl</span>
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest -mt-0.5 hidden sm:block">
                  Przygotowana likwidacja
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href.split("#")[0]));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-brand-600"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-brand-50 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/kontakt"
                className="btn-primary text-sm"
              >
                Bezpłatna konsultacja
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <span className="font-heading font-bold text-xl text-slate-900">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-grow overflow-y-auto p-6">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href ||
                        (link.href !== "/" && pathname?.startsWith(link.href.split("#")[0]));

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className={clsx(
                              "flex items-center gap-4 px-4 py-3 rounded-xl transition-all",
                              isActive
                                ? "bg-brand-50 text-brand-600"
                                : "text-slate-600 hover:bg-slate-50"
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{link.label}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <Link
                    href="/kontakt"
                    className="btn-primary w-full justify-center text-base"
                  >
                    Bezpłatna konsultacja
                  </Link>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    Odpowiemy w ciągu 24 godzin
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
