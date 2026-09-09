---
title: "Why your frustration around LLMs can be explained by Sapir-Whorf"
slug: "2025-01-13-why-your-frustration-around-llms-can-be-explained-by-sapir-whorf"
date: "2025-01-13"
description: "Why your frustration around LLMs can be explained by Sapir-Whorf"
coverImage: "/images/blog/2025-01-13-why-your-frustration-around-llms-can-be-explained-by-sapir-whorf/image-01.jpg"
tags: ["AI Strategy"]
readTime: "6 min read"
---

Recently I was working on a few items for an AI company for their DevRel and messaging. For part of this effort I was attempting to distill the ideas to a pitch deck that combined some Douglas Adams humor with the technical details of this companies’ product. While the words were, I believe, enough to communicate precisely what I was thinking, the imagery that I added to the deck was really frustrating. I was using AI based generation to create the images. This was natural language to image, and requires the user to tell the model what the image should look like. In my head I knew what the result should be. But try as I might I could not get the AI to create something that I wanted. And in the end the image prompts were quite lengthy, very detailed and specific yet the results were always only “close enough”.

Perhaps my readers have also run into this issue. Back in the early 20th century two researchers, Edward Sapir and Benjamin Lee Whorf proposed a theory ([https://en.wikipedia.org/wiki/Linguistic\_relativity](https://en.wikipedia.org/wiki/Linguistic_relativity)) where the language that a person speaks influences the way they view the world. A deep analysis of how this might apply to today’s modern society is far too detailed to attempt here, but a simple example is the Native American Hopi have no grammar for time in their native language so the way they speak about time might be difficult to comprehend for someone coming from an English speaking background.

As this applies to AI, some of us have found interacting with AI to be frustrating on occasion. Despite knowing exactly what we want in our own heads and being able to write this down precisely, the AI refuses to create what we imagine. Whether images, or written documentation (even code, though the rigid structure of code is a more debatable topic) AI can occasionally be maddening. Perhaps the idea of language as each of us hold as truth in our own minds is not what the vast database of modern AI training data believes. We have for eons understood this with other humans and made accommodations for it interpersonally. It’s only now that we find those same frustrations manifest in the digital world. Perhaps it’s time to do some reconsideration of human-AI interactions.

### Why I take off the safety equipment

![Figure](/images/blog/2025-01-13-why-your-frustration-around-llms-can-be-explained-by-sapir-whorf/image-01.jpg)

Look, I’m not the safest guy on the planet. If an activity doesn’t have at least a smidge of danger in it it’s not really all that fun is it? Yes, I am the guy that runs the chainsaw wheel on my angle grinder with no guard. I recently was sent this post: [https://x.com/eigenrobot/status/1877964147935068240?t=tGOYypGt\_nW-R6o7gPZjJw&s=01](https://x.com/eigenrobot/status/1877964147935068240?t=tGOYypGt_nW-R6o7gPZjJw&s=01) and while I’m not one to try and get LLMs to misbehave for the fun of it, there are people that do and the behavior is actually pretty interesting. What is my opinion? Alignment just doesn’t work. It never will work when LLM’s are trained on enormous uncurated datasets. It’ll be interesting to see the distribution of products based on demand in the public. Will there be very “safe” LLMs? Will those safe models come with nerfed capabilities? It’s probably indeterminate. But usefulness, and capability will probably win out so I think people will gravitate to the wide open ones even if there is a chance you’re going to see some intolerant or dangerous behavior. Like the guard on my angle grinder. I take that crap right off since the tool is way more useful. But it does significantly increase the chance of removing a finger.

### Agents, agents everywhere

Everyone is building one. An agent for your finances, your health, your e-mail, HR and your dating profile (probably). But like so much in the AI world there is basically no clean, well accepted definition of what an “agent” actually is. In the olden days interaction with software was very deterministic. You asked for the program to do a thing and it did it (or not). Mostly these tools automated repetitive tasks in one way or another, and to build them you hired software engineers. As AI has really gotten better, agents are now essentially those engineers. They are not good enough to replace most engineers, but they are autonomous and have the ability to take high level concepts and deliver an answer (hopefully one that is correct) that is not immediately defined by the original prompt. Hence the anthropomorphic description of “Agents”.

But are these the future of AI? As much as it kills me to say so, yes, I do think they are the future. They might end up being called different things and layered under a UI of some variety, but the ability to carry out more than one repetitive task simply being asked is where we are headed.

Here is a wonderful, and long overview of agents and concepts that is a good place to start: [https://huyenchip.com//2025/01/07/agents.html](https://huyenchip.com//2025/01/07/agents.html)

### CAG — Cache Augmented Generation

[https://arxiv.org/pdf/2412.15605](https://arxiv.org/pdf/2412.15605)

Quick, name me a SaaS enterprise tool that uses RAG and is plug and play. Betcha you can’t do it. There is a reason for that. RAG is hard to do right. Very finicky and prone to errors when dealing with multimodal inputs. Picking the right embedding models, keeping the database fresh and dealing elegantly with hallucinations is a really high touch effort. For that reason many of the solutions are home grown. This paper [https://arxiv.org/pdf/2412.15605](https://arxiv.org/pdf/2412.15605) proposes to keep that information in the context window of a very large LLM. This might strike some as a silly solution, and for dynamic knowledge bases, it’s not very elegant, but if you can cache a reasonably constant KB then this might be more deployable and less prone to hallucination. The current state of costs is a question however.

### The power of small

I continue to be humbled by the fact i missed so much in the direction of transformer development when it came to ingenuity outside of pretraining. People continue to amaze me. MSFT released a model called r-Star-Math [https://arxiv.org/pdf/2501.04519](https://arxiv.org/pdf/2501.04519) that enhances small language models (SLMs) using Monte Carlo Tree Search (MCTS) and self-evolution strategies. Applied to models like Qwen-7B and Phi3-mini, it surpassed OpenAI’s o1-preview on key benchmarks, such as improving Qwen2.5-Math-7B’s accuracy on the MATH dataset from 58.8% to 90.0%.

Newer test time compute and solution space search strategies combined with mixed language use (both natural language and python in the case of rStar-Math) have turbocharged the Darwinian explosion of narrow high capability models. I really look forward to how this type of evolution will give solid capabilities to specific industry solutions.