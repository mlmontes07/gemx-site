import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FaqEntry } from '../data/homeData';

interface CleanFaqProps {
  items: FaqEntry[];
  defaultOpenIndex?: number | null;
}

export function CleanFaq({ items, defaultOpenIndex = 0 }: CleanFaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="clean-faq-list">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const btnId = `faq-btn-${idx}-${item.question.slice(0, 12).replace(/\W+/g, '')}`;
        const panelId = `faq-panel-${idx}-${item.question.slice(0, 12).replace(/\W+/g, '')}`;

        return (
          <div key={item.question} className="clean-faq-item" data-open={isOpen}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>
              <button
                id={btnId}
                type="button"
                className="clean-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <span>{item.question}</span>
                <span className="clean-faq-plus" aria-hidden="true">
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              style={{
                padding: '0 1.35rem 1.2rem 1.35rem',
                fontSize: '0.94rem',
                color: 'var(--text-body)',
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
