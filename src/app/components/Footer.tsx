"use client";

export default function Footer() {
  return (
    <footer className="bg-srf-ctr border-t border-outline-v">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
                  fill="var(--c-on-primary)"
                />
              </svg>
            </div>
            <span className="t-label text-on-surface">ЭкоРеклама</span>
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
