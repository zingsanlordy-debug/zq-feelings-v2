import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Shayari, FontStyleId } from '../types/shayari';
import { MonthId } from './types';
import { ALL_12_MONTHS, ALL_FLAT_SPECIAL_SHAYARIS } from './data';
import { SpecialDayCard } from './SpecialDayCard';
import { ShayariPagination } from '../components/ShayariPagination';
import { getPaginatedSlice } from '../utils/pagination';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';
import { AdsterraCategoryBanner } from '../components/DiwaliAds';

interface ZqMansoonSpecialPageProps {
  initialMonth?: MonthId | 'all';
  initialPage?: number;
  onSelectMonth?: (month: MonthId | 'all') => void;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  onNavigateHome?: () => void;
  onNavigateFestival?: () => void;
  onNavigateFeelings?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

export const ZqMansoonSpecialPage: React.FC<ZqMansoonSpecialPageProps> = ({
  initialMonth = 'january',
  initialPage = 1,
  onSelectMonth,
  onPageChange,
  getPageHref,
  onNavigateHome,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onOpenComments
}) => {
  const normalizeMonth = (m?: MonthId | 'all'): MonthId | 'all' => (!m ? 'january' : m);

  const [selectedMonth, setSelectedMonth] = useState<MonthId | 'all'>(normalizeMonth(initialMonth));
  const [selectedDayId, setSelectedDayId] = useState<string>('all');
  const prevInitialMonthRef = useRef<MonthId | 'all' | undefined>(initialMonth);
  const [currentPage, setCurrentPage] = useState<number>(
    initialPage && initialPage >= 1 ? initialPage : 1
  );
  const { globalLanguage, ui, isRtl } = useGlobalLanguage();
  const isHinglishMode = globalLanguage === 'default' || globalLanguage === 'hinglish';

  useEffect(() => {
    if (initialMonth) {
      setSelectedMonth(normalizeMonth(initialMonth));
      if (prevInitialMonthRef.current !== initialMonth) {
        setSelectedDayId('all');
        prevInitialMonthRef.current = initialMonth;
      }
    }
    setCurrentPage(initialPage && initialPage >= 1 ? initialPage : 1);
  }, [initialMonth, initialPage]);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(rafId);
  }, [selectedMonth, selectedDayId, currentPage]);

  const handlePageSelect = (nextPage: number) => {
    setCurrentPage(nextPage);
    onPageChange?.(nextPage);
  };

  const activeMonthObj = useMemo(
    () =>
      selectedMonth === 'all'
        ? null
        : ALL_12_MONTHS.find((m) => m.id === selectedMonth) || ALL_12_MONTHS[0] || null,
    [selectedMonth]
  );

  const monthHeadingSource = activeMonthObj
    ? `${activeMonthObj.nameEnglish} Shayari (${activeMonthObj.nameHindi} शायरी)`
    : '12 Months Special Days Shayari (12 महीने स्पेशल शायरी)';
  const translatedHeading = useTranslatedText(
    monthHeadingSource,
    activeMonthObj ? `${activeMonthObj.nameEnglish} Shayari` : '12 Months Special Days Shayari'
  );

  const rawMonthItems = useMemo(
    () =>
      selectedMonth === 'all'
        ? ALL_FLAT_SPECIAL_SHAYARIS
        : ALL_FLAT_SPECIAL_SHAYARIS.filter((entry) => entry.monthId === selectedMonth),
    [selectedMonth]
  );

  const monthItems = useMemo(
    () =>
      selectedDayId === 'all'
        ? rawMonthItems
        : rawMonthItems.filter((entry) => entry.dayId === selectedDayId),
    [rawMonthItems, selectedDayId]
  );

  const pagination = useMemo(
    () => getPaginatedSlice(monthItems, currentPage),
    [monthItems, currentPage]
  );

  const pageLanguage = globalLanguage === 'english' ? 'english' : 'hindi';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 bg-white"
    >
      {/* Top Month Header + Back to Home */}
      <div className="border-b-2 border-[#ffe4e8] pb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {onNavigateHome && (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffe4e8] text-[14px] font-extrabold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{ui.btnHome}</span>
            </a>
          )}
          <h1 className="font-rozha text-[24px] sm:text-[30px] font-bold text-[#d94f70] leading-snug">
            {activeMonthObj ? `${activeMonthObj.heroIcon} ` : '📅 '}
            {isHinglishMode
              ? activeMonthObj
                ? `${activeMonthObj.nameEnglish} Special Shayari`
                : '12 Months Special Days Shayari'
              : translatedHeading}
          </h1>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-[#fff0f3] text-[#d94f70] font-extrabold text-[14px] sm:text-[15px] border border-[#ffe4e8] tabular-nums">
          {monthItems.length} Shayari
        </span>
      </div>

      {/* 12 Months Quick Switcher */}
      <div className="flex flex-wrap items-center gap-2">
        {ALL_12_MONTHS.map((m) => {
          const isCurrent = selectedMonth === m.id;
          return (
            <a
              key={m.id}
              href={`/${m.id}-special-shayari`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedMonth(m.id);
                setSelectedDayId('all');
                setCurrentPage(1);
                onSelectMonth?.(m.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-extrabold border inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                  : 'bg-[#fff8f9] hover:bg-white text-slate-800 border-[#ffd6df] hover:border-[#d94f70]'
              }`}
            >
              <span>{m.heroIcon}</span>
              <span>{m.nameEnglish}</span>
            </a>
          );
        })}
      </div>

      {/* Month Category Filter Selector */}
      {activeMonthObj && activeMonthObj.days.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => {
              setSelectedDayId('all');
              setCurrentPage(1);
              onPageChange?.(1);
            }}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[12px] sm:text-[13px] font-bold border inline-flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedDayId === 'all'
                ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                : 'bg-[#fff8f9] hover:bg-white text-slate-700 border-[#ffd6df] hover:border-[#d94f70]'
            }`}
          >
            <span>✨</span>
            <span>All ({rawMonthItems.length})</span>
          </button>
          {activeMonthObj.days.map((day) => {
            const isSelectedDay = selectedDayId === day.id;
            const dayTitle = globalLanguage === 'hindi' ? day.nameHindi : day.nameEnglish;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => {
                  setSelectedDayId(day.id);
                  setCurrentPage(1);
                  onPageChange?.(1);
                }}
                className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[12px] sm:text-[13px] font-bold border inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSelectedDay
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                    : 'bg-[#fff8f9] hover:bg-white text-slate-700 border-[#ffd6df] hover:border-[#d94f70]'
                }`}
              >
                <span>{day.icon}</span>
                <span>{dayTitle}</span>
                <span className="opacity-80 tabular-nums">({day.shayaris.length})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* DIRECT SHAYARI CARDS */}
      {pagination.pageItems.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {pagination.pageItems.map((item) => (
              <SpecialDayCard
                key={item.shayari.id}
                item={item}
                pageLanguage={pageLanguage}
                isFavorite={isFavorite(item.shayari.id)}
                onToggleFavorite={onToggleFavorite}
                onOpenCardModal={onOpenCardModal}
                onOpenComments={onOpenComments}
              />
            ))}
          </div>

          {pagination.currentPage === 1 && <AdsterraCategoryBanner />}

          <ShayariPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            startIndex={pagination.startIndex}
            endIndex={pagination.endIndex}
            totalItems={pagination.totalItems}
            onPageChange={handlePageSelect}
            getPageHref={getPageHref}
          />
        </div>
      )}
    </div>
  );
};
