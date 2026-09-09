---
title: "Spicy Takes"
slug: "2026-02-28-spicy-takes"
date: "2026-02-28"
description: "(Archive​s available here: https://medium.com/@jung.marshall/marshalls-monday-morning-ml-archive-002-3f54812a7b37​ and here…"
coverImage: "/images/blog/2026-02-28-spicy-takes/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-02-28-spicy-takes/image-01.png)

(Archive​s available here: [https://medium.com/@jung.marshall/marshalls-monday-morning-ml-archive-002-3f54812a7b37](https://medium.com/@jung.marshall/marshalls-monday-morning-ml-archive-002-3f54812a7b37)​ and here: [https://medium.com/@jung.marshall/marshalls-monday-morning-ml-7af6a0d2b77f](https://medium.com/@jung.marshall/marshalls-monday-morning-ml-7af6a0d2b77f))

February 28, 2026

### Always Going to Be…

This week’s newsletter includes a couple of relatively spicy takes. I know strong opinions exist on both sides, but that won’t stop me from addressing them as logically as I can. Some will disagree — maybe vociferously — and that’s okay. Open exchange is a first step toward truth. I’ll aim to stay balanced, so if you think I’ve missed something, please follow up and share your thoughts.

### Anthropic vs. the DoW

Tension between the Department of War and Anthropic has been building for some time. While the DoW’s *actual* use of Anthropic’s AI tools is unclear, disputes over perceived contractual terms and potential AI uses have become public. On Friday, an ultimatum led to Anthropic being dropped as a DoW supplier and labeled a supply chain risk. See statements from both sides:

[https://x.com/SecWar/status/2027507717469049070  
](https://x.com/SecWar/status/2027507717469049070)[https://www.anthropic.com/news/statement-department-of-war](https://www.anthropic.com/news/statement-department-of-war)

Some may call this fence-sitting, but I think both sides are right and wrong. No outcome will satisfy everyone. Ethics and morals inevitably sort people into opposing camps on this issue. However, I have my own morals, so here’s my take. Anthropic is an American company, and in a constitutional republic like the United States, it’s acceptable to define who can use what you make and how. It’s also acceptable for a duly elected government to lose trust over those requirements, tell you to pound sand, and seek an alternative. Given our elected government’s duty to protect its citizens and interests by force when necessary (and following all laws and respecting Constitutional rights), it is never acceptable for a private company to constrain our government’s decisions in pursuit of that goal. I believe this is true, regardless of which political party is in power.

Since this is a technical newsletter, there’s a nuance we as computer scientists and AI enthusiasts should note. Unless an AI lab provides a uniquely unfettered, un-guardrailed model to the US Department of War for both offense and defense — you face a gnarly issue: the training process can induce undesired behavior when the model is asked to perform certain actions. Guardrails can be layered via system-prompt scaffolding or ingrained during model creation. If the latter, it’s understandable why Anthropic’s models might be incompatible with United States defense objectives. Essentially, post-training alignment techniques (especially Anthropic’s Constitutional AI) embed preference distributions directly into model weights, creating systematic behavioral biases that cannot be reliably overridden by inference-time scaffolding alone. If you’re using an AI model for national defense and it’s a black box that might refuse or hinder efficient execution of potentially lethal actions, it’s an untrustworthy black box. In this context, non-determinism is unacceptable.

### NGMI

When LLMs killed the Magic Quadrant: For decades, the enterprise followed a simple, safe rule: **Nobody ever got fired for buying Gartner.** In a world of high information asymmetry, companies paid six-figure retainers for the “Magic Quadrant” because they needed a map of a landscape they couldn’t see.

As AI-enabled research tools collide with a new breed of AI-native leaders, the traditional advisory model is becoming irrelevant. The value proposition of an advisory firm has always been curation and access. They had the “proprietary” view because they spent thousands of hours interviewing vendors.

Today, that moat is evaporating for three reasons:

-   Velocity Mismatch: Analyst cycles (quarters) cannot keep up with AI’s speed (weeks).
-   Synthetic Synthesis: Tools now instantly synthesize technical data, eliminating the need for an intermediary.
-   AI-Native Executives: New leaders are practitioners who trust internal knowledge over generic reports.

To be fair, the “human” element of advisory still has value — specifically in peer benchmarking. Knowing what your competitors are *actually* struggling with (and not just what they say in PR) is the last remaining bastion of the analyst.

For survival, advisory firms must shift from “Analysts” to “Architects”:

1.  From PDFs to Real-Time Data Streams: Offer live, API-driven benchmarking.
2.  The “Implementation Gap” Advisory: Pivot from what to buy to how to integrate, focusing on deployment and change management.
3.  Proprietary Data Moats: Create unique, anonymized operational datasets (e.g., AI spend-to-ROI).

The “Trusted Advisor” isn’t dead, but the “Information Gatekeeper” is. For those of us leading AI strategies, the goal isn’t to find the next Gartner report; it’s to build the internal muscle to render that report unnecessary.

### Too Confusing

[arxiv.org/abs/2602.11988](http://arxiv.org/abs/2602.11988)

As coding-focused models grow better at understanding diverse languages and styles, we should recognize that our tendency to overconstrain them (often through markdown files meant to guide tasks) can increasingly cause problems. We use context files in repos to help agents, assuming more context means better performance. But the paper above shows the opposite: LLM generated agent files often reduce task success by 0.5–2% on benchmarks while raising inference costs by over 20% as agents over-explore. Developer-written files improve success by about 4%, but still increase costs and steps, often duplicating existing repo docs without speeding up file discovery.

Takeaway is skip LLM-generated files to avoid context rot, and keep developer-generated markdown to a task-specific minimum, relying on existing repository documentation for the heavy lifting.

### LLM Docs

I keep returning to the challenge of recording, indexing, and understanding large volumes of unstructured information. My goal is a “synthetic CEO” that can answer natural-language questions with an up-to-date, CEO-level view of an organization. The hard part is the sheer volume of enterprise data generated daily. Storing, accessing, and surfacing timely and relevant information for an LLM to respond usefully is far more difficult than it first appears.

I see two ways to approach this problem, which may overlap as we move forward. First, what I consider the best current methodology for storing information for LLMs, GraphRAG. I think Neo4j is the best open source bet: [https://github.com/neo4j-labs/llm-graph-builder](https://github.com/neo4j-labs/llm-graph-builder) but there are other unique methods: [https://github.com/VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)

However, as agentic systems evolve, they increasingly rely on human-like storage methods. Many are turning to the familiar file system to give agents clear visibility into complex structures.

[https://x.com/koylanai/status/2025286163641118915  
](https://x.com/koylanai/status/2025286163641118915)[https://x.com/mernit/status/2021324284875153544](https://x.com/mernit/status/2021324284875153544)

As AI skills improve, we’ll likely see overlap among information retrieval systems. Agents that reason over file systems make sense from a human perspective, while larger, more complex data sets may be better served by graph traversal with a graph-RAG approach. We could even see a combination of techniques… a “knowledge operating system” — a hierarchical, multi-modal memory fabric that blends parametric (in-model), non-parametric (vector/graph), and procedural (file-system-like) layers, with retrieval no longer a bolted-on pipeline but a first-class primitive deeply fused into the reasoning loop. I’d love to hear what my readers are exploring along these lines.