import React, { useState } from 'react';
import { repositoriesData } from '../data/repositories';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Play,
  Terminal,
  FileCode,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Sparkles
} from 'lucide-react';

export default function BlogRepoAnalysis() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const { repositories, profileUrl } = repositoriesData;

  const filteredRepos =
    activeTab === 'all'
      ? repositories
      : repositories.filter((r) => r.id === activeTab);

  return (
    <div id="repositories" className="mb-16 hairline-all bg-[var(--bg-surface)] p-6 sm:p-10">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 hairline-b">
        <div className="max-w-3xl">
          <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2 flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-[var(--text-main)] text-[var(--bg-surface)] font-bold text-[9px]">
              CODE DOSSIER
            </span>
            <span>Public Repositories &amp; Architectural Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] uppercase">
            Systems Architecture &amp; Enterprise Potential
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed mt-2">
            Technical analysis of public codebases hosted at{' '}
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-main)] underline underline-offset-4 font-mono hover:opacity-80"
            >
              github.com/MarshallJung
            </a>
            . Highlighting how foundation models, edge diagnostics, and schema-driven extraction translate into enterprise production environments.
          </p>
        </div>

        {/* Action / Toggle */}
        <div className="flex items-center gap-3 self-start lg:self-center shrink-0">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--bg-surface)] bg-[var(--text-main)] hover:opacity-90 font-bold transition-all flex items-center gap-1.5"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)] transition-colors flex items-center gap-1.5"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Collapse Dossier' : 'Expand Dossier'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-8 space-y-10 animate-in fade-in duration-200">
          {/* Quick Filter Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 pb-4 hairline-b">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mr-2">
              Focus Architecture:
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors ${
                activeTab === 'all'
                  ? 'bg-[var(--text-main)] text-[var(--bg-surface)] font-bold'
                  : 'text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)]'
              }`}
            >
              All Codebases ({repositories.length})
            </button>
            {repositories.map((repo) => (
              <button
                key={repo.id}
                onClick={() => setActiveTab(repo.id)}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors ${
                  activeTab === repo.id
                    ? 'bg-[var(--text-main)] text-[var(--bg-surface)] font-bold'
                    : 'text-[var(--text-muted)] hairline-all hover:text-[var(--text-main)]'
                }`}
              >
                {repo.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Detailed Cards */}
          <div className="space-y-12">
            {filteredRepos.map((repo) => (
              <div key={repo.id} className="hairline-all bg-[var(--bg-surface)] p-6 sm:p-8">
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 hairline-b mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 hairline-all text-[var(--text-main)] font-semibold">
                      {repo.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {repo.language}
                    </span>
                    {repo.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[var(--text-main)] text-[var(--bg-surface)] font-bold">
                        {repo.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
                    {repo.demoUrl && (
                      <a
                        href={repo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-red-500 hover:underline underline-offset-4 font-semibold"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Watch Demo</span>
                      </a>
                    )}
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-main)] font-bold hover:underline underline-offset-4"
                    >
                      <span>github.com/{repo.repoName}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Main Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] uppercase tracking-tight mb-4">
                  {repo.name}
                </h3>

                {/* Tech Stack Bar */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 text-[var(--text-muted)] hairline-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Two-Column Deep Dive: Technical Core & Architecture Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  <div className="lg:col-span-7">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--text-main)] mb-3 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Technical Architecture &amp; Core Logic</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal mb-4">
                      {repo.detailedAnalysis}
                    </p>
                  </div>

                  <div className="lg:col-span-5 hairline-l pl-0 lg:pl-8 border-[var(--border-subtle)]">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--text-main)] mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>System Blueprint Highlights</span>
                    </div>
                    <ul className="space-y-2">
                      {repo.architectureHighlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs font-mono text-[var(--text-muted)] leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[var(--text-main)] mt-0.5">▪</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Potential Enterprise & Industrial Uses Callout */}
                <div className="p-5 sm:p-6 hairline-all bg-[var(--bg-surface)]">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--text-main)] font-bold mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>Potential Enterprise &amp; Industrial Applications</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {repo.enterpriseUses.map((use, uIdx) => {
                      const [useTitle, useDesc] = use.split(': ');
                      return (
                        <div key={uIdx} className="space-y-1.5">
                          <div className="text-xs font-mono uppercase font-bold text-[var(--text-main)] tracking-wider">
                            {uIdx + 1}. {useTitle}
                          </div>
                          <p className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                            {useDesc || use}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
