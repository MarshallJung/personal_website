---
title: "Paul Graham on new ideas"
slug: "2023-10-09-paul-graham-on-new-ideas"
date: "2023-10-09"
description: "“The best new ideas always have unanticipated benefits. So it’s stupid to require people who want to do new things to enumerate the benefits beforehand. The best you can do is choose smart people and ..."
coverImage: "/images/blog/2023-10-09-paul-graham-on-new-ideas/image-01.jpg"
tags: ["AI Strategy"]
readTime: "4 min read"
---

“The best new ideas always have unanticipated benefits. So it’s stupid to require people who want to do new things to enumerate the benefits beforehand. The best you can do is choose smart people and then trust their intuitions about what’s worth exploring.”

### Variance

[https://thepalindrome.org/p/how-large-that-number-in-the-law](https://thepalindrome.org/p/how-large-that-number-in-the-law)

When you are working with a large sample set, size matters! The larger the variance in the underlying dataset, the slower the convergence in expected value sampling. Keep that in mind when taking “random” samples for testing while building models.

### CUDA stack

![Figure](/images/blog/2023-10-09-paul-graham-on-new-ideas/image-01.jpg)

I’ve had some rather bizarre errors and downtime troubleshooting GPU config in VM’s for ML training/inferencing. There are a few libraries and toolkits that need to be installed precisely in order to get trouble free performance. The above diagram stacks in order of abstraction. Hopefully this helps avoid any potential issues.

### No-code fine-tune on open source

[https://discord.com/channels/1099717556425736223/1099769021034938538](https://discord.com/channels/1099717556425736223/1099769021034938538), and [https://monsterapi.ai/](https://monsterapi.ai/)

There are hyperscaler tools like Vertex and SageMaker, but you are locked into their models and infra. Here is a company that offers the same process but you can do it on open source foundational models. Will not likely meet compliance standards, but if you need a PoC and don’t have the skills in-house this might be an option.

### PyTorch Shampoo

[https://arxiv.org/pdf/2309.06497.pdf](https://arxiv.org/pdf/2309.06497.pdf)

Distributed Shampoo is a second-order optimization method that makes training large models much faster. From my experience, gains from second order methods are not needed when using low precision floating point representations, which is sort of default these days with most LLM’s, especially any that might run on TPU’s. However, there is a case for higher precision optimization when the underlying dataset requires this fidelity. 3D objects, especially those that will need to precisely align in space may well need this technique.

### Don’t tell anyone

Everyone pretends they know this when they are talking to you, but maybe they don’t…and maybe you don’t either? It’s our little secret.

The LLM inference process:

1.  Text entry: The user enters a prompt into the LLM system.
2.  Tokenization: The LLM system breaks the prompt into a sequence of tokens. It allows the model to understand the structure of the prompt and to generate a response that is consistent with the user’s intentions. You can change this method, and it affects the output. What’s your LLM using?
3.  (RAG if you want): The retrieval task can be implemented in a variety of ways. One common approach is to use a dense retrieval model. Dense retrieval models learn to represent documents and queries as vectors in a high-dimensional space. The similarity between two documents is then measured by the cosine similarity between their vectors. Another approach to retrieval is to use a sparse retrieval model. Sparse retrieval models learn to index documents and queries into a hash table. The similarity between two documents is then measured by the number of hash buckets that they share.
4.  Embedding: The LLM system generates an embedding for each token. Embeddings are dense vectors that capture the meaning and relationships of words and tokens to other words in the vocabulary. Embeddings are used by the LLM model to understand the context of the prompt and to generate a relevant response. This is also customizable and affects the rest of the transformer algorithm.
5.  Model processing: The LLM system processes the sequence of embeddings to generate a response. We require numbers here (aka vector embeddings) [https://towardsdatascience.com/attention-and-transformer-models-fe667f958378](https://towardsdatascience.com/attention-and-transformer-models-fe667f958378)
6.  Model response: The LLM system returns the generated response to the user.

### If you know this guy, you are my kindred spirit

Here are the videos that my mom used to get from the library on VHS when I was homeschooled. I loved the ideas more than anything. If you have some downtime I highly recommend! [Connections Video Series](https://www.youtube.com/playlist?list=PL7A6eH1JW6NvBZt8thpL8t26trgxZS6-3)

![Figure](/images/blog/2023-10-09-paul-graham-on-new-ideas/image-02.jpg)