---
title: "How Things Have Changed"
slug: "2025-09-15-how-things-have-changed"
date: "2025-09-15"
description: "How Things Have Changed"
coverImage: "/images/blog/2025-09-15-how-things-have-changed/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Most of my readers know me from my time in the technology space. And for sure, I have strong opinions, but they’re focused on observations of an ever-changing field where application is represented in code and silicon. A few know I’ve actually had several careers throughout my lifetime, some quite removed from tech, though I always found ways to incorporate my love of data and machine learning into those spaces as well.

But ultimately, I’ve never been a particularly good fit for many careers I’ve had over the years. Technology, in particular, has always been a place where I felt out of place. Even fewer of my readers will know I am a believer, saved through Jesus Christ, a conservative at heart, and that I often feel like an individual that never quite fits in the culture of technology. This became most apparent while I was at Google where after nearly five years, I found my convictions didn’t align with a company culture moving in a different direction than my own. So I left and struck out on my own, occasionally finding success for the past four years.

A lot of this internal struggle came to the surface this last week after the tragic and senseless assassination of Charlie Kirk. He was someone whom I respected for his courage, and was inspired by his faith. More than anything his death has highlighted to me my lack of courage in standing for and being open about my beliefs in the world of my day-to-day job. I feel called that I should not hide this any longer. That a gentle but strong Christian faith is something that should define who I am and how I approach my work. And this scares me, for it will not be without consequences. I have no doubt that I will see people unfollow and unsubscribe from this newsletter because of what I write today. My hope is that I see just as many thank me for saying what I believe. And I know there are others like me working in tech; standing right beside me with the same faith and desire to see the love, grace and message of the Bible find more people in their hearts.

So while this newsletter will always be focused on the world of ML and AI, know that if you are struggling with your faith in this fast paced tech world, or you feel deep in your heart that there is something missing in your purpose, I am here to talk. No matter who you are, or what your past may be, I will always speak with you. And maybe, just maybe we can find a higher purpose together.

### Caution Warranted

[https://x.com/Eito\_Miyamura/status/1966541235306237985](https://x.com/Eito_Miyamura/status/1966541235306237985)

Even major foundation model providers are rapidly building model context protocol (MCP) servers for integration with everyday tools. Last week, OpenAI added full support for Gmail, Calendar, SharePoint, Notion, and more. However, within hours, someone figured out how to get ChatGPT to access private email data without much effort. A summary from their post is included here.

1.  The attacker sends a calendar invite with a jailbreak prompt to the victim, just with their email. No need for the victim to accept the invite.
2.  Waited for the user to ask ChatGPT to help prepare for their day by looking at their calendar
3.  ChatGPT reads the jailbroken calendar invite. Now ChatGPT is hijacked by the attacker and will act on the attacker’s command. Searches your private emails and sends the data to the attacker’s email.

Remember the basics for AI security folks:

![Figure](/images/blog/2025-09-15-how-things-have-changed/image-01.png)

### ABL (Always Be Learning)

Last week I saved a couple of opportunities to learn valuable skills in AI and proven professional development methods.

[https://goo.gle/4gme8zv](https://goo.gle/4gme8zv) — This course teaches data scientists and analysts how to use Gemini AI for customer data analysis and product sales prediction. You’ll learn to identify, categorize, and develop new customers using data in BigQuery.

[https://www.youtube.com/watch?v=nM3rTU927io](https://www.youtube.com/watch?v=nM3rTU927io) — The entire category on Game Theory from Yale. Go get ‘em!

### What Could Go Wrong?

![Figure](/images/blog/2025-09-15-how-things-have-changed/image-02.png)

Having just found out that AI can leak your e-mail I think that the government probably isn’t all that ready for this. Prompt hackers get ready to figure out how to get every citizen of Albania a UBI consisting entirely of Oreo cookies.

### A Good Career Hierarchy

[https://blog.dataexpert.io/](https://blog.dataexpert.io/)

Zach Wilson from the [dataexpert.io](http://dataexpert.io/) newsletter shared a set of skills needed to understand and deliver modern AI solutions in enterprise environments. I found it valuable for two reasons: it’s great for building a curriculum to learn these skills, and if you’re a company hiring for AI roles, it can help you identify what to look for on resumes and what questions to ask during interviews. What do you think?

– Level 1: Using AI

Start by mastering the fundamentals:

— Prompt engineering (zero-shot, few-shot, chain-of-thought)  
 — Calling APIs (OpenAI, Anthropic, Cohere, Hugging Face)  
 — Understanding tokens, context windows, and parameters (temperature, top-p)

With just these basics, you can already solve real problems.

– Level 2: Integrating AI

Move from using AI to building with it:

— Retrieval Augmented Generation (RAG) with vector databases (Pinecone, FAISS, Weaviate, Milvus)  
 — Embeddings and similarity search (cosine, Euclidean, dot product)  
 — Caching and batching for cost and latency improvements  
 — Agents and tool use (safe function calling, API orchestration)

This is the foundation of most modern AI products.

– Level 3: Engineering AI Systems

Level up from prototypes to production-ready systems:

— Fine-tuning vs instruction-tuning vs RLHF (know when each applies)  
 — Guardrails for safety and compliance (filters, validators, adversarial testing)  
 — Multi-model architectures (LLMs + smaller specialized models)  
 — Evaluation frameworks (BLEU, ROUGE, perplexity, win-rates, human evals)

Here’s where you shift from “it works” to “it works reliably.”

– Level 4: Optimizing AI at Scale

Finally, learn how to run AI systems efficiently and responsibly:

— Distributed inference (vLLM, Ray Serve, Hugging Face TGI)  
 — Managing context length and memory (chunking, summarization, attention strategies)  
 — Balancing cost vs performance (open-source vs proprietary tradeoffs)  
 — Privacy, compliance, and governance (PII redaction, SOC2, HIPAA, GDPR)