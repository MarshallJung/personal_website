import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function BlogCard({ post, onSelect }) {
  return (
    <article
      onClick={() => onSelect(post)}
      className="group cursor-pointer p-6 sm:p-8 bg-[var(--bg-surface)] hairline-all hover:bg-[var(--border-subtle)] transition-colors flex flex-col justify-between"
    >
      <div>
        {/* Date and Reading metadata */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          {post.readTime && (
            <span className="text-[11px] uppercase tracking-wider">{post.readTime}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-main)] group-hover:underline underline-offset-4 mb-3 uppercase">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 mb-6 leading-relaxed font-normal">
          {post.description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 hairline-t">
          {post.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 text-[var(--text-muted)] hairline-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-widest text-[var(--text-main)] group-hover:underline underline-offset-4">
          <span>Read Document</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
