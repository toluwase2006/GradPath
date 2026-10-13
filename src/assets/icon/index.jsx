import React from "react";

export const GradPathLogo = ({ className = "", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="GradPath logo"
    >
      {/* 3D Isometric Base Box - Left Face */}
      <path d="M12 28L32 38V58L12 48V28Z" fill="#3157D5" />
      {/* 3D Isometric Base Box - Right Face */}
      <path d="M32 38L52 28V48L32 58V38Z" fill="#2445B5" />
      {/* 3D Isometric Base Box - Top Surface Accent */}
      <path d="M32 18L52 28L32 38L12 28L32 18Z" fill="#5375EC" />

      {/* Graduation Cap - Diamond Top */}
      <polygon points="32,6 60,18 32,30 4,18" fill="#14213D" />

      {/* Graduation Cap - Skull Cap Base */}
      <path
        d="M18 24V34C18 34 24 38 32 38C40 38 46 34 46 34V24"
        fill="#243553"
      />

      {/* Tassel & String */}
      <path
        d="M32 18L48 24V32"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tassel Tip */}
      <circle cx="48" cy="34" r="2.5" fill="#FFFFFF" />
    </svg>
  );
};

export default GradPathLogo;

