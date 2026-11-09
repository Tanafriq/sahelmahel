interface AP { size?: number; }

const INK = "#1A0A00";

/** Œil globuleux : blanc cerclé + pupille décalée (dx, dy) pour un regard idiot. */
function Googly({ x, y, r = 4, dx = 0, dy = 0 }: { x: number; y: number; r?: number; dx?: number; dy?: number }) {
  return (
    <>
      <circle cx={x} cy={y} r={r} fill="white" stroke={INK} strokeWidth="0.9" />
      <circle cx={x + dx} cy={y + dy} r={r * 0.45} fill={INK} />
      <circle cx={x + dx + r * 0.15} cy={y + dy - r * 0.2} r={r * 0.13} fill="white" />
    </>
  );
}

function Svg({ size, children }: { size: number; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

/** Blob qui tire la langue en faisant un clin d'œil */
export function AvatarBlob({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M6 24 Q4 8 20 6 Q36 6 34 24 Q34 36 20 35 Q6 36 6 24Z" fill="#F472B6" />
      <path d="M11 17 Q14 14 17 17" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <Googly x={26} y={17} r={4.2} dx={1} dy={1} />
      <path d="M12 25 Q20 31 28 25" stroke={INK} strokeWidth="1.6" fill="#7F1D1D" strokeLinecap="round" />
      <path d="M17 27.5 Q17 34 20.5 34 Q24 34 23.5 27.8" fill="#FB7185" stroke={INK} strokeWidth="0.9" />
      <line x1="20.3" y1="28.5" x2="20.5" y2="32" stroke="#BE123C" strokeWidth="0.8" />
      <circle cx="9.5" cy="23" r="2" fill="#EC4899" opacity="0.6" />
      <circle cx="31" cy="23" r="2" fill="#EC4899" opacity="0.6" />
    </Svg>
  );
}

/** Cyclope ahuri */
export function AvatarCyclops({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <polygon points="11,10 9,2 15,8" fill="#FDE68A" stroke={INK} strokeWidth="0.8" />
      <polygon points="29,10 31,2 25,8" fill="#FDE68A" stroke={INK} strokeWidth="0.8" />
      <rect x="6" y="7" width="28" height="30" rx="13" fill="#A78BFA" />
      <Googly x={20} y={17} r={7.5} dx={-1.5} dy={2} />
      <path d="M11 27 Q20 33 29 27 Q20 30 11 27Z" fill={INK} />
      <rect x="15" y="27.6" width="3" height="3" fill="white" />
      <rect x="22" y="27.6" width="3" height="3" fill="white" />
    </Svg>
  );
}

/** Chat stylé avec lunettes de soleil */
export function AvatarCoolCat({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <polygon points="7,19 12,4 18,16" fill="#FB923C" />
      <polygon points="33,19 28,4 22,16" fill="#FB923C" />
      <circle cx="20" cy="23" r="14" fill="#FDBA74" />
      <path d="M7 18 H33 L31 23 Q27 26 22.5 22 H17.5 Q13 26 9 23Z" fill={INK} />
      <path d="M11 19.5 L14 19.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <path d="M25 19.5 L28 19.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <polygon points="20,26 18.6,28 21.4,28" fill="#E0628A" />
      <path d="M15 30 Q20 34 25 30" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <line x1="4" y1="27" x2="13" y2="28" stroke={INK} strokeWidth="0.6" />
      <line x1="27" y1="28" x2="36" y2="27" stroke={INK} strokeWidth="0.6" />
    </Svg>
  );
}

/** Chien baveux, langue pendante */
export function AvatarDerpDog({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <ellipse cx="8" cy="20" rx="5.5" ry="11" fill="#92400E" transform="rotate(-20 8 20)" />
      <ellipse cx="32" cy="20" rx="5.5" ry="11" fill="#92400E" transform="rotate(25 32 20)" />
      <circle cx="20" cy="21" r="13" fill="#D97706" />
      <Googly x={14.5} y={17} r={4} dx={1.4} dy={-0.6} />
      <Googly x={25.5} y={18} r={3.2} dx={-1} dy={1} />
      <ellipse cx="20" cy="25" rx="7" ry="5" fill="#FCD34D" />
      <ellipse cx="20" cy="22.8" rx="2.6" ry="1.8" fill={INK} />
      <path d="M17 28 Q16 37 21 37 Q25 37 23.5 28Z" fill="#FB7185" stroke={INK} strokeWidth="0.8" />
      <circle cx="16" cy="36" r="1" fill="#93C5FD" />
    </Svg>
  );
}

/** Grenouille qui louche */
export function AvatarFrog({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <ellipse cx="20" cy="26" rx="16" ry="12" fill="#4ADE80" />
      <circle cx="12" cy="13" r="7" fill="#4ADE80" />
      <circle cx="28" cy="13" r="7" fill="#4ADE80" />
      <Googly x={12} y={13} r={5} dx={2} dy={0.5} />
      <Googly x={28} y={13} r={5} dx={-2} dy={0.5} />
      <path d="M8 26 Q20 36 32 26" stroke="#166534" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="10" cy="24" r="2.2" fill="#F9A8D4" opacity="0.7" />
      <circle cx="30" cy="24" r="2.2" fill="#F9A8D4" opacity="0.7" />
    </Svg>
  );
}

/** Patate à moustache */
export function AvatarPotato({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M8 22 Q5 7 20 5 Q35 6 33 22 Q34 37 19 36 Q6 36 8 22Z" fill="#D6A060" />
      <circle cx="12" cy="11" r="1" fill="#A16207" />
      <circle cx="29" cy="30" r="1.2" fill="#A16207" />
      <circle cx="27" cy="9" r="0.8" fill="#A16207" />
      <Googly x={15} y={17} r={3.6} dy={1} />
      <Googly x={25} y={17} r={3.6} dy={1} />
      <path d="M10 25 Q14 21 20 24 Q26 21 30 25 Q26 28 20 26 Q14 28 10 25Z" fill="#3F2A14" />
      <path d="M17 30 Q20 32 23 30" stroke={INK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

/** Fantôme « Bouh ! » */
export function AvatarGhost({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M7 36 V18 Q7 4 20 4 Q33 4 33 18 V36 L29 32 L25 36 L20 32 L15 36 L11 32Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="0.9" />
      <ellipse cx="15" cy="16" rx="2.6" ry="3.6" fill={INK} />
      <ellipse cx="25" cy="16" rx="2.6" ry="3.6" fill={INK} />
      <circle cx="15.8" cy="14.8" r="0.9" fill="white" />
      <circle cx="25.8" cy="14.8" r="0.9" fill="white" />
      <ellipse cx="20" cy="25" rx="3.2" ry="4" fill={INK} />
      <ellipse cx="20" cy="26.5" rx="1.8" ry="1.6" fill="#F87171" />
      <circle cx="11" cy="21" r="1.8" fill="#FBCFE8" />
      <circle cx="29" cy="21" r="1.8" fill="#FBCFE8" />
    </Svg>
  );
}

/** Avocat béat */
export function AvatarAvocado({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M20 2 Q31 2 32 20 Q34 38 20 38 Q6 38 8 20 Q9 2 20 2Z" fill="#3F6212" />
      <path d="M20 5 Q29 5 29.5 20 Q31 35 20 35 Q9 35 10.5 20 Q11 5 20 5Z" fill="#D9F99D" />
      <circle cx="20" cy="26" r="6.5" fill="#92400E" />
      <circle cx="18" cy="24" r="1.6" fill="#B45309" />
      <path d="M13.5 15 Q15.5 13 17.5 15" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M22.5 15 Q24.5 13 26.5 15" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M17.5 17.5 Q20 19.5 22.5 17.5" stroke={INK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <circle cx="13" cy="18" r="1.5" fill="#F9A8D4" />
      <circle cx="27" cy="18" r="1.5" fill="#F9A8D4" />
    </Svg>
  );
}

/** Alien hilare à trois yeux */
export function AvatarAlien({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <line x1="14" y1="9" x2="10" y2="2" stroke="#16A34A" strokeWidth="1.3" />
      <circle cx="10" cy="2.5" r="2" fill="#FDE047" />
      <line x1="26" y1="9" x2="31" y2="3" stroke="#16A34A" strokeWidth="1.3" />
      <circle cx="31" cy="3" r="2" fill="#FDE047" />
      <ellipse cx="20" cy="22" rx="15" ry="15" fill="#86EFAC" />
      <Googly x={13} y={18} r={3.4} dx={-1} />
      <Googly x={20} y={13} r={3} dy={-1} />
      <Googly x={27} y={18} r={3.4} dx={1} />
      <path d="M10 25 Q20 37 30 25Z" fill={INK} />
      <path d="M15 31 Q20 35 25 31 Q20 33 15 31Z" fill="#F87171" />
      <rect x="17" y="25" width="2.5" height="2.5" fill="white" />
      <rect x="21" y="25" width="2.5" height="2.5" fill="white" />
    </Svg>
  );
}

/** Part de pizza gourmande */
export function AvatarPizza({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M4 7 Q20 1 36 7 L20 38Z" fill="#FCD34D" stroke="#B45309" strokeWidth="1" />
      <path d="M4 7 Q20 1 36 7 L35 10 Q20 4 5 10Z" fill="#D97706" />
      <circle cx="12" cy="24" r="2.3" fill="#DC2626" />
      <circle cx="27" cy="13" r="2" fill="#DC2626" />
      <circle cx="21" cy="30" r="1.6" fill="#DC2626" />
      <Googly x={15} y={14} r={3.3} dx={1} dy={1} />
      <Googly x={22} y={14} r={3.3} dx={1} dy={1} />
      <path d="M15 20 Q19 25 23 20" stroke={INK} strokeWidth="1.4" fill="#7F1D1D" strokeLinecap="round" />
      <path d="M23 20 Q24 24 22 26" stroke="#FDE68A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

/** Poulet paniqué */
export function AvatarChicken({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <circle cx="16" cy="5" r="3" fill="#EF4444" />
      <circle cx="20" cy="4" r="3.3" fill="#EF4444" />
      <circle cx="24" cy="5" r="3" fill="#EF4444" />
      <circle cx="20" cy="22" r="15" fill="#FEF9C3" />
      <Googly x={14} y={17} r={4.4} dy={-1.2} />
      <Googly x={26} y={17} r={4.4} dy={-1.2} />
      <path d="M15 23 L25 23 L20 30Z" fill="#F97316" stroke="#C2410C" strokeWidth="0.8" />
      <line x1="15.5" y1="25.5" x2="24.5" y2="25.5" stroke="#C2410C" strokeWidth="0.8" />
      <path d="M18 30 Q20 35 22 30" fill="#EF4444" />
      <path d="M8 11 L5 8 M32 11 L35 8" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
    </Svg>
  );
}

/** Cochon qui rigole */
export function AvatarPig({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <polygon points="7,15 9,4 16,10" fill="#F9A8D4" />
      <polygon points="33,15 31,4 24,10" fill="#F9A8D4" />
      <circle cx="20" cy="21" r="15" fill="#FBCFE8" />
      <path d="M11 16 Q14 13 17 16" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M23 16 Q26 13 29 16" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="20" cy="23" rx="6.5" ry="4.5" fill="#F472B6" />
      <ellipse cx="17.6" cy="23" rx="1.3" ry="2" fill="#9D174D" />
      <ellipse cx="22.4" cy="23" rx="1.3" ry="2" fill="#9D174D" />
      <path d="M14 29 Q20 35 26 29Z" fill="#7F1D1D" />
      <circle cx="9" cy="22" r="2.3" fill="#F472B6" opacity="0.6" />
      <circle cx="31" cy="22" r="2.3" fill="#F472B6" opacity="0.6" />
    </Svg>
  );
}

/** Poulpe farceur */
export function AvatarOctopus({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      {[6, 12, 18, 24, 30].map((x, i) => (
        <path
          key={i}
          d={`M${x + 2} 26 Q${x - 1} 32 ${x + 2} 34 Q${x + 5} 36 ${x + 4} 32`}
          stroke="#A855F7"
          strokeWidth="3.4"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="20" cy="17" rx="14" ry="13" fill="#C084FC" />
      <circle cx="13" cy="9" r="1.5" fill="#E9D5FF" />
      <circle cx="27" cy="11" r="1.2" fill="#E9D5FF" />
      <Googly x={15} y={17} r={4} dx={-1.3} dy={-1} />
      <Googly x={25} y={17} r={4} dx={1.3} dy={-1} />
      <ellipse cx="20" cy="24.5" rx="2.4" ry="2" fill="none" stroke={INK} strokeWidth="1.3" />
    </Svg>
  );
}

/** Cactus avec sombrero */
export function AvatarCactus({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <rect x="4" y="22" width="5" height="10" rx="2.5" fill="#22C55E" />
      <rect x="31" y="18" width="5" height="10" rx="2.5" fill="#22C55E" />
      <rect x="11" y="10" width="18" height="29" rx="9" fill="#4ADE80" />
      <ellipse cx="20" cy="10" rx="18" ry="3.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
      <path d="M13 9.5 Q14 1 20 1 Q26 1 27 9.5Z" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
      <path d="M13.5 7 H26.5" stroke="#DC2626" strokeWidth="1.5" />
      <Googly x={16} y={18} r={3} dx={0.8} />
      <Googly x={24} y={18} r={3} dx={0.8} />
      <path d="M16 25 Q20 29 24 25" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M12 30 l-2 -1 M28 31 l2 -1 M14 35 l-2 0" stroke="#166534" strokeWidth="0.8" strokeLinecap="round" />
    </Svg>
  );
}

/** Donut gourmand */
export function AvatarDonut({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <mask id="donut-hole">
        <rect width="40" height="40" fill="white" />
        <circle cx="20" cy="21" r="4" fill="black" />
      </mask>
      <g mask="url(#donut-hole)">
        <circle cx="20" cy="21" r="16" fill="#D97706" />
        <path d="M5 19 Q6 6 20 5 Q34 6 35 19 Q33 24 30 21 Q27 26 24 22 Q20 26 16 22 Q13 26 10 21 Q7 24 5 19Z" fill="#F472B6" />
      </g>
      <circle cx="20" cy="21" r="4" fill="none" stroke="#B45309" strokeWidth="0.8" />
      <rect x="10" y="10" width="3" height="1.2" rx="0.6" fill="#38BDF8" transform="rotate(30 11 10)" />
      <rect x="27" y="9" width="3" height="1.2" rx="0.6" fill="#FDE047" transform="rotate(-20 28 9)" />
      <rect x="20" y="7" width="3" height="1.2" rx="0.6" fill="#4ADE80" />
      <Googly x={12.5} y={15} r={3} dx={-0.8} />
      <Googly x={27.5} y={15} r={3} dx={0.8} />
      <path d="M13 29 Q20 35 27 29" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 31 Q25 34 23 34" fill="#FB7185" />
    </Svg>
  );
}

/** Robot détraqué */
export function AvatarRobot({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M20 8 Q18 5 21 3 Q24 1 22 0" stroke="#64748B" strokeWidth="1.3" fill="none" />
      <circle cx="22" cy="1.5" r="1.6" fill="#F87171" />
      <rect x="6" y="8" width="28" height="27" rx="5" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
      <rect x="2.5" y="17" width="4" height="8" rx="2" fill="#64748B" />
      <rect x="33.5" y="17" width="4" height="8" rx="2" fill="#64748B" />
      <circle cx="14" cy="18" r="5" fill="#FDE047" stroke="#475569" strokeWidth="1" />
      <circle cx="15" cy="19" r="2" fill={INK} />
      <circle cx="27" cy="17" r="3" fill="#FDE047" stroke="#475569" strokeWidth="1" />
      <circle cx="26" cy="16.4" r="1.2" fill={INK} />
      <path d="M11 28 L14 26 L17 29 L20 26 L23 29 L26 26 L29 28" stroke={INK} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <circle cx="9" cy="11" r="0.9" fill="#475569" />
      <circle cx="31" cy="11" r="0.9" fill="#475569" />
    </Svg>
  );
}

/** Paresseux ensommeillé */
export function AvatarSloth({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <circle cx="20" cy="21" r="16" fill="#A8826A" />
      <ellipse cx="20" cy="23" rx="12" ry="10" fill="#E7D3BC" />
      <ellipse cx="14" cy="20" rx="5" ry="3.6" fill="#5B3A29" transform="rotate(-20 14 20)" />
      <ellipse cx="26" cy="20" rx="5" ry="3.6" fill="#5B3A29" transform="rotate(20 26 20)" />
      <path d="M12 20.5 Q14 22 16 20.5" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <path d="M24 20.5 Q26 22 28 20.5" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <ellipse cx="20" cy="24.5" rx="2" ry="1.4" fill={INK} />
      <path d="M17 28 Q20 30 23 28" stroke={INK} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <text x="29" y="10" fontSize="6" fontWeight="800" fill="#1E3A8A">z</text>
      <text x="33" y="6" fontSize="4.5" fontWeight="800" fill="#1E3A8A">z</text>
    </Svg>
  );
}

/** Pingouin en nœud papillon */
export function AvatarPenguin({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <circle cx="20" cy="20" r="16" fill="#1E293B" />
      <ellipse cx="20" cy="23" rx="10.5" ry="12" fill="#F8FAFC" />
      <Googly x={15.5} y={16} r={3.6} dx={1.2} dy={-1} />
      <Googly x={24.5} y={16} r={3.6} dx={1.2} dy={-1} />
      <path d="M16 21 Q20 19 24 21 L20 26Z" fill="#F97316" stroke="#C2410C" strokeWidth="0.7" />
      <polygon points="14,31 20,33.5 14,36" fill="#EF4444" />
      <polygon points="26,31 20,33.5 26,36" fill="#EF4444" />
      <circle cx="20" cy="33.5" r="1.6" fill="#B91C1C" />
      <circle cx="12" cy="23" r="2" fill="#FDA4AF" opacity="0.6" />
      <circle cx="28" cy="23" r="2" fill="#FDA4AF" opacity="0.6" />
    </Svg>
  );
}

/** Banane farceuse */
export function AvatarBanana({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <path d="M10 4 Q6 24 18 34 Q30 40 36 30 Q24 30 19 20 Q15 12 15 4Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
      <rect x="9.5" y="1" width="5.5" height="4" rx="1.2" fill="#713F12" />
      <circle cx="35" cy="31" r="1.4" fill="#713F12" />
      <Googly x={14} y={17} r={3.2} dx={1} dy={0.5} />
      <Googly x={20} y={21} r={3.2} dx={1} dy={0.5} />
      <path d="M15 25 Q17 31 24 29" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M20 30 Q21 33 23.5 31" fill="#FB7185" />
    </Svg>
  );
}

/** Œuf surpris qui éclot */
export function AvatarEgg({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <ellipse cx="20" cy="22" rx="13" ry="16" fill="#FFFBEB" stroke="#D6D3D1" strokeWidth="1" />
      <path d="M8 16 L12 12 L15 16 L19 11 L22 16 L26 11 L29 16 L32 13" stroke="#A8A29E" strokeWidth="1.1" fill="none" strokeLinejoin="round" />
      <path d="M14 7 L17 2 L20 6 L23 1 L26 7Z" fill="#FFFBEB" stroke="#D6D3D1" strokeWidth="0.8" transform="rotate(-15 20 5)" />
      <Googly x={15} y={21} r={3.8} dy={-1.2} />
      <Googly x={25} y={21} r={3.8} dy={-1.2} />
      <ellipse cx="20" cy="30" rx="2.4" ry="3" fill={INK} />
      <circle cx="11" cy="27" r="1.8" fill="#FDBA74" opacity="0.6" />
      <circle cx="29" cy="27" r="1.8" fill="#FDBA74" opacity="0.6" />
    </Svg>
  );
}

/** Vampire maladroit */
export function AvatarVampire({ size = 40 }: AP) {
  return (
    <Svg size={size}>
      <polygon points="4,40 20,26 36,40" fill="#7F1D1D" />
      <circle cx="20" cy="20" r="14" fill="#DDD6FE" />
      <path d="M6 16 Q9 3 20 6 Q31 3 34 16 Q27 8 20 11 Q13 8 6 16Z" fill="#1E1B4B" />
      <polygon points="20,10 17.5,15 22.5,15" fill="#1E1B4B" />
      <Googly x={15} y={20} r={3.6} dx={1.2} dy={1} />
      <Googly x={25} y={20} r={3.6} dx={-1.2} dy={1} />
      <path d="M13 27 Q20 31 27 27" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <polygon points="16,27.6 17,31.5 18,28.4" fill="white" stroke={INK} strokeWidth="0.4" />
      <polygon points="24,27.6 23,31.5 22,28.4" fill="white" stroke={INK} strokeWidth="0.4" />
      <circle cx="29.5" cy="12" r="1.2" fill="#93C5FD" />
    </Svg>
  );
}

const MAP: Record<string, React.ComponentType<AP>> = {
  blob: AvatarBlob, cyclops: AvatarCyclops, coolcat: AvatarCoolCat, derpdog: AvatarDerpDog,
  frog: AvatarFrog, potato: AvatarPotato, ghost: AvatarGhost, avocado: AvatarAvocado,
  alien: AvatarAlien, pizza: AvatarPizza, chicken: AvatarChicken, pig: AvatarPig,
  octopus: AvatarOctopus, cactus: AvatarCactus, donut: AvatarDonut, robot: AvatarRobot,
  sloth: AvatarSloth, penguin: AvatarPenguin, banana: AvatarBanana, vampire: AvatarVampire,
  egg: AvatarEgg,
};

export const AVATAR_KEYS = Object.keys(MAP);

export function AvatarIcon({ avatarKey, size = 40 }: { avatarKey: string; size?: number }) {
  const Component = MAP[avatarKey] ?? AvatarBlob;
  return <Component size={size} />;
}
