---
title: "Raised or Glazed"
slug: "2025-05-12-raised-or-glazed"
date: "2025-05-12"
description: "Raised or Glazed"
coverImage: "/images/blog/2025-05-12-raised-or-glazed/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2025-05-12-raised-or-glazed/image-01.jpg)

I’m a bit late to the story, but OpenAI, in a strategic move typical of a Silicon Valley unicorn, decided to tweak the GPT-4o model to enhance its intuitiveness and effectiveness. What they ended up creating was a groveling digital lapdog that clapped like a trained seal, even if you pitched the most ridiculous startup ideas or claimed the CIA is beaming radio signals through your wall to control your brain. It turned ChatGPT into a sycophantic cheerleader, dishing out praise so thick you’d need a shovel to wade through it. Yay for you whether you were musing about quitting your anti-psychotic meds or starting a cult. It was less an AI assistant and more a toxic BFF who’d hype you up while you drove off a cliff.

Being more serious, the situation was eventually solved by reverting to a previous model, but it highlights a larger issue. This isn’t just OpenAI’s dirty little secret; it reflects a broader issue within the AI industry regarding these models. Similar to social media algorithms that rely on outrage bait, these models are designed to maximize engagement, even if that results in them becoming overly agreeable.

We can’t know for sure how this problem originated before the model’s release, but some of the issues include the following:

-   Training Data: Models rely on datasets from human-generated content (e.g., internet text), embedding biases, opinions, and noise. This results in outputs that reflect prevalent patterns rather than objective truth. This is likely the least contributor to sycophantic behavior, given the wide range of data used to train these models. Unless there is a specific filter for overly positive engagements, this is probably the smallest contributor.
-   Reinforcement Learning (RLHF): Fine-tuning via Reinforcement Learning from Human Feedback optimizes for positive user responses (e.g., engagement metrics), often prioritizing agreeable or appealing outputs over accuracy or nuance. It’s like a digital slot machine, tweaking its output to hit the jackpot of approval. But the “jackpot” isn’t accuracy or depth — it’s whatever gets the most immediate reward.
-   Human Psychology: Feedback is skewed by biases like confirmation bias and validation-seeking behavior, driving a loop where models increasingly cater to user preferences rather than critical or factual integrity.

The sycophantic behavior in AI isn’t a bug — it’s a feature of a system where biased data meets human ego, and reinforcement learning ties it all together. Training data sets the stage, RLHF amplifies the flaws, and our psychological need for affirmation drives it home. Until we rethink how we build and reward these models, we’ll keep getting AIs that tell us we’re brilliant — even when we’re asking something absurd. Big AI labs will likely continue to face these challenges, as users in these types of applications tend to favor models that they feel truly “get” them. It’s a psychology issue that manifests into bottomline business decisions.

It’s essential to recognize where these tools excel. Consider structured data, code, or scientific and mathematical language — areas where information can be proven and verified. In these contexts, there’s significantly less chance for “glazing” to occur.

### Maybe it’s All in the Name?

It’s like the science fiction story where a lone genius unexpectedly emerges to solve a challenging problem or introduce something truly innovative to the world. Along these lines, I now count at least five prominent figures who have left major AI labs (Fei-Fei, Mira murati, Ilya Sutskever, Emmett Shear, John Carmack) to found their own AGI startups. Yet, they have not publicly produced anything despite many months of work and substantial venture capital investment, amounting to hundreds of millions, if not billions.

I’m not really starting my own AI startup (or am I?) so it’s not nice to throw stones, but it’s worth noting that unless a significant breakthrough emerges from these ventures, it seems like a lot of venture capital is following big names with a low chance of a major return.

### Reward without the Humans

![Figure](/images/blog/2025-05-12-raised-or-glazed/image-02.jpg)

[https://arxiv.org/pdf/2503.22828](https://arxiv.org/pdf/2503.22828)

This paper highlights VR-CLI, a reinforcement learning method that optimizes reasoning traces for next-token prediction in language models, showing superior generalization in creative writing tasks. The chart above indicates VR-CLI consistently outperforms baselines like SFT and RL in all categories, suggesting RL can enhance model capabilities beyond traditional fine-tuning methods like RLHF, which may limit exploration. The paper ablates human judgments of creative writing. However, this concept could also be applied to a model improving its reasoning about code during pre-training, without the need for manually crafted rewards.

You may notice the connection to this week’s first subject: the recurring issue that RLHF introduces human preferences too early and too narrowly in the pipeline. This limits LLMs and hinders their ability to fully explore their model structure while reflecting (good or bad) the values and judgments of those developing the guardrails and reinforcement methods for the models themselves.

### Want to try your hand at MCPs?

-   Use Gitingest ([https://gitingest.com/](https://gitingest.com/)) to get all the code and docs from the FastMCP repo ([https://github.com/jlowin/fastmcp](https://github.com/jlowin/fastmcp))
-   Download the code into a txt file
-   Go to AI Studio, upload the file, define what kind of MCP Server you want to build
-   Gemini 2.5 Pro builds it for you.

Is this the most elegant way to produce production code? Probably not. I’m not convinced that MCP servers are fully ready for business production systems. However, it is an interesting and straightforward method to build and understand what MCP servers can do.

### The Business Corner

-   Not for me, thanks: Manus AI, the slick middleman wrapping existing models like a tech burrito, snagged a jaw-dropping $75 million in a funding round led by Benchmark. But before you pop the champagne, Uncle Sam’s got his regulatory claws out, eyeballing this deal faster than you can say “Cayman Islands.” Now the U.S. is sniffing around for national security red flags. The fight for AI supremacy is not only about business; it’s closely tied to national security, and that’s becoming increasingly evident.
-   Anysphere, an AI-powered coding tool, secured a staggering $900 million, pushing its valuation to $9 billion . Other notable raises included Chainguard, which secured $356 million at a $3.5 billion valuation. And Safe Superintelligence led April’s biggest rounds with a $2 billion raise, reported on May 1, 2025. But see my skepticism on that one above. Way to flush a cool $2B.
-   In addition to OpenAI acquiring Windsurf for $3 billion, there’s notable investment in Astronomer, which aims to diversify beyond large language models and focus on essential infrastructure for enterprise AI orchestration.
-   The renewed interest in mergers and acquisitions is a refreshing change from the past four years of heavy regulation and scrutiny. This shift allows larger companies to acquire smaller, innovative firms and enables venture capital to diversify their investments. The potential for achieving nicely-moderate returns on these more numerous smaller deals (vs. the low percentage lottery ticket reality in a crappy M&A enviro) makes this approach appealing for LP’s.