'use client';

import { useState } from 'react';

const links = [
  { href: 'inicio', label: 'Inicio' },
  { href: 'sobre-mi', label: 'Sobre mí' },
  { href: 'proyectos', label: 'Proyectos' },
  { href: 'contacto', label: 'Contacto' },
] as const;

type NavBarProps = {
  /** Base path for links: '' for home page (#inicio), '/' for project page (/#inicio) */
  baseHref?: string;
  /** Optional class for the header (e.g. top-6 for project page). Default: top-5 */
  className?: string;
};

export default function NavBar({ baseHref = '', className = 'top-5' }: NavBarProps) {
  const [open, setOpen] = useState(false);

  const linkClass =
    'shrink-0 whitespace-nowrap py-2 text-sm text-white rounded-full font-medium transition-colors hover:text-[#32C4F0] md:px-3 md:text-[0.9375rem] lg:px-4';
  const fullHref = (hash: string) => `${baseHref}#${hash}`;

  return (
    <header className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4 sm:top-5 sm:px-5 md:px-6 lg:px-0 ${className}`}>
      <nav className="flex flex-nowrap items-center justify-center gap-1.5 rounded-full border border-blue-300/40 bg-gray-900/70 px-3 py-2 shadow-xl backdrop-blur-lg sm:gap-2 sm:px-4 sm:py-2.5 md:gap-2 md:px-4 lg:gap-3 lg:px-5">
        {/* Desktop: full links — una sola fila en md+ */}
        <div className="hidden flex-nowrap md:flex md:items-center md:gap-2 lg:gap-3">
          {links.map(({ href, label }) => (
            <a key={href} href={fullHref(href)} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center justify-center rounded-full p-2.5 text-white transition-colors hover:bg-white/10"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[-1] md:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-1/2 top-full mt-2 w-[min(calc(100vw-2rem),20rem)] -translate-x-1/2 rounded-2xl border border-blue-300/40 bg-gray-900/95 py-2 shadow-xl backdrop-blur-lg md:hidden">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={fullHref(href)}
                onClick={() => setOpen(false)}
                className="type-body block px-5 py-3 text-center text-white transition-colors hover:bg-white/10 hover:text-[#32C4F0]"
              >
                {label}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
