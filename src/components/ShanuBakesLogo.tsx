type Props = { variant?: "dark" | "light"; size?: number };

export function ShanuBakesLogo({ variant = "dark", size = 36 }: Props) {
  const isLight = variant === "light";
  const cake = isLight ? "#FFFFFF" : "#CC0014";
  const flame = isLight ? "#FFFFFF" : "#CC0014";
  const ice = isLight ? "#FFFFFF" : "#1A1E3C";
  const border = isLight ? "#FFFFFF" : "#CC0014";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16.5" stroke={border} strokeWidth="1.2" />
      {/* Cake bottom tier */}
      <rect x="9" y="22" width="18" height="5" rx="1" fill={cake} />
      {/* Cake top tier */}
      <rect x="12.5" y="17.5" width="11" height="4.5" rx="0.8" fill={cake} />
      {/* Plate */}
      <rect x="8" y="27" width="20" height="1.2" rx="0.6" fill={cake} opacity="0.85" />
      {/* Flame (Hot) */}
      <path
        d="M15.5 15.5c0-1.4 1-2 1-3.2 0-.7-.3-1.2-.6-1.5.9.2 2 1.3 2 2.7 0 1.3-1 1.6-1 2.6 0 .5.3.9.6 1.1-1-.1-2-.7-2-1.7Z"
        fill={flame}
      />
      {/* Snowflake (Cool) */}
      <g stroke={ice} strokeWidth="0.9" strokeLinecap="round">
        <line x1="21.5" y1="10.5" x2="21.5" y2="15.5" />
        <line x1="19" y1="13" x2="24" y2="13" />
        <line x1="19.8" y1="11.3" x2="23.2" y2="14.7" />
        <line x1="23.2" y1="11.3" x2="19.8" y2="14.7" />
      </g>
    </svg>
  );
}