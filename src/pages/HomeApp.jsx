import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResumeSection from '../components/ResumeSection';
import CodeRepositoriesSection from '../components/CodeRepositoriesSection';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import { ArrowUpRight, ArrowRight, BookOpen, Wrench, Terminal } from 'lucide-react';

export default function HomeApp() {
  const { publications } = profileData;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors">
      <Navbar activePage="home" />

      <main className="flex-1">
        {/* Hero with Monumental Headline & Immediate Dual Split */}
        <Hero />

        {/* Central Professional Ledger & Resume */}
        <ResumeSection />

        {/* Computational Architecture & Open-Source Repositories */}
        <CodeRepositoriesSection />

        {/* Strategic Foresight & Publications Ledger */}
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 hairline-t">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 hairline-b mb-10">
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
                Strategic Foresight &amp; Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] uppercase">
                {publications.title}
              </h2>
            </div>

            <a
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-main)] hover:underline underline-offset-4"
            >
              <span>View All 170+ Weekly Issues</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed mb-10">
            {publications.summary} Below are the foundational architectural frameworks referenced in corporate strategy and academic discussions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 hairline-all">
            {publications.featured.map((item, idx) => (
              <a
                key={item.id}
                href={`/blog/?post=${item.slug}`}
                className={`p-6 sm:p-8 bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] transition-colors group flex flex-col justify-between ${
                  idx % 2 === 0 ? 'md:hairline-r' : ''
                } ${idx < 2 ? 'hairline-b' : 'hairline-b md:hairline-b-0'}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-3">
                    <span>{item.date}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider text-[var(--text-main)]">
                      Read Issue →
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] uppercase tracking-tight mb-3 group-hover:underline underline-offset-4">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-[var(--text-muted)] flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  <span>Strategic Briefing</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Physical Engineering & Race Car Spotlight */}
        <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 hairline-t">
          <div className="p-8 md:p-12 hairline-all bg-[var(--bg-surface)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-3">
                Physical Engineering &amp; Dynamics
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] uppercase mb-4">
                The Porsche 944 / Corvette Track Build
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
                Bespoke track car engineering combining a gutted Porsche 944 body dropped onto a C4 Corvette rolling chassis. Engineered with a 350ci SBC, pushrod Koni suspension with 2:1 rocker geometry, zero-droop kinematics, flat marine-plywood floor aero, and complete CAN-bus telemetry logging.
              </p>
            </div>

            <a
              href="/racecar/"
              className="px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-[var(--bg-surface)] bg-[var(--text-main)] hover:opacity-90 font-bold transition-all shrink-0 flex items-center gap-2"
            >
              <span>Explore Build Journal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
