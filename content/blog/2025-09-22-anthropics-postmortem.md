---
title: "Anthropic’s Postmortem"
slug: "2025-09-22-anthropics-postmortem"
date: "2025-09-22"
description: "Anthropic had a very bad month in terms of model reliability. I certainly noticed folks complaining on X, but my go to “vibe” tool, Superwhisper, had been performing remarkably poorly and it’s backed ..."
coverImage: "/images/blog/2025-09-22-anthropics-postmortem/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

[https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)

Anthropic had a very bad month in terms of model reliability. I certainly noticed folks complaining on X, but my go to “vibe” tool, Superwhisper, had been performing remarkably poorly and it’s backed by Claude 4 of various levels for different tasks. Form their blog:

“Between August and early September, three infrastructure bugs intermittently degraded Claude’s response quality. We’ve now resolved these issues and want to explain what happened…To state it plainly: We never reduce model quality due to demand, time of day, or server load. The problems our users reported were due to infrastructure bugs alone…We don’t typically share this level of technical detail about our infrastructure, but the scope and complexity of these issues justified a more comprehensive explanation.”

Anthropic’s reputation for reliable model service has suffered, making their detailed publication welcome. I hadn’t appreciated the additional complexity caused by their mixture of different serving platforms, which given the constant changes in hardware framework and cloud nuances must be tough to keep up with.

“We deploy Claude across multiple hardware platforms, namely AWS Trainium, NVIDIA GPUs, and Google TPUs…Each hardware platform has different characteristics and requires specific optimizations.”

It appears three distinct, closely occurring bugs were the root cause of the problems. Anthropic also indicated that their privacy practices complicated the investigation of these issues.

“The evaluations we ran simply didn’t capture the degradation users were reporting, in part because Claude often recovers well from isolated mistakes. Our own privacy practices also created challenges in investigating reports. Our internal privacy and security controls limit how and when engineers can access user interactions with Claude, in particular when those interactions are not reported to us as feedback. This protects user privacy but prevents engineers from examining the problematic interactions needed to identify or reproduce bugs.”

This failure shows that relying on third-party LLM APIs for important workflows is a point of failure. While this isn’t necessarily different from any other core service dependency, it has an insidious quality where it doesn’t fail outright (which users could largely forgive). Instead, it starts misbehaving in a frustrating and non-deterministic manner, which is more problematic IMO. Each individual will need to determine their own tolerance for this risk.

### What is an “Agent”

Simon @ [https://simonwillison.net/2025/Sep/18/agents/](https://simonwillison.net/2025/Sep/18/agents/) has determined a definition that I think is as good as anything. *An LLM agent runs tools in a loop to achieve a goal.* Like a chef baking a cake, an agent has access to various kitchen tools to accomplish a task. Instead of mixers and pans, we have APIs like browsers, database functions etc. If the agent has a conversation history context as they loop through the tool calls we can call it memory. However, AI agents lack one crucial human trait: accountability. You can hold a person responsible for their work and they can learn from their mistakes. An AI can’t be held accountable in the same way — it’s just a tool, and the person who uses it is ultimately responsible. FWIW, one company that I do work for does have a LLM call that serves as basic agent. It’s good, but not 100% good. Which unlike a program remains non-deterministic. It’s this aspect that I think will always hold back agents. Perhaps as the agents become more capable, they can replicate themselves as code?

![Figure](/images/blog/2025-09-22-anthropics-postmortem/image-01.png)

### Improving RAG

[https://github.com/qhjqhj00/MemoRAG](https://github.com/qhjqhj00/MemoRAG)

One of the downsides to the conventional RAG implementation is the limitation to the evidence provided by the retriever portion of the workflow and all the attendant chunking, overlap decisions that are difficult to retool after the fact. Combining a long context model with traditional RAG can provide more accurate and more varied input to the retriever boosting overall performance. The one downside that I see here is the requirement to use long context models. Cost might come down if open-source provides an alternative, but you are still adding time and at a minimum hosting cost.

### Who uses AI?

[https://www.anthropic.com/economic-index#us-usage](https://www.anthropic.com/economic-index#us-usage)

Fascinationg to see where and how people are adopting AI. Good breakdown of types and careers. Keep in mind that this is Anthropic’s usage and OpenAI and Google may well have different profiles. This tracks my general impressions that most AI still comes from software people building tools for other software people. Meanwhile clinics, factories, logistics, construction, gov, etc. digitize painfully slowly (regs, legacy, offline ops). Biggest upside is still who’s cracking AI that plugs into those messy real-world workflows.

### Inception

An interesting example of models incrementally improving over time, where I am finding that today’s leading models are competent at writing prompts for themselves and each other. A year ago I was quite skeptical of the pattern where models are used to help build prompts. Prompt engineering was still a young enough discipline that I did not expect the models to have enough training data to be able to prompt themselves better than a moderately experienced human. The Claude 4 and GPT-5 families both have training cut-off dates within the past year — recent enough that they’ve seen a decent volume of good prompting examples. I expect they have also been deliberately trained for this. Anthropic makes extensive use of sub-agent patterns in Claude Code, and published a fascinating article on that pattern ([https://www.anthropic.com/engineering/multi-agent-research-system](https://www.anthropic.com/engineering/multi-agent-research-system)).

I’ve been doing this for 6 months or so, and have found increasingly good results for lots of different fields and applications from coding to product design.

### It’s True

![Figure](/images/blog/2025-09-22-anthropics-postmortem/image-02.png)

Like it or not, career programmers tend to be some of the least effective with AI. Sometimes it’s not about the rules, but about the ability to see around them and describe a problem in a way that can leverage the native connection tissue of LLMs to help guide the process.