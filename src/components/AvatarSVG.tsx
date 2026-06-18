interface AP { size?: number; }

export function AvatarCat({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="7,19 13,4 17,19" fill="#E8852A" />
      <polygon points="23,19 27,4 33,19" fill="#E8852A" />
      <polygon points="9.5,18 13,8 15.5,18" fill="#FFBFA8" />
      <polygon points="24.5,18 27,8 30.5,18" fill="#FFBFA8" />
      <circle cx="20" cy="23" r="14" fill="#FF9F50" />
      <ellipse cx="15.5" cy="20" rx="2.2" ry="2.8" fill="#1A0A00" />
      <ellipse cx="24.5" cy="20" rx="2.2" ry="2.8" fill="#1A0A00" />
      <circle cx="16.3" cy="19.2" r="0.7" fill="white" />
      <circle cx="25.3" cy="19.2" r="0.7" fill="white" />
      <ellipse cx="20" cy="25" rx="2.5" ry="2" fill="#FFCFB8" />
      <polygon points="20,24 18.8,26.5 21.2,26.5" fill="#E0628A" />
      <line x1="6" y1="25.5" x2="15.5" y2="26.5" stroke="#8B4500" strokeWidth="0.6" opacity="0.5" />
      <line x1="6" y1="27.5" x2="15.5" y2="27.5" stroke="#8B4500" strokeWidth="0.6" opacity="0.5" />
      <line x1="24.5" y1="26.5" x2="34" y2="25.5" stroke="#8B4500" strokeWidth="0.6" opacity="0.5" />
      <line x1="24.5" y1="27.5" x2="34" y2="27.5" stroke="#8B4500" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}

export function AvatarDog({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="24" rx="6.5" ry="10" fill="#C4814A" transform="rotate(-12 10 24)" />
      <ellipse cx="30" cy="24" rx="6.5" ry="10" fill="#C4814A" transform="rotate(12 30 24)" />
      <circle cx="20" cy="21" r="13" fill="#D99A5E" />
      <ellipse cx="20" cy="26" rx="6" ry="4.5" fill="#C4814A" />
      <circle cx="15.5" cy="18.5" r="2.2" fill="#1A0A00" />
      <circle cx="24.5" cy="18.5" r="2.2" fill="#1A0A00" />
      <circle cx="16.3" cy="17.7" r="0.7" fill="white" />
      <circle cx="25.3" cy="17.7" r="0.7" fill="white" />
      <ellipse cx="20" cy="24.5" rx="2.5" ry="1.8" fill="#1A0A00" />
      <circle cx="20.5" cy="24" r="0.6" fill="white" opacity="0.7" />
    </svg>
  );
}

export function AvatarFox({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="8,18 14,2 18,18" fill="#C84000" />
      <polygon points="22,18 26,2 32,18" fill="#C84000" />
      <polygon points="10,17 14,6 16.5,17" fill="#FFCCAA" />
      <polygon points="23.5,17 26,6 30,17" fill="#FFCCAA" />
      <circle cx="20" cy="22" r="14" fill="#E8610C" />
      <ellipse cx="20" cy="28" rx="8" ry="6" fill="#FFF0E0" />
      <ellipse cx="15.5" cy="19" rx="2.2" ry="2.5" fill="#1A0A00" />
      <ellipse cx="24.5" cy="19" rx="2.2" ry="2.5" fill="#1A0A00" />
      <circle cx="16.2" cy="18.2" r="0.7" fill="white" />
      <circle cx="25.2" cy="18.2" r="0.7" fill="white" />
      <ellipse cx="20" cy="25" rx="2" ry="1.5" fill="#1A0A00" />
    </svg>
  );
}

export function AvatarBear({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="11" r="7" fill="#6B3F22" />
      <circle cx="30" cy="11" r="7" fill="#6B3F22" />
      <circle cx="10" cy="11" r="4.5" fill="#9B6440" />
      <circle cx="30" cy="11" r="4.5" fill="#9B6440" />
      <circle cx="20" cy="22" r="15" fill="#9B6440" />
      <ellipse cx="20" cy="27" rx="6.5" ry="5" fill="#C4885A" />
      <circle cx="15.5" cy="19.5" r="2.3" fill="#1A0A00" />
      <circle cx="24.5" cy="19.5" r="2.3" fill="#1A0A00" />
      <circle cx="16.3" cy="18.7" r="0.7" fill="white" />
      <circle cx="25.3" cy="18.7" r="0.7" fill="white" />
      <ellipse cx="20" cy="25.5" rx="2.2" ry="1.6" fill="#1A0A00" />
    </svg>
  );
}

export function AvatarPanda({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="9" r="7" fill="#1A1A1A" />
      <circle cx="30" cy="9" r="7" fill="#1A1A1A" />
      <circle cx="20" cy="22" r="15" fill="#F0F0F0" />
      <ellipse cx="14.5" cy="19" rx="5" ry="4.2" fill="#1A1A1A" transform="rotate(-15 14.5 19)" />
      <ellipse cx="25.5" cy="19" rx="5" ry="4.2" fill="#1A1A1A" transform="rotate(15 25.5 19)" />
      <circle cx="14.5" cy="19" r="2.3" fill="white" />
      <circle cx="25.5" cy="19" r="2.3" fill="white" />
      <circle cx="15" cy="19.5" r="1.4" fill="#1A1A1A" />
      <circle cx="26" cy="19.5" r="1.4" fill="#1A1A1A" />
      <circle cx="15.6" cy="18.9" r="0.5" fill="white" />
      <circle cx="26.6" cy="18.9" r="0.5" fill="white" />
      <ellipse cx="20" cy="26.5" rx="5.5" ry="4" fill="#E0E0E0" />
      <ellipse cx="20" cy="25" rx="2" ry="1.4" fill="#1A1A1A" />
    </svg>
  );
}

export function AvatarLion({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      {[0,36,72,108,144,180,216,252,288,324].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        return <circle key={i} cx={20 + 16 * Math.cos(r)} cy={20 + 16 * Math.sin(r)} r="5" fill="#B86A10" />;
      })}
      <circle cx="20" cy="20" r="13" fill="#F0AA30" />
      <circle cx="11" cy="11" r="5" fill="#E09020" />
      <circle cx="29" cy="11" r="5" fill="#E09020" />
      <circle cx="11" cy="11" r="2.8" fill="#F0B860" />
      <circle cx="29" cy="11" r="2.8" fill="#F0B860" />
      <ellipse cx="20" cy="25" rx="6" ry="4.5" fill="#E09838" />
      <circle cx="15.5" cy="19" r="2.3" fill="#1A0A00" />
      <circle cx="24.5" cy="19" r="2.3" fill="#1A0A00" />
      <circle cx="16.3" cy="18.2" r="0.7" fill="white" />
      <circle cx="25.3" cy="18.2" r="0.7" fill="white" />
      <polygon points="20,24 18,27 22,27" fill="#C05090" />
    </svg>
  );
}

export function AvatarFrog({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="7.5" fill="#1A9645" />
      <circle cx="28" cy="10" r="7.5" fill="#1A9645" />
      <circle cx="20" cy="24" r="14" fill="#2ECC71" />
      <circle cx="12" cy="10" r="4.5" fill="#1A1A1A" />
      <circle cx="28" cy="10" r="4.5" fill="#1A1A1A" />
      <circle cx="12" cy="9" r="2.2" fill="white" />
      <circle cx="28" cy="9" r="2.2" fill="white" />
      <circle cx="12.6" cy="9.6" r="1.3" fill="#1A1A1A" />
      <circle cx="28.6" cy="9.6" r="1.3" fill="#1A1A1A" />
      <path d="M12 28 Q20 35 28 28" stroke="#0E7A35" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="18.5" cy="23" r="1" fill="#0E7A35" />
      <circle cx="21.5" cy="23" r="1" fill="#0E7A35" />
    </svg>
  );
}

export function AvatarUnicorn({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,1 17,12 23,12" fill="#FCD34D" />
      <line x1="20" y1="2" x2="18.2" y2="11" stroke="#F59E0B" strokeWidth="1" />
      <line x1="20" y1="2" x2="21.2" y2="11" stroke="#F59E0B" strokeWidth="1" />
      <polygon points="10,14 8,5 15,14" fill="#F472B6" />
      <polygon points="30,14 32,5 25,14" fill="#F472B6" />
      <ellipse cx="8" cy="18" rx="4.5" ry="6.5" fill="#C084FC" opacity="0.85" />
      <circle cx="20" cy="24" r="14" fill="#FBCFE8" />
      <ellipse cx="15.5" cy="21.5" rx="2.5" ry="3" fill="#1A0A00" />
      <ellipse cx="24.5" cy="21.5" rx="2.5" ry="3" fill="#1A0A00" />
      <circle cx="16.5" cy="20.5" r="0.9" fill="white" />
      <circle cx="25.5" cy="20.5" r="0.9" fill="white" />
      <ellipse cx="20" cy="27.5" rx="3" ry="2.2" fill="#F9A8D4" />
      <circle cx="18.8" cy="27" r="0.9" fill="#EC4899" />
      <circle cx="21.2" cy="27" r="0.9" fill="#EC4899" />
    </svg>
  );
}

export function AvatarWolf({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="8,18 12,3 16,18" fill="#4B5563" />
      <polygon points="24,18 28,3 32,18" fill="#4B5563" />
      <polygon points="10,17 12,7 14.5,17" fill="#D1D5DB" />
      <polygon points="25.5,17 28,7 30,17" fill="#D1D5DB" />
      <circle cx="20" cy="22" r="14" fill="#6B7280" />
      <ellipse cx="20" cy="27.5" rx="7" ry="5.5" fill="#D1D5DB" />
      <ellipse cx="15.5" cy="19" rx="2.2" ry="2.5" fill="#111827" />
      <ellipse cx="24.5" cy="19" rx="2.2" ry="2.5" fill="#111827" />
      <circle cx="16.2" cy="18.2" r="0.7" fill="white" />
      <circle cx="25.2" cy="18.2" r="0.7" fill="white" />
      <ellipse cx="20" cy="25.5" rx="2.5" ry="1.8" fill="#374151" />
      <circle cx="20.5" cy="25" r="0.7" fill="white" opacity="0.6" />
    </svg>
  );
}

export function AvatarOwl({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="13,14 10,3 17,13" fill="#7C4A18" />
      <polygon points="27,14 30,3 23,13" fill="#7C4A18" />
      <circle cx="20" cy="22" r="14" fill="#A0652A" />
      <circle cx="14.5" cy="20" r="7" fill="#F5E6C8" />
      <circle cx="25.5" cy="20" r="7" fill="#F5E6C8" />
      <circle cx="14.5" cy="20" r="4.5" fill="#1A0A00" />
      <circle cx="25.5" cy="20" r="4.5" fill="#1A0A00" />
      <circle cx="14.5" cy="20" r="2.8" fill="#E8800A" />
      <circle cx="25.5" cy="20" r="2.8" fill="#E8800A" />
      <circle cx="14.8" cy="20" r="1.6" fill="#1A0A00" />
      <circle cx="25.8" cy="20" r="1.6" fill="#1A0A00" />
      <circle cx="15.5" cy="19.2" r="0.7" fill="white" />
      <circle cx="26.5" cy="19.2" r="0.7" fill="white" />
      <polygon points="20,24 18,28 22,28" fill="#E8900A" />
    </svg>
  );
}

export function AvatarPenguin({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill="#1E293B" />
      <ellipse cx="20" cy="23" rx="10" ry="12" fill="#F8FAFC" />
      <circle cx="15.5" cy="17" r="2.5" fill="#1A0A00" />
      <circle cx="24.5" cy="17" r="2.5" fill="#1A0A00" />
      <circle cx="16.3" cy="16.2" r="0.8" fill="white" />
      <circle cx="25.3" cy="16.2" r="0.8" fill="white" />
      <polygon points="20,21 17.5,25 22.5,25" fill="#F97316" />
      <circle cx="13" cy="23" r="2.5" fill="#FDA4AF" opacity="0.5" />
      <circle cx="27" cy="23" r="2.5" fill="#FDA4AF" opacity="0.5" />
    </svg>
  );
}

export function AvatarRabbit({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="13" cy="8" rx="5" ry="11" fill="#FDA4AF" />
      <ellipse cx="27" cy="8" rx="5" ry="11" fill="#FDA4AF" />
      <ellipse cx="13" cy="8" rx="2.8" ry="8.5" fill="#FFC0CC" />
      <ellipse cx="27" cy="8" rx="2.8" ry="8.5" fill="#FFC0CC" />
      <circle cx="20" cy="25" r="13" fill="#FCE4EC" />
      <circle cx="15.5" cy="23" r="2.2" fill="#1A0A00" />
      <circle cx="24.5" cy="23" r="2.2" fill="#1A0A00" />
      <circle cx="16.3" cy="22.2" r="0.7" fill="white" />
      <circle cx="25.3" cy="22.2" r="0.7" fill="white" />
      <circle cx="20" cy="27" r="1.8" fill="#E91E63" />
      <line x1="7" y1="27.5" x2="16" y2="28" stroke="#E91E63" strokeWidth="0.7" opacity="0.5" />
      <line x1="24" y1="28" x2="33" y2="27.5" stroke="#E91E63" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

export function AvatarMonkey({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="21" r="7.5" fill="#8B5A28" />
      <circle cx="33" cy="21" r="7.5" fill="#8B5A28" />
      <circle cx="7" cy="21" r="5" fill="#D4956B" />
      <circle cx="33" cy="21" r="5" fill="#D4956B" />
      <circle cx="20" cy="20" r="14" fill="#B5783A" />
      <ellipse cx="20" cy="26.5" rx="8" ry="6.5" fill="#D4956B" />
      <circle cx="15.5" cy="18.5" r="2.3" fill="#1A0A00" />
      <circle cx="24.5" cy="18.5" r="2.3" fill="#1A0A00" />
      <circle cx="16.3" cy="17.7" r="0.7" fill="white" />
      <circle cx="25.3" cy="17.7" r="0.7" fill="white" />
      <circle cx="18.5" cy="25" r="1.3" fill="#8B5A2B" />
      <circle cx="21.5" cy="25" r="1.3" fill="#8B5A2B" />
      <path d="M15 28 Q20 33 25 28" stroke="#8B5A2B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AvatarAlien({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="4" x2="17" y2="9" stroke="#22C55E" strokeWidth="1.3" />
      <circle cx="14" cy="3.5" r="1.8" fill="#BBF7D0" />
      <line x1="26" y1="4" x2="23" y2="9" stroke="#22C55E" strokeWidth="1.3" />
      <circle cx="26" cy="3.5" r="1.8" fill="#BBF7D0" />
      <ellipse cx="20" cy="19" rx="15" ry="17" fill="#4ADE80" />
      <ellipse cx="14" cy="18" rx="5.5" ry="4.2" fill="#111" transform="rotate(-10 14 18)" />
      <ellipse cx="26" cy="18" rx="5.5" ry="4.2" fill="#111" transform="rotate(10 26 18)" />
      <ellipse cx="14" cy="18" rx="3.5" ry="2.8" fill="#16A34A" transform="rotate(-10 14 18)" />
      <ellipse cx="26" cy="18" rx="3.5" ry="2.8" fill="#16A34A" transform="rotate(10 26 18)" />
      <ellipse cx="14" cy="18.2" rx="2" ry="1.8" fill="#111" />
      <ellipse cx="26" cy="18.2" rx="2" ry="1.8" fill="#111" />
      <circle cx="14.7" cy="17.5" r="0.7" fill="white" />
      <circle cx="26.7" cy="17.5" r="0.7" fill="white" />
      <circle cx="18.8" cy="25" r="0.9" fill="#16A34A" />
      <circle cx="21.2" cy="25" r="0.9" fill="#16A34A" />
      <path d="M15 28 Q20 31 25 28" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AvatarRobot({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="4" x2="20" y2="9" stroke="#60A5FA" strokeWidth="1.5" />
      <circle cx="20" cy="3.5" r="2.2" fill="#93C5FD" />
      <rect x="7" y="9" width="26" height="24" rx="5" fill="#3B82F6" />
      <rect x="4" y="16" width="4" height="8" rx="2" fill="#2563EB" />
      <rect x="32" y="16" width="4" height="8" rx="2" fill="#2563EB" />
      <rect x="10" y="14" width="8" height="7" rx="2" fill="#1E3A8A" />
      <rect x="22" y="14" width="8" height="7" rx="2" fill="#1E3A8A" />
      <rect x="11.5" y="15.5" width="5" height="4" rx="1" fill="#60A5FA" opacity="0.9" />
      <rect x="23.5" y="15.5" width="5" height="4" rx="1" fill="#60A5FA" opacity="0.9" />
      <line x1="12" y1="17.5" x2="16.5" y2="17.5" stroke="#93C5FD" strokeWidth="0.9" />
      <line x1="24" y1="17.5" x2="28.5" y2="17.5" stroke="#93C5FD" strokeWidth="0.9" />
      <rect x="12" y="24" width="16" height="5" rx="2" fill="#1E3A8A" />
      <circle cx="15" cy="26.5" r="1.2" fill="#34D399" />
      <circle cx="20" cy="26.5" r="1.2" fill="#FBBF24" />
      <circle cx="25" cy="26.5" r="1.2" fill="#F87171" />
    </svg>
  );
}

export function AvatarPolarBear({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="11" r="7" fill="#BAE6FD" />
      <circle cx="30" cy="11" r="7" fill="#BAE6FD" />
      <circle cx="10" cy="11" r="4.5" fill="#E0F2FE" />
      <circle cx="30" cy="11" r="4.5" fill="#E0F2FE" />
      <circle cx="20" cy="22" r="15" fill="#F0F9FF" />
      <ellipse cx="20" cy="27" rx="6.5" ry="5" fill="#E0F2FE" />
      <circle cx="15.5" cy="19.5" r="2.3" fill="#1A0A00" />
      <circle cx="24.5" cy="19.5" r="2.3" fill="#1A0A00" />
      <circle cx="16.3" cy="18.7" r="0.7" fill="white" />
      <circle cx="25.3" cy="18.7" r="0.7" fill="white" />
      <ellipse cx="20" cy="25.5" rx="2.2" ry="1.6" fill="#94A3B8" />
      <circle cx="20.5" cy="25" r="0.6" fill="white" opacity="0.8" />
    </svg>
  );
}

export function AvatarRaccoon({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="9,17 12,4 16,17" fill="#6B7280" />
      <polygon points="24,17 28,4 31,17" fill="#6B7280" />
      <polygon points="11,16 12.5,7 14.5,16" fill="#D1D5DB" />
      <polygon points="25.5,16 27.5,7 30,16" fill="#D1D5DB" />
      <circle cx="20" cy="22" r="14" fill="#9CA3AF" />
      <circle cx="12" cy="22" r="6" fill="#E5E7EB" />
      <circle cx="28" cy="22" r="6" fill="#E5E7EB" />
      <ellipse cx="15" cy="19.5" rx="5.5" ry="4" fill="#374151" />
      <ellipse cx="25" cy="19.5" rx="5.5" ry="4" fill="#374151" />
      <circle cx="15" cy="19.5" r="2.5" fill="#1A0A00" />
      <circle cx="25" cy="19.5" r="2.5" fill="#1A0A00" />
      <circle cx="15.8" cy="18.7" r="0.8" fill="white" />
      <circle cx="25.8" cy="18.7" r="0.8" fill="white" />
      <ellipse cx="20" cy="27" rx="5" ry="3.5" fill="#D1D5DB" />
      <ellipse cx="20" cy="25.5" rx="2.2" ry="1.5" fill="#374151" />
    </svg>
  );
}

export function AvatarKoala({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="16" r="9.5" fill="#94A3B8" />
      <circle cx="32" cy="16" r="9.5" fill="#94A3B8" />
      <circle cx="8" cy="16" r="6.5" fill="#CBD5E1" />
      <circle cx="32" cy="16" r="6.5" fill="#CBD5E1" />
      <circle cx="20" cy="24" r="13" fill="#B0BEC5" />
      <circle cx="16" cy="21.5" r="2.3" fill="#1A0A00" />
      <circle cx="24" cy="21.5" r="2.3" fill="#1A0A00" />
      <circle cx="16.8" cy="20.7" r="0.7" fill="white" />
      <circle cx="24.8" cy="20.7" r="0.7" fill="white" />
      <ellipse cx="20" cy="27" rx="4.5" ry="3.5" fill="#546E7A" />
      <circle cx="18.5" cy="26" r="0.9" fill="white" opacity="0.6" />
    </svg>
  );
}

export function AvatarDragon({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="13,13 10,2 17,12" fill="#DC2626" />
      <polygon points="27,13 23,12 30,2" fill="#DC2626" />
      <polygon points="13.5,12.5 11,4 16,12" fill="#FCA5A5" />
      <polygon points="26.5,12.5 24,12 29,4" fill="#FCA5A5" />
      <polygon points="5,22 8,12 11,22" fill="#B91C1C" />
      <polygon points="35,22 32,12 29,22" fill="#B91C1C" />
      <circle cx="20" cy="22" r="14" fill="#EF4444" />
      <circle cx="14" cy="27" r="2.8" fill="#DC2626" opacity="0.5" />
      <circle cx="20" cy="29" r="2.8" fill="#DC2626" opacity="0.5" />
      <circle cx="26" cy="27" r="2.8" fill="#DC2626" opacity="0.5" />
      <ellipse cx="15.5" cy="18.5" rx="2.5" ry="3" fill="#1A0A00" />
      <ellipse cx="24.5" cy="18.5" rx="2.5" ry="3" fill="#1A0A00" />
      <ellipse cx="15.5" cy="18.5" rx="1.2" ry="2" fill="#FDE047" />
      <ellipse cx="24.5" cy="18.5" rx="1.2" ry="2" fill="#FDE047" />
      <ellipse cx="15.5" cy="18.5" rx="0.6" ry="1.4" fill="#1A0A00" />
      <ellipse cx="24.5" cy="18.5" rx="0.6" ry="1.4" fill="#1A0A00" />
      <circle cx="18.5" cy="24.5" r="1.2" fill="#DC2626" />
      <circle cx="21.5" cy="24.5" r="1.2" fill="#DC2626" />
      <path d="M15 28 Q20 33 25 28" stroke="#FDE047" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AvatarVampire({ size = 40 }: AP) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="6,40 20,26 34,40" fill="#4C1D95" />
      <polygon points="6,40 13,30 20,36" fill="#2E1065" />
      <polygon points="34,40 27,30 20,36" fill="#2E1065" />
      <circle cx="20" cy="20" r="14" fill="#EDE9FE" />
      <path d="M7,15 Q10,4 20,7 Q30,4 33,15 Q27,7 20,9 Q13,7 7,15" fill="#1C0050" />
      <polygon points="20,8 17.5,13 22.5,13" fill="#1C0050" />
      <ellipse cx="15.5" cy="20" rx="2.5" ry="2.8" fill="#1A0A00" />
      <ellipse cx="24.5" cy="20" rx="2.5" ry="2.8" fill="#1A0A00" />
      <ellipse cx="15.5" cy="20" rx="1.2" ry="1.5" fill="#7C3AED" />
      <ellipse cx="24.5" cy="20" rx="1.2" ry="1.5" fill="#7C3AED" />
      <circle cx="16.2" cy="19.2" r="0.6" fill="white" />
      <circle cx="25.2" cy="19.2" r="0.6" fill="white" />
      <path d="M14 26.5 Q20 31 26 26.5" stroke="#C4B5FD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <polygon points="17.5,26.5 16.5,30.5 18.5,26.5" fill="white" />
      <polygon points="22.5,26.5 21.5,26.5 23.5,30.5" fill="white" />
    </svg>
  );
}

const MAP: Record<string, React.ComponentType<AP>> = {
  cat: AvatarCat, dog: AvatarDog, fox: AvatarFox, bear: AvatarBear,
  panda: AvatarPanda, lion: AvatarLion, frog: AvatarFrog, unicorn: AvatarUnicorn,
  wolf: AvatarWolf, owl: AvatarOwl, penguin: AvatarPenguin, rabbit: AvatarRabbit,
  monkey: AvatarMonkey, alien: AvatarAlien, robot: AvatarRobot,
  polarbear: AvatarPolarBear, raccoon: AvatarRaccoon, koala: AvatarKoala,
  dragon: AvatarDragon, vampire: AvatarVampire,
};

export const AVATAR_KEYS = Object.keys(MAP);

export function AvatarIcon({ avatarKey, size = 40 }: { avatarKey: string; size?: number }) {
  const Component = MAP[avatarKey] ?? AvatarCat;
  return <Component size={size} />;
}
