
import React from 'react';

export const COLORS = {
  GOLD: '#D4AF37',
  RED: '#8B0000',
  SOFT_WHITE: '#FDFDFD',
  BLACK_TRANS: 'rgba(0,0,0,0.7)',
};

export const NTT_IKAT_PATTERN = (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="ikat" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M5 10 L10 5 L15 10 L10 15 Z" fill="currentColor" opacity="0.2" />
      <circle cx="10" cy="10" r="1" fill="currentColor" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#ikat)" />
  </svg>
);

export const BATIK_SUBTLE_PATTERN = (
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <pattern id="batik" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M20 0 Q25 10 20 20 Q15 10 20 0" fill="currentColor" opacity="0.05" />
      <path d="M0 20 Q10 25 20 20 Q10 15 0 20" fill="currentColor" opacity="0.05" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.03" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#batik)" />
  </svg>
);
