---
title: "Mental Superposition"
slug: "2024-09-09-mental-superposition"
date: "2024-09-09"
description: "Mental Superposition"
coverImage: "/images/blog/2024-09-09-mental-superposition/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

This past week I had a lovely and enlightening conversation with one of the people that I have been lucky to meet in my effort to expand my network and knowledge base while looking for my next role. One of the comments that I received was that some of my writing (and speech) when it came to interview processes has been negative. And this negativity was something that could reflect badly on me, especially now that I’ve been so public with my writing. And…you know what, he was right. For my part, I was frustrated that I could never demonstrate my best skills since I was never really able to make it past some of the more quantitative benchmarking. But in reality I needed to put myself into the shoes of those companies doing the hiring. Some call this “theory of mind” but since I’m a Schrodinger fan I’ll refer to it as mental superposition. Being able to see the frustrations and challenges of both employers and potential employees in this market. If I were trying to hire for a role that has potentially thousands of applicants per week, sorting those for the few unicorns is a daunting task. Even if I could eliminate 90%, the remaining dozens of people cannot all be interviewed. So a gating test like a coding challenge is one way to make sure that at least the candidate has the technical knowledge required. If only one of those few gated coding experts proves to have great soft skills in the interview, you’ve found a unicorn. It is the only realistic way to sort for the needed staff in today’s market. So I’m left with the understanding that I, personally, can’t vent on how things are. It is what it is. As the l33t say, it’s time to get gud.

### Don’t BLOW UP!

![Figure](/images/blog/2024-09-09-mental-superposition/image-01.jpg)

Noted by pytorch evangelist PytorchToAtoms on X, official pytorch now has a environment variable called “PYTORCH\_NO\_POWERPLANT\_BLOWUP” specifically to play nice with highly parallel compute ops like checkpointing and to prevent overlap of compute and communication between processes. The constraints of the real world as represented in code.

### Believe me it’s even bigger

I have a friend in the power engineering industry that tells me the following is childsplay with regards to plans in progress. Take that as you will.

![Figure](/images/blog/2024-09-09-mental-superposition/image-02.jpg)

The power requirements for X’s AI training center when completed is about 150 MW peak for the GPUs alone. They’d need an additional 45 MW to run everything else in the datacenter (cooling, lighting etc.) That is a total of 117 MW average power consumption, with 195 MW peak. To give you an idea, that’s enough to power over 150,000 homes — basically a small city! Originally xAI could only access about 7–8 MW from the grid, so then they brought in 14 mobile natural gas generators with a combined capacity of around 35 MW, alongside several larger gas turbines to temporarily meet the power demands. Are these sorts of operational costs sustainable if any type of ROI is needed? I think it’s a limiting factor for sure.

Here’s a really good breakdown of the engineering required: [https://www.semianalysis.com/p/100000-h100-clusters-power-network](https://www.semianalysis.com/p/100000-h100-clusters-power-network)

### The right way to do deep learning

Francois Chollet’s book on deep learning with python has the following section:

![Figure](/images/blog/2024-09-09-mental-superposition/image-03.jpg)

As summarized by the author himself: Deep learning research is an evolution process driven by poorly-understood empirical results. Math in DL papers is usually worthless and was placed there purely as a signal of seriousness. The key to good research is understanding what \*causes\* your results, and that requires ablation studies (which few researchers attempt to do).

### Pivot!

[https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=4015530](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4015530)

Fast scaling has massive downsides: startups that scale more quickly fail more, but are no more likely to succeed than those that scale slower. Why? Because scaling marks the end of experimenting. Startups that scale after lots of experiments succeed. Don’t be afraid to pivot.

### Just getting easier

[https://github.com/Cinnamon/kotaemon](https://github.com/Cinnamon/kotaemon)

Open source and usable locally if you need secure and compliant implementation. Lovely.

From the readme: This project serves as a functional RAG UI for both end users who want to do QA on their documents and developers who want to build their own RAG pipeline.

For end users:

-   A clean & minimalistic UI for RAG-based QA.
-   Supports LLM API providers (OpenAI, AzureOpenAI, Cohere, etc) and local LLMs (via ollama and llama-cpp-python).
-   Easy installation scripts.

For developers:

-   A framework for building your own RAG-based document QA pipeline.
-   Customize and see your RAG pipeline in action with the provided UI (built with Gradio).

### Get your hands dirty

My wife’s beloved minivan decided to puke nearly all its lifeblood this last week due to a poorly designed set of external engine oil lines. Who uses rubber lines in high pressure/high temp cyclical applications? Besides a bear of time accessing all the fasteners for the fix, let’s have the discussion on engineering vs serviceability sometime…ACTUALLY this might be one of those things that fit in the concept of 3D generative design. Just because we can train an algorithm that can create a 3D object according to language/math, can it be serviced once created???! Who is going to do that servicing? If you have to remove an AI created engine to replace a basic set of oil lines, did we really gain anything? Constraints around serviceability need to be part of the 3D generative training algorithm.

Yes, I fixed it. I always do.

![Figure](/images/blog/2024-09-09-mental-superposition/image-04.jpg)

### The currency of the future

Wrapping up this week, I had another great meetup with a close friend for some beers and nachos. I got numerous very valuable insights, including a discussion of his AI enabled productivity stack as a customer engineer at Google. I’ll be talking a bit more about this in the near future.

One of the more quietly thought provoking discussions centered around the question, “What role does authenticity play in a future entwined with AI?”. If we are to accept that the years ahead will present us with AI avatars attending meetings, books written by, or largely with AI, AI podcasts, AI virtual assistants and even AI friends, how much does being authentically human count for? I think this starts to incorporate the ideas of human psychology, which is far from a hard science but one that cannot be ignored when the very idea of humanity starts to blur, if even only on-line. The ability to be creative, a little unhinged even when it comes to ideas and thoughts may be the only real distinguishing characteristic of our digital presence. Meanwhile friendships, small groups and real-world interactions will only become more valuable. Figuring out how to incorporate human presence, empathy, uniqueness and creativeness will be the difference in both professional and personal lives.