import { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md';
}

export function BrandLogo({ size = 'sm' }: BrandLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const boxSize = size === 'sm' ? 'h-9 w-[170px]' : 'h-11 w-[212px]';

  if (imgFailed) {
    return (
      <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8.5 20.5H23.5C26.8 20.5 29.5 17.9 29.5 14.6C29.5 11.6 27.3 9.1 24.4 8.7C23.4 4.8 19.9 2 15.8 2C11.1 2 7.2 5.7 7 10.4C4.2 11 2 13.4 2 16.3C2 18.7 4 20.5 8.5 20.5Z"
            stroke="#0EA5E9"
            strokeWidth="2.2"
          />
          <path d="M12.5 7.5V16.5M12.5 12L18.5 7.5M14.5 10.6L19 16.5" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-[var(--font-display)] text-lg font-bold tracking-tight text-white">
          Kripta<span className="text-sky-400">Cloud</span>
        </span>
      </span>
    );
  }

  return (
    <span className={`relative inline-flex items-center overflow-hidden shrink-0 ${boxSize}`}>
      <img
        src="/assets/aistudio/IMG_4944_c6afa697.jpg"
        alt="KriptaCloud"
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
        className="h-full w-full object-cover object-center scale-[1.12] mix-blend-screen select-none"
      />
    </span>
  );
}
