---
title: "Words Matter"
slug: "2026-01-12-words-matter"
date: "2026-01-12"
description: "In an era where a stochastic parrot can generate a 5,000-word essay on the geopolitical nuances of 17th-century spice trade in four seconds, we face a paradox: Human writing has never been more ineffi..."
coverImage: "/images/blog/2026-01-12-words-matter/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

In an era where a stochastic parrot can generate a 5,000-word essay on the geopolitical nuances of 17th-century spice trade in four seconds, we face a paradox: Human writing has never been more inefficient, yet it has never been more valuable. It’s no surprise to anyone who knows me that writing, and words in general, both fascinate and inspire me. I grew up before streaming, when video games were primitive, and I loved reading, especially science fiction. As I’ve gotten older, I’ve had less time to read, but over the past five years I’ve written increasingly often, even about mundane things. It’s the practice of expression, of choosing words that precisely capture how I feel in a moment or how the world looks in all its myriad, beautiful ways. This is why LLMs, and their primarily natural language interfaces, resonated so deeply with me when they first appeared. And it’s why the article ([https://every.to/p/the-heyday-of-the-writing-first-practitioner](https://every.to/p/the-heyday-of-the-writing-first-practitioner)) by Eleanor Warnock appealed so much to me. It articulates something I have felt since the days of dial-up: writing is not just about output; it is about the compression of chaotic thoughts into structured logic.

The Economic Reality:  
In 2026, content is a commodity with a marginal cost of zero. Insight, however, remains scarce. A “writing-first” employee offers a signal that cannot be spoofed by an LLM: a public track record of judgment. When an engineer writes a manifesto on why they chose Rust over C++, they aren’t just communicating a decision; they are providing a verifiable history of how they process information.

The Enterprise Pivot:  
If you are hiring for high-leverage roles, you need to stop looking for “polish” (which GPT-5 can do) and start looking for “process” (which it cannot).

-   Decentralize Authority: Stop funneling everything through a PR team that scrubs the personality out of the message. A Principal Engineer with a Substack is a more effective recruiting beacon than a $50k LinkedIn ad campaign.
-   “Working Out Loud” as R&D: Shift from static reports to iterative logs. Treat internal documentation like Warren Buffett’s shareholder letters — a searchable history of decision-making logic, not just final outcomes.
-   The “Judgment” Moat: Encourage leaders to publish theses on market trends. It forces them to commit to a position. In a probabilistic world, the ability to be publicly right (or interestingly wrong) is the only metric that matters.

The Hiring Heuristic:  
When I interview today, I look for a “Public Archive of Judgment.” I don’t care about perfect grammar; I care about a distinct, “no-bullshit” voice. I want to see a candidate who uses AI to handle the rote transcription but reserves the high-level synthesis for their own biological neural net.

### Pricing Prediction Coming True?

It took exactly 11 days for my 2026 prediction regarding “use-specific pricing” to materialize (partly).

Anthropic has begun aggressive server-side checks on its Claude Code product, blocking third-party wrappers from using OAuth tokens derived from flat-rate subscriptions (Claude Pro). For the last year, developers have been engaging in a classic arbitrage. They purchase a flat-rate consumer subscription ($20/month) and use the OAuth token to power automated, high-volume workflows via third-party tools, effectively bypassing the metered API costs. They were getting enterprise-grade compute for the price of a streaming service.

Naturally, the developer community is up in arms, accusing Anthropic of a “bait-and-switch.” This is the equivalent of getting angry at an all-you-can-eat buffet because they won’t let you back a dump truck up to the sneeze guard.

But Anthropic is not a charity; it is a business burning capital on GPU clusters. Flat-rate subscriptions rely on the assumption that humans sleep and type slowly. Automated agents do neither. By forcing high-volume, headless traffic onto the metered API, Anthropic is simply correcting a pricing error. They are closing the subsidy loophole. If you want to run a swarm of coding agents, you are going to have to pay for the electricity.

### Consolidation

[https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale](https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale)

Two major deals over the past few weeks highlight that we have entered the “Consolidation Phase” of the AI hardware and software cycle.

Nvidia Licenses Groq (The Hardware Layer)  
Nvidia has entered a non-exclusive licensing agreement with Groq to utilize their SRAM-based inference technology.

-   The Engineering Reality: GPUs (HBM-dependent) are beasts at training (throughput), but they struggle with low-latency inference (batch size 1). Groq’s LPU architecture, which relies on massive amounts of SRAM, eliminates the memory bandwidth bottleneck during the decode phase.
-   The Strategy: Nvidia isn’t admitting defeat; they are effectively outsourcing the R&D for “inference-at-the-edge.” By integrating Groq’s IP into future Rubin variants, Nvidia ensures that even if you want low-latency inference, you’re still paying the “Green Tax.”

Meta Acquires Manus (The Application Layer)  
Meanwhile, the Wall Street Journal reports that Meta is acquiring Manus, a China-based AI startup. [https://www.wsj.com/tech/ai/meta-buys-ai-startup-manus-adding-millions-of-paying-users-f1dc7ef8](https://www.wsj.com/tech/ai/meta-buys-ai-startup-manus-adding-millions-of-paying-users-f1dc7ef8).

-   The Irony: Meta, a company with enormous resources and the Llama series, is buying a startup primarily for its users and workflow integration.
-   The Takeaway: It turns out that having (SOTA) weights is not the same as having a sticky product. Meta is acknowledging that they are struggling to build the “last mile” of application utility. They are buying a pre-built user base to feed their open-weights strategy. The consolidation continues: the incumbents will either build it, or they will buy you.

### Gartner Strikes Again

![Figure](/images/blog/2026-01-12-words-matter/image-01.png)

(To be fair, you have to check whether the surveys were done by Gartner or by the vendor. That said, IBM seems to have an unrealistic view of themselves.)