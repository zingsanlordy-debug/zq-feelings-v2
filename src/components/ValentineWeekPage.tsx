import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  Globe,
  Heart,
  Share2,
  Sparkles,
  Volume2,
  VolumeX
} from 'lucide-react';
import {
  VALENTINE_CATEGORIES,
  VALENTINE_EXTRA_23_LIST,
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  VALENTINE_PRIMARY_12_LIST,
  ValentineBaseShayari,
  ValentineCategoryId,
  ValentineCategoryMeta,
  ValentineLangCode,
  buildValentineCleanPath,
  detectInitialValentineLanguage
} from '../data/valentineWeekMeta';
import { VALENTINE_BASE_SHAYARIS } from '../data/valentineWeekBase';
import {
  ensureValentineLanguageLoaded,
  getValentineShayariLines,
  isValentineLanguageReady
} from '../data/valentineWeekLoader';
import {
  FONT_OPTIONS,
  getFontsForLanguage,
  transformShayariLine,
  HINDI_FONTS_30
} from '../data/fonts';
import { loadGoogleFontAsync } from '../utils/fontLoader';
import { formatShayariCopyText } from '../utils/copyShayariFormat';
import { FontStyleId, Shayari } from '../types/shayari';
import { useFontSize } from '../context/FontSizeContext';
import {
  useGlobalLanguage,
  useTranslatedShayariLines,
  useTranslatedText
} from '../context/GlobalLanguageContext';
import { convertHindiLineToHinglish, convertHindiTitleToHinglish } from '../utils/globalTranslations';
import { AdsterraCategoryBanner } from './DiwaliAds';

const EMPTY_STRING_LINES: string[] = [];

const PREPACKED_VALENTINE_LANGS = new Set<ValentineLangCode>([
  'hi',
  'hi-Latn',
  'en-US',
  'en-GB',
  'bho',
  'bgc',
  'ta',
  'te',
  'kn',
  'ml',
  'mr',
  'gu',
  'bn',
  'pa',
  'or',
  'as',
  'ur',
  'es',
  'pt',
  'fr',
  'de',
  'it',
  'nl',
  'pl',
  'ja',
  'ko',
  'zh-CN',
  'th',
  'vi',
  'id',
  'tl',
  'ar',
  'fa',
  'tr',
  'ru'
]);

const VALENTINE_ENGLISH_SUBTITLES: Record<ValentineCategoryId, string> = {
  'rose-day': 'First morning of love and heartfelt feelings wrapped inside crimson rose petals',
  'propose-day': 'Sincere and simple confession from a beating heart to walk together for a lifetime',
  'chocolate-day': 'Smiles sweeter than chocolate and lovely poetry celebrating sweetness in relationships',
  'teddy-day': 'Innocence, tender warmth, and cute teddy shayari for feeling close even from afar',
  'promise-day': 'Far from empty vows, true promises of holding hands through every sun and shade',
  'hug-day': 'A comforting wordless embrace that melts away all tiredness and sorrow',
  'kiss-day': 'Poetry of gentle affection and reverence, from a loving forehead kiss to touching the soul',
  'valentine-day': 'A special celebration of true love, a lifelong companion, and prayers from the heart',
  'slap-day': 'Shayari answering false promises, deceit, and ego with a confident smile and self-respect',
  'kick-day': 'Courage to leave bitter memories and selfish bonds behind for a fresh new beginning',
  'perfume-day': 'Soft fragrance of memories, warmth of character, and fresh feelings of loving yourself',
  'flirting-day': 'Playful teasing, expressive glances, and mischievous shayari full of sweet smiles',
  'confession-day': 'The day to speak unspoken thoughts and true feelings kept inside the heart for years',
  'missing-day': 'Poetry of quiet evenings, old chats, and memories soaked in missing someone special',
  'breakup-day': 'Bidding goodbye to an incomplete bond without complaints and choosing peace and self-respect'
};

function dateToHindi(dateLabel: string): string {
  return dateLabel.replace(/\bFeb\b/g, 'फ़रवरी');
}

function useValentineUiText(hindi: string, english: string, hinglish?: string): string {
  const { globalLanguage } = useGlobalLanguage();
  const translated = useTranslatedText(hindi, english);
  if (hinglish && (globalLanguage === 'default' || globalLanguage === 'hinglish')) {
    return hinglish;
  }
  return translated;
}

interface ValentineShayariCardItemProps {
  item: ValentineBaseShayari;
  category: ValentineCategoryMeta;
  langCode: ValentineLangCode;
  useDynamicGlobalLang?: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
}

const ValentineShayariCardItem: React.FC<ValentineShayariCardItemProps> = ({
  item,
  category,
  langCode,
  useDynamicGlobalLang = false,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal
}) => {
  const { globalLanguage, activeLanguageOption } = useGlobalLanguage();
  const effectiveApiCode = useDynamicGlobalLang
    ? activeLanguageOption?.apiCode || langCode
    : langCode;

  const availableFonts = useMemo(() => {
    const target = effectiveApiCode === 'hi-Latn' ? 'hinglish' : effectiveApiCode;
    return getFontsForLanguage(target);
  }, [effectiveApiCode]);
  const [selectedFont, setSelectedFont] = useState<FontStyleId>(() => availableFonts[0]?.id || 'en-normal');

  useEffect(() => {
    if (!availableFonts.some((f) => f.id === selectedFont)) {
      setSelectedFont(availableFonts[0]?.id || 'en-normal');
    }
  }, [availableFonts]);

  const langMeta = VALENTINE_LANGUAGE_MAP.get(langCode) || VALENTINE_LANGUAGES[0];
  const effectiveNativeLabel = useDynamicGlobalLang
    ? activeLanguageOption?.nativeLabel || langMeta.nativeLabel
    : langMeta.nativeLabel;
  const effectiveRtl = useDynamicGlobalLang
    ? Boolean(activeLanguageOption?.rtl)
    : langMeta.rtl;
  const effectiveSpeechLang = useDynamicGlobalLang
    ? activeLanguageOption?.speechLang || langMeta.speechLang
    : langMeta.speechLang;
  const effectiveHreflang = useDynamicGlobalLang
    ? activeLanguageOption?.apiCode || langMeta.hreflang
    : langMeta.hreflang;

  const currentFontOption = useMemo(
    () => availableFonts.find((f) => f.id === selectedFont) || availableFonts[0] || HINDI_FONTS_30[0],
    [availableFonts, selectedFont]
  );

  useEffect(() => {
    if (currentFontOption?.googleFontFamily) {
      loadGoogleFontAsync(currentFontOption.googleFontFamily);
    }
  }, [currentFontOption]);

  const [copied, setCopied] = useState(false);
  const [sharedFeedback, setSharedFeedback] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { fontSizeMode } = useFontSize();

  const shouldUseDynamicShayari =
    useDynamicGlobalLang || !PREPACKED_VALENTINE_LANGS.has(langCode);

  const dynamicShayari = useTranslatedShayariLines(
    shouldUseDynamicShayari ? item.hi : EMPTY_STRING_LINES,
    shouldUseDynamicShayari ? item['en-US'] : EMPTY_STRING_LINES,
    shouldUseDynamicShayari ? item['hi-Latn'] : EMPTY_STRING_LINES
  );

  const prepackedLines = useMemo(
    () => getValentineShayariLines(item, langCode),
    [item, langCode]
  );

  const rawLines = useMemo(
    () =>
      shouldUseDynamicShayari && dynamicShayari.lines.length > 0
        ? dynamicShayari.lines
        : prepackedLines,
    [shouldUseDynamicShayari, dynamicShayari.lines, prepackedLines]
  );

  const displayLines = useMemo(
    () => rawLines.map((line) => transformShayariLine(line, selectedFont)),
    [rawLines, selectedFont]
  );

  const dynamicTitleTranslated = useTranslatedText(item.titleHindi, item.title);
  const cardTitle =
    effectiveApiCode === 'hi' || (!useDynamicGlobalLang && (langCode === 'bho' || langCode === 'bgc'))
      ? item.titleHindi
      : effectiveApiCode === 'hi-Latn' || globalLanguage === 'hinglish' || globalLanguage === 'default'
        ? convertHindiTitleToHinglish(item.titleHindi)
        : effectiveApiCode === 'en-US' || effectiveApiCode === 'en-GB'
          ? item.title
          : dynamicTitleTranslated;

  const catHindiShort = category.hindiName.replace(/\s*शायरी$/i, '').trim();
  const translatedShortCategory = useValentineUiText(
    catHindiShort,
    category.shortName,
    category.shortName
  );
  const translatedDateLabel = useValentineUiText(
    dateToHindi(category.dateLabel),
    category.dateLabel,
    category.dateLabel
  );
  const labelStylishFonts = useValentineUiText('स्टाइलिश फ़ॉन्ट्स:', 'Stylish Fonts:', 'Stylish Fonts:');
  const labelSwipe = useValentineUiText('स्वाइप →', 'Swipe →', 'Swipe →');
  const labelCopy = useValentineUiText('कॉपी', 'Copy', 'Copy');
  const labelCopied = useValentineUiText('कॉपी हो गया!', 'Copied!', 'Copied!');
  const labelShare = useValentineUiText('शेयर', 'Share', 'Share');
  const labelShared = useValentineUiText('शेयर किया', 'Shared', 'Shared');

  const dedicatedCategoryPath = buildValentineCleanPath(category.id, langCode, false);
  const sharePageUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${dedicatedCategoryPath}`
      : `https://dil-ki-awaaz.vercel.app${dedicatedCategoryPath}`;

  const copyTextPayload = formatShayariCopyText({
    title: cardTitle || `${translatedShortCategory} Shayari`,
    lines: displayLines,
    category: category.id
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(copyTextPayload).catch(() => {
      // ignore clipboard permission error
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: `40+ Best ${category.shortName} Shayari 2026 | ZQ Feelings`,
          text: `${displayLines.join('\n')}\n\n❤️ ZQ Feelings`,
          url: sharePageUrl
        });
        return;
      } catch {
        // User cancelled or share unavailable — fallback to copy
      }
    }
    navigator.clipboard.writeText(copyTextPayload).catch(() => {
      // ignore
    });
    setSharedFeedback(true);
    setTimeout(() => setSharedFeedback(false), 2200);
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${category.icon} *${category.shortName} Shayari (${category.dateLabel})* ${category.icon}\n\n${displayLines
      .map((l) => `"${l}"`)
      .join('\n')}\n\n💖 *ZQ Feelings - Valentine Week Special*\n${sharePageUrl}`
  )}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    sharePageUrl
  )}&quote=${encodeURIComponent(
    `${category.icon} ${category.shortName} Shayari (${category.dateLabel})\n\n${displayLines.join(
      '\n'
    )}\n\n💖 ZQ Feelings - Valentine Week Special`
  )}`;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(rawLines.join('. '));
    utterance.lang = effectiveSpeechLang;
    utterance.rate = 0.88;
    utterance.pitch = 1.03;

    const voices = window.speechSynthesis.getVoices();
    const prefix = effectiveSpeechLang.split('-')[0].toLowerCase();
    const matchedVoice = voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const shayariTypographyClass =
    fontSizeMode === 'small'
      ? 'text-[17px] leading-[1.8] font-semibold'
      : fontSizeMode === 'big'
      ? 'text-[22px] leading-[1.85] font-bold'
      : 'text-[19px] leading-[1.85] font-semibold';

  return (
    <article
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="group relative rounded-3xl bg-[#fff6f8] border-2 border-[#ffd6df] hover:border-[#e11d48]/60 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      <meta itemProp="inLanguage" content={effectiveHreflang} />
      <meta itemProp="author" content="ZQ FEELINGS - Dil Ki Awaaz" />

      {/* Card Header */}
      <div className="px-5 py-4 bg-white border-b border-[#ffe4e8] space-y-2.5">
        <div className="flex items-start justify-between gap-2.5 w-full">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#fff0f3] to-[#ffe4e8] border border-[#fecdd3] flex items-center justify-center text-2xl shrink-0">
              {category.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 text-[13px] font-extrabold text-[#be123c]">
                <span>#{item.index}</span>
                <span aria-hidden="true" className="text-pink-300">
                  •
                </span>
                <span>{translatedShortCategory}</span>
                <span aria-hidden="true" className="text-pink-300">
                  •
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#fff0f3] border border-[#fecdd3] text-[#9f1239]">
                  {effectiveNativeLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleSpeak}
              title="Listen Shayari"
              aria-label="Listen Shayari"
              className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-center ${
                isSpeaking
                  ? 'bg-[#e11d48] text-white border-[#e11d48]'
                  : 'bg-white text-slate-700 border-[#ffe4e8] hover:text-[#e11d48] hover:bg-[#fff0f3]'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => onToggleFavorite(item.id)}
              title="Save to Favorites"
              aria-label="Save to Favorites"
              className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-center ${
                isFavorite
                  ? 'bg-[#fff0f3] text-[#e11d48] border-[#e11d48]'
                  : 'bg-white text-slate-500 border-[#ffe4e8] hover:text-[#e11d48] hover:bg-[#fff0f3]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#e11d48]' : ''}`} />
            </button>
          </div>
        </div>

        <h3
          itemProp="headline"
          dir={effectiveRtl ? 'rtl' : 'ltr'}
          className="w-full flex-1 min-w-0 text-[18px] sm:text-[19px] font-extrabold text-slate-900 leading-snug whitespace-normal [word-break:normal] [overflow-wrap:normal]"
        >
          {cardTitle}
        </h3>
      </div>

      {/* Single-Language Shayari Body */}
      <div className="px-5 py-7 sm:px-7 sm:py-8 flex-1 flex flex-col justify-center min-h-[185px] bg-gradient-to-b from-[#fff9fa] to-[#fff0f4]">
        <div className="relative py-2 px-2">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-0 text-3xl font-serif text-[#e11d48]/30 select-none"
          >
            “
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-4 right-0 text-3xl font-serif text-[#e11d48]/30 select-none"
          >
            ”
          </span>

          <div
            itemProp="text"
            dir={effectiveRtl ? 'rtl' : 'ltr'}
            style={currentFontOption?.fontFamily ? { fontFamily: currentFontOption.fontFamily } : undefined}
            className={`space-y-3 text-center tracking-wide ${shayariTypographyClass} ${
              currentFontOption.fontClass || ''
            } ${
              selectedFont === 'sparkle'
                ? 'bg-white/90 p-4 rounded-2xl border border-[#fecdd3]'
                : ''
            }`}
          >
            {displayLines.map((line, idx) => (
              <p
                key={idx}
                style={currentFontOption?.fontFamily ? { fontFamily: currentFontOption.fontFamily } : undefined}
                className={`select-text leading-[1.85] ${
                  selectedFont === 'neon' ? 'text-[#be123c]' : 'text-[#000000]'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 text-[13px] font-bold text-[#be123c]">
          <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
          <span>ZQ FEELINGS • {translatedDateLabel}</span>
        </div>
      </div>

      {/* LANGUAGE-SPECIFIC DYNAMIC FONTS BAR */}
      <div className="px-4 sm:px-5 py-3 bg-white border-t border-[#ffe4e8]">
        <div className="flex items-center justify-between mb-2 text-[13px] font-bold">
          <span className="text-slate-700 flex items-center gap-1.5">
            <span>{availableFonts.length} {labelStylishFonts}</span>
            <span className="text-[#e11d48] font-extrabold">{currentFontOption.name}</span>
          </span>
          <span className="text-slate-400 text-[12px]">{labelSwipe}</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-pink-200">
          {availableFonts.map((font) => {
            const active = selectedFont === font.id;
            return (
              <button
                key={font.id}
                type="button"
                onClick={() => {
                  setSelectedFont(font.id);
                  if (font.googleFontFamily) loadGoogleFontAsync(font.googleFontFamily);
                }}
                title={font.description}
                style={font.fontFamily ? { fontFamily: font.fontFamily } : undefined}
                className={`min-h-[40px] shrink-0 px-3.5 py-1.5 rounded-xl text-[14px] font-bold border transition-all cursor-pointer whitespace-nowrap ${
                  font.fontClass || ''
                } ${
                  active
                    ? 'bg-[#e11d48] text-white border-[#e11d48] shadow-2xs'
                    : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#e11d48] hover:text-[#e11d48]'
                }`}
              >
                {font.displayName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Actions: Like, Card Download, Copy, Share, WhatsApp */}
      <div className="px-4 sm:px-5 py-3.5 bg-white border-t border-[#ffe4e8] flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLike}
            className={`min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[14px] font-extrabold border transition-colors cursor-pointer tabular-nums ${
              hasLiked
                ? 'bg-[#fff0f3] text-[#e11d48] border-[#e11d48]'
                : 'bg-white text-slate-700 border-[#ffe4e8] hover:bg-[#fff8f9]'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-[#e11d48]' : ''}`} />
            <span>{likes}</span>
          </button>

          {onOpenCardModal && (
            <button
              type="button"
              onClick={() =>
                onOpenCardModal(
                  {
                    id: item.id,
                    category: 'love',
                    categoryType: 'feelings',
                    categoryName: `${category.shortName} Shayari`,
                    categoryIcon: category.icon,
                    title: cardTitle,
                    lines: [...rawLines],
                    linesHindi: [...rawLines],
                    linesHinglish: [...item['hi-Latn']],
                    linesEnglish: [...item['en-US']],
                    author: 'ZQ FEELINGS',
                    tags: item.tags,
                    initialLikes: likes,
                    language: 'hindi'
                  },
                  selectedFont
                )
              }
              title="Download Photo Card"
              aria-label="Download Photo Card"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[14px] font-bold text-slate-700 bg-white border border-[#ffe4e8] hover:text-[#e11d48] hover:bg-[#fff0f3] transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-[14px] sm:text-[15px] font-extrabold inline-flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-[#fff0f3] text-[#be123c] border-[#fecdd3] hover:bg-[#e11d48] hover:text-white hover:border-[#e11d48]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>{labelCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{labelCopy}</span>
              </>
            )}
          </button>

          {/* Universal Share Button */}
          <button
            type="button"
            onClick={handleNativeShare}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-[14px] sm:text-[15px] font-extrabold inline-flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
              sharedFeedback
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-slate-800 border-[#ffd6df] hover:border-[#e11d48] hover:text-[#e11d48]'
            }`}
          >
            {sharedFeedback ? (
              <>
                <Check className="w-4 h-4" />
                <span>{labelShared}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#e11d48]" />
                <span>{labelShare}</span>
              </>
            )}
          </button>

          {/* WhatsApp Share */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            title="Share on WhatsApp"
            className="min-h-[44px] px-3 py-2 rounded-xl text-[14px] sm:text-[15px] font-extrabold text-white bg-[#25D366] hover:bg-[#1fb855] border border-[#1fb855] inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg aria-hidden="true" className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.51 2 2.016 6.494 2.016 12.016c0 1.968.563 3.867 1.64 5.515L2 22l4.64-1.609c1.578.984 3.39 1.516 5.39 1.516 5.524 0 10.016-4.493 10.016-10.016C22.047 6.494 17.555 2 12.031 2zm5.782 14.328c-.25.703-1.453 1.344-2.016 1.39-.562.047-1.125.204-3.75-0.89-3.234-1.344-5.328-4.64-5.484-4.844-.156-.203-1.28-1.703-1.28-3.25 0-1.547.812-2.312 1.094-2.625.28-.312.625-.39.843-.39.219 0 .438 0 .625.015.204.016.485-.078.75.563.282.688.954 2.328 1.032 2.484.078.157.14.36.031.579-.109.218-.172.343-.343.546-.172.204-.36.454-.516.61-.172.172-.36.36-.156.703.203.344.906 1.485 1.938 2.406 1.328 1.188 2.453 1.563 2.797 1.735.344.172.547.14.75-.094.203-.235.875-1.016 1.109-1.36.234-.343.469-.281.781-.171.313.109 1.985.937 2.328 1.109.344.172.578.25.656.39.078.14.078.813-.172 1.516z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Facebook Share */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            title="Share on Facebook"
            className="min-h-[44px] px-3 py-2 rounded-xl text-[14px] sm:text-[15px] font-extrabold text-white bg-[#1877F2] hover:bg-[#1666d1] border border-[#1666d1] inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg aria-hidden="true" className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </div>
      </div>
    </article>
  );
};

interface CategoryLanguageBarProps {
  category: ValentineCategoryMeta;
  activeLang: ValentineLangCode;
  isLoadingLang: boolean;
  onSelectLanguage: (lang: ValentineLangCode) => void;
}

const CategoryLanguageBar: React.FC<CategoryLanguageBarProps> = ({
  category,
  activeLang,
  isLoadingLang,
  onSelectLanguage
}) => {
  const [showMore23, setShowMore23] = useState(false);

  const extraIndian = useMemo(
    () => VALENTINE_EXTRA_23_LIST.filter((l) => l.regionGroup === 'indian'),
    []
  );
  const extraGlobal = useMemo(
    () => VALENTINE_EXTRA_23_LIST.filter((l) => l.regionGroup === 'global'),
    []
  );

  return (
    <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#fff0f3] via-[#fff5f7] to-[#fff0f3] border-2 border-[#fecdd3] p-4 sm:p-5 space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[15px] sm:text-[16px] font-extrabold text-[#881337] flex items-center gap-2">
          <span aria-hidden="true" className="text-lg">
            🌐
          </span>
          <span>Read this {category.shortName} Shayari in 35 languages:</span>
        </p>
        {isLoadingLang && (
          <span className="text-[13px] font-bold text-[#e11d48] animate-pulse">
            Loading language...
          </span>
        )}
      </div>

      {/* Primary 12 Native Language Links + "+ 23 More" */}
      <div className="flex flex-wrap items-center gap-2">
        {VALENTINE_PRIMARY_12_LIST.map((lang) => {
          const isSelected = activeLang === lang.code;
          return (
            <a
              key={lang.code}
              href={buildValentineCleanPath(category.id, lang.code, true)}
              onClick={(e) => {
                e.preventDefault();
                onSelectLanguage(lang.code);
              }}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border transition-all cursor-pointer inline-flex items-center ${
                isSelected
                  ? 'bg-[#c81e45] text-white border-[#c81e45] shadow-2xs'
                  : 'bg-white text-slate-800 border-[#fda4af] hover:border-[#c81e45] hover:text-[#c81e45]'
              }`}
            >
              {lang.nativeLabel}
            </a>
          );
        })}

        <button
          type="button"
          onClick={() => setShowMore23((prev) => !prev)}
          className="min-h-[40px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold bg-[#991B1B] hover:bg-[#7f1d1d] text-white border border-[#991B1B] inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>{showMore23 ? 'Hide 23 Languages' : '+ 23 More'}</span>
          {showMore23 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expandable Remaining 23 Languages (Indian + Global) */}
      {showMore23 && (
        <div className="pt-3 border-t border-[#fecdd3] space-y-3">
          <div className="space-y-1.5">
            <span className="block text-[12px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              More Indian Languages
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {extraIndian.map((lang) => {
                const isSelected = activeLang === lang.code;
                return (
                  <a
                    key={lang.code}
                    href={buildValentineCleanPath(category.id, lang.code, true)}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLanguage(lang.code);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-bold border transition-all cursor-pointer inline-flex items-center ${
                      isSelected
                        ? 'bg-[#c81e45] text-white border-[#c81e45]'
                        : 'bg-white text-slate-800 border-[#fecdd3] hover:border-[#c81e45] hover:text-[#c81e45]'
                    }`}
                  >
                    {lang.nativeLabel}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="block text-[12px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              More Global Languages
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {extraGlobal.map((lang) => {
                const isSelected = activeLang === lang.code;
                return (
                  <a
                    key={lang.code}
                    href={buildValentineCleanPath(category.id, lang.code, true)}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLanguage(lang.code);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-bold border transition-all cursor-pointer inline-flex items-center ${
                      isSelected
                        ? 'bg-[#c81e45] text-white border-[#c81e45]'
                        : 'bg-white text-slate-800 border-[#fecdd3] hover:border-[#c81e45] hover:text-[#c81e45]'
                    }`}
                  >
                    {lang.nativeLabel}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface TopLanguageDrawerProps {
  activeLang: ValentineLangCode;
  categoryId?: ValentineCategoryId;
  onSelectLanguage: (lang: ValentineLangCode) => void;
}

const TopLanguageDrawer: React.FC<TopLanguageDrawerProps> = ({
  activeLang,
  categoryId,
  onSelectLanguage
}) => (
  <div className="mt-4 rounded-2xl bg-white text-slate-900 p-4 sm:p-5 text-left border-2 border-[#fecdd3] shadow-lg space-y-4">
    <div className="space-y-2">
      <p className="text-[13px] font-extrabold uppercase tracking-wider text-[#9f1239]">
        15 Indian Languages
      </p>
      <div className="flex flex-wrap gap-2">
        {VALENTINE_LANGUAGES.filter((l) => l.regionGroup === 'indian').map((lang) => (
          <a
            key={lang.code}
            href={buildValentineCleanPath(categoryId, lang.code, true)}
            onClick={(e) => {
              e.preventDefault();
              onSelectLanguage(lang.code);
            }}
            className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border cursor-pointer transition-colors inline-flex items-center ${
              activeLang === lang.code
                ? 'bg-[#c81e45] text-white border-[#c81e45]'
                : 'bg-[#fff8f9] text-slate-800 border-[#fecdd3] hover:border-[#c81e45]'
            }`}
          >
            {lang.nativeLabel}
          </a>
        ))}
      </div>
    </div>

    <div className="space-y-2 pt-2 border-t border-[#ffe4e8]">
      <p className="text-[13px] font-extrabold uppercase tracking-wider text-[#9f1239]">
        20 Global Languages
      </p>
      <div className="flex flex-wrap gap-2">
        {VALENTINE_LANGUAGES.filter((l) => l.regionGroup === 'global').map((lang) => (
          <a
            key={lang.code}
            href={buildValentineCleanPath(categoryId, lang.code, true)}
            onClick={(e) => {
              e.preventDefault();
              onSelectLanguage(lang.code);
            }}
            className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border cursor-pointer transition-colors inline-flex items-center ${
              activeLang === lang.code
                ? 'bg-[#c81e45] text-white border-[#c81e45]'
                : 'bg-[#fff8f9] text-slate-800 border-[#fecdd3] hover:border-[#c81e45]'
            }`}
          >
            {lang.nativeLabel}
          </a>
        ))}
      </div>
    </div>
  </div>
);

interface DedicatedBottomDayCardProps {
  vCat: ValentineCategoryMeta;
  isCurrent: boolean;
  onSelectCategory?: (category?: ValentineCategoryId) => void;
}

const DedicatedBottomDayCard: React.FC<DedicatedBottomDayCardProps> = ({
  vCat,
  isCurrent,
  onSelectCategory
}) => {
  const catHindiShort = vCat.hindiName.replace(/\s*शायरी$/i, '').trim();
  const translatedName = useValentineUiText(catHindiShort, vCat.shortName, vCat.shortName);
  const translatedDate = useValentineUiText(
    dateToHindi(vCat.dateLabel),
    vCat.dateLabel,
    vCat.dateLabel
  );
  const translatedCountLabel = useValentineUiText(
    `${vCat.count} शायरी`,
    `${vCat.count} Shayari`,
    `${vCat.count} Shayari`
  );

  return (
    <a
      href={`/valentine-week/${vCat.id}-shayari`}
      onClick={(e) => {
        e.preventDefault();
        onSelectCategory?.(vCat.id);
      }}
      className={`group p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
        isCurrent
          ? 'bg-[#c81e45] text-white border-[#c81e45] shadow-xs'
          : 'bg-white hover:bg-[#fff0f3] text-slate-900 border-rose-200 hover:border-[#e11d48]'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-2xl shrink-0">{vCat.icon}</span>
        <div className="min-w-0">
          <span className="block text-[15px] font-extrabold whitespace-normal [word-break:normal] [overflow-wrap:normal] leading-tight">
            {translatedName} - {translatedDate}
          </span>
          <span
            className={`block text-[12px] font-bold ${
              isCurrent ? 'text-pink-100' : 'text-[#be123c]'
            }`}
          >
            {translatedCountLabel}
          </span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};

interface ValentineHubCategoryCardProps {
  cat: ValentineCategoryMeta;
  onSelectCategory?: (category?: ValentineCategoryId) => void;
}

const ValentineHubCategoryCard: React.FC<ValentineHubCategoryCardProps> = ({
  cat,
  onSelectCategory
}) => {
  const isValentinePart = cat.partLabel === 'Valentine Week';
  const borderAccent = isValentinePart
    ? 'border-rose-200 hover:border-[#e11d48]'
    : 'border-pink-200 hover:border-[#be123c]';
  const gradientAccent = isValentinePart
    ? 'from-[#e11d48] to-[#f43f5e]'
    : 'from-[#9f1239] to-[#db2777]';
  const badgeAccent = isValentinePart
    ? 'bg-rose-50 text-rose-700 border-rose-200'
    : 'bg-pink-50 text-pink-800 border-pink-200';

  const catHindiShort = cat.hindiName.replace(/\s*शायरी$/i, '').trim();
  const translatedShortName = useValentineUiText(catHindiShort, cat.shortName, cat.shortName);
  const translatedDate = useValentineUiText(dateToHindi(cat.dateLabel), cat.dateLabel, cat.dateLabel);
  const translatedSecondaryTitle = useValentineUiText(
    cat.hindiName,
    `${cat.shortName} Shayari`,
    convertHindiTitleToHinglish(cat.hindiName)
  );
  const translatedSubtitle = useValentineUiText(
    cat.subtitle,
    VALENTINE_ENGLISH_SUBTITLES[cat.id],
    convertHindiLineToHinglish(cat.subtitle)
  );
  const translatedCountBadge = useValentineUiText(
    `${cat.count} शायरी`,
    `${cat.count} Shayari`,
    `${cat.count} Shayari`
  );
  const translatedOpenCta = useValentineUiText(
    '40 शायरी खोलें',
    'Open 40 Shayari',
    'Open 40 Shayari'
  );

  return (
    <a
      href={`/valentine-week/${cat.id}-shayari`}
      onClick={(e) => {
        e.preventDefault();
        onSelectCategory?.(cat.id);
      }}
      className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-white border-2 ${borderAccent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientAccent} text-white flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform`}
          >
            {cat.icon}
          </div>
          <span
            className={`px-3 py-1 rounded-xl text-[13px] font-extrabold border ${badgeAccent}`}
          >
            {translatedCountBadge}
          </span>
        </div>

        <h3 className="font-rozha text-[22px] font-bold text-slate-900 group-hover:text-[#d94f70] leading-snug">
          {translatedShortName} - {translatedDate}
        </h3>
        <p className="text-[16px] font-bold text-[#d94f70] mt-0.5">{translatedSecondaryTitle}</p>
        <p className="mt-2.5 text-[14px] text-slate-600 font-medium leading-relaxed line-clamp-2">
          {translatedSubtitle}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[15px] font-bold text-[#d94f70]">
        <span>{translatedOpenCta}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

interface ValentineAccordionSectionProps {
  cat: ValentineCategoryMeta;
  isExpanded: boolean;
  activeLang: ValentineLangCode;
  useDynamicGlobalLang: boolean;
  displayNativeLabel: string;
  activePage: 1 | 2;
  pageSlice: ValentineBaseShayari[];
  onToggleExpand: () => void;
  onSelectCategory?: (category?: ValentineCategoryId) => void;
  onSetPage: (page: 1 | 2) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
}

const ValentineAccordionSection: React.FC<ValentineAccordionSectionProps> = ({
  cat,
  isExpanded,
  activeLang,
  useDynamicGlobalLang,
  displayNativeLabel,
  activePage,
  pageSlice,
  onToggleExpand,
  onSelectCategory,
  onSetPage,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal
}) => {
  const translatedDayBadge = useValentineUiText(
    `दिन ${cat.order} • ${dateToHindi(cat.dateLabel)}`,
    `Day ${cat.order} • ${cat.dateLabel}`,
    `Day ${cat.order} • ${cat.dateLabel}`
  );
  const translatedCountBadge = useValentineUiText('40 शायरी', '40 Shayari', '40 Shayari');
  const translatedHeading = useValentineUiText(
    `${cat.hindiName} (${dateToHindi(cat.dateLabel)})`,
    cat.heading,
    `${cat.shortName} Shayari (${cat.dateLabel})`
  );
  const translatedSubtitle = useValentineUiText(
    cat.subtitle,
    VALENTINE_ENGLISH_SUBTITLES[cat.id],
    convertHindiLineToHinglish(cat.subtitle)
  );
  const labelDedicatedPage = useValentineUiText('अलग पेज खोलें', 'Dedicated Page', 'Dedicated Page');
  const labelClose = useValentineUiText('बंद करें', 'Close', 'Close');
  const labelPreviewHere = useValentineUiText('यहीं पढ़ें', 'Preview Here', 'Preview Here');
  const labelShowing = useValentineUiText('दिखाया जा रहा है', 'Showing', 'Showing');
  const labelOf = useValentineUiText('में से', 'of', 'of');
  const labelShayariIn = useValentineUiText('शायरी भाषा:', 'Shayari in', 'Shayari in');
  const labelPage1 = useValentineUiText('पेज 1 (1–20)', 'Page 1 (1–20)', 'Page 1 (1–20)');
  const labelPage2 = useValentineUiText('पेज 2 (21–40)', 'Page 2 (21–40)', 'Page 2 (21–40)');

  return (
    <section
      id={`vw-section-${cat.id}`}
      className="scroll-mt-6 rounded-3xl border-2 border-[#fecdd3] bg-white overflow-hidden shadow-2xs"
    >
      {/* Category Accordion Header */}
      <div
        className={`w-full p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 transition-colors ${
          isExpanded
            ? 'bg-gradient-to-r from-[#991B1B] via-[#be123c] to-[#e11d48] text-white'
            : 'bg-[#fff5f7] text-slate-900'
        }`}
      >
        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
          <span
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 border ${
              isExpanded
                ? 'bg-white/15 border-white/30'
                : 'bg-white border-[#fecdd3] shadow-2xs'
            }`}
          >
            {cat.icon}
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={`px-2.5 py-0.5 rounded-lg text-[12px] font-extrabold tabular-nums ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-[#ffe4e8] text-[#9f1239]'
                }`}
              >
                {translatedDayBadge}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-lg text-[12px] font-extrabold ${
                  isExpanded
                    ? 'bg-white/20 text-pink-50'
                    : 'bg-white border border-[#fecdd3] text-[#be123c]'
                }`}
              >
                {translatedCountBadge}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-lg text-[12px] font-bold ${
                  isExpanded
                    ? 'bg-white/15 text-pink-100'
                    : 'bg-white border border-[#fecdd3] text-slate-600'
                }`}
              >
                {displayNativeLabel}
              </span>
            </div>

            <h2
              className={`font-rozha text-[22px] sm:text-[28px] font-bold leading-snug ${
                isExpanded ? 'text-white' : 'text-[#991B1B]'
              }`}
            >
              {cat.order}. {translatedHeading}
            </h2>

            <p
              className={`text-[14px] sm:text-[15px] mt-0.5 leading-relaxed ${
                isExpanded ? 'text-pink-100' : 'text-slate-600'
              }`}
            >
              {translatedSubtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={`/valentine-week/${cat.id}-shayari`}
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory?.(cat.id);
            }}
            className={`min-h-[44px] px-4 py-2 rounded-2xl font-extrabold text-[14px] inline-flex items-center gap-1.5 border transition-colors cursor-pointer ${
              isExpanded
                ? 'bg-white/15 hover:bg-white/25 text-white border-white/35'
                : 'bg-white hover:bg-[#fff0f3] text-[#991B1B] border-[#fda4af]'
            }`}
          >
            <span>{labelDedicatedPage}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            className={`min-h-[44px] px-4 py-2 rounded-2xl font-extrabold text-[14px] sm:text-[15px] inline-flex items-center gap-1.5 cursor-pointer ${
              isExpanded ? 'bg-white text-[#991B1B]' : 'bg-[#c81e45] text-white'
            }`}
          >
            <span>{isExpanded ? labelClose : labelPreviewHere}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 sm:p-7 space-y-6 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ffe4e8]">
            <div className="text-[14px] sm:text-[15px] font-bold text-slate-700">
              {labelShowing}{' '}
              <span className="text-[#c81e45] font-extrabold tabular-nums">
                {activePage === 1 ? '1 – 20' : '21 – 40'}
              </span>{' '}
              {labelOf} <span className="font-extrabold">40</span> {labelShayariIn}{' '}
              <span className="text-[#991B1B] font-extrabold">{displayNativeLabel}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#fff5f7] p-1.5 rounded-2xl border border-[#fecdd3]">
              <button
                type="button"
                onClick={() => onSetPage(1)}
                className={`min-h-[40px] px-4 py-1.5 rounded-xl text-[14px] font-extrabold transition-all cursor-pointer tabular-nums ${
                  activePage === 1
                    ? 'bg-[#c81e45] text-white shadow-2xs'
                    : 'text-slate-700 hover:text-[#c81e45]'
                }`}
              >
                {labelPage1}
              </button>

              <button
                type="button"
                onClick={() => onSetPage(2)}
                className={`min-h-[40px] px-4 py-1.5 rounded-xl text-[14px] font-extrabold transition-all cursor-pointer tabular-nums ${
                  activePage === 2
                    ? 'bg-[#c81e45] text-white shadow-2xs'
                    : 'text-slate-700 hover:text-[#c81e45]'
                }`}
              >
                {labelPage2}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageSlice.map((shayariItem) => (
              <ValentineShayariCardItem
                key={shayariItem.id}
                item={shayariItem}
                category={cat}
                langCode={activeLang}
                useDynamicGlobalLang={useDynamicGlobalLang}
                isFavorite={isFavorite(shayariItem.id)}
                onToggleFavorite={onToggleFavorite}
                onOpenCardModal={onOpenCardModal}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

interface ValentineWeekPageProps {
  activeCategory?: ValentineCategoryId;
  initialLang?: ValentineLangCode;
  initialPage?: number;
  onSelectCategory?: (category?: ValentineCategoryId) => void;
  onSelectLanguageUrl?: (lang: ValentineLangCode, catId?: ValentineCategoryId) => void;
  onPageChange?: (page: 1 | 2) => void;
  onNavigateHome?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
}

export const ValentineWeekPage: React.FC<ValentineWeekPageProps> = ({
  activeCategory,
  initialLang,
  initialPage = 1,
  onSelectCategory,
  onSelectLanguageUrl,
  onPageChange,
  onNavigateHome,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal
}) => {
  const [defaultLang, setDefaultLang] = useState<ValentineLangCode>(
    () => initialLang || detectInitialValentineLanguage()
  );
  const [categoryLangOverrides, setCategoryLangOverrides] = useState<
    Partial<Record<ValentineCategoryId, ValentineLangCode>>
  >({});
  const [categoryPages, setCategoryPages] = useState<Record<ValentineCategoryId, 1 | 2>>(() => {
    const init = {} as Record<ValentineCategoryId, 1 | 2>;
    for (const c of VALENTINE_CATEGORIES) {
      init[c.id] = activeCategory === c.id && initialPage === 2 ? 2 : 1;
    }
    return init;
  });
  const [expandedCategories, setExpandedCategories] = useState<Record<ValentineCategoryId, boolean>>(
    () => {
      const init = {} as Record<ValentineCategoryId, boolean>;
      for (const c of VALENTINE_CATEGORIES) {
        init[c.id] = c.id === 'rose-day';
      }
      return init;
    }
  );
  const [loadingLangs, setLoadingLangs] = useState<Record<string, boolean>>({});
  const [, forcePackRender] = useState(0);
  const [topLangDrawerOpen, setTopLangDrawerOpen] = useState(false);

  const groupedShayaris = useMemo(() => {
    const map = new Map<ValentineCategoryId, ValentineBaseShayari[]>();
    for (const c of VALENTINE_CATEGORIES) {
      map.set(c.id, []);
    }
    for (const s of VALENTINE_BASE_SHAYARIS) {
      map.get(s.categoryId)?.push(s);
    }
    return map;
  }, []);

  const syncCleanLangUrl = useCallback(
    (lang: ValentineLangCode, catId?: ValentineCategoryId) => {
      if (onSelectLanguageUrl) {
        onSelectLanguageUrl(lang, catId);
        return;
      }
      if (typeof window === 'undefined') return;
      try {
        const cleanPath = buildValentineCleanPath(catId, lang, true);
        window.history.pushState({ route: 'valentine-week' }, '', cleanPath);
      } catch {
        // ignore URL error
      }
    },
    [onSelectLanguageUrl]
  );

  const triggerLoadLang = useCallback(async (lang: ValentineLangCode) => {
    if (isValentineLanguageReady(lang)) return;
    setLoadingLangs((prev) => ({ ...prev, [lang]: true }));
    try {
      await ensureValentineLanguageLoaded(lang);
      forcePackRender((n) => n + 1);
    } finally {
      setLoadingLangs((prev) => ({ ...prev, [lang]: false }));
    }
  }, []);

  const { globalLanguage, activeLanguageOption, ui } = useGlobalLanguage();
  const isHinglishMode = globalLanguage === 'default' || globalLanguage === 'hinglish';
  const globalApiCode = (activeLanguageOption?.apiCode || 'hi-Latn') as ValentineLangCode;
  const isGlobalPrepacked = PREPACKED_VALENTINE_LANGS.has(globalApiCode);
  const useDynamicGlobalLang = !isGlobalPrepacked && globalLanguage !== 'default';
  const effectiveRtl = Boolean(activeLanguageOption?.rtl);

  useEffect(() => {
    if (globalLanguage === 'default') {
      setDefaultLang('hi-Latn');
      setCategoryLangOverrides({});
      return;
    }
    if (isGlobalPrepacked) {
      setDefaultLang(globalApiCode);
      setCategoryLangOverrides({});
      return;
    }
    if (VALENTINE_LANGUAGE_MAP.has(globalApiCode)) {
      setDefaultLang(globalApiCode);
      setCategoryLangOverrides({});
      return;
    }
    setCategoryLangOverrides({});
  }, [globalLanguage, globalApiCode, isGlobalPrepacked]);

  useEffect(() => {
    if (initialLang && PREPACKED_VALENTINE_LANGS.has(initialLang) && initialLang === globalApiCode) {
      setDefaultLang(initialLang);
    }
  }, [initialLang, globalApiCode]);

  useEffect(() => {
    if (activeCategory) {
      const targetPage: 1 | 2 = initialPage === 2 ? 2 : 1;
      setCategoryPages((prev) => ({ ...prev, [activeCategory]: targetPage }));
    }
  }, [activeCategory, initialPage]);

  useEffect(() => {
    void triggerLoadLang(defaultLang);
  }, [defaultLang, triggerLoadLang]);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(rafId);
  }, [activeCategory, defaultLang, globalLanguage]);

  const handleGlobalLanguageSelect = (lang: ValentineLangCode) => {
    setDefaultLang(lang);
    setCategoryLangOverrides({});
    syncCleanLangUrl(lang, activeCategory);
    void triggerLoadLang(lang);
    setTopLangDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryLanguageSelect = (catId: ValentineCategoryId, lang: ValentineLangCode) => {
    setCategoryLangOverrides((prev) => ({ ...prev, [catId]: lang }));
    setCategoryPages((prev) => ({ ...prev, [catId]: 1 }));
    if (activeCategory === catId) {
      setDefaultLang(lang);
      syncCleanLangUrl(lang, catId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      syncCleanLangUrl(lang, activeCategory);
    }
    void triggerLoadLang(lang);
  };

  const toggleCategoryExpanded = (catId: ValentineCategoryId) => {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const areAllExpanded = useMemo(
    () => VALENTINE_CATEGORIES.every((c) => expandedCategories[c.id]),
    [expandedCategories]
  );

  const handleToggleExpandAll = () => {
    const nextVal = !areAllExpanded;
    const nextMap = {} as Record<ValentineCategoryId, boolean>;
    for (const c of VALENTINE_CATEGORIES) {
      nextMap[c.id] = nextVal;
    }
    setExpandedCategories(nextMap);
  };

  const activeCatMeta = useMemo(
    () =>
      activeCategory ? VALENTINE_CATEGORIES.find((c) => c.id === activeCategory) : undefined,
    [activeCategory]
  );

  // ============================================================================
  // Translated Headlines, Descriptions & UI Labels (All 77 Languages)
  // ============================================================================
  const displayGlobalLangLabel =
    activeLanguageOption?.nativeLabel ||
    (VALENTINE_LANGUAGE_MAP.get(defaultLang) || VALENTINE_LANGUAGES[0]).nativeLabel;

  // Mode 1 (Dedicated Day Page) strings
  const activeHindiShort = activeCatMeta
    ? activeCatMeta.hindiName.replace(/\s*शायरी$/i, '').trim()
    : 'वैलेंटाइन डे';
  const activeShortName = activeCatMeta ? activeCatMeta.shortName : 'Valentine Day';
  const activeDateLabel = activeCatMeta ? activeCatMeta.dateLabel : '14 Feb';
  const activeOrder = activeCatMeta ? activeCatMeta.order : 1;
  const activeHindiName = activeCatMeta ? activeCatMeta.hindiName : 'वैलेंटाइन डे शायरी';
  const activeHindiSubtitle = activeCatMeta
    ? activeCatMeta.subtitle
    : VALENTINE_ENGLISH_SUBTITLES['valentine-day'];
  const activeEngSubtitle = activeCatMeta
    ? VALENTINE_ENGLISH_SUBTITLES[activeCatMeta.id]
    : VALENTINE_ENGLISH_SUBTITLES['valentine-day'];

  const dedBreadcrumbAll15 = useValentineUiText(
    '🌹 वैलेंटाइन वीक स्पेशल (सभी 15 दिन)',
    '🌹 Valentine Week Special (All 15 Days)',
    '🌹 Valentine Week Special (All 15 Days)'
  );
  const dedDateUniqueCount = useValentineUiText(
    `${dateToHindi(activeDateLabel)} • 40 अनमोल शायरी`,
    `${activeDateLabel} • 40 Unique Shayari`,
    `${activeDateLabel} • 40 Unique Shayari`
  );
  const dedHeroBadge = useValentineUiText(
    `दिन ${activeOrder} (15 में से) • ${dateToHindi(activeDateLabel)} • 40 मौलिक शायरी`,
    `Day ${activeOrder} of 15 • ${activeDateLabel} • 40 Original Shayari`,
    `Day ${activeOrder} of 15 • ${activeDateLabel} • 40 Original Shayari`
  );
  const dedHeroH1 = useValentineUiText(
    activeHindiName,
    `${activeShortName} Shayari`,
    `${activeShortName} Shayari`
  );
  const dedHeroDesc = useValentineUiText(
    `${activeHindiName} (${dateToHindi(activeDateLabel)}) — ${activeHindiSubtitle}`,
    `${activeShortName} Shayari (${activeDateLabel}) — ${activeEngSubtitle}`,
    `${convertHindiTitleToHinglish(activeHindiName)} (${activeDateLabel}) — ${convertHindiLineToHinglish(activeHindiSubtitle)}`
  );
  const dedTranslatedShort = useValentineUiText(
    activeHindiShort,
    activeShortName,
    activeShortName
  );
  const dedSectionH2 = useValentineUiText(
    `40+ बेस्ट ${activeHindiName} 2026`,
    `40+ Best ${activeShortName} Shayari 2026`,
    `40+ Best ${activeShortName} Shayari 2026`
  );
  const dedPage1Label = useValentineUiText('पेज 1 (1–20)', 'Page 1 (1–20)', 'Page 1 (1–20)');
  const dedPage2Label = useValentineUiText('पेज 2 (21–40)', 'Page 2 (21–40)', 'Page 2 (21–40)');
  const dedShowingPrefix = useValentineUiText('दिखा रहे हैं', 'Showing', 'Showing');
  const dedShowingSuffix = useValentineUiText('में से 40 अनमोल शायरी', 'of 40 Unique Shayari', 'of 40 Unique Shayari');
  const dedPrevPageBtn = useValentineUiText('← पेज 1 (1–20)', '← Page 1 (1–20)', '← Page 1 (1–20)');
  const dedNextPageBtn = useValentineUiText('अगली 20 (21–40) →', 'Next 20 (21–40) →', 'Next 20 (21–40) →');
  const dedExploreTitle = useValentineUiText(
    '❤️ वैलेंटाइन वीक स्पेशल - सभी 15 दिन (7 फरवरी से 21 फरवरी)',
    '❤️ Valentine Week Special - All 15 Days (7 Feb to 21 Feb)',
    '❤️ Valentine Week Special - All 15 Days (7 Feb to 21 Feb)'
  );
  const dedAllHubLink = useValentineUiText(
    'सभी 600 शायरी हब',
    'All 600 Shayari Hub',
    'All 600 Shayari Hub'
  );
  const dedFaqHeading = useValentineUiText(
    `❓ ${activeHindiName} — अक्सर पूछे जाने वाले प्रश्न (FAQ)`,
    `❓ ${activeShortName} Shayari — Frequently Asked Questions (FAQ)`,
    `❓ ${activeShortName} Shayari — Frequently Asked Questions (FAQ)`
  );
  const dedFaqQ1 = useValentineUiText(
    `1. ${activeHindiShort} कब मनाया जाता है?`,
    `1. When is ${activeShortName} celebrated?`,
    `1. ${activeShortName} kab manaya jata hai?`
  );
  const dedFaqA1 = useValentineUiText(
    `${activeHindiShort} हर साल ${dateToHindi(activeDateLabel)} को मनाया जाता है। यहाँ आपको ${activeHindiShort} की 40 मौलिक शायरियाँ कई भाषाओं और स्टाइलिश फ़ॉन्ट्स में मिलती हैं।`,
    `${activeShortName} is celebrated every year on ${activeDateLabel}. Here you get 40 original ${activeShortName} shayaris in multiple languages and 20 stylish fonts.`,
    `${activeShortName} har saal ${activeDateLabel} ko manaya jata hai. Yahan aapko ${activeShortName} ki 40 original shayariyan 35 languages aur 20 stylish fonts me milti hain.`
  );
  const dedFaqQ2 = useValentineUiText(
    `2. क्या मैं ${activeHindiName} को हिंदी, तमिल, अंग्रेज़ी और अन्य भाषाओं में पढ़ सकता हूँ?`,
    `2. Can I read ${activeShortName} Shayari in Hindi, Tamil, English and other languages?`,
    `2. Kya main ${activeShortName} Shayari ko Hindi, Tamil, English aur baaki languages me padh sakta hu?`
  );
  const dedFaqA2 = useValentineUiText(
    `जी हाँ, ZQ Feelings पर सभी 40 ${activeHindiShort} शायरियाँ 15 भारतीय और 20 वैश्विक भाषाओं (कुल 35 प्री-ट्रांसलेटेड भाषाओं) में क्लीन URL के साथ उपलब्ध हैं।`,
    `Yes, on ZQ Feelings all 40 ${activeShortName} shayaris are available across 15 Indian and 20 global pre-translated languages with clean URLs.`,
    `Ji haan, ZQ Feelings par sabhi 40 ${activeShortName} shayariyan 15 Indian aur 20 Global languages (total 35 pre-translated languages) me clean URL ke saath available hain.`
  );

  // Mode 2 (Hub Page) strings
  const hubHeroBadge = useValentineUiText(
    '7 फरवरी – 21 फरवरी • 15 खास दिन • 600 दिल से लिखी शायरियाँ',
    '7 Feb – 21 Feb • 15 Special Days • 600 Heartfelt Shayari',
    '7 Feb – 21 Feb • 15 Special Days • 600 Heartfelt Shayari'
  );
  const hubHeroH1 = useValentineUiText(
    'वैलेंटाइन वीक स्पेशल - 7 फरवरी से 21 फरवरी - 15 दिन - 600 शायरी',
    'Valentine Week Special - 7 Feb to 21 Feb - 15 Days - 600 Shayari',
    'Valentine Week Special - 7 Feb to 21 Feb - 15 Days - 600 Shayari'
  );
  const hubHeroDesc = useValentineUiText(
    'Rose Day की पहली सुर्ख पंखुड़ी से लेकर Valentine Day के सच्चे हमसफ़र और 21 Feb के आत्मसम्मान तक — दिल से लिखी 600 अनमोल शायरियाँ, 35 भाषाएँ, 20 स्टाइलिश फ़ॉन्ट्स, एक क्लिक कॉपी और शेयर के साथ।',
    'From the first crimson petal of Rose Day to the lifelong companion of Valentine Day and self-respect on 21 Feb — 600 original shayaris across 35 languages, 20 stylish fonts, one-click Copy and Share.',
    'Rose Day ki pehli surkh pankhudi se lekar Valentine Day ke sacche humsafar aur 21 Feb ke aatmasammaan tak — dil se likhi 600 anmol shayariyan, 35 languages, 20 stylish fonts, 1-click Copy aur Share ke saath.'
  );
  const hubBtnCollapseAll = useValentineUiText(
    'सभी 15 दिन बंद करें',
    'Collapse All 15 Days',
    'Collapse All 15 Days'
  );
  const hubBtnExpandAll = useValentineUiText(
    'सभी 15 दिन खोलें',
    'Expand All 15 Days',
    'Expand All 15 Days'
  );
  const hubCardsTitle = useValentineUiText(
    'वैलेंटाइन वीक के 15 खास पेज (7 फरवरी – 21 फरवरी)',
    '15 Dedicated Valentine Week Pages (7 Feb – 21 Feb)',
    '15 Dedicated Valentine Week Pages (7 Feb – 21 Feb)'
  );
  const hubCardsCount = useValentineUiText(
    '15 दिन × 40 = 600 शायरी',
    '15 Days × 40 = 600 Shayari',
    '15 Days × 40 = 600 Shayari'
  );
  const hubFaqTitle = useValentineUiText(
    '❓ वैलेंटाइन वीक शायरी (7 फरवरी – 21 फरवरी) — अक्सर पूछे जाने वाले प्रश्न',
    '❓ Valentine Week Shayari (7 Feb – 21 Feb) — FAQs',
    '❓ Valentine Week Shayari (7 Feb – 21 Feb) — FAQs'
  );
  const hubFaqQ1 = useValentineUiText(
    '1. Valentine Week में 7 Feb से 21 Feb तक कौन-कौन से 15 दिन आते हैं?',
    '1. Which 15 days are included in Valentine Week from 7 Feb to 21 Feb?',
    '1. Valentine Week me 7 Feb se 21 Feb tak kaun-kaun se 15 days aate hain?'
  );
  const hubFaqA1 = useValentineUiText(
    '7 Feb Rose Day, 8 Feb Propose Day, 9 Feb Chocolate Day, 10 Feb Teddy Day, 11 Feb Promise Day, 12 Feb Hug Day, 13 Feb Kiss Day, 14 Feb Valentine Day और 15 से 21 Feb तक Slap, Kick, Perfume, Flirting, Confession, Missing व Breakup Day।',
    '7 Feb Rose Day, 8 Feb Propose Day, 9 Feb Chocolate Day, 10 Feb Teddy Day, 11 Feb Promise Day, 12 Feb Hug Day, 13 Feb Kiss Day, 14 Feb Valentine Day, and from 15 to 21 Feb Slap, Kick, Perfume, Flirting, Confession, Missing, and Breakup Day.',
    '7 Feb Rose Day, 8 Feb Propose Day, 9 Feb Chocolate Day, 10 Feb Teddy Day, 11 Feb Promise Day, 12 Feb Hug Day, 13 Feb Kiss Day, 14 Feb Valentine Day aur 15 se 21 Feb tak Slap, Kick, Perfume, Flirting, Confession, Missing aur Breakup Day.'
  );
  const hubFaqQ2 = useValentineUiText(
    '2. ZQ Feelings पर Valentine Week की कुल कितनी मौलिक शायरियाँ हैं?',
    '2. How many total original Valentine Week shayaris are on ZQ Feelings?',
    '2. ZQ Feelings par Valentine Week ki total kitni original shayariyan hain?'
  );
  const hubFaqA2 = useValentineUiText(
    'यहाँ 15 दिनों के लिए 40-40 यानी कुल 600 सौ-प्रतिशत ओरिजिनल शायरियाँ 35 भाषाओं, 20 स्टाइलिश फ़ॉन्ट्स, फोटो कार्ड डाउनलोड और WhatsApp/Facebook शेयर के साथ उपलब्ध हैं।',
    'Here you get 40 original shayaris for each of the 15 days — 600 shayaris in total across 35 languages, 20 stylish fonts, Photo Card download, and WhatsApp/Facebook share.',
    'Yahan 15 dinon ke liye 40-40 yaani total 600 bilkul original shayariyan 35 languages, 20 stylish fonts, Photo Card download aur WhatsApp/Facebook share ke saath available hain.'
  );

  // ============================================================================
  // MODE 1: DEDICATED SINGLE CATEGORY PAGE (/valentine-week/<day>-shayari)
  // ============================================================================
  if (activeCatMeta) {
    const pageLang = categoryLangOverrides[activeCatMeta.id] || defaultLang;
    const pageLangMeta = VALENTINE_LANGUAGE_MAP.get(pageLang) || VALENTINE_LANGUAGES[0];
    const pageDisplayLangLabel = useDynamicGlobalLang
      ? displayGlobalLangLabel
      : pageLangMeta.nativeLabel;
    const all40Shayaris = groupedShayaris.get(activeCatMeta.id) || [];

    return (
      <div
        dir={effectiveRtl ? 'rtl' : 'ltr'}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 space-y-8 bg-white"
      >
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {onNavigateHome && (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="min-h-[42px] px-4 py-2 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#991B1B] hover:text-white border border-[#fecdd3] text-[14px] font-extrabold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{ui.btnHome}</span>
              </a>
            )}

            <a
              href="/valentine-week"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory?.(undefined);
              }}
              className="min-h-[42px] px-4 py-2 rounded-2xl bg-white hover:bg-[#fff0f3] text-[#be123c] border border-[#fecdd3] text-[14px] font-extrabold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{dedBreadcrumbAll15}</span>
            </a>
          </div>

          <span className="px-3.5 py-1.5 rounded-2xl bg-[#fff0f3] border border-[#fecdd3] text-[#991B1B] text-[13px] sm:text-[14px] font-extrabold tabular-nums">
            {dedDateUniqueCount}
          </span>
        </div>

        {/* Dedicated Category Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#881337] via-[#be123c] to-[#e11d48] text-white p-6 sm:p-9 shadow-md border-2 border-[#fda4af]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pink-300/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-rose-400/20 blur-3xl"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-[13px] sm:text-[14px] font-extrabold tracking-wide">
              <span className="text-lg leading-none">{activeCatMeta.icon}</span>
              <span>{dedHeroBadge}</span>
            </div>

            <h1 className="font-rozha text-[30px] sm:text-[40px] md:text-[46px] font-bold text-white leading-tight tracking-tight">
              {dedHeroH1}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-pink-50 font-medium leading-relaxed max-w-3xl mx-auto">
              {dedHeroDesc}
            </p>
          </div>
        </section>

        {/* 20 + 20 Paginated Original Shayari Cards for Fast Mobile Loading */}
        {(() => {
          const activePage = categoryPages[activeCatMeta.id] || 1;
          const paginated20 =
            activePage === 1 ? all40Shayaris.slice(0, 20) : all40Shayaris.slice(20, 40);
          const page1Href = buildValentineCleanPath(activeCatMeta.id, pageLang, false);
          const page2Href = `${page1Href}/page/2`;
          const selectDedicatedPage = (nextPage: 1 | 2) => {
            if (nextPage === activePage) return;
            setCategoryPages((prev) => ({ ...prev, [activeCatMeta.id]: nextPage }));
            onPageChange?.(nextPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };

          return (
            <section className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-2 border-[#ffe4e8]">
                <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#991B1B]">
                  {activeCatMeta.icon} {dedSectionH2} ({pageDisplayLangLabel})
                </h2>

                <div className="inline-flex items-center gap-2 bg-[#fff5f7] p-1.5 rounded-2xl border border-[#fecdd3]">
                  <a
                    href={page1Href}
                    onClick={(e) => {
                      e.preventDefault();
                      selectDedicatedPage(1);
                    }}
                    aria-current={activePage === 1 ? 'page' : undefined}
                    className={`min-h-[40px] px-4 py-1.5 rounded-xl text-[14px] font-extrabold transition-all cursor-pointer tabular-nums inline-flex items-center ${
                      activePage === 1
                        ? 'bg-[#c81e45] text-white shadow-2xs'
                        : 'text-slate-700 hover:text-[#c81e45]'
                    }`}
                  >
                    {dedPage1Label}
                  </a>

                  <a
                    href={page2Href}
                    onClick={(e) => {
                      e.preventDefault();
                      selectDedicatedPage(2);
                    }}
                    aria-current={activePage === 2 ? 'page' : undefined}
                    className={`min-h-[40px] px-4 py-1.5 rounded-xl text-[14px] font-extrabold transition-all cursor-pointer tabular-nums inline-flex items-center ${
                      activePage === 2
                        ? 'bg-[#c81e45] text-white border-[#c81e45] shadow-2xs'
                        : 'text-slate-700 hover:text-[#c81e45]'
                    }`}
                  >
                    {dedPage2Label}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginated20.map((shayariItem) => (
                  <ValentineShayariCardItem
                    key={shayariItem.id}
                    item={shayariItem}
                    category={activeCatMeta}
                    langCode={pageLang}
                    useDynamicGlobalLang={useDynamicGlobalLang}
                    isFavorite={isFavorite(shayariItem.id)}
                    onToggleFavorite={onToggleFavorite}
                    onOpenCardModal={onOpenCardModal}
                  />
                ))}
              </div>

              {/* Adsterra Ad: Page 1 ONLY, after last card and right before Pagination */}
              {activePage === 1 && <AdsterraCategoryBanner />}

              {/* Bottom Pagination Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-[14px] font-extrabold text-[#be123c] tabular-nums">
                  {dedShowingPrefix} {activePage === 1 ? '1 – 20' : '21 – 40'} {dedShowingSuffix}
                </span>

                <div className="inline-flex flex-wrap items-center gap-2">
                  {activePage === 2 ? (
                    <a
                      href={page1Href}
                      onClick={(e) => {
                        e.preventDefault();
                        selectDedicatedPage(1);
                      }}
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#fecdd3] bg-white hover:bg-[#fff0f3] text-[14px] font-extrabold text-[#991B1B] cursor-pointer inline-flex items-center"
                    >
                      {dedPrevPageBtn}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#fecdd3] bg-white opacity-40 text-[14px] font-extrabold text-[#991B1B] cursor-not-allowed"
                    >
                      {dedPrevPageBtn}
                    </button>
                  )}

                  {activePage === 1 ? (
                    <a
                      href={page2Href}
                      onClick={(e) => {
                        e.preventDefault();
                        selectDedicatedPage(2);
                      }}
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#c81e45] bg-[#c81e45] hover:bg-[#9f1239] text-[14px] font-extrabold text-white cursor-pointer inline-flex items-center"
                    >
                      {dedNextPageBtn}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#c81e45] bg-[#c81e45] opacity-40 text-[14px] font-extrabold text-white cursor-not-allowed"
                    >
                      {dedNextPageBtn}
                    </button>
                  )}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Explore All 15 Valentine Week Special Dedicated Pages (4 Cards Per Row) */}
        <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ffe4e8] pb-4">
            <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70]">
              {dedExploreTitle}
            </h2>
            <a
              href="/valentine-week"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory?.(undefined);
              }}
              className="text-[14px] font-extrabold text-[#be123c] hover:underline inline-flex items-center gap-1"
            >
              <span>{dedAllHubLink}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALENTINE_CATEGORIES.map((vCat) => (
              <DedicatedBottomDayCard
                key={vCat.id}
                vCat={vCat}
                isCurrent={vCat.id === activeCatMeta.id}
                onSelectCategory={onSelectCategory}
              />
            ))}
          </div>
        </section>

        {/* Dedicated Category FAQ Section (Matches FAQPage Schema) */}
        <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#991B1B]">
            {dedFaqHeading}
          </h2>
          <div className="space-y-3 text-[15px] sm:text-[16px] text-slate-800">
            <div className="rounded-2xl bg-white border border-[#ffe4e8] p-4 space-y-1">
              <h3 className="font-extrabold text-[#991B1B]">{dedFaqQ1}</h3>
              <p className="text-slate-700 leading-relaxed">{dedFaqA1}</p>
            </div>
            <div className="rounded-2xl bg-white border border-[#ffe4e8] p-4 space-y-1">
              <h3 className="font-extrabold text-[#991B1B]">{dedFaqQ2}</h3>
              <p className="text-slate-700 leading-relaxed">{dedFaqA2}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ============================================================================
  // MODE 2: VALENTINE WEEK HUB PAGE (/valentine-week)
  // 15 Category Cards Grid + Full 600 Shayari Collection
  // ============================================================================
  const activeDefaultLangMeta =
    VALENTINE_LANGUAGE_MAP.get(defaultLang) || VALENTINE_LANGUAGES[0];

  return (
    <div
      dir={effectiveRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 space-y-8 bg-white"
    >
      {/* HERO BANNER — RED-PINK VALENTINE THEME */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#881337] via-[#be123c] to-[#e11d48] text-white p-6 sm:p-9 shadow-md border-2 border-[#fda4af]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-pink-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-rose-400/20 blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-[13px] sm:text-[14px] font-extrabold tracking-wide">
            <Heart className="w-4 h-4 fill-pink-200 text-pink-200" />
            <span>{hubHeroBadge}</span>
          </div>

          <h1 className="font-rozha text-[26px] sm:text-[36px] md:text-[42px] font-bold text-white leading-tight tracking-tight">
            {hubHeroH1}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-pink-50 font-medium leading-relaxed max-w-3xl mx-auto">
            {hubHeroDesc}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleToggleExpandAll}
              className="min-h-[46px] px-5 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/35 font-extrabold text-[15px] inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>{areAllExpanded ? hubBtnCollapseAll : hubBtnExpandAll}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 15 DEDICATED CATEGORY CARDS GRID (4 PER ROW — RELIGIOUS CARD DESIGN) */}
      <section
        aria-label="Valentine Week 15 Dedicated Category Pages"
        className="rounded-3xl bg-[#fff8f9] border border-[#ffe4e8] p-5 sm:p-8 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ffe4e8] pb-4">
          <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70]">
            {hubCardsTitle}
          </h2>
          <span className="text-[14px] font-extrabold text-[#be123c] tabular-nums">
            {hubCardsCount}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALENTINE_CATEGORIES.map((cat) => (
            <ValentineHubCategoryCard
              key={cat.id}
              cat={cat}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </section>

      {/* ALL 15 CATEGORIES ACCORDION PREVIEW ON HUB */}
      <div className="space-y-6">
        {VALENTINE_CATEGORIES.map((cat) => {
          const isExpanded = !!expandedCategories[cat.id];
          const activeLang = categoryLangOverrides[cat.id] || defaultLang;
          const activePage = categoryPages[cat.id] || 1;
          const all40 = groupedShayaris.get(cat.id) || [];
          const pageSlice = activePage === 1 ? all40.slice(0, 20) : all40.slice(20, 40);
          const activeLangMeta =
            VALENTINE_LANGUAGE_MAP.get(activeLang) || activeDefaultLangMeta;
          const accordionDisplayLangLabel = useDynamicGlobalLang
            ? displayGlobalLangLabel
            : activeLangMeta.nativeLabel;

          return (
            <ValentineAccordionSection
              key={cat.id}
              cat={cat}
              isExpanded={isExpanded}
              activeLang={activeLang}
              useDynamicGlobalLang={useDynamicGlobalLang}
              displayNativeLabel={accordionDisplayLangLabel}
              activePage={activePage}
              pageSlice={pageSlice}
              onToggleExpand={() => toggleCategoryExpanded(cat.id)}
              onSelectCategory={onSelectCategory}
              onSetPage={(pg) => setCategoryPages((prev) => ({ ...prev, [cat.id]: pg }))}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
              onOpenCardModal={onOpenCardModal}
            />
          );
        })}
      </div>

      {/* Valentine Week Hub FAQ Section (Matches FAQPage Schema) */}
      <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#991B1B]">
          {hubFaqTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px] sm:text-[16px] text-slate-800">
          <div className="rounded-2xl bg-white border border-[#ffe4e8] p-4 space-y-1">
            <h3 className="font-extrabold text-[#991B1B]">{hubFaqQ1}</h3>
            <p className="text-slate-700 leading-relaxed">{hubFaqA1}</p>
          </div>
          <div className="rounded-2xl bg-white border border-[#ffe4e8] p-4 space-y-1">
            <h3 className="font-extrabold text-[#991B1B]">{hubFaqQ2}</h3>
            <p className="text-slate-700 leading-relaxed">{hubFaqA2}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
