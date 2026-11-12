// Hình vẽ tay nho nhỏ: mèo, ngôi sao lấp lánh, trái tim và vài icon.
// Toàn bộ là SVG nét đơn giản, không dùng emoji.

const INK = "#2E2140";
const PINK = "#FF8FB1";

type CatProps = {
  size?: number;
  /** "open" = mắt tròn, "happy" = mắt cười híp */
  eyes?: "open" | "happy";
  label?: string;
  className?: string;
};

export function Cat({ size = 190, eyes = "open", label, className }: CatProps) {
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  return (
    <svg
      width={size}
      height={Math.round((size * 110) / 120)}
      viewBox="0 0 120 110"
      className={className}
      {...a11y}
    >
      <path d="M24 46 L27 9 L52 29 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M96 46 L93 9 L68 29 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M31 36 L32 20 L42 28 Z" fill={PINK} />
      <path d="M89 36 L88 20 L78 28 Z" fill={PINK} />
      <ellipse cx="60" cy="63" rx="45" ry="38" fill="#fff" stroke={INK} strokeWidth="3" />
      {eyes === "open" ? (
        <>
          <circle cx="44" cy="60" r="5" fill={INK} />
          <circle cx="76" cy="60" r="5" fill={INK} />
          <circle cx="45.6" cy="58.3" r="1.7" fill="#fff" />
          <circle cx="77.6" cy="58.3" r="1.7" fill="#fff" />
        </>
      ) : (
        <>
          <path d="M38 61 Q44 55 50 61" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <path d="M70 61 Q76 55 82 61" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      <ellipse cx="35" cy="72" rx="7" ry="4" fill={PINK} />
      <ellipse cx="85" cy="72" rx="7" ry="4" fill={PINK} />
      <path d="M57 67 L63 67 L60 70.5 Z" fill={INK} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M53 72 Q56.5 77 60 72 Q63.5 77 67 72" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 64 L5 61 M19 70 L6 72" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M101 64 L115 61 M101 70 L114 72" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Mặt mèo nhỏ cho logo góc trái */
export function CatMini() {
  return (
    <svg width="44" height="40" viewBox="0 0 120 110" aria-hidden="true">
      <path d="M24 46 L27 9 L52 29 Z" fill="#fff" stroke={INK} strokeWidth="5" strokeLinejoin="round" />
      <path d="M96 46 L93 9 L68 29 Z" fill="#fff" stroke={INK} strokeWidth="5" strokeLinejoin="round" />
      <ellipse cx="60" cy="63" rx="45" ry="38" fill="#fff" stroke={INK} strokeWidth="5" />
      <circle cx="44" cy="60" r="6" fill={INK} />
      <circle cx="76" cy="60" r="6" fill={INK} />
      <ellipse cx="34" cy="73" rx="8" ry="5" fill={PINK} />
      <ellipse cx="86" cy="73" rx="8" ry="5" fill={PINK} />
    </svg>
  );
}

export function Sparkle({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 2 C12.8 8 16 11.2 22 12 C16 12.8 12.8 16 12 22 C11.2 16 8 12.8 2 12 C8 11.2 11.2 8 12 2 Z"
        fill="#FFD966"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 20.5 C12 20.5 3 15 3 8.8 C3 6 5.2 4 7.7 4 C9.6 4 11.1 5.1 12 6.6 C12.9 5.1 14.4 4 16.3 4 C18.8 4 21 6 21 8.8 C21 15 12 20.5 12 20.5 Z"
        fill={PINK}
        stroke={INK}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5 L10 17.5 L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Tờ công thức = Skill */
export function RecipeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
      <rect x="10" y="6" width="36" height="44" rx="6" fill="#fff" stroke={INK} strokeWidth="3" />
      <path d="M18 18 H38 M18 26 H38 M18 34 H30" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Sợi dây nối = Connector */
export function CableIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
      <circle cx="13" cy="28" r="8" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="43" cy="28" r="8" fill="#fff" stroke={INK} strokeWidth="3" />
      <path d="M21 28 C27 18 29 38 35 28" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Hộp đồ nghề = Plugin */
export function BoxIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
      <rect x="6" y="20" width="44" height="28" rx="5" fill="#fff" stroke={INK} strokeWidth="3" />
      <path
        d="M20 20 V14 a4 4 0 0 1 4 -4 h8 a4 4 0 0 1 4 4 V20 M6 31 H50"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="24" y="27" width="8" height="8" rx="2" fill="#FFD966" stroke={INK} strokeWidth="2.5" />
    </svg>
  );
}
