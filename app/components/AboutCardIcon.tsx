import type { ReactElement } from 'react';

type AboutIconType = 'education' | 'courses' | 'skills' | 'software';

const iconClass = 'h-6 w-6';

function EducationIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 12.5v4.75c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2v-4.75"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 9.5v4.75" />
    </svg>
  );
}

function CoursesIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21c2.15 1.24 3 2.74 3 4.78"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const icons: Record<AboutIconType, () => ReactElement> = {
  education: EducationIcon,
  courses: CoursesIcon,
  skills: SkillsIcon,
  software: SoftwareIcon,
};

type AboutCardIconProps = {
  type: AboutIconType;
};

export default function AboutCardIcon({ type }: AboutCardIconProps) {
  const Icon = icons[type];
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1A7AB5] text-white shadow-lg shadow-[#1A7AB5]/25"
      aria-hidden
    >
      <Icon />
    </div>
  );
}
