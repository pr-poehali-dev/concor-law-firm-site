interface LogoKonkorProps {
  height?: number;
  className?: string;
}

export default function LogoKonkor({ height = 52, className = '' }: LogoKonkorProps) {
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
        stroke="#C9A84C"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Column base (bottom plate) */}
      <rect x="34" y="56" width="14" height="2.5" fill="#C9A84C" rx="0.3"/>
      {/* Column capital (top plate) */}
      <rect x="33" y="14" width="16" height="2.5" fill="#C9A84C" rx="0.3"/>
      {/* Column sub-capital */}
      <rect x="34.5" y="17" width="13" height="1.5" fill="#C9A84C" rx="0.3"/>

      {/* Column flutes (vertical lines) */}
      <line x1="36.5" y1="18.5" x2="36.5" y2="56" stroke="#C9A84C" strokeWidth="1.1"/>
      <line x1="39"   y1="18.5" x2="39"   y2="56" stroke="#C9A84C" strokeWidth="1.1"/>
      <line x1="41"   y1="18.5" x2="41"   y2="56" stroke="#C9A84C" strokeWidth="1.1"/>
      <line x1="43"   y1="18.5" x2="43"   y2="56" stroke="#C9A84C" strokeWidth="1.1"/>
      <line x1="45.5" y1="18.5" x2="45.5" y2="56" stroke="#C9A84C" strokeWidth="1.1"/>

      {/* Letter K — diagonal upper arm */}
      <line x1="41" y1="35" x2="50" y2="20" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="square"/>
      {/* Letter K — diagonal lower arm */}
      <line x1="41" y1="35" x2="51" y2="52" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="square"/>

      {/* КОНКОР text */}
      <text
        x="62"
        y="34"
        fontFamily="Cormorant Garamond, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="4"
        fill="#C9A84C"
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
        fill="rgba(244,245,247,0.45)"
      >
        ЮРИДИЧЕСКАЯ КОМПАНИЯ
      </text>
    </svg>
  );
}
