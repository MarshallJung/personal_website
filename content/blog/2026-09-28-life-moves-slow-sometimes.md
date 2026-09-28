---
title: "Life Moves Slow Sometimes"
slug: "2026-09-28-life-moves-slow-sometimes"
date: "2026-09-28"
description: "We all feel like the world moves slower than it should sometimes. While time can fly, waiting for an exciting future makes the present feel drawn out..."
coverImage: "/images/blog/2026-09-28-life-moves-slow-sometimes/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-09-28-life-moves-slow-sometimes/image-01.png)

### Life Moves Slow Sometimes

We all feel like the world moves slower than it should sometimes. While time can fly, waiting for an exciting future makes the present feel drawn out.

I notice this often in my daily work and conversations around AI. Having been immersed in this space for so long, I expected people would have a deeper understanding by now of how AI works, its limitations, its benefits, its future, and how to use it effectively. The reality is that we are not there yet.

I came across a couple of articles this week that speak to this from both a business and a human psychological perspective. Let’s use these to lead this week\x27s newsletter before we dive into some more technical subjects.

[https://research.socialcapital.com/p/ai-roi](https://research.socialcapital.com/p/ai-roi)

The first piece is a down-to-earth, observant article by Chamath Palihapitiya. It drops the usual VC sheen of "intelligence will eat the world" and points out something every plant manager already knows. Giving people a faster motor does not automatically make the factory faster.

Today, individual knowledge workers can look 2-10 times more productive with AI, but most firms do not show those gains from the outside. Most of a corporate workweek is not spent actually producing the thing. Instead, time goes to meetings, handoffs, signoffs, status docs, “alignment”, legal review, and waiting on someone with the right password or access to an esoteric database.

For firms that pay on CC, Ramp\x27s AI index, the median company spends $12.50 per employee each month on AI. Compared to an average monthly employee cost of around $8,500, AI only needs to boost a person\x27s productivity by about 0.15% to pay for itself.

This shows that humans are likely the bottleneck to AI return on investment. AI creates extra time for employees, but it cannot decide how they use it. If that saved time just goes into another meeting or another week of waiting on access to a document or database, the return is zero.

The reality is that AI may multiply output rather than simply add to it. If so, top-performing firms will naturally pull away from the rest.

This has already been demonstrated. In 2026, 515 startups received the exact same AI tools, training, and support. A randomized half were also shown how other companies reorganized their work around AI. While revenue barely changed for the typical startup in either group, nearly all the gains were concentrated in the top 10% of firms. The treatment group pulled the furthest ahead, ultimately driving its overall revenue to nearly 1.9x that of the control group.

![Figure](/images/blog/2026-09-28-life-moves-slow-sometimes/image-02.png)

The tools were identical. What separated the leaders was how they rebuilt their work around them. Which brings us back to the process itself. AI lowers the cost of doing things, but does nothing about whether they were worth doing in the first place.

AI speeds up the production slice, but it does almost nothing for this coordination sludge unless you delete the sludge. Automating a dumb process just produces more dumb output, faster.

Elon Musk has a five-step process to fix this:

1. Question every process and requirement
2. Delete what you can
3. Simplify what’s left
4. Speed it up
5. Only then automate.

Elon noted that one of his biggest mistakes at Tesla was running his five-step process backwards and automating things that turned out to be unneeded. Many firms today claiming to "leverage AI" are making that exact mistake.

This disconnect might explain why the ROI debate in the AI space talks past itself. Leaders are confused about why AI is not moving the needle because they expect productivity gains to match the speed of AI development, rather than the much slower pace of enterprise adoption. This is not the first time we have seen this pattern, so a bit more patience, and a little more appetite for risk from the C-suite, might be in order.

AND this brings me to the second article, well post really.

[https://x.com/staysaasy/status/2101692598674993592?s=20](https://x.com/staysaasy/status/2101692598674993592?s=20)

While the post is a bit crude, it matches my experience when working with others. AI assistants are usually pitched as effort-savers that handle tasks for us, but in practice, they often increase both the decisions we need to make and the volume of work we execute. Instead of creating spare capacity, they raise the pace and scope of work. The more you use them, the more you end up doing, which rarely feels like empowerment.

In my experience, people who are really good at using these tools often get frustrated because their pace is so much faster than the folks around them who refuse, struggle, or don\x27t care to use AI. Most employees prefer lower cognitive load and simpler routines over maximum output. Tools that quietly execute without needing ongoing input and judgment are adopted much more easily than those that constantly surface new decisions and opportunities. Just like the article above notes, efficiency gains often expand the pipeline of work rather than shrink it.

### Jev Inspires!

[https://github.com/vllm-project/vllm/pull/57250](https://github.com/vllm-project/vllm/pull/57250)

After typesafe.ai released Jev, a system one model, many people quickly realized that current autoregressive language models could be adapted for similar deterministic output. We have seen a whole bunch of these over the last week, and I will leave it to you to find those and assess their capabilities.

But it is not just autoregressive architectures, though. Google previously released DiffusionGemma, which is a diffusion based model. This GitHub project shows how you can use DiffusionGemma to generate structured decisions via parallel block denoising instead of sequential token prediction.

This approach brings the extra advantage of bidirectional attention for well calibrated probability distributions over options, as well as native multimodal support from Gemma 4 for visual and text decisions. It is entirely open source and runs on a reasonably powered local machine, or you can easily host it inside a larger VM to serve as a decision making gating mechanism in front of other workflows.

Deploying DiffusionGemma-Jev (djev) is pretty easy too. You can now spin up a Jev API-compatible endpoint on Google Cloud Run using a single command. Performance is solid: ~35-60 ms for single step latency and batch@32 is ~100-123 requests/sec. It\x27s a straightforward way to experiment without needing your own GPU. Runs at roughly $3/hr and drops to $0 when idle. [https://github.com/taeold/djev-run](https://github.com/taeold/djev-run)

Oh, and here’s another one with a totally different architecture: [https://contrastive-lm.notion.site/](https://contrastive-lm.notion.site/)

![Figure](/images/blog/2026-09-28-life-moves-slow-sometimes/image-03.png)

### The End Game?

![Figure](/images/blog/2026-09-28-life-moves-slow-sometimes/image-04.png)

[https://x.com/nikitabier/status/2102643964528521286?s=20](https://x.com/nikitabier/status/2102643964528521286?s=20) - Read between the lines.
