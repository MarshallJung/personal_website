---
title: "Truth that I wished I knew earlier"
slug: "2024-07-08-truth-that-i-wished-i-knew-earlier"
date: "2024-07-08"
description: "Truth that I wished I knew earlier"
coverImage: "/images/blog/2024-07-08-truth-that-i-wished-i-knew-earlier/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

Sometimes when the news cycle in the world of machine learning is a bit slower around the holidays and in the summer when people are on vacation I tend to look for ideas that are more inspirational. Perhaps like many I often find myself deep in thought. Twisted and turned down the esoteric ideas and details of things that I find interesting. If, on one hand, this narrow focus is good for understanding the nuance of a particular topic, it can be at the expense of the world and the people around me. I learned too late in life that our relationships with those around us are far more valuable that most technically inclined folks realize. The people around us, our families and friends, and the relationships we have with them might trundle on without too much care or attention most of the time, but neglect will be far more sad than most of us realize. Don’t let this part of your life go without the care it deserves.

“*Somewhere in the future, your older self is watching you through memories. Whether it’s with regret or nostalgia depends on what you do now.*” — G.S. Bhogal

Where the research should be

Finding unique research in the language domain is unique these days, as most frontier models and big research labs are so focussed on the multimodal model structure. However, the return on investment for better segmentation and tokenization is probably much higher than research on the transformer architecture itself. This paper caught my attention for a few reasons.

First, as the voracious need for massive data leads towards use of poorly structured transcripts or OCR, clean segmentation becomes more important. Their solution involves the following process:

SAT: Segment any Text  
1\. Pre-train a model on paragraph segmentation.  
2\. Relies on a subword tokenizer.  
3\. During the training phase randomly remove common punctuation-only tokens with probability p and use the auxiliary punctuation-prediction objective  
removes all casing and punctuation in 10% of samples within a batch  
4\. Adds randomness to corruption like duplicating punctuation, removing punctuation, lowercasing, and removing/adding spaces between sentences.  
5\. Use only the immediate N future tokens for its predictions. A uniform limited lookahead mechanism can help solve issues with short sentences by choosing an appropriate N  
6\. Can be fine-tuned with LoRA for quick domain adaptation if required

[https://arxiv.org/abs/2406.16678](https://arxiv.org/abs/2406.16678)

![Figure](/images/blog/2024-07-08-truth-that-i-wished-i-knew-earlier/image-01.jpg)

Best Practices for RAG

[https://arxiv.org/abs/2407.01219](https://arxiv.org/abs/2407.01219)

I know that I bang on about RAG more than even 3D generative design. It’s honestly because I do think that this is the most effective, easiest and fastest way to add value to most organizations. Repeating work, or not having the background to build on the good work of others is almost tragic. RAG tools that are local, fast to deploy and keep up with an organization’s pace will have the biggest impact in productivity. The front line of AI. This paper is a decent guidepost of best practices at the current moment.

![Figure](/images/blog/2024-07-08-truth-that-i-wished-i-knew-earlier/image-02.jpg)

Do you agree?

[https://youtu.be/tsTeEkzO9xc?si=TYZUNOvi9EFouLoi](https://youtu.be/tsTeEkzO9xc?si=TYZUNOvi9EFouLoi) OpenAI Co-founder Andrej Karpathy explains the new computing paradigm: “We’re entering a new computing paradigm with large language models acting like CPUs, using tokens instead of bytes, and having a context window instead of RAM. This is the Large Language Model OS (LMOS)”

Looking back at the history of computing, it’s clear that we’ve always built on top of simpler foundations: from Assembly to C, C++ (OO), Java, and so on. Computing naturally evolves by aggregating lower level concepts into higher level ones. With the increasing use of LLM based tools, and “prompting language”, or Socrato, as I’ve called it, is it getting into the next generation of A.K.’s “paradigm”?

Probably not FOOM?

[https://arxiv.org/abs/2406.03442  
](https://arxiv.org/abs/2406.03442)[https://arxiv.org/abs/2406.19354](https://arxiv.org/abs/2406.19354)

In the first paper above, which links the second, they discuss the fundamental problems with model editing. In part one, they first explore challenges in three areas: (1) defining the editing problem, (2) developing benchmarks, and (3) assuming LLMs have editable beliefs. Then in part two they empirically compare model editing against Bayesian belief revision. The goal is to simplify and formalize the problem, so they have a gold standard for evaluating editing: how an idealized rational agent responds to new evidence. What did they find? They find model editing doesn’t generalize to entailed facts or logically related facts. This has been shown before with current LLMs. We are able to exactly quantify how bad the generalization is, by comparing the edited LM probabilities against their Bayesian model’s posteriors. *LLM’s can’t self edit towards coherence*…Is this solvable by using other knowledge structures like KG’s or more robust tokenization methods?

![Figure](/images/blog/2024-07-08-truth-that-i-wished-i-knew-earlier/image-03.jpg)

I did also listen to the Dwarkesh podcast with Francois Chollet, and similar to the paper above, Chollet is very skeptical of the type two problem solving intelligence of LLMs. They are very good at memorizing but cannot reason outside the learned problem set. Now, with that being said is this a problem? Not if you just want a really good tool. Feed it massive quantities of data and power enough GPU’s and you can have something really useful. However, this isn’t AGI.

[https://youtu.be/UakqL6Pj9xo?si=LPFUPVc8KUwmIsgj](https://youtu.be/UakqL6Pj9xo?si=LPFUPVc8KUwmIsgj)