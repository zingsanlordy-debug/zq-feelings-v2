import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { LanguageSelectorDropdown } from './LanguageSelectorDropdown';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';

export type AppRoute =
  | 'home'
  | 'festival'
  | 'feelings'
  | 'valentine-week'
  | 'religious'
  | 'family-rituals'
  | 'zq-moments'
  | 'zq-mansoon-special'
  | 'zq-official'
  | 'public-wall'
  | 'favorites'
  | 'admin-zq'
  | 'shayari-detail'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'about'
  | 'contact'
  | 'not-found';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  favoritesCount?: number;
  activeCategory?: string;
}

export const EXACT_HOME_SEO_TITLE =
  'All in One Shayari Collection - Love, Sad, Festival, Diwali, Holi, Sanatan Hindu, Islamic Muslim & Hindi Urdu English Special Shayari | ZQ-FEELINGS - Dil Ki Awaaz';

export const EXACT_HOME_SEO_DESCRIPTION =
  '5,900+ se zyada dil chhu lene wali original shayariyan — Love, Sad, Attitude, Dosti, Festival, Dharmik aur Sanskar jaise 63+ Categories me. 77 bhashaon aur 240+ Stylish Fonts ka support, jisme shayari ka font badal kar 1-click me Copy aur Audio sun sakte hain. WhatsApp, Instagram aur Facebook par turant share karein, ya sundar Photo Card banakar Download karein. Apni Shayari Likhe me apne jazbaat bayan karein aur ZQ Moments me photo upload karke yaadein sajayein — 100% Free!';

interface MenuNavItem {
  route: AppRoute;
  href: string;
  labelHi: string;
  labelHinglish?: string;
  labelEn: string;
  labelUr: string;
}

const MENU_NAV_ITEMS: ReadonlyArray<MenuNavItem> = [
  {
    route: 'home',
    href: '/',
    labelHi: '🏠 Home (मुख्य पृष्ठ)',
    labelHinglish: '🏠 Home',
    labelEn: '🏠 Home',
    labelUr: '🏠 ہوم (Home)'
  },
  {
    route: 'feelings',
    href: '/feelings-shayari',
    labelHi: '💗 Feelings Shayari',
    labelEn: '💗 Feelings Shayari',
    labelUr: '💗 احساسات شاعری'
  },
  {
    route: 'festival',
    href: '/festival-shayari',
    labelHi: '🎉 Festival Shayari',
    labelEn: '🎉 Festival Shayari',
    labelUr: '🎉 تہوار شاعری'
  },
  {
    route: 'valentine-week',
    href: '/valentine-week',
    labelHi: '🌹 Valentine Week (7–21 Feb)',
    labelEn: '🌹 Valentine Week (7–21 Feb)',
    labelUr: '🌹 ویلنٹائن ویک'
  },
  {
    route: 'religious',
    href: '/religious/sanatan-hindu',
    labelHi: '🙏 Religious Shayari',
    labelEn: '🙏 Religious Shayari',
    labelUr: '🙏 مذہبی شاعری'
  },
  {
    route: 'family-rituals',
    href: '/newborn-babies-shayari/',
    labelHi: '👶 Sanskar & Family Rituals',
    labelEn: '👶 Sanskar & Family Rituals',
    labelUr: '👶 خاندانی رسومات'
  },
  {
    route: 'zq-mansoon-special',
    href: '/12-months-special-days-shayari',
    labelHi: '📅 12 Months Special',
    labelEn: '📅 12 Months Special',
    labelUr: '📅 12 ماہ کے خصوصی ایام'
  },
  {
    route: 'public-wall',
    href: '/apni-shayari-likhe',
    labelHi: '✍️ Apni Shayari Likhe',
    labelEn: '✍️ Write Your Shayari',
    labelUr: '✍️ اپنی شاعری لکھیں'
  },
  {
    route: 'zq-moments',
    href: '/zq-moments',
    labelHi: '📸 ZQ Moments',
    labelEn: '📸 ZQ Moments',
    labelUr: '📸 زیڈ کیو لمحات'
  },
  {
    route: 'favorites',
    href: '/pasandida-shayari',
    labelHi: '❤️ Pasandida (Saved)',
    labelEn: '❤️ Saved Favorites',
    labelUr: '❤️ پسندیدہ شاعری'
  },
  {
    route: 'about',
    href: '/about-us',
    labelHi: 'ℹ️ About Us',
    labelEn: 'ℹ️ About Us',
    labelUr: 'ℹ️ ہمارے بارے میں'
  },
  {
    route: 'privacy',
    href: '/privacy-policy',
    labelHi: '🛡️ Privacy Policy',
    labelEn: '🛡️ Privacy Policy',
    labelUr: '🛡️ پرائیویسی پالیسی'
  },
  {
    route: 'terms',
    href: '/terms-and-conditions',
    labelHi: '📄 Terms & Conditions',
    labelEn: '📄 Terms & Conditions',
    labelUr: '📄 قواعد و ضوابط'
  },
  {
    route: 'contact',
    href: '/contact-us',
    labelHi: '✉️ Contact Us',
    labelEn: '✉️ Contact Us',
    labelUr: '✉️ ہم سے رابطہ کریں'
  }
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  searchQuery = '',
  onSearchChange,
  favoritesCount = 0,
  activeCategory
}) => {
  const { globalLanguage, ui, isRtl } = useGlobalLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('zq_dark_mode') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    try {
      localStorage.setItem('zq_dark_mode', isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDarkMode]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(route);
  };

  const fullHomeDescription = useTranslatedText(EXACT_HOME_SEO_DESCRIPTION);

  return (
    <header className="w-full max-w-full border-b border-[#ffe4e8] bg-white shadow-xs">
      {/* STICKY TOP NAVIGATION BAR ONLY: LOGO + 1 LANGUAGE SELECTOR + SEARCH BAR + FAVORITES + MENU BUTTON */}
      <div className="sticky top-0 z-50 w-full max-w-full border-b border-[#fff0f3] bg-white/95 shadow-2xs">
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3"
        >
          {/* Left: Back to Home (on subpages) + Clickable ZQ FEELINGS Logo + THE ONLY 1 LANGUAGE BUTTON */}
          <div className="flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2.5 w-full sm:w-auto min-w-0 max-w-full">
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
              {currentRoute !== 'home' && (
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="min-h-[34px] sm:min-h-[40px] inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffe4e8] text-[12px] sm:text-[14px] font-extrabold transition-colors cursor-pointer shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">{ui.btnHome}</span>
                </a>
              )}

              <a
                href="/"
                onClick={(e) => handleLinkClick(e, 'home')}
                aria-label="ZQ FEELINGS - Dil Ki Awaaz | Best New Shayari 2026"
                className="inline-flex items-center gap-1.5 sm:gap-2 select-none cursor-pointer group min-w-0"
              >
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full btn-glossy-pink border border-[#ffe4e8] flex items-center justify-center text-white shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-white text-white" />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="zq-feelings-logo text-[15px] sm:text-[22px] font-black text-[#d94f70] leading-tight whitespace-nowrap">
                    ZQ FEELINGS
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#d94f70] leading-tight hidden sm:block">
                    Dil Ki Awaaz
                  </span>
                </span>
              </a>
            </div>

            {/* THE ONLY 1 LANGUAGE BUTTON ON THE ENTIRE WEBSITE */}
            <LanguageSelectorDropdown />
          </div>

          {/* Center: Live Global Search Bar */}
          {onSearchChange && (
            <div className="order-3 sm:order-2 w-full sm:flex-1 sm:max-w-md min-w-0">
              <div className="relative flex items-center w-full">
                <Search className="w-4 h-4 text-[#d94f70] absolute left-3 sm:left-3.5 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={
                    globalLanguage === 'english' || globalLanguage === 'english-uk'
                      ? 'Search Shayari... (Love, Sad, Diwali)'
                      : globalLanguage === 'urdu'
                        ? 'شاعری تلاش کریں... (محبت، درد، دیوالی)'
                        : globalLanguage === 'hindi'
                          ? 'शायरी खोजें... (Love, Sad, Rose Day, Diwali)'
                          : 'Shayari khojein... (Love, Sad, Rose Day, Diwali)'
                  }
                  aria-label="Search Shayari"
                  className="w-full min-h-[36px] sm:min-h-[42px] pl-9 sm:pl-10 pr-8 sm:pr-9 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#fff8f9] border border-[#ffd6df] focus:border-[#d94f70] focus:bg-white focus:outline-none text-[13px] sm:text-[15px] font-semibold text-slate-900 placeholder:text-slate-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 p-1 rounded-full text-slate-400 hover:text-[#d94f70] hover:bg-[#fff0f3] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Right: Favorites + Dark Mode + Menu Toggle Button */}
          <div className="order-2 sm:order-3 flex items-center gap-1.5 sm:gap-2">
            <a
              href="/pasandida-shayari"
              onClick={(e) => handleLinkClick(e, 'favorites')}
              title={ui.btnPasandida}
              className="min-h-[34px] sm:min-h-[42px] inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[#d94f70] text-[12px] sm:text-[14px] font-extrabold transition-colors cursor-pointer tabular-nums"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d94f70] text-[#d94f70]" />
              <span>{favoritesCount}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              className="min-h-[34px] min-w-[34px] sm:min-h-[42px] sm:min-w-[42px] inline-flex items-center justify-center p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[#d94f70] transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
              className={`min-h-[34px] sm:min-h-[42px] inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl border text-[12px] sm:text-[14px] font-extrabold transition-colors cursor-pointer ${
                menuOpen
                  ? 'bg-[#d94f70] text-white border-[#d94f70]'
                  : 'bg-[#fff8f9] text-slate-800 border-[#ffd6df] hover:border-[#d94f70] hover:text-[#d94f70]'
              }`}
            >
              {menuOpen ? <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Expandable Quick Navigation Menu Drawer */}
        {menuOpen && (
          <nav
            aria-label="Main Website Menu"
            className="border-t border-[#ffe4e8] bg-[#fff8f9] px-4 sm:px-6 lg:px-8 py-4 shadow-md max-h-[70vh] overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {MENU_NAV_ITEMS.map((item) => {
                const active = currentRoute === item.route;
                const label =
                  globalLanguage === 'english' || globalLanguage === 'english-uk'
                    ? item.labelEn
                    : globalLanguage === 'urdu'
                      ? item.labelUr
                      : globalLanguage === 'hinglish' || globalLanguage === 'default'
                        ? item.labelHinglish || item.labelHi
                        : item.labelHi;

                return (
                  <a
                    key={item.route}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.route)}
                    className={`min-h-[42px] px-3.5 py-2 rounded-xl border text-[14px] font-extrabold flex items-center transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#d94f70] text-white border-[#d94f70]'
                        : 'bg-white text-slate-800 border-[#ffd6df] hover:border-[#d94f70] hover:text-[#d94f70]'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>

      {/* HOMEPAGE HERO (SCROLLS NORMALLY SO MOBILE NEVER GETS STUCK): 1. TITLE -> 2. DESCRIPTION */}
      {currentRoute === 'home' && (
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="relative z-20 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-3 sm:pt-6 sm:pb-6 space-y-2 sm:space-y-4 overflow-x-hidden"
        >
          {/* 1. VERY TOP — SHORT ON MOBILE, EXACT SEO TITLE ON DESKTOP */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-[17px] sm:text-[26px] md:text-[30px] font-extrabold tracking-tight text-[#991B1B] leading-[1.3] sm:leading-[1.4]">
              <span className="sm:hidden">Dil Ki Awaaz - Best Shayari Collection</span>
              <span className="hidden sm:inline">{EXACT_HOME_SEO_TITLE}</span>
            </h1>
          </div>

          {/* 2. JUST BELOW TITLE — 2-LINE EXPANDABLE ON MOBILE, EXACT FULL DESCRIPTION ON DESKTOP */}
          <div className="max-w-5xl mx-auto bg-[#fff8f9] border sm:border-2 border-[#ffd6df] rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-8 sm:py-5 text-center shadow-2xs">
            <div className="sm:hidden">
              <p
                className={`text-[12.5px] font-medium text-slate-900 leading-[1.45] ${
                  isDescExpanded ? '' : 'line-clamp-2'
                }`}
              >
                {isDescExpanded
                  ? fullHomeDescription
                  : '5,900+ Best Shayari in 63+ Categories, 77 Languages & 240+ Fonts. Copy, Share & Download.'}
              </p>
              <button
                type="button"
                onClick={() => setIsDescExpanded((prev) => !prev)}
                className="mt-1 inline-block text-[12px] font-extrabold text-[#d94f70] underline cursor-pointer"
              >
                {isDescExpanded ? 'Show Less' : 'Read More'}
              </button>
            </div>

            <p className="hidden sm:block text-[18px] font-medium text-slate-900 leading-[1.8]">
              {fullHomeDescription}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
