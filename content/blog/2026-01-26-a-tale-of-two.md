---
title: "A Tale of Two"
slug: "2026-01-26-a-tale-of-two"
date: "2026-01-26"
description: "I was talking with my twin brother about the future of management in large enterprises as AI tools mature. We explored some unconventional ideas for how senior managers and C-suite leaders could be ef..."
coverImage: "/images/blog/2026-01-26-a-tale-of-two/image-01.png"
tags: ["AI Strategy"]
readTime: "6 min read"
---

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-01.png)

### Management in the age of AI

I was talking with my twin brother about the future of management in large enterprises as AI tools mature. We explored some unconventional ideas for how senior managers and C-suite leaders could be effective with AI. Ideas that might feel unusual now but don’t seem far-fetched to me. I expect some will become best practices in the coming years.

I see the gap between managing AI and managing people steadily narrowing. Every time I rewrite a prompt after an AI misunderstands me, I’m becoming a better manager. And I’ve experienced this from both sides: building large teams taught me more about working with AI than engineering code ever did. The techniques that make AI agents reliable, clear direction, sufficient context, and well-defined tasks, are the same ones that make human teams effective.

AI also lets you practice these skills without the usual downsides. It doesn’t get annoyed if you ask for the same task repeatedly, or hold a grudge when your instructions are unclear and you need to reframe them. I can a assign a PhD level model to a menial task and it’ll happily do it. It doesn’t get angry, gossip about disorganization, or stay upset when things go wrong. A well-circulated tweet from the CTO of Moondream captured this dynamic in real time.

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-02.png)

Before anyone argues that I’m claiming we ought to treat people like AI chatbots, that’s not my point. Human beings are unique and wonderful, made in the image and likeness of God. However, many best practices carry over to any management role, making AI a surprisingly effective training ground for managers.

There are three overarching management principles you can learn from AI: giving clear direction, orchestrating a team, and deciding what’s worth building. Today, I’ll cover the first and plan to tackle the others in future newsletters.

The Management Analog of Prompt Engineering

Most management failures, like most hallucinated outputs, stem from ‘zero-shot’ expectations. We frequently assign complex tasks to humans with zero context and zero examples, yet expect state-of-the-art results. When the output fails, we blame the model (the employee) rather than the prompt (the manager).

To fix this, we must treat delegation with the same rigor we apply to engineering high-fidelity prompts. We don’t just want to get the job done, we want to maximize the reasoning quality of the agent doing the work.

1.  Context Injection (System Instructions): In AI, we use system instructions to define the persona, constraints, and operational boundaries before a single task is requested. In management, this is the ‘why’ and the ‘how’ that typically gets skipped in favor of the ‘what.’ If you haven’t explicitly defined the constraints (risk tolerance, strategic intent, anti-goals), you are forcing the employee to rely on their internal training data, which can be outdated or misaligned with your current objective.
2.  Few-Shot Prompting (Providing Examples): LLMs perform significantly better when given ‘shots’. These are concrete examples of the desired input and output. Humans are no different. Abstract instructions (‘write a robust business case’) breed ambiguity and mediocre first drafts. Few-shot management means providing a previous successful business case or a specific template. If you can’t provide an example of what ‘good’ looks like, you likely haven’t defined the task clearly enough yourself.
3.  Chain of Thought (Task Decomposition): For complex reasoning, we force models to ‘think step-by-step’ (Chain of Thought). This reduces logic errors by breaking a problem into sequential components. Effective managers do this by explicitly serializing parallel workstreams. Instead of asking for a finished product, define the intermediate reasoning steps required to get there. This allows you to catch ‘hallucinations’ in strategy before resources are committed to execution and forces you to understand the problem in depth yourself.

When I pointed this out to my brother, he noted that despite sharing 50% of our genetic code (we’re fraternal) and at least eighteen years of identical training data, he still frequently requires few-shot prompting to understand what I’m talking about. It was a fair point. If a biological twin with nearly identical hardware specs cannot reliably function on zero-shot instructions, it is perhaps unfair to expect it from a junior analyst on a Tuesday.

### A Tale of Two

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-03.png)

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-04.png)

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-05.png)

There’s a striking dichotomy in parts of the avant‑garde tech space. Some argue that any enterprise software is at risk because new AI tools can quickly build replacements. The NASDAQ‑100 versus Morgan Stanley Software Index chart seems to support this. Some argue that high-growth, low-profit SaaS is no longer viable. Near-term growth durability is uncertain, and AI threatens long-term profitability. The classic promise — grow fast now, harvest cash later — may not hold if cheaper AI-native solutions undercut growth strategies.

On the other hand, enterprise software leaders are wary of the tech debt from replacing vendor solutions with in-house alternatives. I see this daily in my role. It’s often easier, cleaner, and more supportable to rely on AI augmentations from existing SaaS vendors for the middle layer of productivity. The math doesn’t add up. Software is usually only 8–12% of enterprise spend, so even significant AI-driven replacements would yield just a 3–5% net impact. The risk profile of these critical systems is also vast. They encode historical company value as well as execution. Edge cases, runtime behavior, and tribal knowledge that AI models can’t reliably infer. And, as I’ve noted in my recent newsletters, the cultural and non-software switching costs for employees are substantial. For example, I’ll likely use Microsoft Copilot for employees who need email and calendar context, and Salesforce’s AI tools to boost field sales. I won’t use these to build highly impactful, multi-vertical, agentic solutions…but those are moonshots, not day-to-day productivity drivers. It will be interesting to see how this plays out.

### The Need to Survive

[https://www.theinformation.com/newsletters/applied-ai/openai-plans-take-cut-customers-ai-aided-discoveries](https://www.theinformation.com/newsletters/applied-ai/openai-plans-take-cut-customers-ai-aided-discoveries)

This seems highly unlikely, as it would be a death knell for OpenAI’s business model with other companies offering similarly capable models. However, it’s not surprising it was discussed internally. The core idea is that OpenAI would take a percentage of financial value generated from customer success attributed to its technology, rather than relying on flat subscriptions or enterprise deals. That means licensing models tied to outcomes, so OpenAI earns only when its AI directly drives significant value, aligning incentives with customers. The article cites pharmaceutical discoveries, but this could extend to other verticals. Along with the rollout of ads, it suggests OpenAI is trying to stem the bleeding from a loss‑leading business model.

### A Bit of Humor

IYKYK

![Figure](/images/blog/2026-01-26-a-tale-of-two/image-06.png)