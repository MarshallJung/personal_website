---
title: "The Human Firmware Update"
slug: "2025-12-15-the-human-firmware-update"
date: "2025-12-15"
description: "The Human Firmware Update"
coverImage: "/images/blog/2025-12-15-the-human-firmware-update/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

I’ve spent my first two weeks as Senior Director of Global AI at Valvoline Global Operations, and it has clarified a suspicion I’ve held for years: The primary bottleneck in enterprise AI is not the silicon; it is the carbon.

I’ve always been at the front edge of the technology wave over the years. From Google through startups I’ve been surfing “in the pipe” so to speak. To get enthusiastically stuck-in helping a modern enterprise adopt AI is to witness a collision between a technology that evolves by the hour and a legacy organisation that regards “Change Management” as a dark art best practiced once a decade, preferably on a Friday.

The data is consistent. Reports from McKinsey and Deloitte suggest that while 88% of companies claim to use AI, only about 40% actually train their people to use it. The result is “Shadow AI” — a phenomenon where employees quietly run LLM subscriptions on personal credit cards, sometimes on their own devices, effectively running a subterranean IT department because the official one is still debating the risk assessment of a chatbot.

If we want to avoid this — and avoid the Vogon-level bureaucracy of banning tools that actually work — we need to update the human firmware. Here is the Hitchhiker’s Guide to actually doing it:

-   Don’t Panic (The Assessment): A good portion of the employees view AI with the same suspicion they reserve for a restructuring consultant. You must first triage the workforce. Who is terrified? Who is curious? You cannot train them all the same way.
-   The Babel Fish Approach (Tiered Training): Stop forcing your Principal Engineers to watch “What is a Large Language Model?” videos.
-   — For the Generalist: Teach governance and basic prompting (e.g., “Don’t paste the Q3 earnings into the public web UI”).
-   — For the Builders: Give them the keys to the armory — Agentic frameworks, API keys, and permission to break things in a sandbox.
-   The “Improbability Drive” (Experimental Labs): Theory is useless. You must run workshops that are dangerously practical. Don’t tell them how to prompt; make them do it. Critique the output. Laugh at the hallucinations. If they don’t see the AI lie to them at least once, they will trust it too much.
-   Teach “AI as Coach,” not “AI as Oracle”: The biggest mistake is treating the AI like a magic answer box. It is not Deep Thought; the answer is rarely just “42.” Teach employees to use it as a recursive feedback loop. Ask it to critique your email. Ask it to explain why the code failed. Make the human the pilot and the AI the navigational computer — because the computer occasionally thinks mountains are clouds.

### AlphaEvolve: Evolution as a Service

Google DeepMind has released AlphaEvolve, a coding agent that doesn’t just write code; it breeds it.

[https://cloud.google.com/blog/products/ai-machine-learning/alphaevolve-on-google-cloud](https://cloud.google.com/blog/products/ai-machine-learning/alphaevolve-on-google-cloud)

The system uses Gemini models to mimic biological evolution. It takes a “seed” program, mutates it, evaluates the performance against a ground truth, and selects the fittest version for the next generation. It is a brute-force optimization engine that uses LLMs as the mutation operator.

The Industrial Application:  
While the blog post focuses on molecular biology, the implications for Chemical Process Control are staggering. Consider a standard chemical reactor controlled by a PID loop or Model Predictive Control (MPC).

-   The Old Way: Engineers manually tune these loops to balance temperature, pressure, and yield.
-   The AlphaEvolve Way: We input the standard control logic as the “seed” and a digital twin of the reactor as the “evaluator.” The agent then mutates the control algorithm through thousands of generations, potentially discovering non-linear control strategies that a human engineer would never intuitively write.

This isn’t just about finding new drugs; it’s about squeezing 2% more yield out of a refinery by letting an AI evolve a better math equation for the heat exchanger.

### The “Buy” Signal and The Macro Trade-off

[https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/)

Menlo Ventures released their “State of Generative AI in the Enterprise 2025” report. The headline numbers are bullish — $37B in spend, up 3.2x YoY — but we need to look at the invisible hand moving the pieces.

![Figure](/images/blog/2025-12-15-the-human-firmware-update/image-01.png)

The Strategic Shift:

-   Build is Dead: In 2024, everyone wanted to build their own models. In 2025, 76% of use cases are bought. The market has realized that training a foundation model is a game for nation-states and trillion-dollar market caps.
-   The Palace Coup: Anthropic has flipped OpenAI in the enterprise, capturing 40% of spend (driven by coding tasks).

The Economic Trade-off:  
While the report celebrates the surge in spending, we must ask: at what cost?

1.  Capital Reallocation: That $37B isn’t new money; it’s reallocated capital. We are seeing a massive diversion of enterprise IT budgets away from traditional SaaS and labor toward AI inference. If this spend doesn’t result in a commensurate productivity jump (solving the Solow Paradox), we are witnessing a classic misallocation bubble.
2.  The Rent-Seeker Economy: With 76% of companies shifting to “Buy,” we are cementing an oligopoly structure. The economic value is not being captured by the end-user enterprise (who is paying rent) but is concentrating in the hands of the Model Providers (the landlords). This effectively places a tax on future innovation. To build a company in 2026, you must pay the “Intelligence Toll” to Google, Anthropic, or OpenAI.
3.  The “Shadow” Deflator: The report notes that individual employee adoption is 4x faster than corporate adoption. This suggests the macro economy is becoming more productive faster than the GDP numbers show, because the efficiency gains are happening “off the books” via $20/month personal subscriptions. We may be undercounting productivity because we are looking at the wrong ledger.

### Theory of Mind and The Art of Decomposition

A new paper by Riedl and Weidmann (2025) offers a fascinating psychological unlock for AI productivity. They found that a user’s success with AI doesn’t correlate with their solo problem-solving skills; it correlates with their Theory of Mind (ToM) — the ability to simulate the perspective of another mind.

[https://osf.io/preprints/psyarxiv/vbkmt\_v1](https://osf.io/preprints/psyarxiv/vbkmt_v1)

Users who treat the LLM like an alien intelligence — anticipating its confusion and predicting where it will hallucinate — get better results.

The Missing Link:  
However, empathy alone isn’t enough. You need to combine that “Theory of Mind” with System Decomposition.

-   Empathy: Understanding that the model has a limited context window and struggles with ambiguity.
-   Engineering: Breaking a gnarly, complex problem into atomistic, logical steps that fit inside that window.

The “10x Engineer” of 2026 isn’t just a good coder. They are a systems architect who can deconstruct a problem into Lego blocks, and an empath who knows exactly how to explain the blueprint to an alien that has read every book in the library but has never lived a day of life.

### Never Surrender!

![Figure](/images/blog/2025-12-15-the-human-firmware-update/image-02.png)