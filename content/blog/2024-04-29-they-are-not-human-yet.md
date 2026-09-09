---
title: "They are not human…yet?"
slug: "2024-04-29-they-are-not-human-yet"
date: "2024-04-29"
description: "They are not human…yet?"
coverImage: "/images/blog/2024-04-29-they-are-not-human-yet/image-01.jpg"
tags: ["AI Strategy"]
readTime: "5 min read"
---

So many people are confused about the relation between human cognitive errors and LLM hallucinations that I wrote this short explainer:

Lots of people that I speak with about AI have an interesting view on the relationship or similarity between human cognitive behavior and LLM hallucinations. They often draw similarities, which isn’t really the right way to look at it. LLM hallucinations are not really a feature, and they aren’t a bug either. It just is.

Humans say things that aren’t true for many different reasons. Sometimes they lie. Sometimes they misremember things. Sometimes they fail to think through what they are saying and sometimes they suffer from mental disorders, etc. etc. LLMs errors result from a different underlying structure. They don’t have intentions, egos, or financial interests, so they don’t lie. They don’t have emotional states. Instead, LLM “hallucinations” arise, regularly, because (a) they literally don’t know the difference between truth and falsehood, (b) they don’t have reliably reasoning processes to guarantee that their inferences are correct and © they are incapable of fact-checking their own work. Instead, everything that LLMs say — true or false — comes from the same process of statistically reconstructing what words are likely in some context. (“Stochastic parrots” is still applicable, right?) They NEVER fact-check what they say. Some of it is true; some is false. But even with perfect data, the stochastic reconstructive process would still produce some errors. The very process that LLMs use to generalize creates hallucinations.

Because they can sound so human-like it is often easy for us to anthropomorphize LLMs. But understanding why they respond incorrectly and using them in the right manners is important to getting the maximal use out of them.

### According to DARPA

“Reinforcement learning is not going as fast as the transformer model.”

Transformer based models are all the rage right now, but many newcomers to the AI scene are not even really aware that it’s only a small part of a much larger ML ecosystem. Transformers are making really interesting progress in various areas that were not initially obviously well suited, like time series. But that doesn’t mean that it’s ALWAYS the answer. There are arenas where ML outputs must always be correct, realtime and human engaged, to a certain extent the advancements in other fields of ML has taken a back seat. It’ll be a while…and a hard slog to get the right tool into the right application. As I’ve said before it’s darn hard to sell nuance in a hype cycle.

Read more here: [https://www.darpa.mil/attachments/2023%20I2O%20Proposers%20Day%20QA%20Transcript.pdf](https://www.darpa.mil/attachments/2023%20I2O%20Proposers%20Day%20QA%20Transcript.pdf)

### Diffusion for NN?

[https://huggingface.co/papers/2402.13144](https://huggingface.co/papers/2402.13144)

“Diffusion models have achieved remarkable success in image and video generation. In this work, we demonstrate that diffusion models can also generate high-performing neural network parameters. Our approach is simple, utilizing an autoencoder and a standard latent diffusion model. The autoencoder extracts latent representations of a subset of the trained network parameters. A diffusion model is then trained to synthesize these latent parameter representations from random noise. It then generates new representations that are passed through the autoencoder’s decoder, whose outputs are ready to use as new subsets of network parameters.”

![Figure](/images/blog/2024-04-29-they-are-not-human-yet/image-01.jpg)

In a way, the model parameters represent a “language” insomuch as there is a pattern to their representation. In this case they are distilling a picture (a.k.a a language) and then using this picture of network parameters in tuning the LLM. I think this could be used to optimize models for particular applications like lower cost hardware, etc.

### The economics of the situation

[https://news.ycombinator.com/item?id=39883571](https://news.ycombinator.com/item?id=39883571)

If AI has a future (a big if), it will have to be economically viable. An industry can’t spend 1,700% more on Nvidia chips than it earns indefinitely — not even with Nvidia being a principle investor in its largest customers.

[https://www.semianalysis.com/p/the-inference-cost-of-search-disruption](https://www.semianalysis.com/p/the-inference-cost-of-search-disruption) A company that pays $0.36-$1/query for electricity and (scarce, fresh) water can’t indefinitely give those queries away by the millions. Especially not to users who are expected to revise those queries dozens of times before eliciting the perfect botshit rendition of “instructions for removing a grilled cheese sandwich from a VCR in the style of the King James Bible.” Eventually, the industry will have to uncover some mix of applications that will cover its operating costs, if only to keep the lights on in the face of investor disillusionment (this isn’t optional — investor disillusionment is an inevitable part of every bubble). But as we have covered before, there are industries where LLMs, even with their imperfect responses, will be a good fit. Smaller, more focussed models that can run on lower cost hardware will be the future.

### Quick tip

Installed packages in your global Python environment by mistake, like I just did… Run pip sync with a blank requirements.txt to clean it up.

### pip install pip-tools

### touch requirements.txt

### pip-sync requirements.txt

### “You mean I could have taken less??!!”

Augment out of stealth with $252M!

[https://techcrunch.com/2024/04/24/eric-schmidt-backed-augment-a-github-copilot-rival-launches-out-of-stealth-with-252m/](https://techcrunch.com/2024/04/24/eric-schmidt-backed-augment-a-github-copilot-rival-launches-out-of-stealth-with-252m/)

Oooof. There are going to be some absolute yard sale wipeouts in the AI space in the not so distant future. Who here has seen Silicon Valley? “You mean I could have taken less??!!!”

[https://youtu.be/8ZgfTarNxdY?si=qU7PjR6atEJ7qs\_w](https://youtu.be/8ZgfTarNxdY?si=qU7PjR6atEJ7qs_w)