---
title: "Creativity and AI"
slug: "2025-10-27-creativity-and-ai"
date: "2025-10-27"
description: "This week I read an article by Dan Shipper from https://every.to/ that I found particularly interesting. It discusses AI’s use in creative spaces. We know AI has successfully tackled more technical pu..."
coverImage: "/images/blog/2025-10-27-creativity-and-ai/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

This week I read an article by Dan Shipper from [https://every.to/](https://every.to/) that I found particularly interesting. It discusses AI’s use in creative spaces. We know AI has successfully tackled more technical pursuits like coding, but AI in creative work is still fundamentally different from human creativity.

Following on from some of my past week’s discussions on AI, I found this article to be well written and illustrate much of what I’ve been trying to say in a much better manner.

In summary: Companies are hiring for AI productivity wrong. They write job descriptions demanding senior software engineering credentials. Five years in specific frameworks. Deep vertical expertise. Traditional technical pedigrees. The criteria companies use to screen candidates optimizes for the wrong outcomes. AI productivity doesn’t scale through conventional engineering depth. It scales through different capabilities entirely. First principles thinking — the ability to decompose problems from scratch and rebuild them better. Relentless curiosity — the instinct to push past surface answers until you understand the system beneath. Excellent language skills — because the whole game is precise communication with models, teammates, and stakeholders.

Technical understanding provides the foundation. But it’s not the differentiator anymore. The differentiators look more like management capabilities than engineering depth. Vision to see possibilities before they exist. Taste for ideas and language — the judgment to know what’s worth building and how to express it precisely. The ability to communicate what you want from AI systems clearly enough to get useful output. Planning and estimating timelines. Breaking projects into tasks and distributing them among contributors with different strengths, human and AI. Knowing when to step in and correct AI outputs, catching details that matter.

These used to be specialized management skills. Good managers were always rare. Now they’re becoming universal requirements for AI-era productivity. Everyone needs to orchestrate work, not just execute predefined tasks.

But good news! I found one exception. A company over 100 years old that wrote a job description looking for these exact qualities. They understood what drives AI-era productivity. One company out of hundreds, maybe many hundreds. How they did, I do not know. But I applied and we’ll see what happens.

But for those in big enterprise, this creates an opening. The companies that rewrite their hiring criteria around curiosity, first principles thinking, and language precision will build teams that actually unlock AI’s potential. The ones that keep optimizing for traditional engineering credentials will hire good engineers who produce mediocre outcomes.

The gap between job postings and genuine AI capability keeps growing. Eventually, results will force the change.

### OCR the World

One of the most frustrating aspects of consuming data is dealing with unstructured PDFs. Tables and specialized charts in these documents are often extremely difficult for most models to process correctly.

DeepSeek released an OCR model that looks like any other standard image-to-text OCR on Hugging Face, but it works differently. Normally, AI reads text by converting it into tokens where each word or word part becomes a token. With long text, the token count grows significantly, making processing slow and expensive since computation cost scales roughly with the square of token count. This is why advanced models struggle with lengthy documents.

DeepSeek’s approach converts long text into an image, encodes that image into a small set of vision tokens, then uses a decoder to reconstruct the text. This demonstrates that dense visual representations can carry the same information far more efficiently than plain text tokens.

This matters because context is the currency of LLMs, and it’s expensive since it must be processed at inference time. If vision tokens can represent past dialogue, documents, or code at 10x smaller size with high fidelity, you can maintain far more active context while cutting costs and speeding up inference.

Here’s a repo with the DeepSeek model implemented for PDFs: [https://github.com/Bogdanovich77/DeekSeek-OCR---Dockerized-API](https://github.com/Bogdanovich77/DeekSeek-OCR---Dockerized-API)

![Figure](/images/blog/2025-10-27-creativity-and-ai/image-01.png)

### Some Interesting Charts

![Figure](/images/blog/2025-10-27-creativity-and-ai/image-02.png)

![Figure](/images/blog/2025-10-27-creativity-and-ai/image-03.png)

![Figure](/images/blog/2025-10-27-creativity-and-ai/image-04.png)

The first two charts tell an interesting (wild?) story about AI tool user retention. It’s impressive that over 50% of users remain active after nearly two years of use, showing these tools provide real value to those that are using them. The second chart shows the marketplace is becoming more diverse with rapidly growing market share amongst several big companies, though OpenAI still dominates.

The third chart is particularly interesting. It suggests that AI’s most well suited use case, helping developers write code, is starting to plateau after strong initial adoption. I think this happens because AI tools help build small prototypes and simple apps, but hit limitations with larger codebases. After the fall off, there will likely be a plateau of adoption as engineers discover sticky use cases. But the initial hype is definitely wearing off. Expect this trend to continue for the next six months or so.

### AI at Work

[https://www.perplexity.ai/enterprise/perplexity-at-work](https://www.perplexity.ai/enterprise/perplexity-at-work)

Perplexity has created a 40-page guide on how they use AI within their company, including automating email and meeting prep research, plus using AI to amplify your curiosity rather than replace it. They also include a simple, practical prompting playbook. This content is universal and applies to any AI platform, not just Perplexity. It’s worth downloading if you’re building an enterprise AI adoption process.