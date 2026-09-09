---
title: "From the Sandbox to the Assembly Line"
slug: "2025-12-08-from-the-sandbox-to-the-assembly-line"
date: "2025-12-08"
description: "From the Sandbox to the Assembly Line"
coverImage: "/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-01.png"
tags: ["AI Strategy"]
readTime: "4 min read"
---

Some personal news: I have accepted a role as Senior Director of Global Artificial Intelligence at Valvoline.

This marks a distinct shift from my recent work with fractional CTO roles and startups. While the startup world offers speed and novelty, the enterprise world offers scale and reality. They are different, but I’m making the jump because leadership there understands that AI is no longer a technical curiosity; it is an operational imperative. One of the few enterprises that understands what it takes to hire the next generation of AI enabled tech employees. The word is getting out.

As anyone at the bleeding edge of AI these days knows, there is a massive, unaddressed gap between the breathless predictions of AI commentators and the reality of a Fortune 1000 P&L. Those predicting immediate, widespread white-collar displacement usually haven’t spent enough time navigating the inertia of legacy workflows or the compliance requirements of a big company. My goal is to bridge that gap — moving from “demo cool” to “enterprise critical.”

The Trade-off: Have no fear, this newsletter isn’t going anywhere. In fact, it will likely get sharper. You will see fewer theoretical musings and more battle-tested observations on how Microsoft-centric organizations actually deploy this technology.

The Perk: Valvoline is a motorsports company at its heart. If I can align my site visits with the Formula One calendar or a V8 Supercars race in Australia, I consider that a successful optimization of my personal objective function. I will post photos to induce appropriate levels of jealousy.

![Figure](/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-01.png)

### Untangling a Gordian Knot

One of the hardest problems in enterprise AI is untangling the Gordian knot of “who actually does what.” Org charts are theoretical; workflows are tribal.

[https://www.anthropic.com/research/anthropic-interviewer#main-content](https://www.anthropic.com/research/anthropic-interviewer#main-content)

Anthropic has released a new tool called The Interviewer, designed to conduct automated, large-scale voice interviews with employees to map these hidden operational realities. In a test run of 1,250 professionals, it moved beyond analyzing chat logs (what people type) to understanding sentiment and intent (what people feel).

This acts as a scalable “MRI scan” for an organization. Instead of relying on a consultant’s report, you can identify “shadow workflows” — the informal dependencies where Department A secretly waits on Department B for data that isn’t documented in any SOP.

The study revealed a fascinating “stigma metric.” 69% of professionals feel social pressure to hide their use of AI. In an enterprise, this is a disaster; it means efficiency gains are being siloed rather than shared. By anonymizing this discovery process, we can “daylight” these efficiencies and turn illicit productivity into standard policy.

![Figure](/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-02.png)

### Turning SQL to Conversation

[https://www.openlinksw.com/data/pdf/Live\_Knowledge\_Graph\_from\_SQL\_using\_Virtuoso\_Support\_Agent.pdf](https://www.openlinksw.com/data/pdf/Live_Knowledge_Graph_from_SQL_using_Virtuoso_Support_Agent.pdf)

Speaking of legacy friction, nothing slows down AI adoption like the rigidity of SQL databases. A new demo using Gemini 3 and OpenLink’s OPAL layer shows a promising path forward.

The system uses Gemini’s reasoning capabilities to transform static Northwind SQL tables into a live, queryable RDF (Resource Description Framework) knowledge graph.

The Engineer’s View: Historically, this required a painful, manual ETL (Extract, Transform, Load) process to map relational schemas to graph ontologies. The demo shows AI agents handling the mapping and visualization via natural language prompts.

This validates the thesis that LLMs might finally make “Linked Data” practical. By effectively treating SQL as a foreign language that the model can fluently translate into knowledge graphs, we lower the barrier to asking complex, multi-table questions without writing a single line of JOIN syntax.

![Figure](/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-03.png)

### Marketing at Zero MArginal Cost

The Google AI Studio team dropped a tutorial on X regarding the new image generation model in Gemini 3. It demonstrates a workflow that combines real-time market data search with individualized visual content generation.

The Irony: We used to worry that AI would make marketing “generic.” The opposite is happening. As the cost of generation drops to near-zero, we are entering an era of hyper-specific, disposable assets. It is now economically viable to generate a unique, high-fidelity image for a single customer interaction — something that was previously impossible. The creative bottleneck has moved from “production” to “curation.”

[https://x.com/GoogleAIStudio/status/1992267030050083091](https://x.com/GoogleAIStudio/status/1992267030050083091)

![Figure](/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-04.png)

### Solid Prompt

[https://ai.google.dev/gemini-api/docs/prompting-strategies#agentic-si-template](https://ai.google.dev/gemini-api/docs/prompting-strategies#agentic-si-template)

Last week, I ranted about how custom system prompts are often counter-productive, interfering with the model’s RLHF tuning. I stand by that — unless the prompt is structurally sound.

Google has released an “Agentic System Instructions” template that is worth your time.

Why it works: It avoids emotional manipulation (“You are a helpful assistant”) and focuses on structural constraints. It uses clear delimiters (XML tags) and few-shot examples to define the output format strictly. If you are building agents that need to reliably interface with other software, this is the blueprint to copy. It respects the model’s logic while constraining its output — the perfect balance for production engineering.

![Figure](/images/blog/2025-12-08-from-the-sandbox-to-the-assembly-line/image-05.png)