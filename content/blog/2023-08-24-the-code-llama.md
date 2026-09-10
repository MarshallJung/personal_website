---
title: "The Code Llama"
slug: "2023-08-24-the-code-llama"
date: "2023-08-24"
description: "What is this letter all about? Well, I love the world of ML and see it in, perhaps, a unique way. So I’m writing this letter to Istari on a weekly basis (barring vacations, etc.) to summarize a few in..."
coverImage: "/images/blog/2023-08-24-the-code-llama/image-01.jpg"
tags: ["AI Strategy"]
readTime: "2 min read"
---

What is this letter all about? Well, I love the world of ML and see it in, perhaps, a unique way. So I’m writing this letter to Istari on a weekly basis (barring vacations, etc.) to summarize a few interesting ideas from the cutting edge. I’ll keep it short, illustrate with Formula 1 when appropriate and I’ll muse on a basic concept or two on how I see this fitting with Istari technology. Hopefully people find this useful.

[https://ai.meta.com/blog/code-llama-large-language-model-coding/](https://ai.meta.com/blog/code-llama-large-language-model-coding/?utm_source=twitter&utm_medium=organic_social&utm_campaign=codellama&utm_content=gif)

Wish I would have had this one two weeks ago. I’d re-LoRA the project I did on OpenFOAM using this model. Bound to be a much better result.

### Open AI launches GPT 3.5 fine tuning

[https://twitter.com/OpenAI/status/1694062483462594959](https://twitter.com/OpenAI/status/1694062483462594959)

Basically what it says on the box, and could be useful for some Istari prototyping. While likely not used for training, data is still 3rd party. 4k prompt length. Downsides: Costs nearly 10x per token to inference, and they shove every bit of your training data through both the moderation endpoint, and a GPT4 moderator. This is not worth it for 99% of people who may even have a need for it. If you cut your “prompt” down by 90% because of being able to finetune, but pay 10x, you’ve saved no money.

### Giraffe — Long context Llama2

[https://arxiv.org/abs/2308.10882](https://arxiv.org/abs/2308.10882)

I didn’t see this until a few days ago, but this is ideal for Istari’s “Kirby” ingest pipeline for requirements documents. Besides making the data prep easier, it avoids problems arising from breaking the prompt apart, even using sliding windows or hierarchical attention mechanisms.

### Unnatural Instructions

[https://arxiv.org/abs/2212.09689](https://arxiv.org/abs/2212.09689)

Interesting concept here that easily applies to any of Istari’s DE tools efforts. One of the biggest issues with obscure datasets is that they are not really a part of public LLM models. Using 3D design languages one might extend possible API auto-writes beyond a given set.

### A message from the internet to our API team…

![Figure](/images/blog/2023-08-24-the-code-llama/image-01.jpg)