---
title: "Schumpeter was Right"
slug: "2025-09-08-schumpeter-was-right"
date: "2025-09-08"
description: "As my readers know, I’m often very early on particular trends in the technology space. While this isn’t a great investment or money-making methodology, I do think I frequently end up on the bleeding e..."
coverImage: "/images/blog/2025-09-08-schumpeter-was-right/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

[https://arcarae.com/](https://arcarae.com/)

As my readers know, I’m often very early on particular trends in the technology space. While this isn’t a great investment or money-making methodology, I do think I frequently end up on the bleeding edge of what’s coming next. I thought that Jensen autographing some lady’s chest with a sharpie about a year ago marked the top of the hype cycle for Nvidia and by implication AI in general. Obviously it wasn’t, but every once in a while something pops up that makes you think, yeah, maybe this actually is the top. The company I linked above just got $2.5 million in VC funding for what I can only describe as an AI-powered horoscope. The language used to describe what they’re doing is almost laughable, and some of the metrics they claim are pretty ridiculous, “our AI research implementing cognitive inner-monologue in LLMs, reducing sycophancy by 21% on avg. & up to 156% vs. SOTA models” How exactly do you reduce something by more than 100%? Honestly it’s giving me Elizabeth Holmes vibes.

Anyway, I’m not going to get upset about this. It’s more of an eye-rolling exercise than anything. The main issue is that it’s probably yanking money from worthwhile pursuits using AI for something absolutely worthless. That said, this type of stuff has to happen during periods of mania to achieve creative destruction, which helps refine and isolate truly useful ideas for humanity. The same thing happened during the dot-com boom in the early 2000s. Many ideas that seemed like hype at the time turned out to have long-term value, but only through the crucible of investment haircuts can we look back and see what was good. However, dear reader, keep up with me at the edge and we can seize those opportunities early and figure out how to be ahead of the curve.

### A Little to Far Over Those Skis

[https://futurism.com/data-centers-financial-bubble](https://futurism.com/data-centers-financial-bubble)

Here’s another entry into the bag of concerning AI investor news:

![Figure](/images/blog/2025-09-08-schumpeter-was-right/image-01.png)

AI data centers are consuming massive amounts of capital, and the math doesn’t work well. With $40 billion in yearly depreciation on 2025 build-outs versus just a projected $15 to $20 billion in revenue, the numbers are concerning. The core components age on different schedules. Chips churn in two to four years, networking around 6 to 10, while buildings last much longer, so depreciation snowballs.

Based on those lifetimes, 2025 data center sites show $40 billion annual write-downs against just $15 to $20 billion in revenue before power consumption and staffing, which already implies negative cash flow. To earn a normal return at this scale, U.S. data centers would need about $480 billion in revenue in 2025 alone, far above current run rates. Spending is set at $375 billion in 2025 and $500 billion in 2026, so the revenue gaps are widening as the base grows.

For scale, Netflix makes $39 billion from 300 million users, so at similar pricing, AI software would need 3.69 billion paying customers. The point is capital intensity plus short hardware life compresses margins unless pricing, load factors, or efficiency rise by approximately 10 times. Chip manufacturers and construction companies win in the near term, but operators eat depreciation and power risk, and customers will see higher prices if providers try to chase break-even.

Keep in mind, there have been plenty of these types of investments in the past. Think about the railroads and private power companies. Some initial infra weren’t great for early investors, but the long-term capabilities provided enormous economic growth down the line. So building out this much data center capacity isn’t necessarily bad, but it definitely points toward higher prices for AI users in the short to medium term, until all of this gets ironed out on the balance sheets.

### Told You So

[https://arxiv.org/abs/2506.02153v1](https://arxiv.org/abs/2506.02153v1)

I’ve been thinking for a while that smaller, more modular language models would become the default choice for most enterprises solving specific problems. This new NVIDIA paper points toward exactly that outcome, and there are several reasons why.

As small model libraries become a standardized software engineering approach, big companies will build and maintain sets of models for specific tasks in fit-for-purpose workflows. This approach offers significant cost-efficiency and lower energy use, while enabling faster and more reliable fine-tuning. It also allows easy plug-and-play integration of different models from various providers (or in-house open source developed) and provides a more robust and secure approach to deploying LLMs within traditional software development lifecycles that align well with existing software architectures.

![Figure](/images/blog/2025-09-08-schumpeter-was-right/image-02.png)

### Do What I Say

Developing AI agents for real-world use is challenging. They often ignore system prompts, hallucinate incorrect information, and fail to handle edge cases consistently. This makes their behavior unpredictable and unreliable for production environments.

[https://github.com/emcie-co/parlant](https://github.com/emcie-co/parlant)

Instead of relying on complex system prompts and hoping the LLM follows them, [](https://github.com/emcie-co/parlant)Parlant introduces a structured way to ensure compliance. It allows developers to define agent behavior using clear, natural language guidelines, journeys, and tools. This shifts the development process from “prompt engineering” to creating a reliable, rule-based system.

Parlant ensures predictable, compliant agent behavior by enforcing rules and eliminating hallucinations through features like “Canned Responses”. Its scalable, modular architecture simplifies maintenance and expansion. It offers reliable integration of external tools and full explainability for debugging and auditing. It includes conversational analytics, built-in guardrails, and a pre-built chat widget. I haven’t tried getting this into prod yet, but I think it has some promise to reign in the chaotic nature of LLMs. But it fundamentally abstracts the problem rather than eliminating it. Enterprises would be trading the uncertainties of prompt engineering for the complexities of managing a large-scale, NLU-driven rule engine, with its own unique set of challenges in scalability, performance, and maintenance.

### Maybe I get it?

I might be a technical troglodyte, but I don’t really understand the value of AI command line interface methods for interacting with LLMs. After all, why did we spend years creating multiple integrated development environments for coding if we were just going back to the terminal? But as I’ve experimented more with these tools, I’ve found them more useful for orchestration than raw code development. I think they fill a real need in the future of AI. I came across this article last week that drew interesting parallels to the early days of computers. I’m not sure how many of my readers were actively working with DOS on those monochromatic green and black screens, but I like the analogy. (I also managed to completely corrupt several DOS instances before I got a handle on how things actually worked)

[https://writing.nikunjk.com/p/entering-the-dos-era-of-ai](https://writing.nikunjk.com/p/entering-the-dos-era-of-ai)

I have a friend who’s ahead of me in using these automation tools for daily tasks like note-taking, code fixing, and email review. I still have work to do, but I think there will be some interesting tools built on top of command line interfaces.

![Figure](/images/blog/2025-09-08-schumpeter-was-right/image-03.png)