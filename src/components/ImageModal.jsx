import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[var(--bg-surface)] hairline-all shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 hairline-b">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 hairline-all text-[var(--text-main)]">
              {image.subsystem || 'Engineering'}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {image.date}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="p-4 sm:p-6 bg-black flex items-center justify-center overflow-auto max-h-[65vh]">
          <img
            src={image.src}
            alt={image.title || 'Photo'}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-6 hairline-t bg-[var(--bg-surface)] flex flex-col gap-2">
          <h4 className="text-base font-bold uppercase tracking-tight text-[var(--text-main)]">
            {image.title}
          </h4>
          {image.notes && (
            <p className="text-xs text-[var(--text-muted)] font-serif italic leading-relaxed">
              "{image.notes}"
            </p>
          )}

          {image.specs && Object.keys(image.specs).length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 hairline-all mt-2">
              {Object.entries(image.specs).map(([key, val]) => (
                <div key={key} className="p-2 hairline-r last:border-r-0">
                  <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">{key}</div>
                  <div className="text-xs font-mono font-bold text-[var(--text-main)]">{val}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
