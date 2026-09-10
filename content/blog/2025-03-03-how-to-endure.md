---
title: "How to Endure"
slug: "2025-03-03-how-to-endure"
date: "2025-03-03"
description: "It isn’t often that I write from the heart in my weekly newsletter, but when life is sufficiently rocky enough to teach me a lesson I try and take it to heart. It is this last week that another one of..."
coverImage: "/images/blog/2025-03-03-how-to-endure/image-01.jpg"
tags: ["AI Strategy"]
readTime: "8 min read"
---

It isn’t often that I write from the heart in my weekly newsletter, but when life is sufficiently rocky enough to teach me a lesson I try and take it to heart. It is this last week that another one of those lessons has been shown to me, hopefully, for the last time. Though I am a famously slow learner, so don’t put any bets on it.

And the lesson is this: Be careful what you wish to hear. Or as Naval Ravikant said a slightly different way, “If you hate it, look for the truth in it; if you love it, look for the lie.” Pithy words to be sure, but all great bits of wisdom provoke an eye roll, at least until you fall foul of them.

The wise keep going not because they are braver, but because they have learned to be a lot better prepared, by which I mean, a fair bit sadder. They know that defeats and humiliations are unavoidable events, not anomalous or freakish punishments. They wonder, at the close of every quiet day, why not more has gone wrong. They endure on the basis of having managed — with appropriate thoroughness — to extinguish all their more tender and delicate hopes.

Perhaps this is my way of saying, “Memento Mori”. But in another sense, the hope for success in a career is too easily wrapped up in greed or envy or fear of missing out. Once you tread that path, it would be forever impossible to be happy in the outcome. I forget that every once in a while and then start again at the beginning, with a more tempered hope that I can at some point find a place to be.

### A Week of…Releases

This week, we have quite a bit to cover. We’ll try to summarize everything under this headline: DeepSeek released a week’s worth of open-source concepts, some of which are quite impressive. On the other hand Anthropic and OpenAI also introduced new foundational-ish models with added features, though all had disappointments in various aspects.

In case you were confused:

![Figure](/images/blog/2025-03-03-how-to-endure/image-01.jpg)

And as the author says, if you understand the tweet then you might be a bit too far down the rabbit hole. But don’t worry I’m right there next to you.

Last week DeepSeek released new open source tools daily. Many of them were impressive, but I thought the standout was their new parallel file system.  
[https://github.com/deepseek-ai/3FS](https://github.com/deepseek-ai/3FS) The Fire-Flyer File System (3FS) (holy moly, try saying that 3 times fast) TLDR; DeepSeek built a unique domain specific ML training / inference distributed file system. It demonstrated, again, it’s possible to squeeze much more out of current hardware. There also isn’t really a comparable open-source project. Traditional file systems are generally optimized for sequential, linear access patterns. Which favors relational database engines, among others. Yet pre training mostly accesses data in a random, short lived fashion — a complete opposite. Let’s say we have a large corpus of text, it can’t all fit in a GPU’s RAM. We also don’t want to process one token at a time — as that would result in extreme under utilization of compute / memory power. A more optimal approach would be to train on a “batch” of data at a time. A model training on sequential data risks “memorizing” the data’s sequential nature instead of learning from underlying features — random sampling mostly eliminates the risk. It’s important to remember that this file system was designed for pre-training, which is why DeepSeek created it. Many other labs with large models may not want to incur the cost of starting from scratch in order to use 3FS. I’m still unsure about the potential performance boost it could provide during test-time compute.

![Figure](/images/blog/2025-03-03-how-to-endure/image-02.jpg)

OpenAI recently released its GPT-4.5 model, codenamed Orion (I think). The response has been largely lukewarm, as the pre-training enhancements don’t appear to have significantly improved performance. It’s not a reasoning model at this stage, and there was some belief that it was delayed due to a perceived lack of performance improvement over GPT-4. It also turned out to be really pricey as the chart above demonstrates. In some ways, this makes the overall performance of the non-reasoning Grok3 model by xAI even more impressive. Also this week, Anthropic released Claude 3.7, including some fine-tuned versions of the model, such as Claude Code. General impressions suggest that GPT-4.5 shows a significant improvement in human-like qualities, while Claude 3.7 appears to move in a direction more focused on code and technical solutions, moving away from the more universal models like GPT. It’s still early days for these models. In particular GPT-4.5 hasn’t been built as a reasoning model yet, so we can expect substantial improvements in the future. It’s likely the pre-training scaling will pause for a while, but we may start to see large foundational models increasingly specialized through reasoning methodologies.

![Figure](/images/blog/2025-03-03-how-to-endure/image-03.jpg)

It likely won’t be significantly more difficult or compute-intensive to get big gains than you think. I found this paper: [https://arxiv.org/abs/2502.03387](https://arxiv.org/abs/2502.03387) Basically the success of building a reasoning model depends on the pre-trained priors in the foundational model. They are unlocking the latent knowledge in that base model. A foundational model already understands concepts like math and coding from pre-training. Reinforcement learning optimizes how it utilizes that knowledge, similar to tuning a race car engine instead of replacing core components to improve performance.

Wrapping this up on a 30k foot view, company leaders need to update their beliefs about AI’s capabilities, especially with the new crop of models from various companies. Instead of assuming AI can only handle low-level tasks, we should explore how it can genuinely serve as an intellectual partner for technical workers.

### Crashing Out to Win?

So this X user @im\_roy\_lee created this useful tool: [https://www.interviewcoder.co/](https://www.interviewcoder.co/) and used it to get many offers for SWE positions from everyone from AWS to Meta To Capital One.

![Figure](/images/blog/2025-03-03-how-to-endure/image-04.jpg)

I’m not the target audience for this tool, but having taken and failed the coding exam for an Anthropic interview (the old fashioned way, rawdogging it), I understand the frustration behind asking these questions to gatekeep positions at desirable tech companies. I’m not sure the developer of this software tool is using it ethically, but we can’t argue with the virality of his posts or the sentiment he’s capitalizing on with technical folks in the industry. I do wonder how this will impact technical job interviews that require coding. In the future, these tools might also answer unique questions, even those relevant to middle management roles. I believe in-person interviews will make a significant comeback, though I’m uncertain what that will look like. Tools like Cursor and Claude Code will only improve, allowing more people to build faster. Companies that don’t embrace these tools will quickly fall behind in creativity, especially ignoring those employees who may not excel in coding but are amazing in product development or marketing who now have the same coding abilities as the elite programmers of just a year ago.

### HuggingFace solves context aware NL -> SQL

![Figure](/images/blog/2025-03-03-how-to-endure/image-05.jpg)

I have recent experience with a company focused on replacing SQL with a semantic layer in order to enhance natural language insights into structured data sets. A significant challenge with this solution is that the AI models can quickly overwhelm the need for that semantic layer. I believe this demo from HugginFace illustrates that capability well. There will always be a need to manually add semantic metadata over complex structured data. However, I believe that in a few years, diffusion-based models will enable us to visualize data sets within their overall structure, allowing for largely self-generated semantic modeling. Visit the huggingface.co website. You can use any dataset and it will offer this feature, and you’re also able to upload your own datasets if you wish.

### Cast it! 3D from RGB

![Figure](/images/blog/2025-03-03-how-to-endure/image-06.jpg)

[https://sites.google.com/view/cast4](https://sites.google.com/view/cast4)

There’s currently no code for this, but the images and videos are promising. I’ve kept track of advancements in this area, and I’m interested in it because of my previous experience at a company focused on generative 3D. This process transforms 2D concepts into three-dimensional space. I’m not sure if the engineering community fully understands this yet, but the images are encouraging, provided that dimensions remain stable across all axes.

### Shiri’s Scissor

[https://x.com/eddybuild/status/1895968364046020608](https://x.com/eddybuild/status/1895968364046020608)

A user on X has created a tool that simulates A/B tests for social media posts. Its goal is to make your titles and text potentially more viral. I’m at an age where I prefer not to go viral, especially for controversial reasons. However, this post reminded me of a story I read many years ago.

[https://slatestarcodex.com/2018/10/30/sort-by-controversial/](https://slatestarcodex.com/2018/10/30/sort-by-controversial/)

The story is clearly fiction, but it presents a relevant dilemma we observe in today’s society. When everything is optimized for clicks, the most controversial viewpoints gain the most attention. This leads to chaos and noise, making it harder to understand real data. It’s uncertain whether AI will resolve this issue or exacerbate it, or if we might see multiple algorithms battling to enhance and clarify human information. The challenge to my readers is to understand what scissor statements we use or are affected by in our daily lives.