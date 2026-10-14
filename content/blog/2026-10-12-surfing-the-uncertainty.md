---
title: "Surfing the Uncertainty"
slug: "2026-10-12-surfing-the-uncertainty"
date: "2026-10-12"
description: "One of my biggest challenges is keeping up with the constant stream of new models (and their harnesses). People frequently, and vociferously, point out that they need the latest models just to do their jobs..."
coverImage: "/images/blog/2026-10-12-surfing-the-uncertainty/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

![Figure](/images/blog/2026-10-12-surfing-the-uncertainty/image-01.jpg)

### Surfing the Uncertainty

One of my biggest challenges is keeping up with the constant stream of new models (and their harnesses). People frequently, and vociferously, point out that they need the latest models just to do their jobs. While this is rarely the case (most models are already good enough for most corporate knowledge work), it does feel like every few weeks a new frontier release shakes up the rankings, drops prices, or closes a capability gap that seemed permanent yesterday. Trying to manage this even in my personal AI use can be a real headache. And while that pace is/can be exciting for enthusiasts, it creates a real structural headache for enterprises, oftimes leading to paralysis. Locking into one lab's tooling leaves you stuck with yesterday's best model and pricing, but staying fully agnostic risks creating a fragmented, hard-to-govern stack that struggles to deliver reliable productivity.

The hinge point for productivity AI tooling that is emerging is at the harness layer. This is the software that sits between your team and the models. A harness provides the agent loop, tools, context management, permissions, and session handling that turn a raw LLM into something that can actually do multi-step work. Think ChatGPT/Codex, Claude Code/Cowork etc. Actually, once models are strong enough, the choice of harness often affects cost more than success rate. A September 2026 study from UC Berkeley and Arena ([https://harnesstax.github.io/](https://harnesstax.github.io/)) found that the same model could deliver nearly identical task success rates across different harnesses while costing anywhere from 1.5× to 5× more depending on the scaffolding. The extra tokens came mostly from larger system prompts, more verbose tool definitions, and features that were not always necessary.

For enterprises needing tech stack stability, this reframes the decision by separating the model from its proprietary harness. We’re moving away from picking the best model and its bundled tools, and instead choosing a harness architecture that keeps you productive and nimble. This approach preserves your ability to swap models, add capabilities, and manage costs with visibility, compliance, and security, even as the AI landscape is shifting rapidly.

This newsletter is not a sales brochure, but I do want to share two open-source products that sit on opposite ends of a spectrum. These are by no means the only options, but will at least get you started.

[https://pi.dev/](https://pi.dev/) represents the minimalist school. It ships with a deliberately tiny code base. Four default tools and a system prompt under roughly 1,000 tokens and treats almost everything else as an extension, skill, or package you add only when needed. It supports a wide range of providers (including local models) and lets you switch models mid-session. For an enterprise, the pros are the lowest token overhead thus the strongest cost control. It is very auditable, customizable, and easy to embed or govern, keeping security happy since the attack surface starts so small. On the downside, configuration and packaging are fairly heavy to reach feature parity with more complete tools, and default safety relies more on external sandboxing and policy rather than built-in approval prompts.

[https://hermes-agent.nousresearch.com/](https://hermes-agent.nousresearch.com/) is a more fully featured harness that emphasizes autonomy and continuous improvement. It includes a learning loop that creates and refines skills from experience, persistent memory across sessions, multi-platform reach (terminal plus messaging channels and desktop w/ Windows support for those cave dwellers not running Omarchy, natch), sub-agent and mixture-of-agents patterns, and smart routing or fallbacks. Strong for long-running or multi-step processes that benefit from memory and specialization; competitive cost in community benchmarks; flexible deployment options; useful when you want agents that improve with use rather than requiring constant prompt engineering. Downside is the optional commercial services around the open-source core create a mild pull toward a particular ecosystem. It may also be more agent than pure coding tool for teams whose primary need is tightly controlled software engineering workflows, though this could be a plus depending on your enterprise outlook.

Based on the above and general advice from respected [X.com](https://x.com) posters I had Grokbot pull the following (current) best practices together:

1. **Treat the harness as the durable layer and the model as a replaceable input.** Organizations that standardize on a single lab’s native tools gain short-term polish and integration but accumulate switching costs. Those that standardize on an open, multi-provider harness can re-point workloads as better or cheaper models appear, often with limited re-engineering.
2. **Default to the least scaffolding that still delivers reliable results.** The harness tax is real. Measure success rate, tokens consumed, and failure modes on your own tasks rather than relying solely on public leaderboards. Many teams discover that a leaner harness plus a stronger (or simply more appropriate) model outperforms a heavy proprietary setup at lower cost.
3. **Invest in observability, sandboxing, and evaluation early.** Minimal harnesses shift more responsibility for safety and measurement onto the organization. This is manageable—and often preferable—when you have the engineering maturity to enforce containers or VMs, token budgets, audit logs, and task-specific evals. It becomes risky if those controls are afterthoughts.
4. **Preserve optionality on both the model and the tool axes.** The unknowns in the AI landscape are not just which model will be best in six months; they also include which agent patterns, memory systems, and tool protocols will prove durable. A harness that is itself extensible (via packages, skills, MCP, or plugins) and model-agnostic gives you more ways to adapt without a full rewrite.

### Asymptotically Evidential

![Figure](/images/blog/2026-10-12-surfing-the-uncertainty/image-02.png)

About 90% of frontier lab compute now goes to post-training and inference rather than pre-training. What does this actually mean?

Back in the early days (like GPT-2 and GPT-3 is times), the data question was simple: you trained on everything. Pre-training just meant consuming the entire internet and whatever else you could get your hands on, without worrying too much about specific datasets.

Today, reinforcement learning (RL) requires a lot more intention. You need specific RL training for particular behaviors. Most frontier labs now have dedicated teams building new RL environments to add to the training mix. For instance, Anthropic might focus RL on standard enterprise tools or specific coding implementations, while OpenAI builds multimodal reinforcement environments etc. etc. The possibilities are endless because each environment targets a specific task. Much like how individuals specialize within an enterprise, each of those roles could essentially become its own reinforcement learning environment. A cynical take might be that we've asymptotically approached the maximum "intelligence" models can reach, but really, we're just increasing model resolution rather than simply growing the size. There's definitely room for improvement ahead, which gives different frontier models the opportunity to evolve in a genetic manner toward specialization. It also means internal model routing and MoE composition will become increasingly important, allowing larger models to effectively handle specific tasks across specialized reinforcement learning environments.

### Fine tuning on the Evidence

[https://github.com/overmind-core/overmind](https://github.com/overmind-core/overmind)

This is a really fascinating concept. You can point this open source agent at an active project using your existing harness, and it will build a context graph from the code and agent traces recorded as your AI works. It curates training and evaluation data sets, evaluates prompts and models against your rubrics, and best of all, trains smaller, specialized open source models to handle tasks in that codebase more effectively.

You can host those fine-tuned models with the company or self-host. I really like this approach because you can do the heavy prototyping with expensive models, then use this system to own specialized models for specific tasks over the long run. Fine tuning models has been difficult in the past, but this provides a clean way to complete the loop with your existing AI workflows.

### Brewing up a Batch

[https://github.com/empero-org/brewery-ai](https://github.com/empero-org/brewery-ai)

(If it wasn't already clear that fine-tuned, open-source models built on your specific data and workflows are the future for enterprises using specific model libraries, the wave of recent releases should definitely put it on your radar!)

Brewery is an open agent that trains AI models with low friction. Tell it what you want and it handles the rest: picking a base model, preparing data, safe parameters and training. Very interesting!

### The Top 1%

![Figure](/images/blog/2026-10-12-surfing-the-uncertainty/image-03.png)

Even though this chart says consumers, it likely includes individual businesses and small startups too. Still, it is fascinating that the top 1% outspends the bottom 50% combined. It will be interesting to see how that translates into overall productivity, especially since spending more on AI doesn't always mean you are more productive. Efficiency definitely plays a big role here as well.

### Reverse!

[https://github.com/morluto/rea](https://github.com/morluto/rea)

These guys made the news recently because their repo was used to reverse engineer all of Adobe's products. If you know anything about Adobe, that means they've sent out their lawyer hit squad to quietly take out anyone and everyone involved. Still, this shows that corporate enterprise software isn't safe, and down the road, it will be pretty easy for major companies to just build their own versions based on existing software. I'll leave the legality for you to decide, but I'm sure it's going to happen.

### Proof?

![Figure](/images/blog/2026-10-12-surfing-the-uncertainty/image-04.png)

Of course it was going to be Elon's “truth seeking” AI that first reached this conclusion. While I am not naive enough to assume a transformer-based algorithm has the soul to confess and accept, it still points to something more verifiable and evidentiary than a simple curiosity.

Christianity stands apart from other world religions through its historical evidence and logical apologetics. Whether or not you are a believer, the fact that a universal compression algorithm (a.k.a LLM) finds Christianity to be the most defensible and believable human faith is telling, especially for those who prioritize reason. If you would like to explore this further, you can have the conversation with Grok. I found it “enlightening”.
