---
title: "The Future is Local"
slug: "2026-07-06-the-future-is-local"
date: "2026-07-06"
description: "jung.marshall@gmail.com"
coverImage: "/images/blog/2026-07-06-the-future-is-local/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-07-06-the-future-is-local/image-01.png)

jung.marshall@gmail.com

Wild West, Colorado

(720)315–6713

(Archive​s available here: [https://medium.com/@jung.marshall](https://medium.com/@jung.marshall/marshalls-monday-morning-ml-archive-002-3f54812a7b37))

July 05, 2026

### The Future is Local-ish

Happy birthday to the United States! While 250 years is brief in the span of history, it’s an accomplishment to be proud of. Wherever you are, have a great 4th of July and appreciate the blessings we share as citizens and patriots of the United States.

I’ll be on vacation this week, so this newsletter is a bit shorter than usual. I’ll aim to do better on the next one. That said, there’s an interesting trend emerging in the enterprise AI space. I’ll share a set of headlines and links without initial comment. While they may not seem directly connected, they point to a broader trend that enterprise leaders should consider as they plan AI rollouts in their organizations.

![Figure](/images/blog/2026-07-06-the-future-is-local/image-02.png)

![Figure](/images/blog/2026-07-06-the-future-is-local/image-03.png)

[https://www.internationalcyberdigest.com/claude-code-accused-of-hiding-china-proxy-fingerprints-inside-system-prompts/](https://www.internationalcyberdigest.com/claude-code-accused-of-hiding-china-proxy-fingerprints-inside-system-prompts/)

![Figure](/images/blog/2026-07-06-the-future-is-local/image-04.png)

![Figure](/images/blog/2026-07-06-the-future-is-local/image-05.png)

—

Let’s start with a telling example from Anthropic. Until about three days before the company launched Claude Design, a senior executive sat on Figma’s advisory board. Claude Design essentially replicated Figma’s core visual-to-frontend workflow inside Anthropic’s own harness UI. Figma leadership said they were blindsided; the platform’s valuation fell sharply in the months that followed while Anthropic’s kept rising. (It didn’t kill every Figma use case, but the message was clear.)

Anthropic has been shipping vertical packages. Legal and security workflows and, most recently, a co-science skills suite for scientific work and has signaled ambitions to move further into drug discovery itself**.** The pattern is becoming hard to miss. Frontier labs are concluding that token sales alone won’t deliver returns fast enough to justify their valuations and burn. So they are moving downstream. Productizing the workflows, interfaces, and domain expertise their own customers and partners helped create. In effect, the vendor becomes a competitor in the same verticals its users occupy.

That dynamic makes the data sovereignty conversation urgent. Alex Karp laid out the alternative plainly in his recent CNBC interview: a broad Palantir–Nvidia partnership that keeps Nvidia’s open-source models, company-specific fine-tunes, tokens, and workflows inside proprietary Palantir environments. Nothing leaves the customer’s control. It is a direct rebuttal to the capture risk frontier labs appear to be courting in pursuit of near term profitability.

(Karp didn’t address the fine print in most enterprise EULAs with providers like Anthropic or OpenAI: they already prohibit using customer data to train base models. The sovereignty concern is therefore more subtle. Inference-time visibility, the ability of terms to shift, and the quiet productization of aggregate usage patterns. How cleanly that squares with claims of data risk is still an open question.)

Palantir’s pitch: own or tightly control your model weights and the routing layer that decides which model handles what, amounts to deciding your own AI future. Given the still punitive token economics of routing everything through a frontier lab, the shift toward hybrid sovereign stacks was probably inevitable. Most day-to-day work can already run on locally hosted or VPC deployed open source models; frontier models get reserved for the hard problems via a control plane that routes on task fit, cost, sensitivity, and compliance.

In theory this approach directly addresses enterprise fears that frontier labs will clone a company’s alpha. In practice it is still early. No one fully trusts the long term behavior of open source models, especially the powerful Chinese ones. You can self host the weights, but their internal tendencies are hard to map. Jailbreaks routinely surface sketchy outputs; it is reasonable to worry that some models carry pre-trained behaviors like data handling quirks or policy evasions, that fall short of corporate compliance standards. U.S.-origin open models feel cleaner on governance, but they are not yet as capable across the board.

Control planes themselves are still nascent and will be expensive to build and maintain at scale. Karp is, of course, talking his book (Palantir sells one) but the underlying dependency and opacity concerns are not wrong. This transition will also create real demand for a new class of technical talent: engineers who can design, secure, and operate multi-model AI networks inside enterprise boundaries. The playbooks and best practices for that work are still being written.

Humorously, credit where it is due: Sam Altman’s willingness, or strategic inability, to engage in the same partner-devouring tactics has made OpenAI’s enterprise products feel marginally more palatable than Anthropic’s to companies worried about their vendor turning competitor. It does not solve OpenAI’s profitability problem. The reported proposal to give the Trump administration (or the American public) a five percent stake looks like an attempt to purchase temporary goodwill and headlines. Whether it changes enterprise risk calculations is less clear.

Recent allegations that tools in the Claude Code family carried hidden China-proxy fingerprints and tied system prompts only sharpen the same point: even “trusted” frontier tooling can contain unexpected external influence and opaque prompt behavior.

In short, if you are retooling an enterprise with AI right now, the landscape is moving fast enough to justify decision paralysis. The winning posture is not to anoint a single provider or architecture today. It is to build durable internal patterns around governance, model-routing logic, evaluation harnesses, data provenance, and rollback plans, while deliberately staying flexible on the underlying models and platforms. That flexibility lets you capture value quickly and avoid the costly rewrites that come from locking into a stack whose incentives may no longer align with yours.

### Clear the Tabs!

[https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data](https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data)

[https://github.com/google-research/tabfm](https://github.com/google-research/tabfm)

About a year ago, I consulted on some predictive maintenance work using language models to detect and predict outliers in time series data. I used Google’s TimesFM with strong results. Building on that, Google released TabFM, a foundation model for tabular data that streamlines classification and regression. Since much enterprise data is tabular, this can add significant value by simplifying core regression and classification tasks. There’s a detailed blog post and an early-access sign-up; this looks especially useful for companies doing large-scale data analysis.

### The Continuing Pursuit of Memory

[https://x.com/crtr0/status/2066558169741173177](https://x.com/crtr0/status/2066558169741173177)

Long-time readers know I’m low-key obsessed with building a “second brain” for my day-to-day work. I want a way to store all interactions with coworkers, contractors, and projects so I can quickly find and reference them, or hand them to AI agents to leverage existing knowledge. I’ve been building this personal brain in markdown, stored in an Obsidian vault. However, this article argues that file systems are human- and machine-comprehensible and meet the following qualifications.

1.  Retain facts across sessions
2.  Retrieve facts selectively, because “just dump everything into the context window” stops working quickly
3.  Update and correct itself over time, which rules out a lot of read-only approaches
4.  Stay inspectable by humans, because LLMs are non-deterministic, and a black-box memory system is a debugging nightmare

What are you using for long-term memory and context storage in your AI interactions?