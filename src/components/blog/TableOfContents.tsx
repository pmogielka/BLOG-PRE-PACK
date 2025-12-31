"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { clsx } from "clsx";
import { ArticleSection } from "@/lib/articleContent";

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200">
        <List className="w-4 h-4 text-slate-500" />
        <h3 className="font-heading font-semibold text-slate-900 text-sm">
          Spis treści
        </h3>
      </div>

      <nav>
        <ul className="space-y-1">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={clsx(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200",
                  "hover:bg-white hover:shadow-sm",
                  activeSection === section.id
                    ? "bg-white shadow-sm text-brand-600 font-medium"
                    : "text-slate-600"
                )}
              >
                <span className="flex items-start gap-2">
                  <span className="text-xs text-slate-400 mt-0.5 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-2">{section.title}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>Postęp czytania</span>
          <span>
            {activeSection
              ? `${sections.findIndex((s) => s.id === activeSection) + 1}/${sections.length}`
              : "0/" + sections.length}
          </span>
        </div>
        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full transition-all duration-300"
            style={{
              width: `${
                activeSection
                  ? ((sections.findIndex((s) => s.id === activeSection) + 1) /
                      sections.length) *
                    100
                  : 0
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
