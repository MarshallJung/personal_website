import React, { useState } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ResumeSection() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');

  const categories = ['All', ...profileData.skills.map((s) => s.category)];

  const filteredSkills =
    selectedSkillCategory === 'All'
      ? profileData.skills
      : profileData.skills.filter((s) => s.category === selectedSkillCategory);

  return (
    <section id="resume" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 hairline-b mb-12">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
            Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] uppercase">
            Professional Ledger &amp; Experience
          </h2>
        </div>

        <a
          href="/resume.pdf"
          download="Marshall_Jung_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-main)] hairline-all hover:bg-[var(--border-subtle)] transition-colors w-fit"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF Résumé</span>
        </a>
      </div>

      {/* Professional Experience Ledger */}
      <div className="mb-20">
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-6">
          Executive Leadership &amp; Engineering Roles
        </div>

        <div className="hairline-all divide-y divide-[var(--border-subtle)]">
          {profileData.experience.map((exp, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-[var(--bg-surface)]">
              {/* Row Header */}
              <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 mb-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] uppercase">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-[var(--text-muted)]">
                    / {exp.company}
                  </span>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
                  {exp.period}
                </div>
              </div>

              {/* Lead Summary */}
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                {exp.lead}
              </p>

              {/* Detailed Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 hairline-t">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="text-xs leading-relaxed">
                    <span className="font-mono uppercase text-[var(--text-main)] block mb-1">
                      [{bullet.label}]
                    </span>
                    <span className="text-[var(--text-muted)]">{bullet.text}</span>
                  </div>
                ))}
              </div>

              {/* Technical Publications & Articles */}
              {exp.publications && exp.publications.length > 0 && (
                <div className="pt-4 mt-4 hairline-t">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                    Published Research &amp; Articles
                  </div>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
                    {exp.publications.map((pub, pIdx) => (
                      <a
                        key={pIdx}
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-main)] hover:underline underline-offset-4 group"
                      >
                        <span className="font-semibold underline sm:no-underline">{pub.title}</span>
                        <span className="text-[var(--text-muted)] text-[11px]">/ {pub.outlet}</span>
                        <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Intellectual Property & Patents */}
      {profileData.patents && profileData.patents.length > 0 && (
        <div className="mb-20">
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-6">
            Intellectual Property &amp; Patents
          </div>

          <div className="hairline-all divide-y divide-[var(--border-subtle)]">
            {profileData.patents.map((patent, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-[var(--bg-surface)]">
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 mb-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] uppercase">
                      {patent.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shrink-0">
                    {patent.number}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-4 uppercase tracking-wider">
                  <span className="text-[var(--text-main)] font-semibold">{patent.publication}</span>
                  {patent.filingDate && <span>· {patent.filingDate}</span>}
                  {patent.assignee && <span>· Assignee: {patent.assignee}</span>}
                </div>

                {patent.summary && (
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                    {patent.summary}
                  </p>
                )}

                <div className="pt-4 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    <span className="text-[var(--text-main)] uppercase font-semibold">Inventors: </span>
                    {patent.inventors}
                  </div>

                  {patent.url && (
                    <a
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-main)] hover:underline underline-offset-4 shrink-0"
                    >
                      <span>USPTO / Google Patents</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Competencies Matrix */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
            Technical &amp; Strategic Competencies
          </div>

          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSkillCategory(cat)}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors ${
                  selectedSkillCategory === cat
                    ? 'bg-[var(--text-main)] text-[var(--bg-surface)] font-bold'
                    : 'text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 hairline-all">
          {filteredSkills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className={`p-6 bg-[var(--bg-surface)] ${
                idx % 2 === 0 ? 'md:hairline-r' : ''
              } ${idx < filteredSkills.length - 2 ? 'hairline-b' : 'hairline-b md:hairline-b-0'}`}
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-main)] mb-4">
                {skillGroup.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs font-mono text-[var(--text-muted)] hairline-all bg-[var(--bg-surface)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Ledger */}
      <div>
        <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-6">
          Academic Foundations &amp; Certifications
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 hairline-all">
          {profileData.education.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[var(--bg-surface)] ${
                idx < 2 ? 'hairline-b md:hairline-b-0 md:hairline-r' : ''
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                Degree
              </div>
              <div className="font-bold text-sm text-[var(--text-main)] mb-1 uppercase tracking-tight">
                {edu.degree}
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">
                {edu.institution}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}

          {profileData.certifications.map((cert, idx) => (
            <div key={idx} className="p-6 bg-[var(--bg-surface)]">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                Certification
              </div>
              <div className="font-bold text-sm text-[var(--text-main)] mb-1 uppercase tracking-tight">
                {cert.name}
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)]">
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
