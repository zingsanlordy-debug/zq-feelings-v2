import React from 'react';

/**
 * Shared Adsterra 320x50 Banner for Category Pages (Page 1 only, before pagination).
 * Safe iframe with lazy loading — script runs once inside isolated iframe.
 */
export const AdsterraCategoryBanner: React.FC = React.memo(() => {
  return (
    <div className="w-full my-7 flex flex-col items-center justify-center px-2">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 select-none">
        Advertisement
      </span>
      <div className="w-[320px] max-w-full h-[50px] flex items-center justify-center overflow-hidden bg-white/70 border border-[#ffe4e8] rounded-xl shadow-2xs mx-auto">
        <iframe
          title="Advertisement"
          width="320"
          height="50"
          loading="lazy"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden', width: '320px', height: '50px' }}
          srcDoc={`<!DOCTYPE html><html><head><base target="_blank"><style>body{margin:0;padding:0;overflow:hidden;background:transparent;display:flex;justify-content:center;align-items:center;}</style></head><body><script type="text/javascript">atOptions = {'key' : '24552544e4e324115db30643c73587fe','format' : 'iframe','height' : 50,'width' : 320,'params' : {}};</script><script type="text/javascript" src="https://bicea.org/22/24552544e4e324115db30643c73587fe"></script></body></html>`}
        />
      </div>
    </div>
  );
});

AdsterraCategoryBanner.displayName = 'AdsterraCategoryBanner';

export const DiwaliTopBanner320x50 = AdsterraCategoryBanner;
