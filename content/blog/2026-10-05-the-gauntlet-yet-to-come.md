---
title: "The Gauntlet Yet to Come"
slug: "2026-10-05-the-gauntlet-yet-to-come"
date: "2026-10-05"
description: "I rarely cover macroeconomics here, which is a bit funny given that I actually have a degree in economics. I usually stick to business or industry-specific analysis. Recently, though..."
coverImage: "/images/blog/2026-10-05-the-gauntlet-yet-to-come/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-10-05-the-gauntlet-yet-to-come/image-01.jpg)

### The Gauntlet Yet to Come

I rarely cover macroeconomics here, which is a bit funny given that I actually have a degree in economics. I usually stick to business or industry-specific analysis. Recently, though, there has been a lot of scrutiny around how the AI investment hypercycle affects the broader economy.

Filings analyzed by UBS, The Wall Street Journal, and others point to roughly $3 to $3.8 trillion in off-balance sheet liabilities held by major AI laboratories, primarily Anthropic and OpenAI but include Neoclouds as well as Google, AWS and MSFT as well. Current as of September 30, these obligations jumped by more than $700 billion in Q3 alone. They are largely driven by uncommenced leases, purchase commitments for data center hardware like chips, HB memory, power, networking etc. and SPV structures tied directly to AI data centers and infrastructure.

Getting more specific, Anthropic's leaked S1 filing ahead of its planned IPO shows a reported loss of $8 billion on $4.6 billion in revenue for 2025. The company has also committed to $518 billion in compute agreements, with over $400 billion classified as non-cancellable. These "take or pay" contracts create a massive long-term liability that exceeds the operating expenses of giants like Microsoft and Meta.

On top of that, the S1 reveals that a large portion of Anthropic's revenue depends on just a few customers, many of which are unprofitable AI startups themselves. Nearly half of its revenue also flows through resellers like Amazon and Google.

People will argue that many tech companies endure long periods of unprofitability, and that should be no different for Anthropic. However big is big and losses at this scale seem unsustainable given the pool of external funding sources.

This insatiable capital hunger feeds into a broader systemic issue. As these companies borrow heavily to build data centers, they drive up the cost of components like high-bandwidth memory. Issuing more debt to fund this infrastructure pushes interest rates higher. The scale of recent debt issuance is massive. In Q3, $250 billion in investment grade means effective DV01 surpassed all U.S. Treasury issuance by roughly 25 percent, and that growing supply of direct and hidden financing for AI build-up has pushed Treasury yields higher.

What are the potential outcomes if AI demand doesn't scale fast enough to meet the revenue expectations financed by this debt? Goldman Sachs estimates that major hyperscalers need roughly $800 billion in 2026 and a projected $1.2 trillion in 2027 in annual AI revenue to break even on recent and projected infrastructure spending. Current AI-related cloud revenue remains well below that threshold. While companies are bridging the gap with debt for now, the impact on equity markets could be pretty catastrophic if that debt and actual consumption fail to align.

![Figure](/images/blog/2026-10-05-the-gauntlet-yet-to-come/image-02.png)

As we can see, the stock market's heavy concentration in mega-cap tech has really masked the broader deterioration among smaller, non-tech US equities. This isn't financial advice and no one can predict the future, but we could easily move sideways for a while to work off this overvaluation, or head lower into a correction. I would just caution everyone to be a bit careful here. Even with AI advancing technologically in such an amazing and rapid way, I think we may still need to run an economic gauntlet before reaching a more stable and sustainable place on the other side.

### More RLCD Stuff

[https://github.com/extend-hq/jevbox](https://github.com/extend-hq/jevbox)

I have been really excited about the new breed of RLCD-based models (like Jev) over the last couple of weeks. It feels like the exact shot in the arm the AI space needed for true innovation.

The link above leads to an interesting open-source document drive that organizes itself, answers questions, and cites everything. You can upload any modal format, and Jev, the RLCD model powering it, categorizes and files it into the folder tree.

Search is completely hierarchical. Jev picks the folder, then the document, then the section. There are no embeddings and no vector database, which is a great alternative for anyone who has struggled with RAG-based retrieval. Every answer cites its source page and section, and permissions are enforced at retrieval time. If someone loses access to a source, they also lose access to any answers built on it.

It also ships with an MCP server so your agents get the same permission-aware context. You can self-host it or deploy it to a SaaS-based service in a single click. I really like this project and look forward to finding ways to use it both personally and at work.

### Ontology

[https://textql.com/blog/ontology-v3](https://textql.com/blog/ontology-v3)

One of my most important projects right now is introducing an ontology solution to VGO. It needs to build organically on top of our existing systems of record and documentation.

We all know our AI agents need company knowledge to do quality work, but they cannot discover it through simple database schemas or raw unstructured data alone. Crucial context is missing, such as how we define revenue, which records to exclude from reports, how to join customer data across systems, and which analytical methods best answer recurring questions.

Today, this knowledge is fragmented across documentation, code, dashboards, chat threads, and the minds of veteran employees. Even when documented, it is often disconnected from the analytical logic that actually executes the workflow. Without that shared context, an AI agent must reconstruct how the business operates every single time someone asks a question.

An ontology gives that knowledge a durable home. It brings business definitions, documentation, analytical methods, reusable queries, operating procedures, and institutional knowledge into a unified system that agents can reliably read and use.

I am curious to see how a company like TextQL handles this type of question and competes with others offering similar solutions. Specifically, how do they integrate with ongoing, business-critical workflows while honoring permissions, legal, and compliance requirements in a legacy corporation with a tangled Microsoft identity and access management setup.

### The Goog strikes back

[https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon)

![Figure](/images/blog/2026-10-05-the-gauntlet-yet-to-come/image-03.png)

Lots of people counted Google out of the frontier model race, but they came back strong this past week with Gemini 4. I can't wait to try it once it reaches general availability. We are definitely seeing an embarrassment of riches when it comes to great models right now.

### Rise of the FDE

[https://x.com/jakeserval/status/2105659201221804372](https://x.com/jakeserval/status/2105659201221804372)

Many younger tech professionals I work with worry about their careers given the rapid, impressive rise of AI models. However, if you enjoy problem-solving and want to learn how to use AI effectively, this is actually a time of incredible opportunity.

A major trend I see across my network is enterprises rushing to embed forward deployed engineers across their departments to integrate AI into existing workflows. Success in this role requires strong technical expertise, a deep understanding of AI, and the ability to map the business processes being automated. There are no shortcuts to automation without this skill set, whether it lives in one person or a small team. Because these specialists are hard to find internally or hire directly, service companies offering this talent will grow significantly over the coming years.

What makes this so exciting is that it represents an entirely new enterprise function, creating countless new jobs in the economy. Every technological shift generates roles out of an immediate need in an emergent space, and the forward deployed engineer or automation engineer is the defining role for this generation. Nobody has a decade of experience here because the necessary tools did not exist ten years ago, or even a year or two ago. If you already have software skills and are diving into AI, this is a fantastic area to go deep in.

### Scientific Research Opportunity

[https://jasperlu.com/blog/prompted-similarity-search/](https://jasperlu.com/blog/prompted-similarity-search/)

I found this article really interesting because I see a great application for it in science, even though it focuses on image similarity.

Typically, embedding-based similarity search is limited by whatever notion of similarity the model learned during training. If the model is primed for semantic similarity, but you care more about visual appearance, you usually have to switch models. With this "concept lens projection" methodology, however, the distance between embeddings reflects only the specific concept you care about. The only real downside seems to be that you need a large model, since the embeddings must be dense enough for the projections to be meaningful.

Where I see this shining is in complex organic chemistry. If you have a library of candidate molecules and a known composition with a specific characteristic, could you use this to find a set of viable substitutes that work just as well?

### Adopt This

**AI Writing Policy**

1. **You must stand behind every idea and every sentence in your docs.** It is your responsibility to ensure the entire document represents your own thoughts before sharing. Readers should never hear "AI wrote that, ignore it" when asking about a passage.
2. **Writing is thinking.** The process of structuring ideas and choosing emphasis builds topic understanding. Written artifacts (specs, retrospectives, updates) serve as "proof of thought"—outsourcing generation risks bypassing the critical thinking required to understand the core problem.
3. **More time should be spent authoring a document than consuming it.** Generating long outputs from short prompts offloads effort onto readers. Because docs are read by many people, any reading friction incurs a multiplicative team cost, whereas authoring conciseness pays a one-time cost to benefit everyone.
4. **Longer is not better.** AI tends to pad text with vacuous phrasing that obscures meaning. Natural language transformations are rarely lossless; every automated rewrite risks stripping nuance that only the author fully understands.
