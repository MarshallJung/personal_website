---
title: "The Curve Bends"
slug: "2025-11-24-the-curve-bends"
date: "2025-11-24"
description: "We are often told that the line on the graph only goes up. Usually at a “super-exponential” angle that suggests we should all start packing our bags for the post-labor economy."
coverImage: "/images/blog/2025-11-24-the-curve-bends/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

We are often told that the line on the graph only goes up. Usually at a “super-exponential” angle that suggests we should all start packing our bags for the post-labor economy.

However, reality has a way of introducing friction to frictionless vacuum models. Daniel Kokotajlo, former OpenAI researcher and co-author of the “AI 2027” report, has issued a significant correction. The original report predicted that by 2027, AI agents would be effectively superintelligent. But looking at the METR evaluation data for the recently released GPT-5.1 Codex-Max, the trendline is breaking.

The Technical Reality: The model was supposed to be completing 5-year tasks instantly by late 2027 based on a 7-month doubling time. Instead, GPT-5.1 is clocking in at ~2 hours for complex coding tasks. That is impressive, but it falls well below the “super-exponential” projection.

The Trade-off: Kokotajlo has pushed his AGI timeline to “around 2030 with lots of uncertainty.” It turns out that scaling compute is easy; scaling reasoning across autonomous agents without compounding error rates is an entirely different engineering headache. We aren’t hitting a wall, but we are certainly driving through some very thick mud.

![Figure](/images/blog/2025-11-24-the-curve-bends/image-01.png)

### “Good Enough”

I’ve been testing the new SAM-3D-Body model from Facebook Research. For the uninitiated, this is an evolution of the Segment Anything Model (SAM), but applied to three-dimensional inference.

I fed it a standard 2D photo of my race car to see if it could extract a usable 3D mesh.

-   The Result: It is not demo-quality. If you zoom in, the topology looks like it was sculpted out of a slightly melted Ferrari 255 GTO
-   The Utility: Ignoring the aesthetic artifacts, the geometric integrity isn’t sufficient for engineering prototypes…yet.

This is the classic disruption curve. It’s currently worse than a human engineer building something in CAD, but the marginal cost of generation is effectively zero. For rapid prototyping, where I need to test aerodynamics or fit rather than render a glossy brochure, this will likely become a massive workflow accelerant.

Link: [https://github.com/facebookresearch/sam-3d-body](https://github.com/facebookresearch/sam-3d-body)

![Figure](/images/blog/2025-11-24-the-curve-bends/image-02.png)

### Compression as a Service

Google has released a new multimodal model with the unfortunate name of Nano Banana Pro. I never understood this particular model name. Must be an inside joke. Putting aside the fact that the branding team seems to be hallucinating harder than the models, the technical utility is undeniable.

I tested its “information compression” capabilities by uploading a dense PDF on vehicular aerodynamics — heavy on Navier-Stokes equations and light on readability. I asked the model to convert the paper into a “professor’s whiteboard diagram.”

Technically, the model didn’t just summarize text; it performed a cross-modal translation, mapping abstract vector relationships in the text to spatial relationships in the image. It generated a high-fidelity, handwritten-style schematic that captured the core physics.

I’ve said before and continue to observe that education is an efficiency problem. Research by Mayer (2009) suggests visual aids improve comprehension by 20–89%. By compressing hours of reading into seconds of visual scanning, tools like this aren’t just “cool” they are a deflationary force on the cost of acquiring knowledge.

![Figure](/images/blog/2025-11-24-the-curve-bends/image-03.png)

URL: [https://link.springer.com/article/10.1007/s10494-023-00523-1](https://link.springer.com/article/10.1007/s10494-023-00523-1)

### Theory of Mind and the “Spiky” Intelligence

Andrej Karpathy released a post this week that elegantly dismantles the anthropomorphism we slap onto LLMs.

He contrasts biological intelligence — which is shaped by millions of years of survival pressure (fear, hunger, social hierarchy) — with LLM intelligence. An LLM doesn’t want to survive; it wants to minimize loss on the next token prediction. It is optimized via Reinforcement Learning (RL) and upvotes, leading to “spiky” intelligence: god-like in specific narrow domains, but failing at basic tasks a rodent could figure out.

The irony is despite this, Ethan Mollick points out a 2025 preprint showing that humans who possess a “Theory of Mind” for AI — essentially, those who can accurately simulate the model’s alien psychology — perform significantly better (r=0.17) in collaboration tasks. To get the most out of the machine, you have to understand exactly how unlike you it actually is.

URL: [https://osf.io/preprints/psyarxiv/vbkmt\_v1](https://osf.io/preprints/psyarxiv/vbkmt_v1)

### The Oligopoly Consolidates: Gemini 3 & The Capex Moat

Google’s Gemini 3 dropped last week. In classic proprietary fashion, they withheld the parameter counts, but the inference behaviors suggest a ~5 trillion parameter model.

The Economic Reality: Gavin Baker (Atreides Management) argues that scaling laws are alive and well. He predicts massive leaps in 2026 once Nvidia’s Blackwell GPUs fully saturate the training clusters.

[https://x.com/GavinSBaker/status/1991248768654803337](https://x.com/GavinSBaker/status/1991248768654803337)

However, notice the market structure. We are seeing an intensifying oligopoly (Google, OpenAI, Anthropic, xAI). Why?

1.  The Capital Moat: The cost of entry is now measured in the GDP of small nations.
2.  The Energy Moat: Baker points out that power shortages are actually stabilizing the market. They prevent overbuilding and force efficiency (high tokens-per-watt), favoring the giants who can negotiate directly with nuclear plants.

The Cautionary Note: While the “data flywheels” are spinning for the tech giants, enterprise adoption is hitting the “human bottleneck.” Companies can buy all the Blackwell GPUs they want, but retraining a workforce to use them takes longer than a training run. Revenue growth will likely lag behind the capex spend, testing the patience of investors who think “exponential” applies to their quarterly returns.