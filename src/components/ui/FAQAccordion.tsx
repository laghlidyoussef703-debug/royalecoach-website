'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div
            key={i}
            className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white"
          >
            <button
              id={btnId}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#0D0F1A] text-base hover:bg-[#F8F9FB] transition-colors gap-4"
            >
              <span>{item.question}</span>
              <span
                className={`flex-shrink-0 text-xl text-[#1A6CF6] font-light transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-6 pb-5 pt-4 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
