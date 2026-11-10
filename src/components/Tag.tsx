"use client";
import { AvatarIcon } from "./AvatarSVG";

interface TagProps {
  name: string;
  avatar: string;
  index: number;
  leaving?: boolean;
  onRemove: (name: string) => void;
}

export default function Tag({ name, avatar, index, leaving, onRemove }: TagProps) {
  return (
    <span
      className={`chip ${leaving ? "chip-out" : "chip-in"}`}
    >
      <span className="chip-avatar">
        <AvatarIcon avatarKey={avatar} size={26} />
      </span>
      <bdi className="chip-name" dir="auto">{name}</bdi>
      <button onClick={() => onRemove(name)} className="chip-x" aria-label={`Retirer ${name}`}>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 2 L8 8 M8 2 L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </span>
  );
}
