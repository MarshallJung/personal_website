---
title: "We need to have “The Talk” (about Google’s Gemini)"
slug: "2023-08-29-we-need-to-have-the-talk-about-googles-gemini"
date: "2023-08-29"
description: "For most of my career in ML, big generic models were usually worse at performing particular industry specific tasks than carefully fine-tuned, smaller and curated algorithms. With the release of OpenA..."
coverImage: "/images/blog/2023-08-29-we-need-to-have-the-talk-about-googles-gemini/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![Disclosure — Thoughts are based off my daily research and this article: https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini](/images/blog/2023-08-29-we-need-to-have-the-talk-about-googles-gemini/image-01.jpg)

*Disclosure — Thoughts are based off my daily research and this article: https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini*

### Was I wrong?

For most of my career in ML, big generic models were usually worse at performing particular industry specific tasks than carefully fine-tuned, smaller and curated algorithms. With the release of OpenAI’s GPT4 this paradigm shifted. Now for things like code, document understanding and language, amongst other tasks, began to tilt meaningfully in the direction of larger models. I wasn’t convinced that fine tuned models were a thing of the past, particularly in the case of data that was not part of the foundational model’s training set, but even in that case large prompt capabilities began to even the score. One ISSUE and one ANNOUNCEMENT have changed my mind.

The ISSUE comes in the form of model performance evaluation. Benchmarks for ML have been an issue for years. Reproducibility, transparency, size and diversity are all pretty nebulous. And in the wild it’s not uncommon for solutions that I’ve engineered to be more helpful using a foundational model or algorithmic methodology that scores “lower” on benchmarks. However, in the fast paced LLM arena the proliferation of models aimed specifically at low power (read; GPU-poor) inference solutions is essentially useless from a benchmark perspective. Not to mention that the fine-tuned variants are oftentimes polluted in the training data. Ignoring those pesky data science best practices ruining machine learning again! So it is not uncommon to spend time and effort on building an OSS based solution that can be easily outpaced with larger foundational models from the big guys.

The ANNOUNCEMENT comes from Google and actually has two parts. First is the revelation that Google has undertaken a mind-melting build out of ML infrastructure based around their TPUv5 chips. Soon Google will be able to out-compute nearly every GPU competitor combined. Not getting stuck in the claws of NVIDIA GPU servitude seems now like a brilliant move. Building transformer based models that can scale on TPUs was always an opinion that I proselytised to anyone willing to listen. And let’s face it, no-one scales like Google. Second, Google has been teasing “Gemini” which comes from the DeepMind incubator. Digging deeper into the details shows a unique and very game changing advancement. A usable multi-modal LLM. Hallucinations and logicality errors are common in GPT models. By combining multi-modal LLM with the reasoning engine of tools like AlphaGo, Gemini promises the capabilities of generation and manipulation along with strict rule following and logical consistency.

### What to do?

This puts many tech forward companies in a unique position. While I don’t think that multi-modal LLMs will necessarily supplant existing ML pipelines or concepts envisioned in future the concepts already outlined in AI plans, especially for machine learning efforts that are not well suited for the LLM solutions space, however it will begin to nibble away at the edges especially if the tools begin to integrate logic engines.

While I can hear the calls for “on-prem” and IL-6 requirements wafting on the wind right now, let’s keep in mind that those contracts will not make or break the long term business models of most companies that are not exclusively involved in government contracting. And even there I think the potential for ITAR restrictions and Gov only models developed by big players will end up serving those use cases when the benefits become too hard to ignore.

Companies should begin planning today what resources will be necessary in order to understand, build, partner and deliver with these models. It will be here before we know it. Building in-house models, maintaining and improving those models will become both increasingly hard to do for lack of personnel and hardware capable of the lift.

There is certainly room for discussion around where companies feel confident in ML technology for delivery of the mission as well as where it makes sense to partner to gain access to these tools. Patents might provide a bit of reprieve, but using commercial multi-modal LLMs to deliver ideas is not something where most will have an IP moat.

### The next step

There is a risk of analysis paralysis here. Simply doing nothing and forgoing the potential for productivity boosting interim solutions waiting on the next best thing is a sub-optimal strategy. Having enough in-house talent to build OSS solutions now is ideal, even if those tools are ripped and replaced by API integrations with major AI providers in the future. With an eye towards revenue optimization (and keep in mind ALL the costs that might go into either selection) it makes sense to develop an A/B strategy and be flexible in what tools and providers to use. If there is one absolute here, it’s that the AI revolution is still moving very fast, and tomorrow’s capabilities will be better than yesterday’s. Costs will come down, innovation will surprise and on balance business will be more and more dependent on AI in the future.

Food for thought…-M