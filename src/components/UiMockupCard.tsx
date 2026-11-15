import { LayoutDashboard } from 'lucide-react';
import { MockupPreview } from '../data/sitePagesData';

export function UiMockupCard({ preview }: { preview: MockupPreview }) {
  return (
    <div
      className="space-card space-card--elevated"
      style={{
        padding: 'clamp(1.35rem, 3vw, 1.85rem)',
      }}
    >
      {/* Clean Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingBlockEnd: '1rem',
          marginBlockEnd: '1.1rem',
          borderBlockEnd: '1px solid var(--border-hairline)',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--accent-ink)',
              marginBlockEnd: '0.2rem',
            }}
          >
            <LayoutDashboard size={13} aria-hidden="true" />
            {preview.eyebrow}
          </span>
          <h4 style={{ fontSize: '1.08rem', fontWeight: 700 }}>{preview.title}</h4>
        </div>

        <div style={{ textAlign: 'end', flexShrink: 0 }}>
          <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {preview.highlightLabel}
          </span>
          <strong
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              color: 'var(--accent-stat)',
            }}
          >
            {preview.highlightValue}
          </strong>
        </div>
      </div>

      {/* Quick Summary Pills */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${preview.metrics.length}, 1fr)`,
          gap: '0.75rem',
          marginBlockEnd: '1rem',
        }}
      >
        {preview.metrics.map((m) => (
          <div
            key={m.label}
            style={{
              padding: '0.7rem 0.9rem',
              borderRadius: '0.85rem',
              background: 'var(--bg-inset)',
              border: '1px solid var(--border-inset)',
            }}
          >
            <span style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-muted)' }}>{m.label}</span>
            <strong style={{ display: 'block', fontSize: '0.96rem', marginBlockStart: '0.1rem' }}>{m.value}</strong>
          </div>
        ))}
      </div>

      {/* Clean Rows */}
      <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.6rem' }}>
        {preview.items.map((item) => (
          <li
            key={item.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              padding: '0.8rem 0.95rem',
              borderRadius: '0.85rem',
              background: 'var(--bg-inset-row)',
              border: '1px solid var(--border-inset)',
            }}
          >
            <div style={{ minInlineSize: 0 }}>
              <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                {item.title}
              </strong>
              <span style={{ display: 'block', fontSize: '0.79rem', color: 'var(--text-muted)' }}>
                {item.subtitle}
              </span>
            </div>
            <span className={`tone-pill tone-pill--${item.tone}`}>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
