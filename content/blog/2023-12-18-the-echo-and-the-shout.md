---
title: "The echo and the shout…"
slug: "2023-12-18-the-echo-and-the-shout"
date: "2023-12-18"
description: "The echo and the shout…"
coverImage: ""
tags: ["AI Strategy"]
readTime: "5 min read"
---

I’m going to be paraphrasing Tom Bilyeu here. Too many of us today define ourselves through the echo. We see ourselves only through what we hear back from others. Whether through social media or gossip, who we are is built brick by brick by other people. What we should be doing is defining ourselves by what we believe in and that requires a closely held moral code. Defined by religion or the close family you live with, it is an iron solid scaffolding that defines your right and wrong. People define those with this kind of rock solid belief as authentic, genuine and trustworthy. Be very careful that who you are is built by your own voice and not that of others.

### A guide to prompt engineering — OpenAI

This follows along with last week’s observation that interacting with LLM based tools is changing the way humans use technology. There is an interesting subtext of LLM tools being almost human. The guide posted here could be just as easily a step by step method for how to teach a group of children. And everyone knows that the best way to learn something is to be able to teach it to someone else. In any case following these steps will get you better and faster responses from LLM tools.

[https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)

### Hyperparameter tune the real world

“Wouldn’t it be interesting if we could do Bayesian optimization of shapes with 3D CAD?” asks the author of this article. For a while I’ve been interested in how we might explore the use of generative AI tools for 3D design. It’s easy enough to ask an LLM based tool to generate something creative, but constraining it in the way that a physics defined discriminator in a GAN algorithm might do so. This article shows a bayesian optimization of 3D CAD geometry for real world engineering. While it’s not focused on LLMs specifically if the embeddings are done correctly…

[https://medium.com/optuna/black-box-optimization-of-geometry-and-functionality-by-integrating-optuna-and-3d-cad-f2d2984d263e](https://medium.com/optuna/black-box-optimization-of-geometry-and-functionality-by-integrating-optuna-and-3d-cad-f2d2984d263e)

### The Novice’s LLM Training Guide

This was a suggestion by a fellow Twitter/X user (it’ll never be X to me as long as the domain stays the same!!!) and it is probably the best layman’s explainer for training LLM’s. No requirement to understand the depth of the algorithm, just basic advice that helps out.

[https://gist.github.com/btbytes/cf845f9ade1cb34348110c14c8c49cea](https://gist.github.com/btbytes/cf845f9ade1cb34348110c14c8c49cea)

### RAG in your browser

I’ve had beta access to this tool for a while now, and I’ve found it to be really helpful. It is essentially a RAG in your browser. Upload docs from your Google drive and start asking questions about summarization, commonalities and differences. Review legal docs like NDA’s, business terms or HR/healthcare stuff? This is meant specifically for that effort. All LLM generated answers come with references to the documents themselves so that hallucinations are eliminated. It’s generally available now, and backed by Gemini Pro. AFAIK there are no other tools like this in the marketplace as of today.

[https://blog.google/technology/ai/notebooklm-new-features-availability/](https://blog.google/technology/ai/notebooklm-new-features-availability/)

### 2024 Predictions and newsletter

It’s time to make some predictions for the ML space in 2024. I’ll put these out on Twitter too so that I have some provability should things go well. If I’m totally wrong, I will have to address them as well.

1.  A big unicorn AI company will blow up and disappear by year’s end. — I’m not alone in this prediction by any means, but it does have its opponents so the prognostication has weight. Given Google’s quarterly earnings admission that big, public AI models are not serious revenue makers. I still have yet to see a business model that uses API’s and captures market share when there are so many open source alternatives that can better answer the questions of hallucination, RAG on non-public data and security.
2.  The next big step forward in model performance will be in the field of embeddings and tokenization optimization. These tools will not be open source and there are unicorns in industry fields. — I’ve written about this as well, but the attention transformer algorithm doesn’t have a lot of juice left in there, but the definition of language is still ripe for advancement.
3.  The legal world of LLMs will be front and center. — As the hunt for revenue capture in the big players space heats up, the bloody battle will be in the courtroom around use of data to train these models. Take code suggestion as an example. Copilot has emerged as the front runner, but as soon as a big software shop ends up on the sharp end of the non-permissive license spear there will be a real scramble for on-prem, company git trained models that dodge that trap. This will effect #1 as well.

I also need to determine what I want to do with the newsletter. I enjoy writing it for all those folks that I very much enjoy speaking with. But my responsibilities at my new role may preclude sharing some of these ideas. I’ll have to give it some thought. Merry Christmas to all my readers and their families. Take care of one another and may your lives be blessed.