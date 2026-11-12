interface GemxLogoProps {
  height?: number;
}

export function GemxLogo({ height = 44 }: GemxLogoProps) {
  const width = Math.round((height * 1068) / 527);

  return (
    <span className="gemx-logo-wrap">
      {/* Daytime Light Mode Logo (Deep Navy + Golden Diamond X) */}
      <picture className="gemx-logo gemx-logo--light">
        <source srcSet="/img/logo/gemx-payroll-logo-light.webp" type="image/webp" />
        <img
          src="/img/logo/gemx-payroll-logo-light.png"
          width={width}
          height={height}
          decoding="async"
          alt="gemX — Payroll and HR Software"
          style={{ blockSize: `${height}px`, inlineSize: 'auto', objectFit: 'contain' }}
        />
      </picture>

      {/* Nighttime Dark Mode Logo (Crisp White + Golden Diamond X) */}
      <picture className="gemx-logo gemx-logo--dark">
        <source srcSet="/img/logo/gemx-payroll-logo.webp" type="image/webp" />
        <img
          src="/img/logo/gemx-payroll-logo.png"
          width={width}
          height={height}
          decoding="async"
          alt="gemX — Payroll and HR Software"
          style={{ blockSize: `${height}px`, inlineSize: 'auto', objectFit: 'contain' }}
        />
      </picture>
    </span>
  );
}

