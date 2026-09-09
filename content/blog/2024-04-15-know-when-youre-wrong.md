---
title: "Know when you’re wrong"
slug: "2024-04-15-know-when-youre-wrong"
date: "2024-04-15"
description: "Know when you’re wrong"
coverImage: "/images/blog/2024-04-15-know-when-youre-wrong/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

I think it’s a uniquely rare quality to have an open mind with defensible and consistent ethical principles COMBINED with the willingness to be public with one’s opinions. I strive to read the tea leaves of AI on a daily basis, but I’m not omniscient. I try to use first principles reasoning and science, historical examples as well as up-to-the-minute news and technology experimentation. Surprisingly often I will synthesize this data and make a public statement about the direction of ML/AI only to be proven wrong in short order. I write that here as a way of telling my readers that I’m proven wrong often. But I’m also right *more* often. Forcing accountability in the public eye by writing an opinion and fielding feedback from readers and the news is wonderful for building wisdom in the real world vs. simply being “smart”.

In particular, I put out a statement that we are at “Peak AI”. But I don’t know what I don’t know and I have had some pushback from readers as well as digested news from the best in the industry that makes me doubt my opinion. I’m not ready to change my mind quite yet, but I certainly will not hesitate to post up bits of news that run counter to my opinion. Transparency is the best approach here. If you have thoughts on anything that I write don’t hesitate to let me know!

### Low hanging fruit

[https://x.com/karpathy/status/1778128793166856368](https://x.com/karpathy/status/1778128793166856368)

[https://github.com/karpathy/llm.c](https://github.com/karpathy/llm.c)

Owning up to the possibility of being wrong we have Karpathy making meaningful gains on LLM efficiency by training in C/CUDA rather than using bulky python wraps. Will this defeat my contentions? Probably not alone, but goes to show that true efficiency optimization of existing methodologies is far from complete.

### More DATA!!

Something to think about when seeing amazing performance of “zero-shot” multimodal models. The conclusions from the paper state that for a small improvement in model performance you need exponentially more data for a linear improvement. The performance of the models is largely based on the pretraining data containing similar data points to the test data. This is a finding that supports the idea that training much larger models will not show substantial improvements making the increased costs of training substantially less economical. Is this why GPT-5 is slow in release?

[https://arxiv.org/abs/2404.04125](https://arxiv.org/abs/2404.04125)

### Welcome to the club, Cognition!

[https://news.ycombinator.com/item?id=40008109](https://news.ycombinator.com/item?id=40008109)

Now in the club to which no one wants to belong, along with Google, Theranos and the rest, comes Cognition with their totally faked AI Coding Agent, Devin. Apparently the demo was faked and the stats that showed its performance were courtesy of that old standby, validating on your training data. Performance of “Airflow” like agent systems coordinated with API based LLM calls on the backend are not so good.

### On one hand…

RAG is really popular, and for good reason. Done well it allows that actual “chat with your documents” reality combined with substantially greater verifiability. It’s hard to do right. Here is a paper that compares different styles of RAG. [https://arxiv.org/pdf/2404.01037.pdf](https://arxiv.org/pdf/2404.01037.pdf) And for those that want to try a basic method here is a step-by-step: [https://x.com/akshay\_pachaar/status/1778037784059814109](https://x.com/akshay_pachaar/status/1778037784059814109)

### On the other

[https://x.com/emollick/status/1766864861928001617](https://x.com/emollick/status/1766864861928001617)

The effectiveness of the RAG has a lot to do with asking it the right questions, and having a reasonably deep understanding of the ontology. This limits the reach of these tools to add value to every employee in a company that implements these types of solutions. Something to think about.

### IYKYK

![Figure](/images/blog/2024-04-15-know-when-youre-wrong/image-01.jpg)

Makes you think what other common “knowledge” is being returned. What if that knowledge is incorrect? What if the next model’s training data includes your use of the common “knowledge”. Coprophagous indeed.