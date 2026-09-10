---
title: "The Missing Manual"
slug: "2026-02-21-the-missing-manual"
date: "2026-02-21"
description: "There is a question circulating in boardrooms right now, usually asked by a strategic advisor staring at a flat ROI chart: “If this technology is so revolutionary, why can’t we just buy the playbook f..."
coverImage: "/images/blog/2026-02-21-the-missing-manual/image-01.png"
tags: ["AI Strategy"]
readTime: "4 min read"
---

![Figure](/images/blog/2026-02-21-the-missing-manual/image-01.png)

February 21 , 2026

There is a question circulating in boardrooms right now, usually asked by a strategic advisor staring at a flat ROI chart: “If this technology is so revolutionary, why can’t we just buy the playbook from someone who has already figured it out?”

The answer is uncomfortable but necessary: There is no playbook because we are the ones writing it.

The past week crystallized the 2026 inflection point. Generative AI has escaped the lab, but as researchers note, most enterprise experiments are stuck in “Pilot Purgatory.” We are not failing to execute a known strategy; we are pioneering a new industrial logic in real-time against the friction of legacy reality.

Here is the technical, economic, and slightly absurd reality of why this is hard — and why being in the messy vanguard is exactly where we want to be.

### The Technical Reality: Shiny Models, Rusty Pipes

The bottleneck is no longer the model capability.  
This week, Google released Gemini 3.1 and Anthropic shipped Claude Sonnet 4.6. These models are terrifyingly capable. Sonnet 4.6 features “computer-use” capabilities that allow it to drive a thick-client claims system via pixels and keyboard emulation not far off from Opus 4.6 which crushed METR’s professional task benchmark (even with its issues)

![Figure](/images/blog/2026-02-21-the-missing-manual/image-02.png)

The Friction:  
The problem isn’t the AI; it’s what the AI touches. Legacy mainframes and 20-year-old SAP monoliths create a “distribution shift” that would make a pre-2023 LLM trainer weep.

-   Tokenization Entropy: Feed a modern agent raw EBCDIC-encoded policy records or IDoc fragments, and you trigger sub-word splits that destroy semantic fidelity. The model isn’t hallucinating; it’s choking on 1980s data formatting.
-   Latency & Compute: A 7B-parameter agent loop hitting a 1998-vintage DB2 via an ODBC wrapper routinely takes 4–8 seconds per tool call. This turns a “super-intelligent autonomous agent” into a jittery intern who takes a long coffee break between every keystroke.

The fix isn’t “rip and replace” (impossible). It is building closed-loop telemetry harnesses — treating deployment not as IT integration, but as a continuous RLHF problem, training the model on the specific, idiosyncratic mess of our own data schema.

### The Political Economy: Rational Resistance

Why do 82% of enterprises cite “data integration” as a blocker (ZDNet/Gartner)? Why did my own attempt to build an agentic workflow in Salesforce this week run aground?

[https://baincapitalventures.com/insight/the-hard-truth-about-enterprise-ai-adoption-and-how-leaders-get-it-right/](https://baincapitalventures.com/insight/the-hard-truth-about-enterprise-ai-adoption-and-how-leaders-get-it-right/)

It is not because the API is broken. It is because of Rational Resistance.  
As Thomas Sowell observed, knowledge in an economy is dispersed, and incentives are local. In a large enterprise:

-   The Supply Chain Dept owns the workflow knowledge.
-   Compliance owns the audit trail.
-   IT owns the uptime SLA.

Each group acts rationally to protect their “information monopoly.” A top-down mandate to “Deploy AI” threatens these local fiefdoms. Middle managers slow-walk these projects not because they are Luddites, but because they are rational economic actors minimizing risk to their bonus structure.

The Data: Deloitte’s State of AI 2026 report shows that while worker access to AI rose 50% YoY, only 34% of companies report “deep business-model transformation.” The rest are just using supercomputers to write slightly better emails.

[https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html)

### The Path Forward: Engineering Our Own Luck

So, how do we escape the absurdity of running god-like intelligence on database structures designed when the Spice Girls were topping the charts? We stop looking for a consultant’s playbook and start engineering our own solutions using two concrete methods:

Proposal A: The Shadow Layer (Technical)  
We don’t let the agent touch the core yet. We deploy “digital coworkers” via read-only adapters — screen-scraping and OCR. We run them air-gapped. Every action is logged; every failure becomes a data point for a nightly fine-tune.

The result is we get 25–40% cycle-time compression in high-volume workflows without triggering an IT civil war or risking the production database. And we avoid being part of the 56% of CEOs (PwC 2026 survey: [https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf](https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf)) to report “nothing” from AI spend, even as models get cheaper and more capable.

Proposal B: The “Ring-Fenced” Pod (Economic)  
We acknowledge the Sowellian reality and decentralize. We create cross-functional “AI Process Pods” (3–5 people) with a ring-fenced budget and a shared bonus pool tied to audited savings. We align the incentives of the subject matter expert and the AI engineer, localizing the knowledge where the work actually happens.

The Conclusion:  
The 2026 story is not “AI is here.” It is “AI is here, but it hates your legacy infrastructure.”  
The fact that we are hitting these walls, data silos, schema debt, political friction, is not evidence of failure. It is evidence that we are actually trying to do the real work while our competitors are still polishing their PowerPoint decks.

We are writing the manual. It’s messy, it’s hard, and it’s the only way to win.