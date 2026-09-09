import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RacecarTimeline from '../components/RacecarTimeline';
import RacecarVideoSection from '../components/RacecarVideoSection';

export default function RacecarApp() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors">
      <Navbar activePage="racecar" />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Page Hero */}
        <div className="pb-8 hairline-b mb-12">
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
            Physical Mechanical Engineering · Motorsport Dynamics
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-[var(--text-main)] uppercase mb-4">
            Race Car Build Journal
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed">
            The "Steel" side of Code &amp; Steel. A chronological engineering log documenting the ground-up build of a bespoke track weapon: Porsche 944 body, Corvette chassis, 350ci SBC, pushrod suspension kinematics, flat floor aerodynamics, and CAN-bus telemetry logging.
          </p>
        </div>

        {/* Dedicated Track Video Section */}
        <RacecarVideoSection />

        {/* Timeline & Specs */}
        <RacecarTimeline />
      </main>

      <Footer />
    </div>
  );
}
