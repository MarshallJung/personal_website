---
title: "When you need to write something…"
slug: "2023-11-27-when-you-need-to-write-something"
date: "2023-11-27"
description: "When you need to write something…"
coverImage: ""
tags: ["AI Strategy"]
readTime: "2 min read"
---

Whether writing an article, creating a presentation or making an argument remember the Serial-Position Effect:

We tend to recall the beginnings (Primacy Effect) and endings (Recency Effect) of things better than the middles. So if you create anything with a beginning & ending, focus more effort there.

### Transfer is more transferable than you thought

[https://arxiv.org/abs/2002.11794](https://arxiv.org/abs/2002.11794)

The above paper speaks to the efficiencies of training larger models since they tend to converge in far fewer gradient steps which outweighs their computational overhead. But another concept that isn’t part of this paper but should be considered as a benefit of larger model sizes; hyperparameter transfer. It can be extremely expensive to find the right HPs for large models. Essentially, models parameterized via μP (e.g., scaled properly) learn features in the infinite-width limit. This means their training dynamics are stable and predictable AND are equally stable and predictable at all scales.

So when you scale your small model and tune, the hyperparameters can be used on a large model of the same family.

### Jabbr.ai

Came across this company that is doing vision AI for combat sports. [https://jabbr.ai/](https://jabbr.ai/) Looks really cool and might help put some weight to the “significant strikes” metrics that are part of boxing/MMA.

### Q\* (It’s not AGI)?

One of the biggest challenges LLMs face in making the next meaningful leap in capability is moving from auto-regressive token prediction to world model extensibility. In essence, if today’s LLMs are presented with prompting that requires an understanding of planning they will fail. Lots of big companies are busy trying to solve this. Google’s Gemini has logical rule following capabilities from AlphaGo experience, but there are many others. Classical systems engineering, time series ML etc. are all attempts to solve this problem. Q\* is likely just OpenAI’s attempt at solving this problem.

### Cool scientific achievement

[https://www.sciencealert.com/earth-has-received-a-message-laser-beamed-from-10-million-miles-away](https://www.sciencealert.com/earth-has-received-a-message-laser-beamed-from-10-million-miles-away)

I find practical applications of this type of technology much more satisfying than programming sometimes. The ability to communicate at high bandwidth across solar system distances is really awesome!