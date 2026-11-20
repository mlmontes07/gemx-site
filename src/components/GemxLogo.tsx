interface GemxLogoProps {
  height?: number;
  lazy?: boolean;
}

export function GemxLogo({ height = 44, lazy = false }: GemxLogoProps) {
  const width = Math.round((height * 1068) / 527);
  const lazyAttr = lazy ? { loading: 'lazy' as const } : {};

  return (
    <span className="gemx-logo-wrap">
      {/* Daytime Light Mode Logo (Deep Navy + Golden Diamond X) */}
      <picture className="gemx-logo gemx-logo--light">
        <source
          srcSet="/img/logo/gemx-payroll-logo-light-180.webp 180w, /img/logo/gemx-payroll-logo-light-312.webp 312w"
          sizes={`${width}px`}
          type="image/webp"
        />
        <img
          src="/img/logo/gemx-payroll-logo-light.png"
          width={width}
          height={height}
          decoding="async"
          {...lazyAttr}
          alt="gemX — Payroll and HR Software"
          style={{ blockSize: `${height}px`, inlineSize: 'auto', objectFit: 'contain' }}
        />
      </picture>

      {/* Nighttime Dark Mode Logo (Crisp White + Golden Diamond X) */}
      <picture className="gemx-logo gemx-logo--dark">
        <source
          srcSet="/img/logo/gemx-payroll-logo-180.webp 180w, /img/logo/gemx-payroll-logo-312.webp 312w"
          sizes={`${width}px`}
          type="image/webp"
        />
        <img
          src="/img/logo/gemx-payroll-logo.png"
          width={width}
          height={height}
          decoding="async"
          {...lazyAttr}
          alt="gemX — Payroll and HR Software"
          style={{ blockSize: `${height}px`, inlineSize: 'auto', objectFit: 'contain' }}
        />
      </picture>
    </span>
  );
}

