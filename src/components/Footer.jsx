import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hairline-t bg-[var(--bg-surface)] text-[var(--text-muted)] text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="font-semibold text-[var(--text-main)] uppercase tracking-wider">
            {profileData.name} — Code &amp; Steel
          </div>
          <div className="text-[11px] text-[var(--text-muted)] max-w-md">
            Architected with Vite, React, and Tailwind. Hosted statically on GitHub Pages with zero server overhead.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[11px]">
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3 h-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profileData.contact.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <span>Medium</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <span>Résumé (PDF)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="mailto:jung.marshall@gmail.com"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            contact
          </a>
        </div>
      </div>

      <div className="hairline-t py-4 text-center text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
        © {currentYear} Marshall Jung. All rights reserved.
      </div>
    </footer>
  );
}
