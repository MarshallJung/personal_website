---
title: "First through the Stargate"
slug: "2025-01-27-first-through-the-stargate"
date: "2025-01-27"
description: "First through the Stargate"
coverImage: "/images/blog/2025-01-27-first-through-the-stargate/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

This last week the new administration and some tech leaders combined with Japanese cash announced “Project Stargate”. ([https://x.com/OpenAI/status/1881830103858172059](https://x.com/OpenAI/status/1881830103858172059))

First, unless this is a superpositional faster than light transport portal, I think they should rename it. Second, is this more hype than substance? Maybe. $500B is an awful lot of money and that’s cash that Softbank doesn’t have liquid. So it’s more of a commitment to best effort over time rather than a guarantee right now. The people involved in this announcement combined with the political winds of the moment also tell part of the story about the game of chess being played. Third, is this really a requirement for advancing the current approach to AI? Given that Deepseek has done nearly as well (trust those benchmarks right?) with ostensibly a fraction of the resources of OpenAI, is there really a need for a $.5T infrastructure investment to get to where we need to go? Who knows but Altman asked for like 7 Trillion so maybe .5 is the best he can get.

And lastly, this AI investment is predicated on a bunch of assumptions. I did a breakdown of the costs of AI data centers last year, but if we follow that same logic the amount of power required to run the whole shebang quite literally does not exist, unless you are willing to put a few major US states into permanent blackout.  
[https://x.com/energybants/status/1881860142108377412  
](https://x.com/energybants/status/1881860142108377412)So power, water, not to mention the ancillary hardware required is probably years away from being available. I have to say this is likely mostly posturing. And if any of Project Stargate is built it will likely be a small fraction of the pie-in-the-sky vision. AI will advance but it won’t be through the “Stargate”.

### A bit about Deepseek R1

It’s bigger in the MLverse than even OAI’s o3 release. Whether you believe it is the product of cracked Chinese quant traders optimizing a relatively straightforward concept (more on that later) OR it’s an effort by the Chinese government to stuff stick in the spokes of US AI companies using illicitly gathered NVIDIA GPUs, there is no doubt that it’s a capable model and it’s fully open. As I stated in the 2025 predictions:

![Figure](/images/blog/2025-01-27-first-through-the-stargate/image-01.jpg)

It looks like this prognostication is headed in the right direction, even if the gov alignment isn’t yet apparent. Lots of companies are planning to fine tune this model for on-prem and even on-device AI systems. As a competitive impetus in the space, I like it.

A bit about how it achieved such good performance on comparatively inferior (hypothetically) hardware: Basically pure reinforcement learning. Base Model -> RL ->Finetune -> RL -> Finetune → RL and so on. The paper here: [https://arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948) Pure reinforcement learning (RL) enables an LLM to automatically learn to think and reflect. It is a bit of a simple ripost to the OAI’s o1 family of “reasoning” models that require extensive chain of thought data. Simply incentivizing the model like they did way back in the AlphaGO days gets you similar performance.

It also highlights another interesting thought experiment. One diagram in the R1 paper shows a pretty linear relationship between inference and the response length.

![Figure](/images/blog/2025-01-27-first-through-the-stargate/image-02.jpg)

This seems to be better than o1 based models that are now generating tens of thousands of tokens to solve hard problems. o3 is likely generating hundreds of thousands or millions of tokens that add up to thousands of dollars to solve complex problems like the ones on the ARC-AGI benchmark. Is R1 The optimal solution attainable? Don’t know, but this may well be a very important area of study. We know how to vertically fractionate models, basically big-model-to-small-model, very well. But getting the chain of thought process to be done more efficiently seems a cool place to explore.

This paper talks about this theory: [https://arxiv.org/abs/2310.07923](https://arxiv.org/abs/2310.07923) Where you ablate tokens from CoT while training it to mimic its fully-leaded base. Would definitely lower costs and latency.

### Warp Speed

Sure, you have your zsh theme just dialed in right? But here comes a cool offering to replace that outdated terminal that looks like a unicorn threw up neon colored bash commands all over your screen.

[https://www.warp.dev/](https://www.warp.dev/)

It’s an AI enabled terminal that has a freemium model to try out. The one thing that I’ve found it helps with is the python dependency hell that I constantly find myself in. It simply suggests the fixes and I press enter. Lovely.

### My view on Agents

These days, it’s hard to miss the hype around AI Agents. They’re everywhere: booking flights, managing calendars, even fixing code. With any new technology comes some confusion around the terminology. But beyond defining what an Agent is, it’s also crucial to understand the technical nuances.

Let’s start with the definition. I define agents narrowly: they should have well-defined inputs and produce consistent, reasonable outputs. Think of it like functional programming, but with the added power of a Large Language Model (LLM) as the underlying code. While the agent’s “code” isn’t written line by line, its capabilities and processes are clear. I view agents as atomic operators that can be chained together into well-defined programming workflows.

Understanding the technical side aspect to agent design is also important. When developers use AI for tasks like generating unit tests, interacting with a CLI, or any number of other capabilities, they expect predictability and consistency. Without this, the AI tool risks trapping the developer in a frustrating cycle of errors and prompt loops. Often, this ends up wasting more time than doing things the “old-fashioned way.” In short, the developer loses trust. This issue tends to be even more pronounced with experienced developers.

So agents should be atomic and tightly defined. Provide access to semantically consistent data and you now have an auditable and consistent “agentic network”

### An Interesting Observation

A surprising outcome of the development of low-code tools is the revelation that few individuals outside of engineering teams possess the capability to automate or connect business flows. This remains true even when the requirement to learn coding is removed. The previous assumption that numerous individuals could accomplish simple automation tasks if they did not need to learn Python and the subsequent design of products to facilitate this have been proven incorrect.

I consistently run into people in the tech space that don’t seem to grok how to use AI in the most basic of helpful ways. Perhaps the observation that certain people possess the ability to think “like” the technology they are using will separate the people skilled with AI from those that will never be able to use it as effectively. I have a good friend and reader of the newsletter that can literally speak SQL. I’ve never seen anyone as talented. But the average person on the street? They’ll simply never get the concept of an inner join (or be able to use it) no matter how much AI you give them.