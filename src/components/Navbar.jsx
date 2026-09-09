import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { profileData } from '../data/profile';

export default function Navbar({ activePage = 'home' }) {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-surface)] hairline-b transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand / Title */}
        <a href="/" className="flex items-baseline gap-3 group">
          <span className="font-mono text-xs font-semibold tracking-widest text-[var(--text-main)] uppercase">
            Marshall Jung
          </span>
          <span className="hidden sm:inline text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
            / Code &amp; Steel
          </span>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
          <a
            href="/"
            className={`transition-colors py-1 ${
              activePage === 'home'
                ? 'text-[var(--text-main)] font-semibold underline underline-offset-8 decoration-1'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Ledger &amp; Resume
          </a>
          <a
            href="/blog/"
            className={`transition-colors py-1 ${
              activePage === 'blog'
                ? 'text-[var(--text-main)] font-semibold underline underline-offset-8 decoration-1'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Code (Writing)
          </a>
          <a
            href="/racecar/"
            className={`transition-colors py-1 ${
              activePage === 'racecar'
                ? 'text-[var(--text-main)] font-semibold underline underline-offset-8 decoration-1'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Steel (Journal)
          </a>
        </nav>

        {/* Actions & Social Icons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={profileData.contact.medium}
            target="_blank"
            rel="noopener noreferrer"
            title="Medium Profile"
            className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors p-1"
            aria-label="Medium"
          >
            <span className="font-mono text-[11px] font-bold">M</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-[var(--text-main)] hairline-all hover:bg-[var(--border-subtle)] transition-colors"
          >
            <span>PDF Résumé</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
