---
title: "Are you sure you want to do that?"
slug: "2024-04-01-are-you-sure-you-want-to-do-that"
date: "2024-04-01"
description: "This last week I spent a day at a workshop sponsored by a big player in the data analytics platform space. They, like many others, have gone all in with the “AI” revolution. Curiously, when I had talk..."
coverImage: "/images/blog/2024-04-01-are-you-sure-you-want-to-do-that/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

No tricks today, just useful info!

This last week I spent a day at a workshop sponsored by a big player in the data analytics platform space. They, like many others, have gone all in with the “AI” revolution. Curiously, when I had talked with this same company no more than a few years ago, they were adamantly opposed to AI (we called it ML back then) for the primary reason that it was not explainable enough for customers to build productionized solutions. There is some truth to this, as most of my readers will be aware, the majority of ML projects in commercial space do not end up moving outside of the proof of concept stage.

Well times have changed and this company is now all in on AI. The platform itself still has all the capabilities of advanced data wrangling but they spent the day demonstrating and letting us build on top of an LLM based no-code pipeline builder. In some ways this was pretty cool. Pretty close to a no/low code RAG tool for a companies BI group or engineering divisions. So far so good, right? Well the whole thing was powered off of OpenAI API calls for the pipeline functionality. The “workflows” basically helped build complex prompts with RAG enabled tools. Soooo, what happens when GPT4 isn’t available, OpenAI changes the sys prompts substantially, or things just get too damn expensive? None of these eventualities are outside the realm of possibility. You’ve just spent many millions getting the platform stood up, lots and lots of hours getting data QC’d and available, additional weeks tweaking the prompts and pipelines just to have the thing stop working when the backend LLM goes away?

You are mistaken Marshall, I hear you say. Just swap in an open source model. That’s a possibility for sure, but again you have to re-engineer your prompt chains and the results are different. In mission critical data tasks for scheduling, maintenance, or supply chains is this level of unknown something that you want to live with? In addition most, if not all, of the customers of this company will be reliant on other organizations or the open source world to train and/or fine tune models. It’s a big technical risk that I don’t think many customers of this company have really thought about. Maybe this big data analytics platform company was right years ago about AI in production. I suppose we will find out soon enough.

### Prevalence is a risk?

Ask yourself when was the last time you saw anyone in the tech space using anything other than a Mac? Likely if it wasn’t something with an apple on it, and the operator was L33T, they were running a flavor of Linux. So with everyone with useful information to steal how long was it before zero day issues were to be found. Now this is a hardware bug (brought on by attempts to increase performance) and now an operating system issue. But would this even be front page if it affected Chromebooks, for example. Mac’s are now the number one targets of black hat state actors. Because that’s where the valuable information lies today.

[https://arstechnica.com/security/2024/03/hackers-can-extract-secret-encryption-keys-from-apples-mac-chips/](https://arstechnica.com/security/2024/03/hackers-can-extract-secret-encryption-keys-from-apples-mac-chips/)

Is this also going to affect the potential opportunity for Apple to sell M-silicon as a viable lower cost alternative to NVIDIA hardware for model training?

### A rather humorous…or sobering example.

[https://www.psychology.mcmaster.ca/bennett/psy710/readings/BennettDeadSalmon.pdf](https://www.psychology.mcmaster.ca/bennett/psy710/readings/BennettDeadSalmon.pdf)

Inspired by this paper, feeding an MRI of a dead salmon to a multimodal LLM can really super charge the potential for hypochondria.

![Figure](/images/blog/2024-04-01-are-you-sure-you-want-to-do-that/image-01.jpg)

![Figure](/images/blog/2024-04-01-are-you-sure-you-want-to-do-that/image-02.jpg)

If you feed AI an MRI, it will happily write a detailed and very convincing diagnosis…even if the patient is a dead salmon. On second thought is this a rather rough April Fool’s prank waiting for someone to seize the opportunity?

### Gemini Pro integrated into Jupyter

[https://colab.research.google.com/drive/1zjYHo2lyCMk1cIAuPGJvO8Ea0PenUKm9?usp=sharing%5D](https://colab.research.google.com/drive/1zjYHo2lyCMk1cIAuPGJvO8Ea0PenUKm9?usp=sharing%5D)

No need to switch tabs or open a separate browser window while coding in a Jupyter notebook. Any little bit of efficiency in prototyping can really be inspirational. Can’t wait till they plug in Gemini 1.5

### What did they actually use?

[https://arxiv.org/abs/2403.05530](https://arxiv.org/abs/2403.05530)

Recently, DeepMind updated the Gemini 1.5 paper. They didn’t exactly say what methods they used to get good performance across millions of tokens of context, but here is a list of things that I’ve gathered from other models. Sparse attention (sliding window or interleaved), ring attention, transient global tokens, RoPE. The architectures of Gemma might just be scaled. And don’t forget Google has the most compute on earth, so they probably just added horsepower. Again, I do wonder if this isn’t simply just willy waving and what indeed are the economics of Gemini?