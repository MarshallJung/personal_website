---
title: "Risk/Reward"
slug: "2026-03-27-risk-reward"
date: "2026-03-27"
description: "March 27, 2026"
coverImage: "/images/blog/2026-03-27-risk-reward/image-01.png"
tags: ["AI Strategy"]
readTime: "7 min read"
---

![Figure](/images/blog/2026-03-27-risk-reward/image-01.png)

March 27, 2026

If you’re in the AI space then you’ve probably seen the news about the LiteLLM supply chain attack from last week. There are plenty of in-depth analyses available, and I’m not a security researcher, but here’s the short version:

-   Trivy, an open source security tool, was compromised via a malicious GitHub pull request (Trivy’s fault). That led to token theft and a malware injection.
-   From there, multiple packages were infected, including LiteLLM.
-   The malware automates Kubernetes lateral movement and exfiltrates data like SSH keys, cloud credentials, crypto wallets, and shell history, then stores the stolen data on the blockchain for persistence.
-   This is especially damaging in the AI space because LiteLLM is a widely used open source dependency, with tens of millions of monthly installs across many open source and proprietary AI tools.

Although this was framed as an AI exploit, it had little overlap with AI beyond infecting a widely used package. Some reports suggest parts of the malicious code were written with AI, but there’s no conclusive evidence. It also infected non-AI packages, not just LiteLLM.

The clear security takeaway is that LLM-driven code generation has massively increased the volume of code over the past 18 months. Whether written by AI or by humans partnering with AI, more code means more opportunities and threat vectors for attackers. LLMs can supercharge productivity, but they also introduce risks that responsible developers must keep front of mind, whether working personally or in an enterprise environment.

Oh, and for extra lols:

![Figure](/images/blog/2026-03-27-risk-reward/image-02.png)

### Benchmarks

ARC-AGI-3 is the latest (and first fully interactive) version of François Chollet’s Abstraction and Reasoning Corpus benchmark series, released on March 25, 2026 by the ARC Prize Foundation. Unlike the earlier static grid-puzzle versions (ARC-AGI-1 and -2), ARC-AGI-3 consists of hundreds of original turn-based, game-like environments (64×64 grids with 16 colors, 1,000+ levels total). Agents must explore completely novel worlds with no instructions, infer goals on the fly, build internal world models, plan long-horizon actions, adapt continuously, and learn from experience — exactly the kind of agentic, fluid intelligence needed for real-world generalization. So far, Google’s Gemini 3.1 Pro heads the leaderboard at 0.37%.

Strongest case that ARC-AGI-3 is a necessary hurdle for proving AGI…

Chollet’s ARC-AGI-3 is argued as the necessary AGI hurdle. It measures skill-acquisition efficiency — the ability to rapidly learn novel tasks using only core knowledge (e.g., geometry, causality) and on-the-fly experience, without relying on pre-trained data or domain instructions. Unlike prior benchmarks saturated by scaling and interpolation, ARC-AGI-3 prevents overfitting via novel, private environments and demands autonomous exploration, planning, and belief updating. A measurable gap between human and AI learning efficiency on ARC-AGI-3 indicates a lack of the core adaptive intelligence (fluid intelligence) required for true AGI, making it an essential, hard-to-game yardstick for tracking human-level generality.

Strongest case that benchmarks like ARC-AGI-3 don’t tell us much about how these tools perform in real-world workflows today…

Real-world tasks almost never look like zero-shot abstract grid games with no language, no tools, no APIs, no examples, and no scaffolding. Production AI workflows (coding, research, data analysis, customer support, automation pipelines, etc.) operate in known or semi-structured domains where models can leverage massive pre-training, retrieval, tool use, chain-of-thought, external memory, user feedback, and domain-specific harnesses. Those capabilities already deliver enormous economic value today — LLMs and early agents are transforming software engineering, knowledge work, and many creative/analytical jobs — even while scoring near zero on ARC-AGI-3.

The benchmark deliberately maximizes “unknown unknowns” and strips away every shortcut humans and current systems actually rely on in practice. It therefore measures one narrow facet of generalization that is not the primary bottleneck (or even a major one) for most high-value applications right now. Heavy engineering and domain adaptation routinely boost real-world performance far beyond what raw frontier-model scores on ARC-AGI-3 suggest, making the benchmark a poor proxy for practical usefulness or near-term economic impact.

### Mirofish

Many readers will recognize names from prediction markets (Kalshi, Polymarket) — legal platforms where people bet on outcomes of almost any event, from geopolitics and sports to celebrity news. While the ethics of gambling are personal, prediction markets have a surprisingly strong record of accuracy. Participants are incentivized to be right and may have insider context or specialized knowledge, helping them profit in niche areas.

A recent evolution of this market concept is Mirofish, an open source AI prediction engine reportedly built by a 20-year-old developer in about 10 days. It’s an LLM-powered world model where thousands of autonomous agents act within a simulated digital society, using swarm intelligence and emergent behavior for forecasting. Here are the details.

-   Core Mechanism: You feed it “seed material” (news articles, financial reports, policy drafts, market signals, or even novels) plus a natural-language prediction query.
-   GraphRAG simulates social dynamics for predictive foresight. It builds a knowledge graph from the “seed material,” then uses the OASIS framework to spawn personalized agents with long-term memory (via Zep Cloud). These agents interact over parallel simulation rounds using 23+ social actions, dynamically updating their memories.
-   A ReportAgent analyzes emergent outcomes (e.g., opinion shifts) to produce a structured prediction report. The system, which can use any OpenAI-compatible LLM (e.g., Alibaba Qwen-plus), runs locally or in the cloud via Docker/npm, with high token usage being the main cost. Its power lies in simulating messy human behavior (persuasion, herd dynamics) for qualitative, emergent predictions.

Some have shown this backtests profitably in sports and stock market trades, but I’m more interested in how you’d apply it in an enterprise environment. Here’s some ideas:

-   **Supply Chain Prediction / Resilience Planning** Upload internal docs + external triggers (e.g., geopolitical news, tariff policies, weather events, or supplier failure reports). Agents represent suppliers, logistics firms, buyers, regulators, and consumers. The simulation reveals emergent effects: bottlenecks, panic hoarding, price spikes, rerouting coalitions, or alternative sourcing opportunities. Finance/operations teams use “what-if” injections (e.g., “What if we diversify to Vietnam?”) to stress-test mitigation strategies before real disruptions hit — ideal for scenario planning and second-order risk mapping.
-   **Finance Department Use Cases (Market Sentiment & Scenario Forecasting)** Feed earnings reports, policy signals, or market news. Agents act as retail investors, institutional funds, analysts, and media personalities with varied risk profiles and memories. They interact, form sentiment bubbles, and react to news cycles. Output: predicted volatility, price reactions, coalition shifts, or trading signals over days/weeks. Perfect for stress-testing portfolios against hypothetical Fed moves, competitor actions, or geopolitical shocks (e.g., oil price forecasts from conflict scenarios). Many teams run it alongside traditional quant models for qualitative “human behavior” layer.

### Necessary Sacrifices

[https://www.theinformation.com/articles/microsoft-freezes-hiring-major-cloud-sales-groups](https://www.theinformation.com/articles/microsoft-freezes-hiring-major-cloud-sales-groups)

The article says Microsoft has told managers in its cloud unit and North American sales groups to suspend new hiring. The freeze covers candidates without existing offers and is driven by cost cutting ahead of the June fiscal year end. Teams building Copilot AI tools and other AI products are still hiring.

Microsoft has about 1/4M employees and recently reported much slower cloud growth alongside record AI capital spending, a mix that’s making investors nervous. The company’s deal with OpenAI is tenuous(recently strained by a backdoor deal with Sam and AWS) amid large committed capital spending, some of which may not materialize. The current strategy only pencils out if AI starts generating returns quickly enough to justify the investments.

Freezing cloud sales hiring while continuing to build Copilot signals where they expect growth to come from…and it isn’t from headcount. Cutting headcount costs to protect margins while waiting for AI to pay off isn’t unique. Amazon and Meta are doing it too. The pattern is to replace people with AI investment, show market discipline, and hope returns arrive before questions get too loud. This year will bring us closer to finding out if that bet is right.