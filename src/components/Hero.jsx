import React from 'react';
import { ArrowUpRight, Cpu, Wrench } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const { code, steel } = profileData.dualSplit;

  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Editorial Meta Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 hairline-b">
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
          {profileData.location} · {profileData.title}
        </div>
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Head of AI · Valvoline Global Operations
        </div>
      </div>

      {/* Main Monumental Headline */}
      <div className="py-12 md:py-16">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-[var(--text-main)] uppercase leading-none">
          Code &amp; Steel
        </h1>
        <p className="text-lg sm:text-2xl text-[var(--text-muted)] font-normal tracking-tight mt-6 max-w-3xl leading-relaxed">
          {profileData.manifesto.lead}
        </p>
      </div>

      {/* Executive Manifesto Box */}
      <div className="p-6 sm:p-8 hairline-all bg-[var(--bg-surface)] mb-16">
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-3">
          {profileData.manifesto.title}
        </div>
        <p className="text-base sm:text-lg text-[var(--text-main)] leading-relaxed font-serif italic">
          "{profileData.manifesto.text}"
        </p>
      </div>

      {/* Dual-Focus Split: CODE vs STEEL */}
      <div>
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4">
          Dual Operational Focus
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 hairline-all">
          {/* CODE Column */}
          <div className="p-8 md:p-10 flex flex-col justify-between hairline-b md:hairline-b-0 md:hairline-r bg-[var(--bg-surface)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
                  [ 01 / {code.tag} ]
                </span>
                <Cpu className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] uppercase mb-2">
                {code.title}
              </h2>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-6">
                {code.subtitle}
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                {code.description}
              </p>

              <div className="space-y-3 mb-8 hairline-t pt-6">
                {code.anchors.map((item, i) => (
                  <div key={i} className="flex items-baseline justify-between text-xs gap-4">
                    <span className="font-mono text-[var(--text-main)] shrink-0">{item.label}</span>
                    <span className="text-[var(--text-muted)] text-right">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={code.href}
              className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[var(--text-main)] hairline-t pt-4 group-hover:underline underline-offset-4"
            >
              <span>{code.linkText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* STEEL Column */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-[var(--bg-surface)] group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
                  [ 02 / {steel.tag} ]
                </span>
                <Wrench className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] uppercase mb-2">
                {steel.title}
              </h2>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-6">
                {steel.subtitle}
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                {steel.description}
              </p>

              <div className="space-y-3 mb-8 hairline-t pt-6">
                {steel.anchors.map((item, i) => (
                  <div key={i} className="flex items-baseline justify-between text-xs gap-4">
                    <span className="font-mono text-[var(--text-main)] shrink-0">{item.label}</span>
                    <span className="text-[var(--text-muted)] text-right">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={steel.href}
              className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[var(--text-main)] hairline-t pt-4 group-hover:underline underline-offset-4"
            >
              <span>{steel.linkText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
