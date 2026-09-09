---
title: "The Language of Embeddings"
slug: "2023-10-22-the-language-of-embeddings"
date: "2023-10-22"
description: "For the past month or so there has been a thought rattling around my head in quieter times while organizing my garage or cleaning the…"
coverImage: "/images/blog/2023-10-22-the-language-of-embeddings/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

![A cold autumn rain in the Rocky Mountains](/images/blog/2023-10-22-the-language-of-embeddings/image-01.jpg)

*A cold autumn rain in the Rocky Mountains*

For the past month or so there has been a thought rattling around my head in quieter times while organizing my garage or cleaning the dishes. A consideration of the state of the art in transformer models and the application of these models in everyday life. I take lots of calls with VCs and investment firms that ask the same generic questions about “LLMs” and the potential for industry changing advancements and applications. Combined with my daily habit of scouring the depths of ML Twitter (X?) and the recent publications on arxiv.org and the like, I keep coming back to the same question: If languages are the rails upon which the transformer train runs, what powers that train?

### Are we there yet?

I’m sure that I’ve asked this question in other ways previously, but it seems that our ML community has reached the gentler slopes of attention enhanced transformer neural network efficiency advancement. That isn’t to say that there will be no further advancements in the space, efficient parameter manipulation/sorting, attention mechanism manipulation etc. etc., but the bulk of efficiency gains in these algorithms have already been found in their current state. New “announcements” of open-source models are all focused around the fine-tuning or polishing of existing models to perform some percent better on questionable benchmarks that no one actually agrees on and cannot be replicated by anyone else.

![Figure 1: Is there anything else left undiscovered in here? Maybe…](/images/blog/2023-10-22-the-language-of-embeddings/image-02.jpg)

*Figure 1: Is there anything else left undiscovered in here? Maybe…*

### The Multi-Modal vs. Industry Specific Question

So if we are at the diminishing marginal returns stage of the model development, is the writing already on the wall for attention transformers? Are we going to see the bimodal distribution of this technology like we have for so many others in the tech space where hyperscalers have massive multi-modal models trained on huge semi-proprietary data sets on one side and scrappy open-source based applications on the other side?

![Figure 2: Why does Llama2 always wear sunglasses in diffusion based creations?](/images/blog/2023-10-22-the-language-of-embeddings/image-03.jpg)

*Figure 2: Why does Llama2 always wear sunglasses in diffusion based creations?*

The first is usage based API driven and the second fine-tuned and feature specific for a particular industry that will find success. This may well be, but I think it’s missing the biggest un-explored question and performance opportunity that no-one seems to be talking about. The embeddings question.

### What is a language?

For much of its current run, LLMs have been exactly as described…”Large Language Models’’. And that has been easy enough for most to grasp. Written languages and programming are obvious, and with some creativity you can force in images, audio and video as well, though not as well. (Think of a well crafted meme. Images and possibly text combine to impart far more than a superficial understanding, but an astute reader can see the growing issue here.) But continue along this path and you begin to see that there are far more languages than simply the obvious ones. For example, I have had some professional training in petrophyiscs and an enthusiast’s expertise in race car aerodynamics.

![Figure](/images/blog/2023-10-22-the-language-of-embeddings/image-04.jpg)

![Figure 3: Can you read the above images?](/images/blog/2023-10-22-the-language-of-embeddings/image-05.jpg)

*Figure 3: Can you read the above images?*

These are not related fields, however when I look at both the above images they tell me a story no different than if it was written in an explanatory paragraph, python code or n-dimensional structured data. In essence I “read” these images. To me they are a language no different than the words on this page.

So why are current LLMs not particularly good at understanding the images in Figure 3? The easy response is because they have not seen the data that would allow them to learn the relationships in the images. But that’s not exactly the correct answer. As anyone that has played around with GPT-4V has learned, the image understanding leaves a fair amount to be desired. I propose that this is because embedding algorithms for “languages” like Figure 3 is lagging significantly behind the research into the transformer models themselves.

There are some popular embedding algorithms out there like Word2Vec, FastText, BERT etc. and these are well represented on written languages. Further techniques like concatenation, fusion, attention and summation are effective for modalities that have representations that have varying levels of similarity. So there are embedding methodologies that exist, however the perceived intelligence of attention transformers are only as good as the relationships that can be learned in the embedded data. This arena is the least explored of the LLM effort and consequently the place where the greatest advancements in focused, industry specific solutions will be found.

In the paper “[Distance Preserving Embeddings for General n-Dimensional Manifolds](https://www.jmlr.org/papers/volume14/verma13a/verma13a.pdf)” by Nakul Verma 2013, information provided in higher dimensional space can be embedded in a way that preserves all interpoint geodesic distances. Applications for this type of embedding include 3D part design, airflow analysis, stress calculations, and volumetric estimation and categorization.

The quantity of data for these types of solutions is plentiful, and the transformer architecture and model selection is available. What is not well accomplished is the description and understanding of these new languages. The enhancement of multi-modal models and the success of industry specific LLM solutions largely hinges on the research and application of these types of embedding algorithms. It won’t have the same social “impact” as releasing the next XXB open-source model that competes with OpenAI, but it will be the place where the smaller players can find real success in developing solutions for particular industry verticals.