"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { FileCheck, Clock, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    value: 127,
    suffix: "+",
    label: "Postępowań pre-pack",
    description: "w latach 2016-2018",
  },
  {
    icon: Clock,
    value: 292,
    suffix: " dni",
    label: "Średni czas procedury",
    description: "znacznie szybciej niż tradycyjna upadłość",
  },
  {
    icon: TrendingUp,
    value: 24,
    suffix: "%",
    label: "Średnie przebicie ceny",
    description: "ponad oszacowanie biegłego",
  },
  {
    icon: Users,
    value: 87,
    suffix: "%",
    label: "Wniosków od dłużników",
    description: "inicjatywa po stronie przedsiębiorców",
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export function Stats() {
  return (
    <section className="section-padding mesh-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-slate-200">
            Statystyki
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-4">
            Pre-pack w liczbach
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Dane z polskich sądów upadłościowych potwierdzają rosnącą popularność
            i skuteczność procedury przygotowanej likwidacji.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-brand-600" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-semibold text-slate-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-slate-500">{stat.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-100/50 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Source Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-slate-400 mt-10"
        >
          Źródło: Dane Ministerstwa Sprawiedliwości, raport Court Watch Polska 2019
        </motion.p>
      </div>
    </section>
  );
}
