"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "Czym jest pre-pack (przygotowana likwidacja)?",
    answer:
      "Pre-pack to procedura w polskim prawie upadłościowym (art. 56a-56h) umożliwiająca szybką sprzedaż przedsiębiorstwa dłużnika już w momencie ogłoszenia upadłości. Wniosek o zatwierdzenie warunków sprzedaży jest rozpatrywany wraz z wnioskiem o ogłoszenie upadłości, co znacząco przyspiesza cały proces.",
  },
  {
    question: "Kto może złożyć wniosek o pre-pack?",
    answer:
      "Wniosek o zatwierdzenie warunków sprzedaży może złożyć dłużnik lub wierzyciel osobisty dłużnika. W praktyce około 87% wniosków składanych jest przez samych dłużników, którzy mają najlepszą pozycję, by przed upadłością znaleźć potencjalnego nabywcę.",
  },
  {
    question: "Jak długo trwa procedura pre-pack?",
    answer:
      "Średni czas od złożenia wniosku do finalizacji transakcji wynosi około 292 dni (niecały rok). Jest to znacznie szybciej niż tradycyjna upadłość likwidacyjna, która może trwać nawet 2-3 lata. Sam moment sprzedaży następuje zaraz po ogłoszeniu upadłości.",
  },
  {
    question: "Jakie są korzyści pre-pack dla wierzycieli?",
    answer:
      "Wierzyciele uzyskują wyższe i szybsze zaspokojenie. Warunkiem zatwierdzenia pre-pack przez sąd jest cena przewyższająca kwotę możliwą do uzyskania w zwykłej likwidacji. Dodatkowo, szybkie zamknięcie transakcji ogranicza koszty postępowania, które normalnie pomniejszałyby masę upadłości.",
  },
  {
    question: "Czy pre-pack pozwala zachować miejsca pracy?",
    answer:
      "Tak, to jedna z głównych zalet pre-packu. Nabywca przejmuje przedsiębiorstwo jako funkcjonującą całość, co zazwyczaj oznacza kontynuację działalności i zachowanie załogi. Dzięki temu można uniknąć masowych zwolnień typowych dla tradycyjnej upadłości likwidacyjnej.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-6">
              Najczęściej zadawane
              <br />
              <span className="text-gradient">pytania</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Znajdź odpowiedzi na podstawowe pytania dotyczące procedury pre-pack.
              Jeśli potrzebujesz więcej informacji, zapoznaj się z naszymi artykułami
              lub skontaktuj się z nami.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary">
                Czytaj artykuły
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Zadaj pytanie
              </Link>
            </div>

            {/* Decorative */}
            <div className="hidden lg:block mt-12">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="w-12 h-px bg-slate-200" />
                <span>Masz więcej pytań?</span>
              </div>
              <p className="text-sm text-slate-400 mt-2 ml-16">
                Skontaktuj się z nami – odpowiemy w ciągu 24 godzin.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden data-[state=open]:border-brand-200 data-[state=open]:shadow-card transition-all"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors">
                      <span className="font-medium text-slate-900 group-data-[state=open]:text-brand-600 transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-500" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
