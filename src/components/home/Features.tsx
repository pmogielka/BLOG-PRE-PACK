"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Building2, ArrowRight, Clock, Users, Scale } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Szybka procedura",
    description:
      "Średni czas od złożenia wniosku do finalizacji to około 292 dni – znacznie krócej niż tradycyjna upadłość likwidacyjna.",
    highlight: "292 dni",
    color: "brand",
  },
  {
    icon: Shield,
    title: "Ochrona wierzycieli",
    description:
      "Cena sprzedaży musi przewyższać kwotę możliwą do uzyskania w zwykłej likwidacji, co gwarantuje lepsze zaspokojenie wierzycieli.",
    highlight: "wyższa wypłata",
    color: "green",
  },
  {
    icon: Building2,
    title: "Ciągłość działalności",
    description:
      "Przedsiębiorstwo jest sprzedawane jako funkcjonująca całość, co pozwala zachować miejsca pracy i relacje biznesowe.",
    highlight: "zachowane etaty",
    color: "blue",
  },
];

const benefits = [
  { icon: Clock, label: "Szybsze zaspokojenie" },
  { icon: Users, label: "Ochrona pracowników" },
  { icon: Scale, label: "Zgodność z prawem" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Features() {
  return (
    <section id="o-pre-pack" className="section-padding bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Dlaczego Pre-Pack?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 tracking-tight mb-6">
            Skuteczne ratowanie
            <br />
            <span className="text-gradient">wartości przedsiębiorstwa</span>
          </h2>
          <p className="text-lg text-slate-500">
            Pre-pack to nowoczesna instytucja prawa upadłościowego, która łączy szybkość
            działania z ochroną interesów wszystkich stron.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const colorClasses = {
              brand: {
                bg: "bg-brand-50",
                icon: "text-brand-600",
                border: "border-brand-100 hover:border-brand-200",
                highlight: "bg-brand-100 text-brand-700",
              },
              green: {
                bg: "bg-emerald-50",
                icon: "text-emerald-600",
                border: "border-emerald-100 hover:border-emerald-200",
                highlight: "bg-emerald-100 text-emerald-700",
              },
              blue: {
                bg: "bg-blue-50",
                icon: "text-blue-600",
                border: "border-blue-100 hover:border-blue-200",
                highlight: "bg-blue-100 text-blue-700",
              },
            }[feature.color];

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`group p-8 rounded-2xl bg-white border ${colorClasses?.border} transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colorClasses?.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-7 h-7 ${colorClasses?.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlight Tag */}
                <span
                  className={`inline-block px-3 py-1 ${colorClasses?.highlight} text-xs font-semibold rounded-full`}
                >
                  {feature.highlight}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Chcesz dowiedzieć się więcej?
            </h3>
            <p className="text-slate-400">
              Przeczytaj nasze szczegółowe artykuły o procedurze pre-pack
            </p>
          </div>

          {/* Benefits Pills */}
          <div className="hidden lg:flex items-center gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
              >
                <benefit.icon className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-white font-medium">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all shadow-brand hover:shadow-brand-lg whitespace-nowrap"
          >
            Zobacz artykuły
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
