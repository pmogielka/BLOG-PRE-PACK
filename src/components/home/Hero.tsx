"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Shield, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Shield, value: "127+", label: "postępowań" },
  { icon: Clock, value: "292", label: "dni średnio" },
  { icon: TrendingUp, value: "24%", label: "przebicie ceny" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden mesh-gradient">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
        />
        <div
          className="absolute top-1/2 -right-20 w-72 h-72 md:w-96 md:h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
        />
        <div
          className="absolute -bottom-20 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
                Aktualne przepisy 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Przygotowana
              <br />
              <span className="relative">
                <span className="text-slate-400 line-through decoration-brand-500/50 decoration-[3px]">
                  likwidacja
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-full" />
              </span>
              <br />
              <span className="text-gradient">nowy start.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Pre-pack to{" "}
              <span className="text-slate-900 font-medium">
                szybka i skuteczna procedura
              </span>{" "}
              ratowania przedsiębiorstwa. Poznaj możliwości, jakie daje polskie prawo upadłościowe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link href="/kontakt" className="btn-primary w-full sm:w-auto text-base py-4 px-8">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/blog" className="btn-secondary w-full sm:w-auto text-base py-4 px-8">
                <PlayCircle className="w-5 h-5" />
                Poznaj procedurę
              </Link>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/50"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-brand-500" />
                    <span className="text-2xl font-heading font-bold text-slate-900">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
                {/* Card Header */}
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Proces Pre-Pack
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-50/50 border border-brand-100">
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">
                        Wniosek o zatwierdzenie warunków
                      </h4>
                      <p className="text-xs text-slate-500">
                        Złożenie wniosku wraz z opisem i oszacowaniem majątku
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-white font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">
                        Zatwierdzenie przez sąd
                      </h4>
                      <p className="text-xs text-slate-500">
                        Weryfikacja warunków i ogłoszenie upadłości
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm mb-1">
                        Sprzedaż przedsiębiorstwa
                      </h4>
                      <p className="text-xs text-slate-400">
                        Finalizacja transakcji z nabywcą
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce-slow">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-medium">
                    Średnio <span className="text-brand-400">292 dni</span>
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-brand-200 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
