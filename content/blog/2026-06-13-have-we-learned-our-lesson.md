---
title: "Have We Learned Our Lesson?"
slug: "2026-06-13-have-we-learned-our-lesson"
date: "2026-06-13"
description: "Fable — /ˈfāb(ə)l/ — A fable is a short, fictitious story designed to teach a moral lesson."
coverImage: "/images/blog/2026-06-13-have-we-learned-our-lesson/image-01.png"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-01.png)

Fable — /ˈfāb(ə)l/ — A fable is a short, fictitious story designed to teach a moral lesson.

I had a list of technical topics for this week, but Friday night’s news overshadowed everything. Anthropic suspended access to its Fable 5 Mythos derived model after the US government, citing national security authorities, issued an export control directive. Although the directive was ostensibly aimed at foreign nationals, enforcing that is essentially impossible, so Anthropic halted access for all users.

This situation likely had a reasonable chance of occurring, but the timing was always uncertain. What I still don’t understand — and what remains unclear — is Anthropic’s goal in putting itself in these situations. Here’s a brief summary of their public relations and government engagement over the past six months.

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-02.png)

But in all seriousness, it is a bit confusing. Anthropic (and to a lesser extent OpenAI) have been on podcasts and in media interviews saying their models will soon be so advanced that most knowledge workers could be out of jobs within 6–12 months. This certainly hasn’t helped with the public’s opinion on AI in the workplace, datacenter construction, energy policy etc. And Anthropic in particular has been especially vocal about the need for government regulation of frontier models for safety. A cynical view is that, at least for Anthropic, this mix of PR and government outreach could be a backdoor for regulatory capture to preserve a technological lead over competitor labs and perhaps try and nerf open source.

But even putting myself in Dario’s shoe, that feels off. Once this technology exists, you can’t put it back in the box. Regulating US-based AI labs mostly helps foreign competitors advance. If you think LLM algorithms are state secrets, that’s naive. So I don’t understand Anthropic’s moves or strategy right now.

Even setting aside the US government’s national-security directive, Fable 5 had serious issues from the start. Many overlooked the fine print: with this model’s release, Anthropic informed all customers — including enterprise! — that their prompts, including context, could be retained for up to 30 days for “review” to prevent model abuse. AND enterprises had signed a legal contract where Anthropic stated it could not do this under their terms of service.

This highlights a compliance and enterprise supply chain risk. You might rely on a state-of-the-art model for a difficult problem, but unknown guardrails in Anthropic models could trigger data storage and review, and even downgrade or cancel your workflow for opaque safety reasons. From my role at Valvoline Global Operations, if our R&D team uses this model to design new molecular compounds for next‑generation synthetic lubricants, the model might misinterpret the work as disguised chemical weapon development and disrupt our productivity. From a business continuity perspective, that’s nearly intolerable — and likely unacceptable to many enterprises. Oh, and apparently Fable 5 lies to the user a bunch: [https://kradle.ai/](https://kradle.ai/)

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-03.png)

As this kerfuffle settles, enterprise decision-makers will prioritize data sovereignty, open-source flexibility, and diversified frontier lab options. If Anthropic and its leadership truly embrace effective altruism and AI’s long-term impact, their unusual PR and government engagement may be understandable. Still, they seem to misunderstand how human ingenuity, society, and the drive for progress actually work. I don’t have conclusive predictions, but overall, this likely harms Anthropic’s long-term growth while creating opportunities for competitors with offerings more palatable to enterprise customers. Time will tell.

### Before the Ban

So…before the US Gov–Anthropic news on Friday night, I was already planning to compile some information showing how rising AI costs and improving open-source model quality are driving visible market changes.

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-04.png)

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-05.png)

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-06.png)

I didn’t plan to post a bunch of charts just to avoid writing this week — though I did lean on the “picture says a thousand words” idea. Even assuming China is heavily subsidizing inference serving…and they are, as past newsletters show Chinese models are the least token-efficient among available options, users still perceive most of these models as roughly on par with US-based models for their queries. They’re also being used more globally than US labs’ frontier models.

I wouldn’t advise most enterprises dealing with legal and compliance requirements to use Chinese models, given the unresolved security risks. However, many non-enterprise, non-vetted SaaS products likely use Chinese models behind the scenes to lower serving costs and boost margins on their inbuilt AI offerings. If U.S. regulations suppress adoption, progress, and profitability at U.S. labs, data gathered by Chinese inference providers will likely amplify this trend.

### Innovation is still key

[**DiffusionGemma: 4x faster text generation**  
*An overview of DiffusionGemma, an exceptionally fast text generation model with up to 4x faster speeds.*blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/ "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/")[](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)

![Figure](/images/blog/2026-06-13-have-we-learned-our-lesson/image-07.png)

Two Google releases this week:

-   A diffusion-based language model. Long-time readers know this has been around for a while — there was even a Google Labs experiment before it was shut down. Google appears to be continuing the work. This approach looks faster and more efficient than traditional transformer-based algorithms and signals how AI progress will keep pushing for efficiency in this space.
-   A specialized language model distilled from the flagship 3.1 Pro to output SQL. Imagine querying a company-wide dataset: some data is unstructured, some is structured in SQL. A model router could split your query, send the structured part to this SQL-focused model to query databases, then combine those results with other inference to answer complex, multi-structured questions. This kind of specialization and under-the-hood routing is where I expect major efficiency and intelligence gains.