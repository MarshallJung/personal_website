---
title: "Touching Grass"
slug: "2026-08-31-touching-grass"
date: "2026-08-31"
description: "This week, we will cover a few economic and business strategy concepts. Don’t worry, I will still include some tech tips at the end for readers who like getting some dirt under their fingernails."
coverImage: "/images/blog/2026-08-31-touching-grass/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-08-31-touching-grass/image-01.png)

(720)315–6713

### Touching Grass

This week, we will cover a few economic and business strategy concepts. Don’t worry, I will still include some tech tips at the end for readers who like getting some dirt under their fingernails.

### Hugging Face Smothered?

As of Saturday morning, August 29th, there is still no official confirmation that NVIDIA is acquiring Hugging Face in a rumored $12.9 billion deal. Public details remain thin, but if it closes, this will be NVIDIA’s largest acquisition to date, surpassing the $7 billion Mellanox purchase that helped pave their way into AI.

Hugging Face is currently generating around $150 million in annualized revenue and is reportedly “near profitability” for whatever that counts in the tech world these days. Still, an 86x sales multiple reflects a major strategic bet on distribution rather than a standard software valuation. For context, Hugging Face last raised a $235 million Series D in August 2023 at a $4.5 billion valuation, purposefully structuring the round across multiple partners to maintain an “ecosystem” or “Switzerland of AI” neutrality. When NVIDIA offered a $500 million investment at a $7 billion valuation in late 2025, Hugging Face declined to avoid letting a single backer sway company decisions. So what changed? Who knows. Salesforce and Microsoft were also reportedly in the mix, and most of us are likely relieved this is not turning into another GitHub situation. IYKYK.

I have often noted in this newsletter that the concentration of AI influence and resources will inevitably flow toward hyperscalers, and this acquisition fits that pattern. Hugging Face built its brand on hardware and vendor neutrality, supporting models that run across NVIDIA, AMD, Intel, Google TPUs, and multiple clouds. Meanwhile, NVIDIA sells the dominant accelerator and wants more training and inference workloads to land on CUDA and its own cloud stack, including a potential revival of the scaled-back DGX Cloud business. At the same time, many model providers and neo-clouds have been exploring ways to escape NVIDIA lock-in by building on non-CUDA alternatives.

NVIDIA’s acquisition of Hugging Face creates an inherent tension around stack neutrality, even if model neutrality survives. Model neutrality is easier to maintain because NVIDIA is not a frontier model lab competing with checkpoints from Meta, Mistral, Qwen, or independent researchers. However, stack neutrality is where the influence will likely appear first. Through search rankings, default inference, recommended runtimes, and one-click deploys, NVIDIA can shape the ecosystem not by removing models, but by making CUDA the path of least resistance.

The most optimistic take is that this acts as a Western open weight counter to Chinese labs, which currently hold a large share of open model downloads and tokens. A well-funded Western hub offers the infrastructure for that competition, aligning with the open weights letter signed in July by NVIDIA, Hugging Face, Meta, Microsoft, and others.

The primary concern, however, is concentration. Uniting compute, networking, CUDA, and the main model registry under one public company runs counter to the Hugging Face founders’ long-standing stance against centralized power. NVIDIA also presents a Typhoid Mary contagion risk, given its relatively opaque and sizable circular financing across the wider AI industry.

Overall, we will just have to wait and see if this deal actually materializes and how it affects user choice in a future where models themselves are highly commoditized.

### No, REALLY go touch some grass!

[https://youtu.be/aV26V1UvkJw?si=DZaicV1h4B5W6ue\_](https://youtu.be/aV26V1UvkJw?si=DZaicV1h4B5W6ue_)

Dwarkesh Patel recently interviewed the head of SemiAnalysis, covering frontier AI lab economics over the next few years, the shift from inference to training as recursive self-improvement nears, and how Anthropic and OpenAI are on track to control most of the world’s usable FLOPS within the next half-decade.

The video is entertaining and offers great insight into what the very edge of the SV AI movement is thinking. But every time I listen to folks like this, I want to shout at the clouds that they need to leave their bubble, visit an average 5,000-employee enterprise in mid-America, and see how AI is actually being implemented. If they did, they would have a completely different set of talking points for their next podcast.

As someone who uses just a bit less than half my brain on economics, startups, and business evaluation, it always surprises me that people in Silicon Valley’s AI venture capital space often don’t have much of a grasp of the demand side of supply and demand economics.

In the podcast, the host and guest focused almost exclusively on supply-side revenue forecasts, assuming explosive demand growth for OpenAI and Anthropic services without detailing any concrete sources.

Outside of tech-heavy businesses and startups, there are major obstacles to rapid revenue growth. The average enterprise faces significant political friction and high monetary costs to reorganize. They also completely ignored how competition will push token prices down especially as fine-tuned, self-hosted open-source models become more common.

Additionally, they overlooked the natural limits to how much AI services (ex. legal and engineering) people can consume, even if lower token prices and AI replace those white-collar jobs. There is only so much AI legal advice one can use. No one needs an AI lawyer eight hours a day, no matter how cheap it gets.

Finally, they missed the broader macroeconomic demand shortfalls that could occur if AI automates production without giving people the purchasing power to consume the goods it makes abundant.

I don’t think frontier labs like Anthropic and OpenAI will capture most of the value in the AI marketplace, mainly because of upstream suppliers in the hardware and energy markets drink that milkshake. On top of that, these pollyannaish, AGI-pilled forecasts really need to defend their non-obvious assumptions about demand elasticity, technology diffusion speed, and human adoption behaviors for new AI-enabled services. Dwarkesh needs to have me on the podcast to bring some balance and reality, because Silicon Valley is doing a lot of huffing their own farts, and it might be getting to their heads.

### The July Tipping

From Vercel:

![Figure](/images/blog/2026-08-31-touching-grass/image-02.png)

While Vercel is just one software development platform, it’s pretty big so it makes its trends worth noting. In just a couple of months, the share of open-weight models used as AI tooling jumped from about one-quarter to nearly two-thirds. That shift highlights both the rapid progress of open-source models and what software engineering enterprises genuinely need from them.

In the long run, I suspect closed-weight models from frontier labs will make up only a small fraction of total token consumption. Given that OpenAI and Anthropic have reportedly accelerated their revenue over this same period, this trend suggests either a massive overall surge in token usage, or an effort to put some lipstick on their upcoming IPO push…

### A Challenge

### [**https://arxiv.org/pdf/2301.12987v4**](https://arxiv.org/pdf/2301.12987v4)

If you want your Frontier agentic model pipeline to deliver verifiable, efficient work, feed it this paper as context. I challenge you to a gentleman’s agreement: instead of using AI to summarize this paper against my proposition, read it yourself and let me know why it offers such a powerful set of directions for complex AI tasks.