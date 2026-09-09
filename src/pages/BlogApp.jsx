import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import BlogRepoAnalysis from '../components/BlogRepoAnalysis';
import posts from '../../content/blog/posts.json';
import { marked } from 'marked';
import { Calendar, Clock, ArrowLeft, ArrowUpRight, Search } from 'lucide-react';

// Lazy-load markdown files on demand
const markdownModules = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default' });

export default function BlogApp() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [articleHtml, setArticleHtml] = useState('');
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get('post');
    if (postSlug) {
      const match = posts.find((p) => p.slug === postSlug || p.file?.includes(postSlug));
      if (match) setSelectedPost(match);
    }
  }, []);

  useEffect(() => {
    if (!selectedPost) {
      setArticleHtml('');
      return;
    }

    setIsLoadingArticle(true);
    const matchingKey = Object.keys(markdownModules).find((k) => k.includes(selectedPost.slug));

    if (matchingKey && typeof markdownModules[matchingKey] === 'function') {
      markdownModules[matchingKey]()
        .then((rawMarkdown) => {
          let cleanContent = rawMarkdown.replace(/^---[\s\S]*?---\n/, '') || selectedPost.description;
          cleanContent = cleanContent.replace(/^#\s+[^\n]+\n+/, '');
          setArticleHtml(marked.parse(cleanContent));
        })
        .catch(() => {
          setArticleHtml(marked.parse(`# ${selectedPost.title}\n\n${selectedPost.description}`));
        })
        .finally(() => {
          setIsLoadingArticle(false);
        });
    } else {
      setArticleHtml(marked.parse(`# ${selectedPost.title}\n\n${selectedPost.description}`));
      setIsLoadingArticle(false);
    }
  }, [selectedPost]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.history.pushState({}, '', `?post=${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags || [])))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const renderArticleContent = (post) => {
    return (
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] mb-10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Ledger
        </button>

        {/* Post Header */}
        <header className="pb-8 hairline-b mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)] mb-4 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[var(--text-main)]">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            {post.readTime && <span>· {post.readTime}</span>}
            {post.canonicalUrl && (
              <>
                <span>·</span>
                <a
                  href={post.canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-main)] flex items-center gap-1 transition-colors"
                >
                  <span>Medium Original</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] uppercase tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 text-[var(--text-muted)] hairline-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Prose Body */}
        {isLoadingArticle ? (
          <div className="py-20 text-center font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Loading document...
          </div>
        ) : (
          <div
            className="prose prose-neutral max-w-none text-[var(--text-main)]
              prose-headings:text-[var(--text-main)] prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:hairline-b prose-h2:pb-3
              prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-[var(--text-main)] prose-p:leading-relaxed prose-p:mb-6 text-base sm:text-lg font-normal
              prose-strong:text-[var(--text-main)] prose-strong:font-bold
              prose-em:text-[var(--text-muted)] prose-em:font-mono prose-em:text-xs
              prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6 prose-ul:list-disc
              prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-6 prose-ol:list-decimal
              prose-li:text-[var(--text-main)] prose-li:leading-relaxed
              prose-a:text-[var(--text-main)] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[var(--border-subtle)] hover:prose-a:decoration-[var(--text-main)]
              prose-code:font-mono prose-code:text-xs prose-code:px-1.5 prose-code:py-0.5 prose-code:hairline-all prose-code:text-[var(--text-main)]
              prose-pre:bg-[var(--bg-surface)] prose-pre:hairline-all prose-pre:p-4 prose-pre:overflow-x-auto
              prose-img:hairline-all prose-img:my-8 prose-img:mx-auto prose-img:max-h-[560px] prose-img:w-auto prose-img:bg-[var(--bg-surface)]
              prose-blockquote:hairline-l prose-blockquote:border-l-2 prose-blockquote:border-[var(--text-main)] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-[var(--text-muted)]
              prose-hr:my-12 prose-hr:border-[var(--border-subtle)]"
            dangerouslySetInnerHTML={{ __html: articleHtml }}
          />
        )}

        <div className="mt-16 pt-8 hairline-t flex justify-between items-center">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Ledger
          </button>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors">
      <Navbar activePage="blog" />

      <main className="flex-1">
        {selectedPost ? (
          renderArticleContent(selectedPost)
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            {/* Header */}
            <div className="pb-8 hairline-b mb-12">
              <div className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-2">
                Published Intelligence &amp; Observations
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-[var(--text-main)] uppercase mb-4">
                Writing &amp; Intelligence Ledger
              </h1>
              <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
                Strategic analysis at the intersection of foundation models, enterprise AI deployment, macroeconomics, and hard engineering.
              </p>
            </div>

            {/* Public Repositories & Engineering Architecture Deep Dive */}
            <BlogRepoAnalysis />

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="SEARCH PAPERS & ESSAYS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 bg-[var(--bg-surface)] hairline-all text-xs font-mono text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none uppercase tracking-wider"
                />
              </div>

              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                {filteredPosts.length} Documents Indexed
              </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 hairline-all">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} onSelect={handleSelectPost} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest hairline-all">
                No matching documents found.
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
