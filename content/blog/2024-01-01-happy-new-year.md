---
title: "Happy New Year!!"
slug: "2024-01-01-happy-new-year"
date: "2024-01-01"
description: "Happy New Year!!"
coverImage: "/images/blog/2024-01-01-happy-new-year/image-01.jpg"
tags: ["AI Strategy"]
readTime: "3 min read"
---

I hope everyone is having a lovely start to the new year. I’ll pretend that this newsletter will cure all hangovers and help facilitate a productive start to 2024, but alas, that is up to y’all. I will however give you a useful quote for forming that new year’s resolution: “An empty calendar is a competitive advantage. The person who fills their calendar with average opportunities has no time for exceptional ones.” — Shane Parrish

### Didn’t even need to wait till 2024

[https://twitter.com/CeciliaZin/status/1740109462319644905](https://twitter.com/CeciliaZin/status/1740109462319644905)

I guess I didn’t even need to wait till 2024 to see one of my predictions start to come true. NYT sues OpenAI for copyright infringement. This isn’t the first time that MSFT/OpenAI has been sued (see: [https://www.theverge.com/2023/9/7/23863349/microsoft-ai-assume-responsibility-copyright-lawsuit](https://www.theverge.com/2023/9/7/23863349/microsoft-ai-assume-responsibility-copyright-lawsuit)) though this one is a bit different since MSFT isn’t indemnifying anyone from potential damages. However, it does carry some interesting weight since there will be some technical arguments made about how LLMs work, how they use training data and the suggestions that they produce. Again, I feel that the giant multimodal models are simply not going to be profitable or safe. Find the industry niche for your transformer based solution as quickly as possible!

### One model to segment them all?

OneFormer is pretty close to a “truly universal” model for semantic, instance and panoptic segmentation tasks. What makes is truly universal is that it’s a single model that is trained only once and can be used across all tasks. It differs from Meta’s SAM that takes various types of prompts and works with prompting. Meanwhile OneFormer is trained in a more supervised manner and can give you any label depending on the dataset it was trained on. It doesn’t segment everything but it segments the labels it has seen during training. More customizable. See the paper below.

[https://arxiv.org/abs/2211.06220](https://arxiv.org/abs/2211.06220)

### Why does this work?

I’m probably not the first to come up with this explanation, but perhaps my layman’s explanation might be of some help to others. Google released a paper (see: [https://www.nature.com/articles/s41586-023-06924-6](https://www.nature.com/articles/s41586-023-06924-6)) where an LLM found solutions to previously unsolved mathematical problems. Why does this work? Well, LLMs have been derisively described as “stochastic parrots” in the past, but this tends to underestimate the flexibility of the transformer architecture. Where training data is rigorously structured, as it was for the code based problems in the Google paper, it follows that a statistical sampling of the training data will lead to solutions given the rules based nature of mathematics in general. Some have said this is essentially “brute forcing a solution, which is a fair observation, but probably way more efficient than traditional methods. Hope this helps folks to understand.

[https://text-to-cad.zoo.dev/](https://text-to-cad.zoo.dev/)

### OneFormer Output

Very basic effort at getting this running…yup, it’s a cat.

![Figure](/images/blog/2024-01-01-happy-new-year/image-01.jpg)