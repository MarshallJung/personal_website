---
title: "Where We Fit"
slug: "2026-11-16-where-we-fit"
date: "2026-11-16"
description: "This week's newsletter kicks off more like an open think piece than a typical news roundup. It blends a few observations from my day job with some interesting new tech advances released by the AI labs..."
coverImage: "/images/blog/2026-11-16-where-we-fit/image-01.png"
tags: ["Enterprise AI Adoption & ROI","Careers, Hiring & Future of Work","LLM Training & Fine-Tuning"]
readTime: "4 min read"
---

![Figure](/images/blog/2026-11-16-where-we-fit/image-01.png)

### Where We Fit

This week's newsletter kicks off more like an open think piece than a typical news roundup. It blends a few observations from my day job with some interesting new tech advances released by the AI labs.

A few of you likely suffered through this week's severe Microsoft outage, which took Microsoft Copilot down with it. As you might expect, I saw plenty of wailing and gnashing of teeth from everyday employees suddenly cut off from the AI tools they need to do their jobs.

It highlights an interesting dichotomy I've noted before. On one hand, we see a public narrative pushed heavily during the midterm elections with significant pushback against building new data centers. On the other hand, the average employee relies more and more on AI tools for their day-to-day work. It is fascinating that a good number of people likely voted against data centers one day, only to turn around and deeply depend on the services those data centers provide the next morning at work.

This irony might only show up in the aggregate, but it pushes us to think about what the future looks like for humans alongside AI. We can view this through two distinct lenses: the aggregate viewpoint, which charts trends from troves of public data, and an individualistic one, which zooms in on a single situation and extrapolates from there. Viewed in the aggregate, it is easy to assume AI is set to replace human beings. When you look closer, the reality looks quite different.

Let's start with the big picture. OpenAI's [GDPval benchmark](https://openai.com/index/gdpval/) showed models went from beating human experts 12.4% of the time in 2024 to about 83% in 2026. Today, effective AI users can easily match the output of five 2020-era new hires. AI agents are analyzing data, building dashboards, spotting sales leads, setting up functional CRMs, and automating cold outreach, with much of this now bundled directly into standard AI subscriptions.

Still, comparing AI to 2020-era workers misses the point because human capability has not stayed frozen. In today's landscape, modern new hires who know how to use AI are far more capable. When comparing them like for like, the standalone AI actually accomplishes less than an AI-enabled worker.

No, zooming in. We also need to be realistic about the range of capabilities among average employees. AI improvements likely won't be equally distributed across all workers, as some will be far more productive with AI than others. It is essential for companies to identify who these workers are and learn how to best enable them.

Similarly, improvements in company bottom lines won't be easy to measure (or likely even that significant) given the AI tools we typically give to the average employee. Again, this makes it increasingly important for companies to identify their best employees, remove them from existing organizational structures, equip them with AI tools that make a real difference, and clear away any roadblocks so they can actually make full use of them.

What is the key takeaway for enterprise leaders looking at both the big picture and the details? Organizational change is essential. Giving average AI tools to the average employee only yields minor productivity gains, which likely will not justify the investment. Instead, true value comes from pointing a focused group of people at much harder problems to drive high-impact innovations in critical workflows. To capture the full value of modern AI, enterprises must build dedicated, AI-enabled teams within the larger organization.

### Let the Models Build!

With enough reinforcement learning data and verifiable environments, frontier labs are making significant progress across several physical fields. Recent releases of Anthropic's Fable 5.2 and Mythos 5.2 highlight innovations in synthetic chemistry modeling along with ground-up electronics and system design. The bitter lesson might finally be arriving for anyone who thought the physical world would stay out of reach for AI tools originally optimized only for verifiable domains like code and mathematics.

[https://www.anthropic.com/research/claude-electronics-design](https://www.anthropic.com/research/claude-electronics-design)  
[https://www-cdn.anthropic.com/666a6cb5172cbf6faa83d45968334dcf44da1410.pdf](https://www-cdn.anthropic.com/666a6cb5172cbf6faa83d45968334dcf44da1410.pdf)

### Self Improvement

[https://rikiyat.github.io/blog/weight-space-programming/](https://rikiyat.github.io/blog/weight-space-programming/)  
[https://arxiv.org/abs/2611.10866](https://arxiv.org/abs/2611.10866)

While the results might not be quite as earth-shattering as the authors suggest, it is still an interesting observation. Most model fine-tuning today relies on a specific dataset to train and evaluate on, adjusting the internal model weights so they predict that data more accurately. This works well for companies with proprietary data, access to open weight models, and tuning infrastructure, letting them build custom models that understand their workflows better than public alternatives.

Still, that approach requires a solid grasp of fine-tuning. Having another LLM directly edit model weights (weight-space programming) to complete tasks almost feels like a cheat code that is too good to be true. While this cannot be done at scale yet, and I have not seen the rigorous testing needed to call it a true game-changer, two recent papers from MIT researchers and Meta researchers show promising results. They demonstrate that you can use a larger LLM to modify or even ablate existing weights to improve performance on a set of tasks. It is definitely a fascinating space to watch and something that could be very useful down the road.

### Discovery

[https://github.com/NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)

Building an enterprise ontology typically takes a lot of systematic effort to ingest and define terms and relationships from existing systems of record. To help with this, NVIDIA developed Auto Ontology. It draws on concepts from Andrej Karpathy's Auto-research on looping LLM self-improvement to self-build an ontology directly from your provided SORs. It still keeps a human in the loop to approve relationships and catch anything untrue, but it definitely takes some weight off the team by automating a good portion of the work.
