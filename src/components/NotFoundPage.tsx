/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Home, Sparkles, ArrowRight, Frown } from 'lucide-react';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateFeelings: () => void;
  onNavigateFestival: () => void;
  onNavigateValentine: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateFeelings,
  onNavigateFestival,
  onNavigateValentine
}) => {
  const { globalLanguage, isRtl } = useGlobalLanguage();

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:py-20"
    >
      <div className="max-w-2xl w-full bg-[#fff8f9] border-2 border-[#ffd6df] rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full btn-glossy-pink flex items-center justify-center text-white shadow-md animate-bounce">
          <Frown className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest bg-[#fff0f3] text-[#d94f70] px-4 py-1.5 rounded-full border border-[#ffe4e8] font-black inline-block">
            Error 404 • Page Not Found
          </span>
          <h1 className="font-rozha text-3xl sm:text-4xl font-bold text-[#d94f70] pt-2">
            Shayari Nahi Mili 💔
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto">
            {globalLanguage === 'english'
              ? "Oops! The page or shayari you are looking for doesn't exist or has been moved. Explore our 5,900+ best shayari collection instead!"
              : "ओह! जिस पेज या शायरी की तलाश में आप आए हैं, वह या तो मौजूद नहीं है या उसका पता बदल गया है। आइए, 5,900+ बेहतरीन शायरियों का आनंद लें!"}
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onNavigateHome}
            className="min-h-[52px] px-8 py-3.5 rounded-2xl btn-glossy-pink text-white text-lg font-bold flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-transform"
          >
            <Home className="w-5 h-5" />
            <span>Home Par Jaayein (मुख्य पृष्ठ)</span>
          </button>
        </div>

        <div className="pt-6 border-t border-[#ffe4e8] grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={onNavigateFeelings}
            className="p-3.5 rounded-2xl bg-white border border-[#ffd6df] hover:border-[#d94f70] text-[#d94f70] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Feelings Shayari</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onNavigateFestival}
            className="p-3.5 rounded-2xl bg-white border border-[#ffd6df] hover:border-[#d94f70] text-[#d94f70] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Festival Shayari</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onNavigateValentine}
            className="p-3.5 rounded-2xl bg-white border border-[#ffd6df] hover:border-[#d94f70] text-[#d94f70] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Heart className="w-4 h-4 fill-[#d94f70]" />
            <span>Valentine Week</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
