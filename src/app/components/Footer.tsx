"use client";

export default function Footer() {
  return (
    <footer className="bg-srf-ctr border-t border-outline-v">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="absolute inset-0">
                <circle cx="18" cy="18" r="15" stroke="var(--c-primary)" strokeWidth="2.5" strokeDasharray="4 3" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 21c1.5-5 3-9 9-13 0 0-4 6-3 13" stroke="var(--c-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 8c3-4 8-6 13-6-1 6-3 11-7 14" stroke="var(--c-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="t-label text-on-surface font-bold tracking-[-0.02em]">эко<span className="text-primary">реклама</span></span>
              <span className="text-on-surface-v text-[8px] font-medium tracking-[0.12em] uppercase">на асфальте</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 t-body-s text-on-surface-v">
            <a href="tel:+78001234567" className="no-underline text-on-surface-v hover:text-on-surface transition-colors">
              +7 (800) 123-45-67
            </a>
            <a href="mailto:info@экореклама.рф" className="no-underline text-on-surface-v hover:text-on-surface transition-colors">
              info@экореклама.рф
            </a>
            <a href="https://t.me/ecoreklama" target="_blank" rel="noopener noreferrer" className="no-underline text-on-surface-v hover:text-on-surface transition-colors">
              Telegram
            </a>
          </div>
        </div>

        <div className="h-px bg-outline-v my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 t-caption text-on-surface-v">
          <span>&copy; {new Date().getFullYear()} ЭкоРеклама. Все права защищены.</span>
          <span>Санкт-Петербург</span>
        </div>
      </div>
    </footer>
  );
}
