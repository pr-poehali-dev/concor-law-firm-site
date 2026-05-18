interface LogoKonkorProps {
  height?: number;
  className?: string;
  dark?: boolean;
}

export default function LogoKonkor({ height = 52, className = '', dark = true }: LogoKonkorProps) {
  const accent = '#C4A040';
  const textColor = dark ? '#C4A040' : '#0f2318';
  const subColor = dark ? 'rgba(247,244,237,0.45)' : 'rgba(15,35,24,0.45)';

  return (
    <svg
      height={height}
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield */}
      <path
        d="M30 8 L52 8 L52 42 Q52 56 41 63 Q30 56 30 42 Z"
        fill="none"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Column base */}
      <rect x="34" y="56" width="14" height="2.5" fill={accent} rx="0.3"/>
      {/* Column capital */}
      <rect x="33" y="14" width="16" height="2.5" fill={accent} rx="0.3"/>
      {/* Column sub-capital */}
      <rect x="34.5" y="17" width="13" height="1.5" fill={accent} rx="0.3"/>

      {/* Column flutes */}
      <line x1="36.5" y1="18.5" x2="36.5" y2="56" stroke={accent} strokeWidth="1.1"/>
      <line x1="39"   y1="18.5" x2="39"   y2="56" stroke={accent} strokeWidth="1.1"/>
      <line x1="41"   y1="18.5" x2="41"   y2="56" stroke={accent} strokeWidth="1.1"/>
      <line x1="43"   y1="18.5" x2="43"   y2="56" stroke={accent} strokeWidth="1.1"/>
      <line x1="45.5" y1="18.5" x2="45.5" y2="56" stroke={accent} strokeWidth="1.1"/>

      {/* Letter K */}
      <line x1="41" y1="35" x2="50" y2="20" stroke={accent} strokeWidth="2.2" strokeLinecap="square"/>
      <line x1="41" y1="35" x2="51" y2="52" stroke={accent} strokeWidth="2.2" strokeLinecap="square"/>

      {/* КОНКОР text */}
      <text
        x="62"
        y="34"
        fontFamily="Cormorant Garamond, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="4"
        fill={textColor}
      >
        КОНКОР
      </text>

      {/* Subtitle */}
      <text
        x="63"
        y="50"
        fontFamily="Golos Text, sans-serif"
        fontSize="6.5"
        fontWeight="500"
        letterSpacing="3.5"
        fill={subColor}
      >
        ЮРИДИЧЕСКАЯ КОМПАНИЯ
      </text>
    </svg>
  );
}
