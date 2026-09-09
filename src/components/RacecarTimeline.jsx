import React, { useState } from 'react';
import { Calendar, Eye, Filter } from 'lucide-react';
import { racecarSpecs } from '../data/racecarData';
import initialJournal from '../../content/racecar/journal.json';
import ImageModal from './ImageModal';

export default function RacecarTimeline() {
  const [selectedSubsystem, setSelectedSubsystem] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  const [failedImages, setFailedImages] = useState(() => new Set());

  const subsystems = [
    'All',
    'Telemetry & Testing',
    'Aero',
    'Suspension & Geometry',
    'Chassis & Safety',
  ];

  const filteredEntries =
    selectedSubsystem === 'All'
      ? initialJournal
      : initialJournal.filter((e) => e.subsystem === selectedSubsystem);

  return (
    <div className="space-y-16">
      {/* Vehicle Engineering Specs Ledger */}
      <div className="hairline-all bg-[var(--bg-surface)] p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 hairline-b mb-8">
          <div className="max-w-xl">
            <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
              Engineering Specification
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] uppercase mb-3">
              {racecarSpecs.carName}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed">
              {racecarSpecs.concept}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-0 hairline-all text-center w-full lg:w-auto self-start">
            <div className="p-3 sm:px-4 sm:py-3 hairline-r">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">Weight</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[var(--text-main)]">{racecarSpecs.curbWeight}</div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">{racecarSpecs.weightDetail}</div>
            </div>
            <div className="p-3 sm:px-4 sm:py-3 hairline-r">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">Power &amp; Torque</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[var(--text-main)]">{racecarSpecs.power}</div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">{racecarSpecs.powerDetail}</div>
            </div>
            <div className="p-3 sm:px-4 sm:py-3">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">Ratio</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-[var(--text-main)]">{racecarSpecs.powerToWeight}</div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">{racecarSpecs.ratioDetail}</div>
            </div>
          </div>
        </div>

        {/* Subsystem Specifications Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 hairline-all">
          <div className="p-5 hairline-b lg:hairline-b-0 lg:hairline-r">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-main)] mb-2">
              [ Powertrain ]
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2 font-mono">
              {racecarSpecs.powertrain.engine}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {racecarSpecs.powertrain.transmission} · {racecarSpecs.powertrain.cooling}
            </p>
          </div>

          <div className="p-5 hairline-b lg:hairline-b-0 lg:hairline-r">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-main)] mb-2">
              [ Suspension &amp; Kinematics ]
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2 font-mono">
              {racecarSpecs.chassisSuspension.geometry}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {racecarSpecs.chassisSuspension.dampers}
            </p>
          </div>

          <div className="p-5 hairline-b md:hairline-b-0 lg:hairline-r">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-main)] mb-2">
              [ Aerodynamics ]
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2 font-mono">
              {racecarSpecs.aerodynamics.floor}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {racecarSpecs.aerodynamics.diffuser} · {racecarSpecs.aerodynamics.rearSpoiler}
            </p>
          </div>

          <div className="p-5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-main)] mb-2">
              [ Cockpit &amp; Systems ]
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2 font-mono">
              {racecarSpecs.cockpitElectronics.pdm}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {racecarSpecs.chassisSuspension.cage}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 hairline-b">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text-main)] uppercase">
            Chronological Build Log
          </h3>
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1">
            EXIF timestamped build records &amp; fabrication journal
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1">
          {subsystems.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubsystem(sub)}
              className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors ${
                selectedSubsystem === sub
                  ? 'bg-[var(--text-main)] text-[var(--bg-surface)] font-bold'
                  : 'text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Build Log Entries */}
      <div className="space-y-8">
        {filteredEntries.map((entry) => (
          <div key={entry.id} className="hairline-all bg-[var(--bg-surface)] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 hairline-b mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 hairline-all text-[var(--text-main)]">
                  {entry.subsystem}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {entry.date}
                </span>
              </div>
            </div>

            <h4 className="text-2xl font-bold tracking-tight text-[var(--text-main)] uppercase mb-3">
              {entry.title}
            </h4>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
              {entry.summary}
            </p>

            {/* Technical Specs Callout */}
            {entry.specs && Object.keys(entry.specs).length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 hairline-all mb-6">
                {Object.entries(entry.specs).map(([key, val]) => (
                  <div key={key} className="p-3 hairline-r last:border-r-0">
                    <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">{key}</div>
                    <div className="text-xs font-mono font-bold text-[var(--text-main)] mt-0.5">{val}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Photos */}
            {entry.images && entry.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {entry.images
                  .filter((imgSrc) => !failedImages.has(imgSrc))
                  .map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() =>
                        setModalImage({
                          src: imgSrc,
                          title: entry.title,
                          date: entry.date,
                          subsystem: entry.subsystem,
                          specs: entry.specs,
                          notes: entry.notes,
                        })
                      }
                      className="group relative hairline-all overflow-hidden bg-[var(--border-subtle)] cursor-pointer h-52 sm:h-64"
                    >
                      <img
                        src={imgSrc}
                        alt={`${entry.title} - photo ${imgIdx + 1}`}
                        loading="lazy"
                        onError={() =>
                          setFailedImages((prev) => new Set(prev).add(imgSrc))
                        }
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale contrast-125 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-3 py-1.5 bg-[var(--bg-surface)] text-[var(--text-main)] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 shadow">
                          <Eye className="w-3.5 h-3.5" /> View Photo
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Engineering Notes */}
            {entry.notes && (
              <div className="p-4 hairline-all bg-[var(--bg-surface)] text-xs text-[var(--text-muted)] leading-relaxed font-serif italic">
                <span className="font-sans font-bold uppercase tracking-wider not-italic text-[var(--text-main)] mr-2">
                  Engineering Notes:
                </span>
                {entry.notes}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}
