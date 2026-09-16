import React from 'react';
import { repositoriesData } from '../data/repositories';
import { ArrowUpRight, ArrowRight, Code2, Terminal, Cpu, Play, GitBranch } from 'lucide-react';

export default function CodeRepositoriesSection() {
  const { title, subtitle, summary, profileUrl, repositories } = repositoriesData;

  return (
    <section id="code-repositories" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 hairline-t-orange">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 hairline-b mb-10">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2 flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-[var(--text-main)] text-[var(--bg-surface)] font-bold text-[9px]">
              01 / CODE
            </span>
            <span>Computational Architecture &amp; Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)] uppercase">
            {title}
          </h2>
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1">
            {subtitle}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/blog/#repositories"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <span>Detailed Analysis in Blog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-[var(--bg-surface)] bg-[var(--text-main)] hover:opacity-90 font-bold transition-all flex items-center gap-2"
          >
            <span>github.com/MarshallJung</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed mb-10 font-normal">
        {summary}
      </p>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 hairline-all">
        {repositories.map((repo, idx) => (
          <div
            key={repo.id}
            className={`p-6 sm:p-8 bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] transition-colors flex flex-col justify-between ${
              idx % 2 === 0 ? 'md:hairline-r' : ''
            } ${idx < repositories.length - 1 ? 'hairline-b' : 'hairline-b md:hairline-b-0'} ${
              idx === repositories.length - 1 && repositories.length % 2 !== 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              {/* Card Meta Kicker */}
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                <span className="px-2 py-0.5 hairline-all text-[var(--text-main)] font-semibold">
                  {repo.category}
                </span>
                <span className="text-[var(--text-muted)]">{repo.language}</span>
              </div>

              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] uppercase tracking-tight">
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                  </a>
                </h3>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                {repo.shortSummary}
              </p>

              {/* Primary Architecture Points */}
              <div className="mb-6 space-y-1.5">
                <div className="text-[10px] font-mono text-[var(--text-main)] uppercase tracking-widest">
                  Key Enterprise Vector:
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] leading-relaxed pl-3 hairline-l border-[var(--text-main)]">
                  {repo.enterpriseUses[0]}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {repo.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 text-[var(--text-muted)] hairline-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action Row */}
            <div className="pt-4 hairline-t flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
              <a
                href={repo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--text-main)] font-bold hover:underline underline-offset-4"
              >
                <span>Inspect Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {repo.demoUrl && (
                <a
                  href={repo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                >
                  <Play className="w-3 h-3 text-red-500" />
                  <span>Video Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
