---
title: "It is something we all think about"
slug: "2024-01-29-it-is-something-we-all-think-about"
date: "2024-01-29"
description: "It is something we all think about"
coverImage: "/images/blog/2024-01-29-it-is-something-we-all-think-about/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

“Our complaint against dying is ultimately an admission that we haven’t learnt how to live. The goal shouldn’t be to stretch time out yet further. We should be ready to go pretty much any time after four decades on this busy planet; sad to leave of course, but neither devastated nor incensed. Our fingers should prise themselves lightly from the handrail. We’ll have learnt how to live — and properly deserve the gift we’ve been given — once we know how to say a relatively crisp, relatively untragic, darkly amused goodbye.” — The School of Life

### The Leaderboard

[https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)

![Figure](/images/blog/2024-01-29-it-is-something-we-all-think-about/image-01.jpg)

I’m sure that most of my readers are aware of my skepticism of LLM leaderboards or the types of assessment algorithms that go into figuring out the ranking. While the problem of the models (especially the really big ones) having already seen the data used in the tests is getting worked around, I still think that there is some ambiguity that’s basically impossible to quantify. Still it’s interesting to see these rankings as a measure of model progress. Anecdotally, I have noticed a significant improvement in Gemini over the past few months, and the integration with Google search does make it a powerful tool to help return resources that can be used a references.

### Probably still leaky

[https://arxiv.org/abs/2311.17035](https://arxiv.org/abs/2311.17035)

We’re all aware of the admonitions that LLM’s can use your prompts as training data and swerve those up to other users. Obviously an issue with API based LLMs, but think of this a problem if you have a big org and the HR dept should be separate from shipping, development etc. From the paper above: Recent research has discovered a tendency of LLMs to memorize (and emit verbatim) non-negligible portions of their pretraining dataset. LLMs that have undergone alignment (e.g., ChatGPT) seem to memorize/emit less data, but a recent paper from Google reveals that training data can be extracted from these models as well given the proper prompting approach. Put simply, even extensively aligned LLMs are not robust to data extraction attacks.

### More Super Res!

[https://supir.xpixel.group/](https://supir.xpixel.group/)

Interesting mix of upscaling, enhanced with textual prompts. So this is a multimodal image generation a la Midjourney combined with the constraints of generative priors. The huggingface page and Github are on the page. An interesting observation that only a car guy could notice is the before/after of the first demo on the page. It goes from a Dacia emblem to something that looks like a Nissan badge. Goes to show where the text and pretrained images have an outsized effect on the result.

![Figure](/images/blog/2024-01-29-it-is-something-we-all-think-about/image-02.jpg)

![Figure](/images/blog/2024-01-29-it-is-something-we-all-think-about/image-03.jpg)

### Consolidation?

[https://huggingface.co/blog/gcp-partnership](https://huggingface.co/blog/gcp-partnership)

So, this being a weekly newsletter I’m aware that my astute and very, very current readers will likely already be well aware of this news, but the Huggingface and Google partnership is a pretty big deal. I’ll adress it in two parts:

Part 1: The economics. First, we know that Google may sometimes be late to the party, but they still carry weight and have deep ML knowledge. Seeing the OpenAI ecosystem developing, what’s the right response? Giving open source competitors an easy place to develop on GCP with a bonus of models being specialized in the GCP TPU arena is a big plus. Think a profitable Kaggle exercise where the best can then be licenced into Vertex for SaaS deployment. It’s a smart deal.

Part 2: The ethics. Most know that I cut Google more slack than I might MSFT, but I still have a soft spot for the Goog, though she’s hurt me more than a few times. I do wonder how the giant tech companies trying to push this new age of AI around is going to turn out. When there are promises of massive $$ to me made, open source does have an issue with survival.

### A problem solved for nuclear reactors?

[https://scitechdaily.com/cannot-be-explained-scientists-unveil-revolutionary-ss-h2-steel/](https://scitechdaily.com/cannot-be-explained-scientists-unveil-revolutionary-ss-h2-steel/)

This article describes a new type of stainless steel called SS-H2. It is more resistant to corrosion than other types of stainless steel and cheaper to produce, making it a promising material for hydrogen production. They use a new process called “sequential dual-passivation,” which creates a protective layer on the steel that prevents corrosion. It has the potential for various applications, including hydrogen production from renewable sources BUT more importantly can this steel solve the hydrogen embrittlement issue that plagues high temp nuclear reactors necessitating shutdown and replacement of very expensive piping. Could the same process be worked on other high temperature alloys like Hastelloy or Inconel?