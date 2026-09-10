---
title: "Thoughts on coding exams"
slug: "2024-06-03-thoughts-on-coding-exams"
date: "2024-06-03"
description: "I recently had an interview with a startup company in the AI model management space. It seems like a solid company from what I can gather, and in an area that I believe will actually be quite needed i..."
coverImage: "/images/blog/2024-06-03-thoughts-on-coding-exams/image-01.jpg"
tags: ["AI Strategy"]
readTime: "7 min read"
---

I recently had an interview with a startup company in the AI model management space. It seems like a solid company from what I can gather, and in an area that I believe will actually be quite needed in the future. We can discuss the technical details of the space this company fits in later if anyone is interested, but what I do want to ask my readers is a question about coding interviews.

Leetcode challenges, build a model, program an algorithm…these have been around for ages. I remember doing them for my Google interviews many moons ago. I will agree that in certain roles these types of interviews are a good thing. For pure programming/engineering jobs this might be a requirement, at a minimum to ascertain if the particular candidate’s CV is accurate. However, I’m not an engineer. Anyone who knows me will attest to the fact that I’m not a dummy. I’ve done quite a lot of programming in my life, but it often focuses on hard to solve, prototype-like problems. I’m a very curious guy. From teaching myself how to weld, machine, build electronics AND code, I usually have a problem that needs solving and I bang away at it until I come up with a solution. I’ve never worked on a big codebase in my life. My most recent project (that I’ll tell y’all about anyway!) that I’m proud of is programming a self-learning ML based engine control unit for my race car. It’s unique and it took me a long time to get it sorted but I taught myself how to do everything. And I had great fun doing it.

But I can’t leetcode. I’ll probably fail any high-pressure 30 minute code exam that someone puts to me. Give me the challenge and let me noodle over it a bit and I’ll find you a solution, but in the moment I’ll choke.

The role that I was interviewing for was a customer success engineer role. Part of the interview was a leetcode ML challenge. I’ll fail it, but I’d probably make a great customer success engineer. When companies are hiring for roles that require more than raw coding ability, ESPECIALLY when that role faces customers, the need for people skills should be first and foremost. As I’ve gotten older I’ve come to realize that being good with people is unteachable. A technically curious and broadly competent candidate who is good with customers and fits the culture is a better hire 9 out of 10 times than the best programmer you can find. You can teach the tech stack, you cannot teach the soft skills.

What does everyone think? I’m curious to hear your thoughts!

### The measure of a model

Making an executive decision, let’s talk about how assessment of model performance is done in these exciting new times. I referenced this above as a space that I think is interesting and where a few startups are currently playing. This isn’t meant to be a comprehensive review. I am planning to write a more in-depth article on this topic for my blog and when that’s done I’ll be sure to put a link here in my newsletter.

Does it seem like every week there is a new model released that is THE BEST MODEL EVER!!!? Typically these are public foundational models, sometimes using a new fine-tuning or adaptation methodology to do more with less (parameters, memory, GPU etc.). You’ll hear breathless claims of outperformance on metrics like MMLU, SuperGLUE, SWE-Bench or a host of others. Now there is a general trend of these models getting better at language based tasks. GPT-4 is better than GPT-3 afterall, but there is also no doubt that the measurement of these models is, uhhhh…nebulous at best. At the heart of the matter is the first principles objection to how these public models are measured. Much of the assessment data for the benchmarks is likely incorporated into the model training data at this point. That’s not intentional perhaps, but it does violate the most basic tenants of machine learning and data science. Even in cases of benchmarks that rely on more logically-processed oriented outcomes the methodology is inevitably learned. Even without these technical objections, from a first principles approach we do not see model performance increasing at a similarly rapid pace as in the early days. Asking the question “why?” leads us to either the conclusion that transformer LM’s are only going to be as good as the data with which they are trained, or the basic attention mechanism is fundamentally limited. Adding other machine learning techniques like Google is doing with Gemini and AlphaGo can solve some of the zero-shot logical process issues, but this is moving more towards an ensemble based technique which I think is a different subject.

I think there is a place for evaluating fine-tuned models and RAG based pipelines in a slightly different manner, but I’ll save that part of the discussion for the longer blog. But to wrap up, consistently measuring deployed model performance in light of the limitations and unknowns of the models and training data itself is something that any company planning of building, deploying and managing models for production will need to understand. At the heart of the matter it looks a lot like MLOps, where careful performance outcome monitoring is key, but there is some additional complexity with accuracy, hallucination and speed that would be slightly different than monitoring a more “conventional” deterministic ML model.

I think I’ll leave it here, but look for the longer, more complete article in the future.

### Making that hidden 90% better

[https://supabase.com/docs/guides/ai/hybrid-search](https://supabase.com/docs/guides/ai/hybrid-search)

While LLM’s get all the attention in the new AI space, even in the world of RAG, most of the work goes on behind the scenes. The document ingestion, parsing, segmentation, tokenization, and embedding along with the vector DB are actually the most difficult part of the pipeline. The link above covers hybrid search which brings together keyword and semantic searching. Most LLM enhanced applications will likely fall into this category. Take a look and see if this might add that extra level of performance.

### Graph your knowledge with an LLM

Here’s a guide teaching you how to construct knowledge graphs using LLMs that adhere to a pre-defined schema, using purely local models. I like using Obsidian as my note taking app and they do a knowledge graph as default. I like that this method builds on the traditional concept of KG but uses the contextual understanding of an LLM to help define the edges. Here is the notebook. [https://github.com/run-llama/llama\_index/blob/main/docs/docs/examples/property\_graph/property\_graph\_advanced.ipynb](https://github.com/run-llama/llama_index/blob/main/docs/docs/examples/property_graph/property_graph_advanced.ipynb)

![Figure](/images/blog/2024-06-03-thoughts-on-coding-exams/image-01.jpg)

### An observation on VC in AI

VCs seem to be betting against two potential outcomes. First, continued scaling, where larger hyper-scaler (OpenAI, MSFT, GOOG) models beat specialized models while rapidly decreasing costs. Or second, AGI which would invalidate a lot of the underlying assumptions for AI startups. It’s a decent bet, but it reveals some interesting preferences.

![Figure](/images/blog/2024-06-03-thoughts-on-coding-exams/image-02.jpg)

Now, I’ve made my views on AGI pretty clear over the last two years as readers of my newsletter will know, BUT there is always the chance of a breakthrough that makes the difference. The math of IRR for VC returns is pretty unforgiving. If the odds of successful exit are adjusted by the odds of continued AI improvement, I wonder how the math works out over the life of a fund.

### Interested in what some of the quieter players are saying?

Very high level, but useful if you are pitching your AI application. IBM does some very good high level overview and it certainly will help anyone anchor their current knowledge against the bigger legacy tech players.

[https://www.ibm.com/downloads/cas/BN9Y6QPN](https://www.ibm.com/downloads/cas/BN9Y6QPN)