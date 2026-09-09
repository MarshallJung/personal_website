import React, { useState } from 'react';
import { Play, ExternalLink, X, Film, ArrowUpRight } from 'lucide-react';
import { racecarVideos } from '../data/racecarData';

export default function RacecarVideoSection() {
  const [activeEmbed, setActiveEmbed] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const shortVideo = racecarVideos.find((v) => v.id === 'gt4-chase') || racecarVideos[0];
  const horizVideo = racecarVideos.find((v) => v.id === 'heel-toe-demo') || racecarVideos[1];

  const handleImgError = (id, fallback) => {
    setImgErrors((prev) => ({ ...prev, [id]: fallback }));
  };

  return (
    <section className="mb-12 sm:mb-16">
      <div className="hairline-all bg-[var(--bg-surface)]">
        {/* Section Header */}
        <div className="p-6 sm:p-8 hairline-b flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2 flex items-center gap-2">
              <Film className="w-3.5 h-3.5" />
              <span>[ 00 / TRACK FOOTAGE &amp; TELEMETRY DEMOS ]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] uppercase">
              Track Video &amp; Onboard Footwork
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase">
            High Plains Raceway (HPR) · Open Sessions
          </div>
        </div>

        {/* Dual Orientation Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* =========================================================================
              CARD 1: Vertical YouTube Short (9:16 Aspect Ratio)
             ========================================================================= */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between hairline-b lg:hairline-b-0 lg:hairline-r">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                  {shortVideo.kicker}
                </span>
                <span className="text-[9px] font-mono tracking-widest px-2 py-0.5 border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase">
                  {shortVideo.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] uppercase mb-2">
                {shortVideo.title}
              </h3>
              <div className="text-xs font-mono text-[var(--text-muted)] mb-6">
                {shortVideo.location}
              </div>

              {/* Vertical 9:16 Video Preview Frame */}
              <div className="mb-6">
                <div className="relative w-full max-w-[260px] sm:max-w-[280px] mx-auto aspect-[9/16] bg-black overflow-hidden hairline-all group shadow-md">
                  {activeEmbed === shortVideo.id ? (
                    <div className="w-full h-full relative">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${shortVideo.youtubeId}?autoplay=1&rel=0`}
                        title={shortVideo.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setActiveEmbed(null)}
                        className="absolute top-2 right-2 z-30 p-1.5 bg-black/80 hover:bg-black text-white text-xs font-mono flex items-center gap-1 border border-white/20 transition-colors"
                        title="Close Player"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>CLOSE</span>
                      </button>
                    </div>
                  ) : (
                    <a
                      href={shortVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative group cursor-pointer"
                      title="Watch on YouTube (Opens in new tab)"
                    >
                      {/* Thumbnail Image */}
                      <img
                        src={imgErrors[shortVideo.id] || shortVideo.thumbnail}
                        alt={shortVideo.title}
                        onError={() => handleImgError(shortVideo.id, shortVideo.fallbackThumbnail)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Technical Viewfinder Reticles */}
                      <div className="absolute top-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┌</div>
                      <div className="absolute top-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┐</div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">└</div>
                      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┘</div>

                      {/* Format Badge */}
                      <div className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/20 text-[9px] font-mono tracking-wider text-white uppercase">
                        9:16 Short
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#ff0000] text-white flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      </div>

                      {/* Bottom Banner */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white z-10">
                        <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">
                          HPR Front Straight
                        </span>
                        <span className="text-[10px] font-mono tracking-wider font-bold flex items-center gap-1 text-white group-hover:underline">
                          <span>YouTube</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Editorial Description */}
              <div className="p-4 bg-[var(--bg-surface)] hairline-all mb-4">
                <p className="text-xs sm:text-sm text-[var(--text-main)] italic leading-relaxed">
                  "{shortVideo.description}"
                </p>
              </div>

              {/* Technical Footnote */}
              <div className="text-[11px] font-mono text-[var(--text-muted)] leading-relaxed mb-6">
                <span className="text-[var(--text-main)] font-semibold">Dynamics:</span> {shortVideo.techNote}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 pt-4 hairline-t">
              <a
                href={shortVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-mono uppercase tracking-widest text-[var(--bg-surface)] bg-[var(--text-main)] hover:opacity-90 font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {activeEmbed !== shortVideo.id ? (
                <button
                  type="button"
                  onClick={() => setActiveEmbed(shortVideo.id)}
                  className="py-2.5 px-3 text-xs font-mono uppercase tracking-wider text-[var(--text-main)] hairline-all hover:bg-[var(--text-main)] hover:text-[var(--bg-surface)] transition-colors"
                  title="Play video right inside page"
                >
                  Play In-Page
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveEmbed(null)}
                  className="py-2.5 px-3 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)] transition-colors"
                >
                  Close Player
                </button>
              )}
            </div>
          </div>

          {/* =========================================================================
              CARD 2: Standard Horizontal Video (16:9 Aspect Ratio)
             ========================================================================= */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                  {horizVideo.kicker}
                </span>
                <span className="text-[9px] font-mono tracking-widest px-2 py-0.5 border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase">
                  {horizVideo.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] uppercase mb-2">
                {horizVideo.title}
              </h3>
              <div className="text-xs font-mono text-[var(--text-muted)] mb-6">
                {horizVideo.location}
              </div>

              {/* Horizontal 16:9 Video Preview Frame */}
              <div className="mb-6">
                <div className="relative w-full aspect-video bg-black overflow-hidden hairline-all group shadow-md">
                  {activeEmbed === horizVideo.id ? (
                    <div className="w-full h-full relative">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${horizVideo.youtubeId}?autoplay=1&rel=0`}
                        title={horizVideo.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setActiveEmbed(null)}
                        className="absolute top-2 right-2 z-30 p-1.5 bg-black/80 hover:bg-black text-white text-xs font-mono flex items-center gap-1 border border-white/20 transition-colors"
                        title="Close Player"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>CLOSE</span>
                      </button>
                    </div>
                  ) : (
                    <a
                      href={horizVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative group cursor-pointer"
                      title="Watch on YouTube (Opens in new tab)"
                    >
                      {/* Thumbnail Image */}
                      <img
                        src={imgErrors[horizVideo.id] || horizVideo.thumbnail}
                        alt={horizVideo.title}
                        onError={() => handleImgError(horizVideo.id, horizVideo.fallbackThumbnail)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Technical Viewfinder Reticles */}
                      <div className="absolute top-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┌</div>
                      <div className="absolute top-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┐</div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">└</div>
                      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">┘</div>

                      {/* Format Badge */}
                      <div className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/20 text-[9px] font-mono tracking-wider text-white uppercase">
                        16:9 Onboard
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#ff0000] text-white flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 fill-current" />
                        </div>
                      </div>

                      {/* Bottom Banner */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white z-10">
                        <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">
                          Three-Pedal Heel-Toe Blip
                        </span>
                        <span className="text-[10px] font-mono tracking-wider font-bold flex items-center gap-1 text-white group-hover:underline">
                          <span>YouTube</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Editorial Description */}
              <div className="p-4 bg-[var(--bg-surface)] hairline-all mb-4">
                <p className="text-xs sm:text-sm text-[var(--text-main)] italic leading-relaxed">
                  "{horizVideo.description}"
                </p>
              </div>

              {/* Technical Footnote */}
              <div className="text-[11px] font-mono text-[var(--text-muted)] leading-relaxed mb-6">
                <span className="text-[var(--text-main)] font-semibold">Kinematics:</span> {horizVideo.techNote}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 pt-4 hairline-t">
              <a
                href={horizVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-mono uppercase tracking-widest text-[var(--bg-surface)] bg-[var(--text-main)] hover:opacity-90 font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {activeEmbed !== horizVideo.id ? (
                <button
                  type="button"
                  onClick={() => setActiveEmbed(horizVideo.id)}
                  className="py-2.5 px-3 text-xs font-mono uppercase tracking-wider text-[var(--text-main)] hairline-all hover:bg-[var(--text-main)] hover:text-[var(--bg-surface)] transition-colors"
                  title="Play video right inside page"
                >
                  Play In-Page
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveEmbed(null)}
                  className="py-2.5 px-3 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)] transition-colors"
                >
                  Close Player
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
