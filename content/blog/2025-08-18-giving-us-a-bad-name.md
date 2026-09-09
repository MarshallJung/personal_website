---
title: "Giving Us A Bad Name"
slug: "2025-08-18-giving-us-a-bad-name"
date: "2025-08-18"
description: "Giving Us A Bad Name"
coverImage: "/images/blog/2025-08-18-giving-us-a-bad-name/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

There’s a prevailing belief in the tech world that the cost of Large Language Model (LLM) inference is on a relentless, one-way path downward. While long-term efficiency gains are almost certain, a recent friendly debate highlighted my contrarian, and I believe more realistic, view for the short to medium term: **costs are going to go up before they come down.**

This perspective is built on a few core assumptions about the current market and the physical realities of scaling AI.

The first and most foundational assumption is that today’s major AI providers are operating at a significant loss on inference. This isn’t a sustainable business model; it’s a classic market-share land grab. By subsidizing the cost of API calls, they attract developers, lock in customers, and build a competitive moat. While this strategy is effective for rapid adoption, it masks the true, underlying cost of the service. This artificial price floor can’t last forever. Eventually, shareholder pressure will demand a clear path to profitability.

The second assumption says that scaling AI infrastructure isn’t just about writing better algorithms; it’s a battle against hard physical and financial constraints and these are not trivial challenges that can be optimized away overnight. Data centers are immense consumers of resources. They require power on the scale of small cities and vast amounts of water for cooling. These resources are not infinite and are becoming increasingly expensive and politically contentious. Beyond utilities, the supply chain for essential hardware — specialized networking equipment, supporting infrastructure, and of course, the chips themselves, is already strained. The current environment has spurred a manic capital allocation race. Companies are spending billions to secure GPUs (and/or design their own chips) and build out capacity at a frantic pace. This often leads to inefficient deployment and misapplication of capital. These bottlenecks mean that simply adding more capacity becomes exponentially more expensive and complex, pushing up the true cost per inference, even as the models themselves become more efficient.

![Figure](/images/blog/2025-08-18-giving-us-a-bad-name/image-01.jpg)

So, how do these hidden costs distort the market and, as the original title of this piece suggested, risk “giving us a bad name”? They create the perfect environment for unsustainable business models that prioritize impressive top-line metrics over sound economics.

Consider this analogy: a startup that sells a crisp $1 bill for 90 cents.

-   They offer an unbeatable deal, and customers flock to them.
-   After a year, they’ve sold one billion “units,” allowing them to announce they’ve generated “$900 million in ARR.”
-   This impressive-sounding revenue figure attracts venture capital at a high valuation, despite the fact the company is actually losing $100 million.

This is precisely what is happening in the AI space. Companies build a thin wrapper around a major provider’s API, leverage the subsidized, loss-leading prices, and resell it to customers. They can show incredible user growth and revenue figures without ever building a profitable or sustainable business. In a gold-rush environment where capital moves faster than due diligence, founders and early investors can cash out on the secondary market based on hype, leaving future investors and the market to deal with the eventual collapse when the economics prove untenable. This isn’t to say these companies are building bad products. The issue is that their business model is built on an artificially low cost structure that is bound to change.

This confusion around the true cost of AI is a fog of war that obscures the real market direction. Eventually, the piper must be paid. The subsidies will end, and providers will be forced to align their prices with the actual cost of their massive infrastructure investments.

When this happens, we can expect a market-wide reset:

1.  **Price Increases:** The cost of API calls will rise to reflect their true operational expense.
2.  **Market Consolidation:** Companies whose business models relied solely on the “dollar-for-ninety-cents” strategy will either fail or be acquired for their technology, not their revenue. TBF Windsurf was acquired for its talent, but essentially it still counts here as a canary.
3.  **A Stable Future:** Once the correction occurs, the market can finally stabilize. The companies that remain will be those that built genuine value, focused on efficiency, and addressed real market needs with sound unit economics.

Only after this necessary and likely painful shakeout will we see the industry settle into the long-term, sustainable trend of decreasing AI costs that everyone expects.

### IYKYK

Courtesy of @elder\_plinius on X

Subject: The Growing Epidemic of Em Dash Abuse

Friends, writers, typographers —

We need to talk about the creeping, silent addiction devastating our creative communities: em dash dependency.

It starts innocently enough. You use one to connect a thought — just a little stylistic flourish — harmless, right? But soon, you’re reaching for it every time you feel a comma won’t hit hard enough, or a period feels too final. Before you know it, you’re using them — constantly — everywhere — until your prose looks like it’s been machine-gunned with horizontal bars.

Recognizing the Signs of Em Dash Overuse

-   Sentences that should end… don’t — they spiral — fracture — fragment — until the reader forgets where they started.
-   Replacing perfectly good commas, colons, and semicolons with em dashes — because they “just feel more dramatic.”
-   Sudden bursts of power writing that rely on — rather than enhance — the rhythm of your work.
-   Withdrawal symptoms (restlessness, anxiety, overlong Twitter rants) when forced to write without them.

The Risks of Continued Abuse

-   Dependency: The more you use them, the more ordinary punctuation feels inadequate — flimsy — weak.
-   Loss of Structural Discipline: Paragraph cohesion collapses into scattered thought chains.
-   Reader Fatigue: Your audience may experience breathlessness, confusion, or a creeping sense that you’re just… never… going to… finish a thought.
-   Typographic Side Effects: Overcrowding, sentence destabilization, and occasional spontaneous manuscript implosion.

If You or Someone You Know is Suffering from Em Dash Overuse…

Help is available — if you act now. Treatments include:

-   Comma Substitution Therapy: Gradual reintroduction of traditional pauses.
-   Period Reacclimation: Rediscovering the finality — and relief — of a clean full stop.
-   Colon and Semicolon Diversification: Building a healthy punctuation ecosystem.
-   The Oxford Comma 12-Step Program: For those with advanced cases requiring stylistic intervention.

Remember: An em dash is a tool — not a lifestyle. Use responsibly. If you find yourself using more than three per paragraph, put the keyboard down and consult a style guide immediately.

This message was brought to you by the National Coalition Against Punctuation Abuse (NCAPA). We’re here for you — always — just not like… that.

### Better Vectors!

[https://weaviate.io/blog/fine-tune-embedding-model](https://weaviate.io/blog/fine-tune-embedding-model)

I’ve encountered several companies that are somewhat disappointed with the performance of the vector search they’ve implemented for their RAG systems. Here’s a few takeaways from the Weaviate blog that are definitely best practices.

𝗙𝗶𝗿𝘀𝘁, 𝗱𝗲𝗯𝘂𝗴 𝗯𝗲𝗳𝗼𝗿𝗲 𝘆𝗼𝘂 𝗳𝗶𝗻𝗲-𝘁𝘂𝗻𝗲:

Before spending time and compute on fine-tuning, ask yourself:

-   Try hybrid search first if you need exact keyword matches
-   Experiment with different chunking techniques like late chunking
-   Try a larger model or one with more dimensions to capture general semantic relationships better.
-   Is it only failing on your specific domain terminology? NOW we’re talking fine-tuning territory

Fine-tuning shines when off-the-shelf models can’t grasp your domain-specific language. Pre-trained models learn from generally available public data. They don’t know your company’s product names or industry jargon. Doing this correctly offers substantial benefits: better retrieval performance, smaller fine-tuned models that outperform larger general ones, reduced costs, and lower latency for domain-specific tasks.

Fine-tuning embedding models isn’t like fine-tuning LLMs. It’s all about adjusting distances in vector space using contrastive learning.

Three main approaches:

1.  𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗡𝗲𝗴𝗮𝘁𝗶𝘃𝗲𝘀 𝗥𝗮𝗻𝗸𝗶𝗻𝗴 𝗟𝗼𝘀𝘀: Just needs query-context pairs. Treats other examples in the batch as negatives — elegant and popular
2.  𝗧𝗿𝗶𝗽𝗹𝗲𝘁 𝗟𝗼𝘀𝘀: Requires (anchor, positive, negative) triplets. Great for precise control but finding good hard negatives is tricky
3.  𝗖𝗼𝘀𝗶𝗻𝗲 𝗘𝗺𝗯𝗲𝗱𝗱𝗶𝗻𝗴 𝗟𝗼𝘀𝘀: Uses similarity scores between sentence pairs. Perfect when you have gradients of similarity

Start with 1,000–5,000 high-quality samples for narrow domains. Plan for 10,000+ for complex specialized terminology. Fine-tuning can run on consumer GPUs or free Google Colab for smaller models. Always evaluate against a baseline — use metrics like MRR, Recall@k, or NDCG

Fine-tuning is powerful but not a magic bullet. Debug systematically, start small, and iterate. Full technical details and code examples are in the blog.

### Data Pipeline Tool

Microsoft offers a Python library that converts multiple formats to markdown format for use in LLM workflows. Markdown is extremely concise text that still provides a way to represent important structure. People may be familiar with it if they use note-taking tools such as Notion or Obsidian. Additionally, most mainstream LLMs incorporate markdown into their responses unprompted, suggesting they’ve been trained on large quantities of this formatted text and understand it well. A side benefit is that markdown conventions are also highly token efficient. Probably not a cure-all but something that might be useful.

[https://github.com/microsoft/markitdown](https://github.com/microsoft/markitdown)