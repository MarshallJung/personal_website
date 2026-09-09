---
title: "When the best agree ;-)"
slug: "2024-09-23-when-the-best-agree"
date: "2024-09-23"
description: "Last week’s newsletter was more of a deep dive article into OpenAI’s o1 model. I thought it important enough to focus on since it does represent a meaningful step change in LLM typ..."
coverImage: "/images/blog/2024-09-23-when-the-best-agree/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Last week’s newsletter was more of a deep dive article into OpenAI’s o1 model. I thought it important enough to focus on since it does represent a meaningful step change in LLM type models. (Or iLLMs as we shall call them from now on). BUT, we are back to the regularly scheduled program this week with some rapid fire news and observations. So here we go!

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-01.jpg)

Referencing my intro, I was glad to see that one of the best in the business and I were writing about the same concept on the same day last Saturday ([https://medium.com/@jung.marshall/the-forbidden-fruit-tasty-but-is-it-a-game-changer-382377ae84cc](https://medium.com/@jung.marshall/the-forbidden-fruit-tasty-but-is-it-a-game-changer-382377ae84cc)) when we were observing that o1 and “LLM” isn’t really a good way of naming foundational models. However, I think that AK’s tweet does not address some important details in the application of autoregressive transformers to other problem domains like vision, chemistry or 3D items. In order for the “autoregressive” part to work, you need to define a single linear sequence for your tokens. This makes sense when using language, of course, and for vision we just use raster order because it’s convenient. But for other domains picking the sequence order is not obvious, and impacts the model’s inductive bias. While in theory a transformer can imitate any neural network architecture, I doubt their generalization for problem domains that aren’t intrinsically linear in their data representation. You can train transformers in a non-autoregressive way, but that is a square peg in a round hole.

I recently had a conversation with someone that is trying to use genAI to solve 3D applications for engineering. We’ve seen [zoo.dev](https://zoo.dev/) and now Fei-Fei’s World Labs ([https://techcrunch.com/2024/09/13/fei-fei-lis-world-labs-comes-out-of-stealth-with-230m-in-funding/](https://techcrunch.com/2024/09/13/fei-fei-lis-world-labs-comes-out-of-stealth-with-230m-in-funding/)) trying to solve this issue. (World Labs with $230 million out of stealth?! Tbf they do appear to be trying to eat the elephant in one bite, so there are probably better/smaller businesses in this space). But back to the autoregressive handcuffs. For some of the more thorny AI issues like creating manufacturable 3D items from and AI process, I’m not convinced that the current method of autoregressive transformer architecture is the right path forward.

### Way too much money

So [https://www.worldlabs.ai/](https://www.worldlabs.ai/) is a unicorn straight out of stealth with no product…BUT, BUT, BUT I can do you one better. [https://magic.dev/](https://magic.dev/) has raised $515 million and shipped a grand total of 217 lines of code in like 2 years ([https://github.com/magicproduct/hash-hop/blob/main/hashhop/generate.py](https://github.com/magicproduct/hash-hop/blob/main/hashhop/generate.py)). It’s a damn good grift if you can land it. I was very tangential to web3 hype, but did it ever get to this level?

### Refining the test time scaling concept

Last week in reviewing o1 the graphs that presented mathematical benchmark accuracy were shown as train time and test time compute. The point being that we can build on two scales now. To clarify the reason that test time compute a.k.a reasoning is important here is that it lets you dynamically allocate compute based on problem difficulty. This is more cost efficient.

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-02.jpg)

I would not be surprised if capturing the CoT reasoning steps through a RL process could highgrade particular pathways that could then be incorporated into a foundational model in a sort of “getting smarter” feedback loop.

This also has implications for inference infrastructure. We don’t need the same GPU power for serving these models, even in the CoT process. So custom ASIC providers will see some benefit here. NVIDIA may see some softness.

### Imagining a realistic world

As we noted above with World Labs, doing something with the 3D world and generative AI can be a lucrative business. There are interesting workflows that abound to create 3D digital objects.

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-03.jpg)

Here is one of many that I’ve seen across my feed over the past few months. I don’t know anything in particular about these companies, it’s just an example: [https://x.com/techhalla/status/1836451714372600149](https://x.com/techhalla/status/1836451714372600149)

But because I think that these models would be useful in creating 3D assets for the purposes of digital engineering, I tried to prompt my way into a bolt. I shared the target CAD and a few examples of as close as I could get with various diffusion based tools.

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-04.jpg)

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-05.jpg)

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-06.jpg)

Obviously we aren’t there yet, but we will need some training data to help out. Might I suggest?

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-07.jpg)

### Not just for your call center

So we can all probably come up with the most obvious applications for current SOTA AI tools. Call centers being one of the most obvious. Really any well defined task that has structured data. You may have noticed over the past few months that [https://www.klarna.com/us/](https://www.klarna.com/us/) is doing the following:

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-08.jpg)

Systems of record are not something that I would have pegged as a target for AI modernization, but if you can gather the human/SaaS interactions and results, there isn’t a reason you couldn’t then build code around those interactions and layer an AI UI over the top to replicate a Salesforce tool that would work for 80% of use cases. It’s no different than “rolling your own” was always an option for technology. Now we are just having agentic AI do the same. Not much is safe.

### True?

![Figure](/images/blog/2024-09-23-when-the-best-agree/image-09.jpg)

Given the tools available it may indeed be the last thing that anyone in tech does. Pure coding developers will largely be a ting of the past.

### Battle Royal!!!

Opinions?

1.  The new contender: [https://github.com/UdaraJay/pile](https://github.com/UdaraJay/pile)
2.  The reigning champ: [https://obsidian.md/](https://obsidian.md/)

Let me know and why!